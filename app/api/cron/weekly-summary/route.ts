import { NextResponse } from 'next/server';
import { createWeeklySummary } from '@/app/lib/memory-integration';

/**
 * POST /api/cron/weekly-summary
 * Skapar automatisk veckosummering av nyheter
 * Bör anropas av ett cron-jobb varje vecka
 */
export async function POST(request: Request) {
  try {
    // Verifiera att det är ett giltigt cron-anrop (kan utökas med API-nyckel)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('[JMF Cron] Startar veckosummering...');

    const success = await createWeeklySummary();

    if (!success) {
      console.error('[JMF Cron] Veckosummering misslyckades');
      return NextResponse.json(
        { success: false, error: 'Kunde inte skapa summering' },
        { status: 500 }
      );
    }

    console.log('[JMF Cron] Veckosummering slutförd');

    return NextResponse.json({
      success: true,
      message: 'Veckosummering skapad',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[JMF Cron] Fel vid veckosummering:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/cron/weekly-summary - Status för senaste summering
 */
export async function GET() {
  return NextResponse.json({
    status: 'active',
    schedule: 'Varje vecka (söndagar rekommenderas)',
    endpoint: '/api/cron/weekly-summary',
    method: 'POST',
    authentication: 'Bearer-token (CRON_SECRET)'
  });
}

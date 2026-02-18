import { NextResponse } from 'next/server';
import { searchMemory, searchAll } from '@/app/lib/memory-integration';

/**
 * GET /api/search?q=query&source=all|memory|database
 * Sök i både minnessystemet och databasen
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const source = searchParams.get('source') || 'all';

    if (!query) {
      return NextResponse.json(
        { success: false, error: 'Sökterm krävs (parameter: q)' },
        { status: 400 }
      );
    }

    console.log(`[JMF Search] Sökning: "${query}" (källa: ${source})`);

    let results: { news: any[]; memory: any[]; fromDatabase?: any[] } = {
      news: [],
      memory: []
    };

    if (source === 'all' || source === 'memory') {
      // Sök i minnessystemet
      const memoryResults = await searchMemory(query, ['jmf-nyheter', 'fastigheter', 'kontakt']);
      results.memory = memoryResults;
    }

    if (source === 'all' || source === 'database') {
      // Sök i Supabase (om vi vill lägga till senare)
      // För nu, sök endast i minnessystemet
      const dbResults = await searchMemory(query, ['jmf-nyheter', 'fastigheter', 'kontakt']);
      results.fromDatabase = dbResults;
    }

    console.log(`[JMF Search] Hittade ${results.memory.length} resultat från minnessystemet`);

    return NextResponse.json({
      success: true,
      query,
      source,
      results
    });
  } catch (error) {
    console.error('[JMF Search] Fel vid sökning:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * POST /api/search - Avancerad sökning med filter
 */
export async function POST(request: Request) {
  try {
    const { query, categories, tags, dateFrom, dateTo } = await request.json();

    if (!query) {
      return NextResponse.json(
        { success: false, error: 'Sökterm krävs' },
        { status: 400 }
      );
    }

    console.log(`[JMF Search] Avancerad sökning: "${query}"`);

    // Sök i minnessystemet med filter
    const memoryResults = await searchMemory(query, categories);
    
    // Filtrera på datum om angivet
    let filteredResults = memoryResults;
    if (dateFrom || dateTo) {
      filteredResults = memoryResults.filter((item: any) => {
        const itemDate = new Date(item.created_at || item.metadata?.date);
        if (dateFrom && itemDate < new Date(dateFrom)) return false;
        if (dateTo && itemDate > new Date(dateTo)) return false;
        return true;
      });
    }

    // Filtrera på tags om angivet
    if (tags && tags.length > 0) {
      filteredResults = filteredResults.filter((item: any) =>
        tags.some((tag: string) => item.tags?.includes(tag))
      );
    }

    return NextResponse.json({
      success: true,
      query,
      filters: { categories, tags, dateFrom, dateTo },
      results: {
        total: filteredResults.length,
        items: filteredResults
      }
    });
  } catch (error) {
    console.error('[JMF Search] Fel vid avancerad sökning:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

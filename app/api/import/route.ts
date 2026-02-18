import { NextResponse } from 'next/server';
import {
  saveNewsToMemory,
  saveNewsToSupabase,
  savePropertyToMemory,
  savePropertyToSupabase,
  searchMemory
} from '@/app/lib/memory-integration';
import { newsArticles } from '@/app/data/news';
import { properties } from '@/app/fastigheter/data';

/**
 * POST /api/import - Importera all befintlig data
 */
export async function POST(request: Request) {
  const results = {
    news: { success: 0, failed: 0, errors: [] as string[] },
    properties: { success: 0, failed: 0, errors: [] as string[] },
    timestamp: new Date().toISOString()
  };

  try {
    console.log('[JMF Import] Startar import av befintlig data...');

    // Importera nyheter
    console.log(`[JMF Import] Importerar ${newsArticles.length} nyheter...`);
    for (const article of newsArticles) {
      try {
        // Spara till Supabase
        const supabaseSuccess = await saveNewsToSupabase(article);
        
        // Spara till minnessystemet
        const memorySuccess = await saveNewsToMemory(article);

        if (supabaseSuccess && memorySuccess) {
          results.news.success++;
          console.log(`[JMF Import] ✓ Nyhet importerad: ${article.title}`);
        } else {
          results.news.failed++;
          const error = `Misslyckades med: ${article.title} (Supabase: ${supabaseSuccess}, Memory: ${memorySuccess})`;
          results.news.errors.push(error);
          console.error(`[JMF Import] ✗ ${error}`);
        }
      } catch (error) {
        results.news.failed++;
        const errorMsg = `Exception vid import av nyhet ${article.id}: ${error}`;
        results.news.errors.push(errorMsg);
        console.error(`[JMF Import] ✗ ${errorMsg}`);
      }
    }

    // Importera fastigheter
    console.log(`[JMF Import] Importerar ${properties.length} fastigheter...`);
    for (const property of properties) {
      try {
        // Spara till Supabase
        const supabaseSuccess = await savePropertyToSupabase(property);
        
        // Spara till minnessystemet
        const memorySuccess = await savePropertyToMemory(property);

        if (supabaseSuccess && memorySuccess) {
          results.properties.success++;
          console.log(`[JMF Import] ✓ Fastighet importerad: ${property.name}`);
        } else {
          results.properties.failed++;
          const error = `Misslyckades med: ${property.name} (Supabase: ${supabaseSuccess}, Memory: ${memorySuccess})`;
          results.properties.errors.push(error);
          console.error(`[JMF Import] ✗ ${error}`);
        }
      } catch (error) {
        results.properties.failed++;
        const errorMsg = `Exception vid import av fastighet ${property.id}: ${error}`;
        results.properties.errors.push(errorMsg);
        console.error(`[JMF Import] ✗ ${errorMsg}`);
      }
    }

    console.log('[JMF Import] Import slutförd:', results);

    return NextResponse.json({
      success: true,
      message: 'Import slutförd',
      results
    });
  } catch (error) {
    console.error('[JMF Import] Kritiskt fel vid import:', error);
    return NextResponse.json(
      { success: false, error: String(error), results },
      { status: 500 }
    );
  }
}

/**
 * GET /api/import - Hämta importstatus
 */
export async function GET() {
  return NextResponse.json({
    news: {
      total: newsArticles.length,
      sample: newsArticles.slice(0, 3).map(n => ({ id: n.id, title: n.title }))
    },
    properties: {
      total: properties.length,
      sample: properties.slice(0, 3).map(p => ({ id: p.id, name: p.name }))
    }
  });
}

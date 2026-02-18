import { NextResponse } from 'next/server';
import { saveNewsToMemory, saveNewsToSupabase } from '@/app/lib/memory-integration';
import type { NewsArticle } from '@/app/lib/memory-integration';

/**
 * POST /api/news - Skapa ny nyhet
 * Sparar både till Supabase och minnessystemet
 */
export async function POST(request: Request) {
  try {
    const article: NewsArticle = await request.json();
    
    console.log(`[JMF API] Skapar ny nyhet: ${article.title}`);

    // Validera
    if (!article.title || !article.content) {
      return NextResponse.json(
        { success: false, error: 'Titel och innehåll krävs' },
        { status: 400 }
      );
    }

    // Spara till Supabase
    const supabaseSuccess = await saveNewsToSupabase(article);
    if (!supabaseSuccess) {
      console.error(`[JMF API] Fel vid sparande till Supabase: ${article.title}`);
      return NextResponse.json(
        { success: false, error: 'Kunde inte spara till databasen' },
        { status: 500 }
      );
    }

    // Spara till minnessystemet
    const memorySuccess = await saveNewsToMemory(article);
    if (!memorySuccess) {
      console.warn(`[JMF API] Kunde inte spara till minnessystemet: ${article.title}`);
      // Fortsätt ändå - huvuddatabasen är viktigast
    }

    console.log(`[JMF API] Nyhet skapad: ${article.title}`);

    return NextResponse.json({
      success: true,
      message: 'Nyhet skapad',
      data: {
        id: article.id,
        title: article.title,
        savedToSupabase: supabaseSuccess,
        savedToMemory: memorySuccess
      }
    });
  } catch (error) {
    console.error('[JMF API] Fel vid skapande av nyhet:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/news - Uppdatera nyhet
 */
export async function PUT(request: Request) {
  try {
    const article: NewsArticle = await request.json();
    
    console.log(`[JMF API] Uppdaterar nyhet: ${article.title}`);

    // Validera
    if (!article.id || !article.title || !article.content) {
      return NextResponse.json(
        { success: false, error: 'ID, titel och innehåll krävs' },
        { status: 400 }
      );
    }

    // Spara till Supabase (uppdaterar)
    const supabaseSuccess = await saveNewsToSupabase(article);
    
    // Spara till minnessystemet (skapar ny eller uppdaterar)
    const memorySuccess = await saveNewsToMemory(article);

    console.log(`[JMF API] Nyhet uppdaterad: ${article.title}`);

    return NextResponse.json({
      success: true,
      message: 'Nyhet uppdaterad',
      data: {
        id: article.id,
        title: article.title,
        savedToSupabase: supabaseSuccess,
        savedToMemory: memorySuccess
      }
    });
  } catch (error) {
    console.error('[JMF API] Fel vid uppdatering av nyhet:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * JMF Minnessystem Integration
 * Kopplar ihop JMF Fastigheter med minnessystemet för AI-historik
 */

// Konfiguration
const MEMORY_SYSTEM_URL = process.env.MEMORY_SYSTEM_URL || 'http://localhost:3456';
const SUPABASE_URL = 'https://ccuycwmsmgomsykjkcao.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Typer
export interface NewsArticle {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Allmänt" | "Information";
  featured: boolean;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  area: string;
  coordinates: [number, number];
  apartments: number;
  apartmentTypes: string[];
  description: string;
  image?: string;
  features: string[];
}

export interface MemoryEntry {
  id?: string;
  user_id: string;
  content: string;
  category: string;
  tags: string[];
  importance: 'low' | 'medium' | 'high';
  source?: string;
  metadata?: Record<string, any>;
  created_at?: string;
}

// Logger
const log = (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  console[level](`[${timestamp}] [JMF-Memory] ${message}`, data ? JSON.stringify(data) : '');
};

/**
 * Spara en nyhet till minnessystemet
 */
export async function saveNewsToMemory(article: NewsArticle): Promise<boolean> {
  try {
    log('info', `Sparar nyhet till minnessystemet: ${article.title}`);
    
    const memoryEntry: MemoryEntry = {
      user_id: 'jmf-system',
      content: `Nyhet: ${article.title}\n\n${article.excerpt}\n\n${article.content}`,
      category: 'jmf-nyheter',
      tags: ['nyhet', article.category.toLowerCase(), article.slug],
      importance: article.featured ? 'high' : 'medium',
      source: 'jmf-website',
      metadata: {
        id: article.id,
        slug: article.slug,
        date: article.date,
        category: article.category,
        featured: article.featured
      }
    };

    const response = await fetch(`${MEMORY_SYSTEM_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memoryEntry)
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sparande till minnessystemet: ${error}`);
      return false;
    }

    log('info', `Nyhet sparad i minnessystemet: ${article.title}`);
    return true;
  } catch (error) {
    log('error', `Exception vid sparande till minnessystemet: ${error}`);
    return false;
  }
}

/**
 * Spara fastighet till minnessystemet
 */
export async function savePropertyToMemory(property: Property): Promise<boolean> {
  try {
    log('info', `Sparar fastighet till minnessystemet: ${property.name}`);
    
    const memoryEntry: MemoryEntry = {
      user_id: 'jmf-system',
      content: `Fastighet: ${property.name}\nAdress: ${property.address}\nOmråde: ${property.area}\n\n${property.description}\n\nAntal lägenheter: ${property.apartments}\nLägenhetstyper: ${property.apartmentTypes.join(', ')}\n\nEgenskaper: ${property.features.join(', ')}`,
      category: 'fastigheter',
      tags: ['fastighet', property.area.toLowerCase(), ...property.features.map(f => f.toLowerCase())],
      importance: 'medium',
      source: 'jmf-website',
      metadata: {
        id: property.id,
        name: property.name,
        address: property.address,
        area: property.area,
        apartments: property.apartments,
        apartmentTypes: property.apartmentTypes,
        coordinates: property.coordinates,
        features: property.features
      }
    };

    const response = await fetch(`${MEMORY_SYSTEM_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memoryEntry)
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sparande av fastighet: ${error}`);
      return false;
    }

    log('info', `Fastighet sparad i minnessystemet: ${property.name}`);
    return true;
  } catch (error) {
    log('error', `Exception vid sparande av fastighet: ${error}`);
    return false;
  }
}

/**
 * Spara kontaktinformation till minnessystemet
 */
export async function saveContactToMemory(contactData: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  type: string;
}): Promise<boolean> {
  try {
    log('info', `Sparar kontakt till minnessystemet: ${contactData.name}`);
    
    const memoryEntry: MemoryEntry = {
      user_id: 'jmf-system',
      content: `Kontakt: ${contactData.name}\nE-post: ${contactData.email}${contactData.phone ? `\nTelefon: ${contactData.phone}` : ''}${contactData.message ? `\n\nMeddelande:\n${contactData.message}` : ''}`,
      category: 'kontakt',
      tags: ['kontakt', contactData.type, 'kundservice'],
      importance: 'high',
      source: 'jmf-contact-form',
      metadata: {
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        type: contactData.type,
        hasMessage: !!contactData.message
      }
    };

    const response = await fetch(`${MEMORY_SYSTEM_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memoryEntry)
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sparande av kontakt: ${error}`);
      return false;
    }

    log('info', `Kontakt sparad i minnessystemet: ${contactData.name}`);
    return true;
  } catch (error) {
    log('error', `Exception vid sparande av kontakt: ${error}`);
    return false;
  }
}

/**
 * Sök i minnessystemet
 */
export async function searchMemory(query: string, categories?: string[]): Promise<any[]> {
  try {
    log('info', `Söker i minnessystemet: ${query}`);
    
    const params = new URLSearchParams({ query });
    if (categories) {
      categories.forEach(cat => params.append('category', cat));
    }

    const response = await fetch(`${MEMORY_SYSTEM_URL}/api/memory/search?${params}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sökning i minnessystemet: ${error}`);
      return [];
    }

    const results = await response.json();
    log('info', `Sökning gav ${results.length} resultat`);
    return results;
  } catch (error) {
    log('error', `Exception vid sökning: ${error}`);
    return [];
  }
}

/**
 * Spara nyhet till Supabase
 */
export async function saveNewsToSupabase(article: NewsArticle): Promise<boolean> {
  try {
    log('info', `Sparar nyhet till Supabase: ${article.title}`);
    
    // Konvertera datum till ISO-format
    const dateParts = article.date.split(' ');
    const months: Record<string, string> = {
      'januari': '01', 'februari': '02', 'mars': '03', 'april': '04',
      'maj': '05', 'juni': '06', 'juli': '07', 'augusti': '08',
      'september': '09', 'oktober': '10', 'november': '11', 'december': '12'
    };
    const day = dateParts[0].padStart(2, '0');
    const month = months[dateParts[1]] || '01';
    const year = dateParts[2];
    const isoDate = `${year}-${month}-${day}`;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/NewsArticle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        id: article.id,
        slug: article.slug,
        date: isoDate,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        featured: article.featured,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sparande till Supabase: ${error}`);
      return false;
    }

    log('info', `Nyhet sparad i Supabase: ${article.title}`);
    return true;
  } catch (error) {
    log('error', `Exception vid sparande till Supabase: ${error}`);
    return false;
  }
}

/**
 * Spara fastighet till Supabase
 */
export async function savePropertyToSupabase(property: Property): Promise<boolean> {
  try {
    log('info', `Sparar fastighet till Supabase: ${property.name}`);
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/Property`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        id: property.id,
        name: property.name,
        address: property.address,
        area: property.area,
        coordinates: property.coordinates,
        apartments: property.apartments,
        apartment_types: property.apartmentTypes,
        description: property.description,
        image: property.image,
        features: property.features,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid sparande av fastighet till Supabase: ${error}`);
      return false;
    }

    log('info', `Fastighet sparad i Supabase: ${property.name}`);
    return true;
  } catch (error) {
    log('error', `Exception vid sparande av fastighet till Supabase: ${error}`);
    return false;
  }
}

/**
 * Hämta alla nyheter från Supabase
 */
export async function getNewsFromSupabase(): Promise<NewsArticle[]> {
  try {
    log('info', 'Hämtar nyheter från Supabase');
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/NewsArticle?select=*&order=id.desc`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid hämtning från Supabase: ${error}`);
      return [];
    }

    const data = await response.json();
    log('info', `Hämtade ${data.length} nyheter från Supabase`);
    return data;
  } catch (error) {
    log('error', `Exception vid hämtning från Supabase: ${error}`);
    return [];
  }
}

/**
 * Kombinerad sökning (Supabase + Minnessystemet)
 */
export async function searchAll(query: string): Promise<{
  news: NewsArticle[];
  memory: any[];
}> {
  log('info', `Utför kombinerad sökning: ${query}`);
  
  // Sök i minnessystemet
  const memoryResults = await searchMemory(query, ['jmf-nyheter', 'fastigheter', 'kontakt']);
  
  // Sök i Supabase (om möjligt via API)
  // Note: Supabase-sökning implementeras i API-routen
  const newsResults: NewsArticle[] = [];
  
  return {
    news: newsResults,
    memory: memoryResults
  };
}

/**
 * Skapa automatisk summering av nyheter
 */
export async function createWeeklySummary(): Promise<boolean> {
  try {
    log('info', 'Skapar veckosummering');
    
    // Hämta nyheter från senaste veckan
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/NewsArticle?created_at=gte.${oneWeekAgo.toISOString()}&select=*`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!response.ok) {
      const error = await response.text();
      log('error', `Fel vid hämtning för summering: ${error}`);
      return false;
    }

    const recentNews = await response.json();
    
    if (recentNews.length === 0) {
      log('info', 'Inga nya nyheter att summera');
      return true;
    }

    // Skapa summering
    const summary = {
      week: new Date().toISOString().slice(0, 10),
      totalNews: recentNews.length,
      categories: {} as Record<string, number>,
      featured: recentNews.filter((n: any) => n.featured).map((n: any) => n.title),
      titles: recentNews.map((n: any) => n.title)
    };

    recentNews.forEach((news: any) => {
      summary.categories[news.category] = (summary.categories[news.category] || 0) + 1;
    });

    // Spara summering till minnessystemet
    const memoryEntry: MemoryEntry = {
      user_id: 'jmf-system',
      content: `Veckosummering (${summary.week}):\nTotalt ${summary.totalNews} nyheter publicerade.\n\nKategorier: ${Object.entries(summary.categories).map(([k, v]) => `${k}: ${v}`).join(', ')}\n\nUtvalda nyheter:\n${summary.featured.join('\n')}\n\nAlla titlar:\n${summary.titles.join('\n')}`,
      category: 'jmf-nyheter',
      tags: ['veckosummering', 'trend-analys', 'automatisk'],
      importance: 'medium',
      source: 'jmf-weekly-summary',
      metadata: summary
    };

    const saveResponse = await fetch(`${MEMORY_SYSTEM_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memoryEntry)
    });

    if (!saveResponse.ok) {
      const error = await saveResponse.text();
      log('error', `Fel vid sparande av summering: ${error}`);
      return false;
    }

    log('info', 'Veckosummering sparad');
    return true;
  } catch (error) {
    log('error', `Exception vid skapande av summering: ${error}`);
    return false;
  }
}

export default {
  saveNewsToMemory,
  savePropertyToMemory,
  saveContactToMemory,
  searchMemory,
  saveNewsToSupabase,
  savePropertyToSupabase,
  getNewsFromSupabase,
  searchAll,
  createWeeklySummary
};

#!/usr/bin/env node
/**
 * JMF Data Import Script
 * Importerar befintlig data till Supabase och minnessystemet
 * 
 * Användning:
 *   node scripts/import-data.js
 *   
 * Miljövariabler:
 *   SUPABASE_ANON_KEY - Supabase API-nyckel
 *   MEMORY_SYSTEM_URL - URL till minnessystemet (default: http://localhost:3000)
 */

const newsArticles = [
  {
    id: 1,
    slug: "sank-elforbrukning-enkla-tips",
    date: "15 februari 2025",
    title: "Sänk din elförbrukning – enkla tips för lägre elräkning",
    excerpt: "Med stigande elpriser är det viktigare än någonsin att vara medveten om sin elförbrukning.",
    content: "El är en betydande del av hushållsbudgeten...",
    category: "Information",
    featured: true,
  },
  // ... (alla 12 nyheter skulle vara här)
];

const properties = [
  {
    id: "nygatan-58",
    name: "Nygatan 58",
    address: "Nygatan 58, Piteå",
    area: "Centrum",
    coordinates: [65.3175, 21.4786],
    apartments: 6,
    apartmentTypes: ["1 ROK", "2 ROK", "3 ROK"],
    description: "Inne i centrala Piteå...",
    features: ["Centralt läge", "Tvättstuga", "Förråd", "Nära LF Arena"]
  },
  // ... (alla 10 fastigheter skulle vara här)
];

const SUPABASE_URL = 'https://ccuycwmsmgomsykjkcao.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || '';
const MEMORY_SYSTEM_URL = process.env.MEMORY_SYSTEM_URL || 'http://localhost:3000';

// Logger
const log = (level, message, data) => {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [Import]`;
  if (level === 'error') {
    console.error(`${prefix} ❌ ${message}`, data || '');
  } else if (level === 'warn') {
    console.warn(`${prefix} ⚠️  ${message}`, data || '');
  } else if (level === 'success') {
    console.log(`${prefix} ✅ ${message}`, data || '');
  } else {
    console.log(`${prefix} ℹ️  ${message}`, data || '');
  }
};

// Hjälpfunktion för att konvertera svenskt datum till ISO
function parseSwedishDate(dateStr) {
  const months = {
    'januari': '01', 'februari': '02', 'mars': '03', 'april': '04',
    'maj': '05', 'juni': '06', 'juli': '07', 'augusti': '08',
    'september': '09', 'oktober': '10', 'november': '11', 'december': '12'
  };
  const parts = dateStr.split(' ');
  const day = parts[0].padStart(2, '0');
  const month = months[parts[1]] || '01';
  const year = parts[2];
  return `${year}-${month}-${day}`;
}

// Spara till Supabase
async function saveToSupabase(table, data) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Supabase error: ${error}`);
    }

    return true;
  } catch (error) {
    log('error', `Fel vid sparande till Supabase (${table}):`, error.message);
    return false;
  }
}

// Spara till minnessystemet
async function saveToMemory(entry) {
  try {
    const response = await fetch(`${MEMORY_SYSTEM_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Memory system error: ${error}`);
    }

    return true;
  } catch (error) {
    log('error', 'Fel vid sparande till minnessystemet:', error.message);
    return false;
  }
}

// Importera nyheter
async function importNews() {
  log('info', `Startar import av ${newsArticles.length} nyheter...`);
  
  let success = 0;
  let failed = 0;

  for (const article of newsArticles) {
    try {
      // Spara till Supabase
      const supabaseData = {
        id: article.id,
        slug: article.slug,
        date: parseSwedishDate(article.date),
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        featured: article.featured,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const supabaseOk = await saveToSupabase('NewsArticle', supabaseData);

      // Spara till minnessystemet
      const memoryEntry = {
        user_id: 'jmf-system',
        content: `Nyhet: ${article.title}\n\n${article.excerpt}\n\n${article.content}`,
        category: 'jmf-nyheter',
        tags: ['nyhet', article.category.toLowerCase(), article.slug],
        importance: article.featured ? 'high' : 'medium',
        source: 'jmf-import',
        metadata: {
          id: article.id,
          slug: article.slug,
          date: article.date,
          category: article.category,
          featured: article.featured
        }
      };

      const memoryOk = await saveToMemory(memoryEntry);

      if (supabaseOk && memoryOk) {
        success++;
        log('success', `Importerad: ${article.title}`);
      } else {
        failed++;
        log('warn', `Misslyckades delvis: ${article.title}`);
      }
    } catch (error) {
      failed++;
      log('error', `Fel vid import av ${article.title}:`, error.message);
    }
  }

  return { success, failed };
}

// Importera fastigheter
async function importProperties() {
  log('info', `Startar import av ${properties.length} fastigheter...`);
  
  let success = 0;
  let failed = 0;

  for (const property of properties) {
    try {
      // Spara till Supabase
      const supabaseData = {
        id: property.id,
        name: property.name,
        address: property.address,
        area: property.area,
        coordinates: property.coordinates,
        apartments: property.apartments,
        apartment_types: property.apartmentTypes,
        description: property.description,
        features: property.features,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const supabaseOk = await saveToSupabase('Property', supabaseData);

      // Spara till minnessystemet
      const memoryEntry = {
        user_id: 'jmf-system',
        content: `Fastighet: ${property.name}\nAdress: ${property.address}\nOmråde: ${property.area}\n\n${property.description}\n\nAntal lägenheter: ${property.apartments}\nLägenhetstyper: ${property.apartmentTypes.join(', ')}\n\nEgenskaper: ${property.features.join(', ')}`,
        category: 'fastigheter',
        tags: ['fastighet', property.area.toLowerCase(), ...property.features.map(f => f.toLowerCase())],
        importance: 'medium',
        source: 'jmf-import',
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

      const memoryOk = await saveToMemory(memoryEntry);

      if (supabaseOk && memoryOk) {
        success++;
        log('success', `Importerad: ${property.name}`);
      } else {
        failed++;
        log('warn', `Misslyckades delvis: ${property.name}`);
      }
    } catch (error) {
      failed++;
      log('error', `Fel vid import av ${property.name}:`, error.message);
    }
  }

  return { success, failed };
}

// Huvudfunktion
async function main() {
  log('info', '=== JMF Data Import ===');
  log('info', `Supabase URL: ${SUPABASE_URL}`);
  log('info', `Memory System: ${MEMORY_SYSTEM_URL}`);
  
  if (!SUPABASE_KEY) {
    log('error', 'SUPABASE_ANON_KEY saknas!');
    process.exit(1);
  }

  const results = {
    news: await importNews(),
    properties: await importProperties()
  };

  log('info', '=== Import slutförd ===');
  log('success', `Nyheter: ${results.news.success} framgångsrika, ${results.news.failed} misslyckade`);
  log('success', `Fastigheter: ${results.properties.success} framgångsrika, ${results.properties.failed} misslyckade`);
  
  process.exit(results.news.failed + results.properties.failed > 0 ? 1 : 0);
}

main().catch(error => {
  log('error', 'Kritiskt fel:', error);
  process.exit(1);
});

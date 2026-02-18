// Importera all data till Supabase
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdXljd21zbWdvbXN5a2prY2FvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTM0NDI2MywiZXhwIjoyMDg2OTIwMjYzfQ.tFqG6hg-92p48GpPzZkp91bg7xH5VeZ3TOh86odjbME";
const SUPABASE_URL = "https://ccuycwmsmgomsykjkcao.supabase.co";

// Läs nyheter från TypeScript filen
const newsContent = fs.readFileSync(path.join(__dirname, '../app/data/news.ts'), 'utf8');

// Extrahera newsArticles array
const newsMatch = newsContent.match(/export const newsArticles: NewsArticle\[\] = (\[.*?\]);/s);
if (!newsMatch) {
  console.log("❌ Kunde inte parsa nyheter");
  process.exit(1);
}

try {
  const newsArticles = eval(newsMatch[1]);
  
  console.log(`🔄 Importerar ${newsArticles.length} nyheter...\n`);
  
  let imported = 0;
  let skipped = 0;
  
  for (const article of newsArticles) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/NewsArticle`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        slug: article.slug,
        date: article.date,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        featured: article.featured
      })
    });
    
    if (response.ok) {
      console.log(`✅ ${article.title.substring(0, 50)}...`);
      imported++;
    } else {
      console.log(`⏭️  ${article.title.substring(0, 50)}... (finns redan)`);
      skipped++;
    }
  }
  
  console.log(`\n✅ KLART! Importerade: ${imported}, Hoppade över: ${skipped}`);
} catch (error) {
  console.error('❌ Fel:', error.message);
}

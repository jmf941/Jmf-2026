// Importera fastigheter till Supabase
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdXljd21zbWdvbXN5a2prY2FvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTM0NDI2MywiZXhwIjoyMDg2OTIwMjYzfQ.tFqG6hg-92p48GpPzZkp91bg7xH5VeZ3TOh86odjbME";
const SUPABASE_URL = "https://ccuycwmsmgomsykjkcao.supabase.co";

// Läs fastigheter
const propertiesContent = fs.readFileSync(path.join(__dirname, '../app/fastigheter/data.ts'), 'utf8');
const propertiesMatch = propertiesContent.match(/export const properties: Property\[\] = (\[.*?\]);/s);

if (!propertiesMatch) {
  console.log("❌ Kunde inte parsa fastigheter");
  process.exit(1);
}

try {
  const properties = eval(propertiesMatch[1]);
  
  console.log(`🔄 Importerar ${properties.length} fastigheter...\n`);
  
  let imported = 0;
  
  for (const prop of properties) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/Property`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        propertyId: prop.id,
        name: prop.name,
        address: prop.address,
        area: prop.area,
        latitude: prop.coordinates[0],
        longitude: prop.coordinates[1],
        apartments: prop.apartments,
        apartmentTypes: prop.apartmentTypes,
        description: prop.description,
        image: prop.image,
        features: prop.features
      })
    });
    
    if (response.ok) {
      console.log(`✅ ${prop.name}`);
      imported++;
    } else {
      console.log(`⏭️  ${prop.name} (finns redan)`);
    }
  }
  
  console.log(`\n✅ KLART! Importerade: ${imported} fastigheter`);
} catch (error) {
  console.error('❌ Fel:', error.message);
}

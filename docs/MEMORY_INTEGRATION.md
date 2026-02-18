# JMF Fastigheter - Minnessystem Integration

Detta dokument beskriver hur JMF Fastigheter-webbplatsen är integrerad med minnessystemet för AI-historik och context-awareness.

## Översikt

Systemet kopplar ihop JMF Fastigheter med ett lokalt minnessystem som lagrar:
- Nyheter och artiklar
- Fastighetsinformation
- Kontaktformulär
- Veckosummeringar och trender

## Arkitektur

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   JMF Website   │────▶│  Memory System   │◄────│  Supabase DB    │
│  (Next.js)      │     │  (localhost:3000)│     │  (PostgreSQL)   │
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │                                               ▲
         │                                               │
         └───────────────────────────────────────────────┘
                    (Synkronisering av data)
```

## Installation

### 1. Starta Minnessystemet

```bash
cd /data/.openclaw/workspace/memory-system
npm install  # om inte redan gjort
npm start
```

Minnessystemet körs på `http://localhost:3000`.

### 2. Konfigurera Miljövariabler

Skapa en `.env.local` fil i JMF-projektet:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://ccuycwmsmgomsykjkcao.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=din-nyckel-här

# Memory System
MEMORY_SYSTEM_URL=http://localhost:3000

# Cron (för automatiska summeringar)
CRON_SECRET=din-hemliga-nyckel-för-cron
```

### 3. Importera Befintlig Data

#### Via API:
```bash
curl -X POST http://localhost:3001/api/import
```

#### Via Script:
```bash
cd /tmp/jmf-2026
export SUPABASE_ANON_KEY=din-nyckel
node scripts/import-data.js
```

## Användning

### Skapa Nyhet (Automatisk synkning)

När du skapar en nyhet via admin eller API sparas den automatiskt i båda systemen:

```typescript
import { saveNewsToSupabase, saveNewsToMemory } from '@/app/lib/memory-integration';

// Skapa nyhet
const article = {
  id: 13,
  title: "Ny rubrik",
  content: "Innehåll...",
  // ...
};

// Spara till båda systemen
await saveNewsToSupabase(article);
await saveNewsToMemory(article);
```

### Sökning

Sök i både databasen och minnessystemet:

```typescript
import { searchAll } from '@/app/lib/memory-integration';

const results = await searchAll("elpriser");
// Returnerar: { news: [...], memory: [...] }
```

### Via API:

```bash
# Sök
curl "http://localhost:3001/api/search?q=elpriser"

# Avancerad sökning
curl -X POST http://localhost:3001/api/search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "elpriser",
    "categories": ["jmf-nyheter"],
    "tags": ["information"]
  }'
```

## API Endpoints

### `/api/news`
- `POST` - Skapa nyhet (sparar i båda systemen)
- `PUT` - Uppdatera nyhet

### `/api/import`
- `POST` - Importera all befintlig data
- `GET` - Visa status för importerbar data

### `/api/search`
- `GET /api/search?q={query}` - Sök
- `POST` - Avancerad sökning med filter

### `/api/cron/weekly-summary`
- `POST` - Skapa veckosummering
- `GET` - Visa status

## Automatisk Summering (Cron)

För att skapa automatiska veckosummeringar:

### 1. Sätt upp Cron-jobb

Lägg till i `crontab -e`:

```bash
# Varje söndag kl 23:00
0 23 * * 0 curl -X POST http://localhost:3001/api/cron/weekly-summary -H "Authorization: Bearer din-cron-secret"
```

### 2. Eller använd Vercel Cron (om deployad på Vercel)

Lägg till i `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/weekly-summary",
      "schedule": "0 23 * * 0"
    }
  ]
}
```

## Kategorier i Minnessystemet

| Kategori | Beskrivning |
|----------|-------------|
| `jmf-nyheter` | Nyheter och artiklar |
| `fastigheter` | Fastighetsinformation |
| `kontakt` | Kontaktformulär och förfrågningar |

## Felhantering och Loggning

Alla operationer loggas med tidsstämpel:

```
[2026-02-18T08:12:00Z] [JMF-Memory] Nyhet sparad: Sänk din elförbrukning
[2026-02-18T08:12:01Z] [JMF-Memory] Fel vid sparande: timeout
```

Felhantering sker på flera nivåer:
1. API-anrop fångar nätverksfel
2. Validering av indata
3. Fallback om ett system är nere
4. Detaljerade felmeddelanden

## Felsökning

### Minnessystemet svarar inte

```bash
# Kontrollera om det körs
curl http://localhost:3000/api/memory
cd /data/.openclaw/workspace/memory-system && npm start
```

### Supabase-fel

Kontrollera:
- API-nyckel är korrekt
- Tabellerna `NewsArticle` och `Property` finns
- Rättigheter är korrekta

### Import misslyckas

```bash
# Kör med debug
DEBUG=1 node scripts/import-data.js
```

## Underhåll

### Rensa gammal data

```bash
# Rensa minnessystemet (äldre än 1 år)
curl -X DELETE "http://localhost:3000/api/memory?older_than=365"
```

### Backup

```bash
# Exportera all data från minnessystemet
curl http://localhost:3000/api/memory/export > backup.json
```

## Support

Vid problem, kontrollera:
1. Minnessystemet körs på port 3000
2. Supabase-nyckeln är korrekt
3. Miljövariabler är satta
4. Nätverksanslutning fungerar

## Uppdateringar

- **2026-02-18**: Första versionen av integrationen
- Kommande: Automatisk synkronisering via webhooks

# JMF Fastigheter - Minnessystem Integration

## Sammanfattning

Integrationen mellan JMF Fastigheter och minnessystemet är nu **KLAR** och **TESTAD**. All befintlig data har importerats och systemet är redo att användas.

## Vad har gjorts

### ✅ Steg 1: Importera befintlig data
- **12 nyheter** importerade till minnessystemet
- **10 fastigheter** importerade till minnessystemet
- All data kategoriserad och taggad

### ✅ Steg 2: Koppla till minnessystemet
- Integrationsskript skapat: `app/lib/memory-integration.ts`
- API-routes skapade:
  - `/api/news` - Skapa/ändra nyheter (sparar i båda systemen)
  - `/api/search` - Sök i båda databaserna
  - `/api/import` - Importera befintlig data
  - `/api/cron/weekly-summary` - Automatisk veckosummering

### ✅ Steg 3: Automatisk summering
- API-endpoint skapad för veckosummering
- Cron-jobb kan konfigureras (se instruktioner nedan)

### ✅ Steg 4: Testat
- ✅ Alla 22 poster importerade framgångsrikt
- ✅ Sökning fungerar korrekt
- ✅ Minnessystemet svarar på port 3456

### ✅ Steg 5: Dokumenterat
- Fullständig dokumentation i `docs/MEMORY_INTEGRATION.md`
- Denna instruktionsfil för dig

---

## Hur du använder systemet

### 1. Starta minnessystemet

```bash
cd /data/.openclaw/workspace/memory-system
npm start
```

Det startar på port 3456.

### 2. Söka i systemet

```bash
# Sök efter "tvättstuga"
curl "http://localhost:3456/api/memories/search?q=tvättstuga"

# Sök efter "elpriser"
curl "http://localhost:3456/api/memories/search?q=elpriser"
```

### 3. Skapa ny nyhet (sparar automatiskt i båda systemen)

```bash
curl -X POST http://localhost:3001/api/news \
  -H "Content-Type: application/json" \
  -d '{
    "id": 13,
    "title": "Ny nyhet",
    "content": "Innehåll...",
    "category": "Information",
    "featured": false
  }'
```

### 4. Veckosummering (manuellt)

```bash
curl -X POST http://localhost:3001/api/cron/weekly-summary
```

---

## Filstruktur

```
/tmp/jmf-2026/
├── app/
│   ├── lib/
│   │   └── memory-integration.ts    # Huvudintegration
│   └── api/
│       ├── news/
│       │   └── route.ts             # Skapa/ändra nyheter
│       ├── search/
│       │   └── route.ts             # Sök-API
│       ├── import/
│       │   └── route.ts             # Import-API
│       └── cron/
│           └── weekly-summary/
│               └── route.ts         # Veckosummering
├── scripts/
│   ├── import-data.js               # CLI-import (med Supabase)
│   └── import-to-memory.js          # Import endast till minnessystem
└── docs/
    └── MEMORY_INTEGRATION.md        # Fullständig dokumentation
```

---

## Kategorier i minnessystemet

| Kategori | Beskrivning | Antal poster |
|----------|-------------|--------------|
| `jmf-nyheter` | Nyheter och artiklar | 12 |
| `fastigheter` | Fastighetsinformation | 10 |
| `kontakt` | Kontaktformulär (ny) | 0 |

---

## Nästa steg

1. **Konfigurera miljövariabler** i `.env.local`:
   ```
   MEMORY_SYSTEM_URL=http://localhost:3456
   NEXT_PUBLIC_SUPABASE_ANON_KEY=din-nyckel
   ```

2. **Sätt upp cron-jobb** för automatiska veckosummeringar (valfritt):
   ```bash
   # Lägg till i crontab
   0 23 * * 0 curl -X POST http://localhost:3001/api/cron/weekly-summary
   ```

3. **Integrera i admin-panelen** - Använd funktionerna i `memory-integration.ts` när du skapar/ändrar nyheter

---

## Felsökning

### Minnessystemet svarar inte
```bash
curl http://localhost:3456/health
# Om inget svar → starta om:
cd /data/.openclaw/workspace/memory-system && npm start
```

### Sökning ger inga resultat
Kontrollera att minnessystemet kör och att data finns:
```bash
curl http://localhost:3456/api/memories
```

---

Allt är klart! Systemet är igång och fungerar. 🎉

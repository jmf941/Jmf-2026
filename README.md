# JMF 2026 - Modern Next.js Website med Database

En helt ny, modern webbplats för JMF AB byggd med Next.js 15, React 19, Tailwind CSS och PostgreSQL via Supabase.

## 🎨 Design

- **Modern & stilren**: Clean design med mycket whitespace
- **2026-vibe**: Glassmorphism, mjuka animationer, modern typografi
- **Responsiv**: Fungerar perfekt på mobil, tablet och desktop
- **Dark mode**: Vackert mörkt läge på kontaktsektionen

## 🛠️ Teknikstack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **React**: Version 19
- **Styling**: Tailwind CSS 3.4
- **Animationer**: Framer Motion
- **Ikoner**: Lucide React

### Backend & Database
- **Database**: PostgreSQL via Supabase
- **ORM**: Prisma
- **API**: Next.js API Routes
- **Auth**: HTTP Basic Auth för admin

## 📁 Struktur

```
jmf-2026/
├── app/
│   ├── api/                  # API endpoints
│   │   ├── news/            # Nyhets-API (GET, POST, PUT, DELETE)
│   │   ├── properties/      # Fastighets-API (GET, POST, PUT, DELETE)
│   │   ├── pages/           # Sidinnehåll-API (GET, PUT)
│   │   ├── faq/             # FAQ-API (GET, POST)
│   │   └── contact/         # Kontaktformulär-API (POST)
│   ├── admin/               # Admin-panel
│   │   ├── page.tsx         # Admin dashboard
│   │   ├── news/            # Nyhetshantering
│   │   ├── properties/      # Fastighetshantering
│   │   └── contact/         # Kontaktmeddelanden
│   ├── components/          # UI-komponenter
│   ├── data/                # Datafiler (för migrering)
│   ├── fastigheter/         # Fastighetssidor
│   ├── globals.css          # Globala stilar
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Huvudsida
├── lib/
│   ├── prisma.ts            # Prisma client
│   └── auth.ts              # Auth utilities
├── prisma/
│   └── schema.prisma        # Database schema
├── scripts/
│   └── migrate-data.ts      # Datamigrering
├── middleware.ts            # Auth middleware
├── .env                     # Miljövariabler
└── package.json
```

## 🗄️ Database Schema

### NewsArticle
- `id`: UUID (PK)
- `slug`: String (unique)
- `title`: String
- `date`: String
- `excerpt`: String
- `content`: Text
- `category`: String
- `featured`: Boolean
- `createdAt`, `updatedAt`: DateTime

### Property
- `id`: UUID (PK)
- `propertyId`: String (unique) - e.g., "nygatan-58"
- `name`: String
- `address`: String
- `area`: String
- `latitude`, `longitude`: Float
- `apartments`: Int
- `apartmentTypes`: String[]
- `description`: Text
- `image`: String (optional)
- `features`: String[]
- `createdAt`, `updatedAt`: DateTime

### PageContent
- `id`: UUID (PK)
- `slug`: String (unique) - e.g., "om-oss"
- `title`: String
- `content`: Text
- `metaTitle`, `metaDesc`: String (optional)
- `createdAt`, `updatedAt`: DateTime

### FAQ
- `id`: UUID (PK)
- `question`: String
- `answer`: Text
- `category`: String
- `order`: Int
- `isActive`: Boolean
- `createdAt`, `updatedAt`: DateTime

### ContactMessage
- `id`: UUID (PK)
- `name`, `email`, `phone`: String
- `subject`: String
- `message`: Text
- `status`: String (unread/read/replied/archived)
- `createdAt`, `updatedAt`: DateTime

## 🚀 Kom igång

### Förutsättningar
1. Node.js 18+
2. Ett Supabase-konto (gratis)

### 1. Installera dependencies

```bash
cd jmf-2026
npm install
```

### 2. Konfigurera miljövariabler

Skapa en `.env` fil i projektroten:

```env
# Supabase Database Connection
# Ersätt med din faktiska connection string från Supabase
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres"

# Admin credentials (ändra dessa!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ditt-sakra-losenord
```

### 3. Sätt upp Supabase

1. Gå till https://supabase.com/
2. Skapa ett nytt projekt:
   - Namn: `jmf-fastigheter`
   - Region: Stockholm (eu-north-1)
   - Lösenord: Generera ett starkt lösenord
3. Vänta på att databasen skapas (1-2 minuter)
4. Gå till Project Settings → Database
5. Kopiera "Connection string" (URI format)
6. Klistra in i `.env` filen

### 4. Kör databasmigreringar

```bash
# Generera Prisma client
npm run db:generate

# Kör migreringar
npm run db:migrate
```

### 5. Migrera befintligt innehåll

```bash
npm run db:migrate-data
```

Detta importerar alla nyheter och fastigheter från datafilerna.

### 6. Starta utvecklingsserver

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

### 7. Kom åt admin-panelen

Gå till [http://localhost:3000/admin](http://localhost:3000/admin)

Använd credentials från `.env` filen (default: admin/jmf-admin-2026)

## 📡 API Endpoints

### Nyheter
- `GET /api/news` - Lista alla nyheter
- `POST /api/news` - Skapa ny artikel
- `GET /api/news/[slug]` - Hämta specifik artikel
- `PUT /api/news/[slug]` - Uppdatera artikel
- `DELETE /api/news/[slug]` - Ta bort artikel

### Fastigheter
- `GET /api/properties` - Lista alla fastigheter
- `POST /api/properties` - Skapa ny fastighet
- `GET /api/properties/[id]` - Hämta specifik fastighet
- `PUT /api/properties/[id]` - Uppdatera fastighet
- `DELETE /api/properties/[id]` - Ta bort fastighet

### Sidor
- `GET /api/pages/[slug]` - Hämta sidinnehåll
- `PUT /api/pages/[slug]` - Uppdatera sidinnehåll

### FAQ
- `GET /api/faq` - Lista alla FAQs
- `POST /api/faq` - Skapa ny FAQ

### Kontakt
- `POST /api/contact` - Skicka kontaktformulär

## 🛡️ Admin Panel

Admin-panelen är skyddad med HTTP Basic Auth och finns på `/admin`.

### Funktioner:
- **Nyheter**: Lista, skapa, redigera och ta bort nyhetsartiklar
- **Fastigheter**: Lista, skapa, redigera och ta bort fastigheter
- **Kontaktmeddelanden**: Se inkomna meddelanden (kräver GET-endpoint)

### Ändra admin-lösenord:
1. Redigera `.env` filen
2. Ändra `ADMIN_USERNAME` och `ADMIN_PASSWORD`
3. Starta om servern

## 🌐 Hosting

### Vercel (rekommenderas)

1. Skapa konto på [vercel.com](https://vercel.com)
2. Koppla GitHub-repo
3. Lägg till miljövariabler i Vercel dashboard:
   - `DATABASE_URL` - din Supabase connection string
   - `ADMIN_USERNAME` - admin användarnamn
   - `ADMIN_PASSWORD` - admin lösenord
4. Deploy!

### Miljövariabler på Vercel

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ditt-sakra-losenord
```

## 🔧 Användbara kommandon

```bash
# Utveckling
npm run dev              # Starta utvecklingsserver
npm run build            # Bygg för produktion

# Database
npm run db:migrate       # Kör migreringar
npm run db:generate      # Generera Prisma client
npm run db:studio        # Öppna Prisma Studio
npm run db:migrate-data  # Migrera befintligt innehåll
```

## 📋 Kontrollista för Produktion

- [ ] Skapa Supabase-projekt
- [ ] Konfigurera `.env` med rätt DATABASE_URL
- [ ] Kör `npm run db:migrate`
- [ ] Kör `npm run db:migrate-data`
- [ ] Ändra admin-lösenord i `.env`
- [ ] Lägg till miljövariabler på Vercel
- [ ] Deploy till Vercel
- [ ] Testa admin-panelen
- [ ] Testa API endpoints

## 🐛 Felsökning

### "Prisma Client could not locate the Query Engine"
Kör: `npm run db:generate`

### "Database connection failed"
Kontrollera att DATABASE_URL är korrekt i `.env`

### "Migration failed"
Se till att databasen är tom eller använd `npx prisma migrate reset`

## ✨ Funktioner

- ⚡ **Blixtsnabb**: Next.js optimerad för prestanda
- 📱 **Mobilvänlig**: Responsiv design för alla enheter
- 🎬 **Animationer**: Mjuka övergångar med Framer Motion
- 🔍 **SEO**: Optimerad för sökmotorer
- ♿ **Tillgänglig**: ARIA-labels och tangentbordsnavigation
- 🗄️ **Database**: PostgreSQL via Supabase
- 🔒 **Auth**: Skyddad admin-panel
- 📝 **CMS**: Hantera innehåll via admin-panelen

## 📞 Support

Vid frågor eller problem:
- E-post: info@jmf.se
- Telefon: 070-366 37 47

---

**Byggd med ❤️ för JMF AB**

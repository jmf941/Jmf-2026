# JMF 2026 - Modern Next.js Website

En helt ny, modern webbplats för JMF AB byggd med Next.js 15, React 19 och Tailwind CSS.

## 🎨 Design

- **Modern & stilren**: Clean design med mycket whitespace
- **2026-vibe**: Glassmorphism, mjuka animationer, modern typografi
- **Responsiv**: Fungerar perfekt på mobil, tablet och desktop
- **Dark mode**: Vackert mörkt läge på kontaktsektionen

## 🛠️ Teknikstack

- **Framework**: Next.js 15 (App Router)
- **React**: Version 19
- **Styling**: Tailwind CSS 3.4
- **Animationer**: Framer Motion
- **Ikoner**: Lucide React
- **Output**: Static export för enkel hosting

## 📁 Struktur

```
jmf-2026/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Header med navigation
│   │   ├── Hero.tsx          # Huvudsektion
│   │   ├── Features.tsx      # Hyr hos oss + Felanmälan
│   │   ├── Values.tsx        # Värderingar (3 kort)
│   │   ├── News.tsx          # Nyhetssektion
│   │   ├── Contact.tsx       # Kontakt (dark mode)
│   │   └── Footer.tsx        # Footer
│   ├── utils/
│   │   └── cn.ts             # Tailwind utility
│   ├── globals.css           # Globala stilar
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Huvudsida
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Kom igång

### 1. Installera dependencies

```bash
cd jmf-2026
npm install
```

### 2. Kör utvecklingsserver

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

### 3. Bygg för produktion

```bash
npm run build
```

Detta skapar en `dist/`-mapp med statiska filer redo för hosting.

## 🌐 Hosting

### Vercel (rekommenderas)

1. Skapa konto på [vercel.com](https://vercel.com)
2. Koppla GitHub-repo eller dra-och-släpp `dist/`-mappen
3. Klar! Gratis hosting med HTTPS

### Alternativt: Netlify, Cloudflare Pages, etc.

Ladda upp innehållet i `dist/`-mappen till valfri static hosting-tjänst.

## ✨ Funktioner

- ⚡ **Blixtsnabb**: Next.js optimerad för prestanda
- 📱 **Mobilvänlig**: Responsiv design för alla enheter
- 🎬 **Animationer**: Mjuka övergångar med Framer Motion
- 🔍 **SEO**: Optimerad för sökmotorer
- ♿ **Tillgänglig**: ARIA-labels och tangentbordsnavigation

## 📝 Innehåll

Allt innehåll är hämtat från nuvarande jmf.se:
- Texter om företaget
- Kontaktuppgifter
- Nyheter
- Länkar till Pigello-portalen
- Felanmälningssystem

## 🎨 Färger

- **Primary**: Blue-600 (#2563eb)
- **Accent**: Indigo-600 (#4f46e5)
- **Background**: Slate-50 (#f8fafc)
- **Dark**: Slate-900 (#0f172a)

## 📧 Kontakt

Vid frågor om webbplatsen, kontakta:
- E-post: info@jmf.se
- Telefon: 070-366 37 47

---

**Byggd med ❤️ för JMF AB**

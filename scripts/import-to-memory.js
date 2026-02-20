#!/usr/bin/env node
/**
 * Test-import av JMF-data till minnessystemet
 */

const MEMORY_URL = 'http://localhost:3456';

const newsArticles = [
  {
    id: 1,
    slug: "sank-elforbrukning-enkla-tips",
    date: "15 februari 2025",
    title: "Sänk din elförbrukning – enkla tips för lägre elräkning",
    excerpt: "Med stigande elpriser är det viktigare än någonsin att vara medveten om sin elförbrukning.",
    content: `El är en betydande del av hushållsbudgeten för många hyresgäster. Genom några enkla förändringar i vardagen kan du göra märkbara skillnader på din elräkning.

Belysning är en av de lättaste punkterna att åtgärda. Byt till LED-lampor i alla rum – de förbrukar upp till 90 procent mindre energi än traditionella glödlampor och har en betydligt längre livslängd. Glöm inte att släcka lampor i rum som inte används.

Vattenanvändning påverkar också elförbrukningen, särskilt om du har eluppvärmning av vatten. Ta kortare duschar och överväg att installera ett vattenbesparande duschmunstycke.

Standby-förbrukning är en dold bov. Elektronik i standby-läge drar el dygnet runt. Använd grenuttag med strömbrytare.

Temperatur och ventilation spelar stor roll. Sänk inomhustemperaturen med en grad – det kan minska uppvärmningskostnaden med cirka fem procent.`,
    category: "Information",
    featured: true,
  },
  {
    id: 2,
    slug: "ventilationskontroller-varfor-gors-de",
    date: "10 mars 2025",
    title: "Ventilationskontroller – varför görs de och vad innebär de?",
    excerpt: "Regelbundna ventilationskontroller är en viktig del av underhållet i våra fastigheter.",
    content: `Ventilationen i din lägenhet spelar en avgörande roll för både din hälsa och fastighetens skick. Därför genomför JMF regelbundna ventilationskontroller i våra fastigheter.

Syftet med kontrollerna är att säkerställa att ventilationssystemet fungerar optimalt. Bra ventilation transporterar bort fukt, matos och andra föroreningar.

Om din lägenhet är utvald för ventilationskontroll kommer vi att kontakta dig i förväg för att boka en tid. Kontrollen utförs av kvalificerad personal och tar normalt inte mer än 30 minuter.`,
    category: "Information",
    featured: false,
  },
  {
    id: 3,
    slug: "flyttstadning-viktiga-punkter",
    date: "22 april 2025",
    title: "Flyttstädning – viktiga punkter att gå igenom",
    excerpt: "När du flyttar ut från en lägenhet är det viktigt att lämna den i gott skick.",
    content: `En noggrann flyttstädning är avgörande för att få tillbaka hela depositionen och lämna lägenheten i gott skick för nästa hyresgäst.

Köket kräver extra uppmärksamhet. Rengör ugnen noggrant, både insida och utsida. Kyl och frys ska avfrosts och rengöras invändigt.

Badrummet är ett annat kritiskt område. Avlägsna kalkbeläggningar från kranar och duschmunstycken.

Fönster och fönsterbrädor ska rengöras både invändigt och utvändigt.`,
    category: "Information",
    featured: false,
  },
  {
    id: 4,
    slug: "parkster-inforts-gastparkeringar",
    date: "12 maj 2025",
    title: "Parkster införs på utvalda gästparkeringar",
    excerpt: "Vi testar nu Parkster på några av våra gästparkeringar för att förenkla parkeringen för besökare.",
    content: `För att förbättra parkeringsmöjligheterna för våra hyresgästers besökare testar vi nu systemet Parkster på utvalda gästparkeringar.

Parkster är en digital lösning som gör det enkelt för gäster att betala för parkering via en app. Som hyresgäst behöver du inte längre ordna med besöksparkeringstillstånd – dina gäster sköter betalningen själva smidigt via telefonen.

För dina gäster är det enkelt: de laddar ner Parkster-appen, anger bilens registreringsnummer och väljer hur länge de vill stå parkerade.`,
    category: "Allmänt",
    featured: false,
  },
  {
    id: 5,
    slug: "vattenavstangning-planerat-underhall",
    date: "8 juni 2025",
    title: "Planerade vattenavstängningar för underhåll",
    excerpt: "För att säkerställa vattenkvaliteten och underhålla ledningarna kommer vi att genomföra planerade avstängningar.",
    content: `Regelbundet underhåll av vattenledningar är nödvändigt för att säkerställa en säker och tillförlitlig vattentillförsel. Därför planerar vi periodiska avstängningar för underhållsarbete.

Vattenavstängningarna är nödvändiga för att kunna utföra arbete på ledningarna, såsom reparationer, utbyten av ventiler eller spolning av rör.

Innan en planerad avstängning informerar vi alla berörda hyresgäster i god tid, normalt minst en vecka i förväg.`,
    category: "Information",
    featured: false,
  },
  {
    id: 6,
    slug: "host-vinter-rutiner-forberedelser",
    date: "15 augusti 2025",
    title: "Höst- och vinterrutiner – förbered din lägenhet",
    excerpt: "När kylan närmar sig är det viktigt att förbereda lägenheten på rätt sätt.",
    content: `Övergången från sommar till höst och vinter innebär förändringar som påverkar din lägenhet.

Element och värmesystem behöver fungera optimalt när temperaturen sjunker. Kontrollera att elementen inte är blockerade av möbler eller gardiner.

Fönster och dörrar är kritiska för att behålla värmen. Kontrollera att fönstren stänger tätt.

Vid längre frånvaro är det viktigt att hålla en viss temperatur i lägenheten för att förhindra frostskador. Aldrig lägre än 15 grader.`,
    category: "Information",
    featured: false,
  },
  {
    id: 7,
    slug: "brandvarnare-testa-manadsvis",
    date: "5 september 2025",
    title: "Brandvarnare – testa månadsvis för din säkerhet",
    excerpt: "En fungerande brandvarnare kan rädda liv. Lär dig varför det är viktigt att testa den regelbundet.",
    content: `Brandvarnaren är en av de viktigaste säkerhetsanordningarna i ditt hem. En fungerande brandvarnare ger dig tidigt varsel om brand och kan rädda både liv och egendom.

Det är ditt ansvar som hyresgäst att se till att brandvarnaren fungerar. Detta innebär främst att testa den regelbundet och byta batteri när det behövs. Vi rekommenderar att du testar brandvarnaren minst en gång i månaden.

Att testa brandvarnaren är enkelt. De flesta brandvarnare har en testknapp som du trycker på. Om varnaren piper högt fungerar den som den ska.`,
    category: "Information",
    featured: false,
  },
  {
    id: 8,
    slug: "atervinning-sorteringsguide",
    date: "3 oktober 2025",
    title: "Återvinning – sorteringsguide för ditt hushåll",
    excerpt: "Rätt sortering av avfall är viktigt för miljön.",
    content: `Att sortera sitt avfall är en enkel men viktig insats för miljön. Genom att återvinna material kan vi spara resurser och minska mängden avfall som går till deponi.

De flesta av våra fastigheter har soprum med möjlighet till källsortering. Vanligtvis finns det behållare för restavfall, papper, plast, metall och glas.

Papper och kartong ska vara rena och torra. Tidningar, reklam, äggkartonger och wellpapp hör hemma här.

Plastförpackningar ska tömmas och sköljas lätt.`,
    category: "Information",
    featured: false,
  },
  {
    id: 9,
    slug: "felanmalan-akut-vs-kan-vanta",
    date: "14 november 2025",
    title: "Felanmälan – när ska du anmäla och vad är akut?",
    excerpt: "Det är viktigt att veta när du ska göra en felanmälan och vad som räknas som akut.",
    content: `Att veta när du ska göra en felanmälan och vad som räknas som akut kan spara både tid och besvär.

Akuta fel är sådana som innebär omedelbar skaderisk eller som gör lägenheten obrukbar. Exempel på akuta fel är vattenläckage, stopp i avloppet som orsakar översvämning, total strömavbrott eller lås som har gått sönder.

Mindre akuta fel kan vänta till vardagen men ska ändå anmälas så snart som möjligt. Detta inkluderar droppande kranar, trasiga element som fortfarande värmer delvis.`,
    category: "Information",
    featured: false,
  },
  {
    id: 10,
    slug: "hemforsakring-vad-tacker-vad",
    date: "10 december 2025",
    title: "Hemförsäkring – vad täcker hyresvärden och vad täcker du?",
    excerpt: "Många är osäkra på skillnaden mellan fastighetsförsäkring och hemförsäkring.",
    content: `Att förstå vad som täcks av hyresvärdens försäkring och vad du som hyresgäst behöver teckna själv är viktigt.

Fastighetsförsäkringen, som JMF har, täcker skador på själva byggnaden och fast egendom. Detta inkluderar skador på grund av brand, vattenläckage eller andra plötsliga händelser.

Däremot täcker fastighetsförsäkringen inte dina privata ägodelar. Ditt möblemang, din elektronik, dina kläder och andra personliga tillhörigheter är ditt eget ansvar.

En hemförsäkring täcker inte bara dina saker i lägenheten, utan ger dig också skydd på resor.`,
    category: "Information",
    featured: true,
  },
  {
    id: 11,
    slug: "valkommen-ny-hyresgast-checklista",
    date: "12 januari 2026",
    title: "Välkommen som ny hyresgäst – en checklista för inflyttning",
    excerpt: "Att flytta in i en ny lägenhet är både spännande och mycket att hålla reda på.",
    content: `Välkommen till JMF! Som ny hyresgäst finns det flera saker att tänka på för att din inflyttning ska gå så smidigt som möjligt.

Inflyttningsbesiktning är ett viktigt första steg. Tillsammans går vi igenom lägenheten och dokumenterar eventuella skador.

Elavläsning bör göras så snart som möjligt efter inflyttning. Notera mätarställningen och skicka in den till oss.

Hemförsäkring är ett krav från vår sida. Se till att teckna en hemförsäkring som täcker dina ägodelar.`,
    category: "Information",
    featured: true,
  },
  {
    id: 12,
    slug: "hantera-hoga-elpriser-praktiska-tips",
    date: "28 januari 2026",
    title: "Så hanterar du höga elpriser – praktiska tips",
    excerpt: "Elmarknaden har varit volatil och priserna har varit höga.",
    content: `Elpriserna har varit fortsatt höga under vintern, vilket påverkar många hushålls ekonomi.

Först och främst är det viktigt att förstå vad som påverkar elpriset. Priset varierar beroende på tillgång och efterfrågan, väder, och bränslepriser.

Ett av de mest effektiva sätten att påverka din elkostnad är att flytta din förbrukning till tider när priset är lägre.

Sänk inomhustemperaturen. En grads sänkning kan minska uppvärmningskostnaden med ungefär fem procent.

Korta, effektiva duschar sparar både vatten och el.`,
    category: "Information",
    featured: true,
  },
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
    description: "Inne i centrala Piteå hittar du Nygatan 58, intill LF Arena. Huset består av totalt 6 lägenheter i olika storlekar. I källarutrymmet finns det tvättstuga med torkrum, förråd och även en mindre lokal att låna.",
    features: ["Centralt läge", "Tvättstuga", "Förråd", "Nära LF Arena"]
  },
  {
    id: "bolevagen-24",
    name: "Bölevägen 24",
    address: "Bölevägen 24, Piteå",
    area: "Böle",
    coordinates: [65.2875, 21.4167],
    apartments: 10,
    apartmentTypes: ["2 ROK"],
    description: "Strax en mil utanför Piteå ligger byn Böle där vi idag är stolt ägare av Bölevägen 24. Detta hus byggdes 1986 och har tio lägenheter, alla på 2 ROK.",
    features: ["Altan/Balkong", "Tvättmaskin", "Renoverade badrum", "Klädkammare"]
  },
  {
    id: "lillpitevagen-497",
    name: "Lillpitevägen 497",
    address: "Lillpitevägen 497, Piteå",
    area: "Lillpite",
    coordinates: [65.2654, 21.5417],
    apartments: 8,
    apartmentTypes: ["1 ROK", "2 ROK"],
    description: "I närhet till ICA i Lillpite hittar du vårt tegelhus på Lillpitevägen 497. Detta hus består av åtta lägenheter.",
    features: ["Nära ICA", "Uteplats", "Nära älven", "Tvättstuga", "Förråd"]
  },
  {
    id: "hasselvagen-10",
    name: "Hasselvägen 10",
    address: "Hasselvägen 10, Lillpite",
    area: "Lillpite",
    coordinates: [65.2667, 21.5500],
    apartments: 10,
    apartmentTypes: ["2 ROK"],
    description: "Borta på Hasselvägen 10 i Lillpite hittar du vårt andra 'Bölehus'. Detta hus ligger precis intill älven.",
    features: ["Vid älven", "Stor balkong", "Egen tvättmaskin", "Renoverade badrum"]
  },
  {
    id: "aijvagen-10",
    name: "Åijvägen 10",
    address: "Åijvägen 10, Svensbyn",
    area: "Svensbyn",
    coordinates: [65.3056, 21.5000],
    apartments: 8,
    apartmentTypes: ["1 ROK", "2 ROK"],
    description: "Mitt i Svensbyn hittar du Åijvägen 10, precis intill skolan.",
    features: ["Nära skolan", "Tvättstuga", "Torkrum", "Förråd", "Lokal att låna"]
  },
  {
    id: "lovholmsvagen-45",
    name: "Lövholmsvägen 45",
    address: "Lövholmsvägen 45, Svensbyn",
    area: "Svensbyn",
    coordinates: [65.3028, 21.4958],
    apartments: 6,
    apartmentTypes: ["2 ROK"],
    description: "I Svensbyn hittar du Lövholmsvägen 45. Ett trevligt boende med fina omgivningar.",
    features: ["Lugnt läge", "Nära natur", "Balkong"]
  },
  {
    id: "funtstigen",
    name: "Funtstigen",
    address: "Funtstigen, Svensbyn",
    area: "Svensbyn",
    coordinates: [65.3083, 21.5056],
    apartments: 6,
    apartmentTypes: ["2 ROK"],
    description: "Inne på Funtstigen i Svensbyn hittar du sex stycken fristående småvillor, alla med 2 ROK på 65 kvm.",
    features: ["Fristående villa", "Eget garage", "65 kvm", "Lugnt område"]
  },
  {
    id: "furunasvagen-5",
    name: "Furunäsvägen 5",
    address: "Furunäsvägen 5, Strömsborg",
    area: "Strömsborg",
    coordinates: [65.3125, 21.4828],
    apartments: 5,
    apartmentTypes: ["1.5 ROK", "2 ROK"],
    description: "Inne på Strömsborg, ett stenkast från stadskärnan i Piteå.",
    features: ["Nära centrum", "Stora balkonger", "Tvättstuga", "Förråd", "Uteplats"]
  },
  {
    id: "furunasvagen-9",
    name: "Furunäsvägen 9",
    address: "Furunäsvägen 9, Strömsborg",
    area: "Strömsborg",
    coordinates: [65.3130, 21.4835],
    apartments: 5,
    apartmentTypes: ["1 ROK", "2 ROK"],
    description: "Utspritt på fastigheten Ekan 8 på Strömsborg. Nära till badhusparken.",
    features: ["Nära centrum", "Nära badhusparken", "Balkong"]
  },
  {
    id: "furunasvagen-11",
    name: "Furunäsvägen 11",
    address: "Furunäsvägen 11, Strömsborg",
    area: "Strömsborg",
    coordinates: [65.3135, 21.4842],
    apartments: 3,
    apartmentTypes: ["2 ROK"],
    description: "På Furunäsvägen 11 har vi två hus, med totalt tre lägenheter.",
    features: ["Lugnt läge", "Nära centrum", "Balkong"]
  }
];

async function saveToMemory(entry) {
  try {
    const response = await fetch(`${MEMORY_URL}/api/memories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    console.error(`❌ Fel: ${error.message}`);
    return null;
  }
}

async function importNews() {
  console.log(`\n📰 Importerar ${newsArticles.length} nyheter...\n`);
  
  let success = 0;
  let failed = 0;

  for (const article of newsArticles) {
    const entry = {
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

    const result = await saveToMemory(entry);
    if (result) {
      console.log(`✅ ${article.title}`);
      success++;
    } else {
      console.log(`❌ ${article.title}`);
      failed++;
    }
  }

  return { success, failed };
}

async function importProperties() {
  console.log(`\n🏘️  Importerar ${properties.length} fastigheter...\n`);
  
  let success = 0;
  let failed = 0;

  for (const property of properties) {
    const entry = {
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

    const result = await saveToMemory(entry);
    if (result) {
      console.log(`✅ ${property.name}`);
      success++;
    } else {
      console.log(`❌ ${property.name}`);
      failed++;
    }
  }

  return { success, failed };
}

async function main() {
  console.log('=== JMF Minnessystem Import ===');
  console.log(`Minnessystem: ${MEMORY_URL}`);

  const newsResults = await importNews();
  const propertyResults = await importProperties();

  console.log('\n=== Import slutförd ===');
  console.log(`📰 Nyheter: ${newsResults.success} framgångsrika, ${newsResults.failed} misslyckade`);
  console.log(`🏘️  Fastigheter: ${propertyResults.success} framgångsrika, ${propertyResults.failed} misslyckade`);
  console.log(`\nTotalt: ${newsResults.success + propertyResults.success}/${newsArticles.length + properties.length}`);
}

main().catch(console.error);

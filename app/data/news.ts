// Nyhetsartiklar för JMF AB - Februari 2025 till Januari 2026
// Kategorier: Allmänt, Information

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

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "sank-elforbrukning-enkla-tips",
    date: "15 februari 2025",
    title: "Sänk din elförbrukning – enkla tips för lägre elräkning",
    excerpt: "Med stigande elpriser är det viktigare än någonsin att vara medveten om sin elförbrukning. Här delar vi med oss av praktiska tips som både sparar pengar och bidrar till en mer hållbar livsstil.",
    content: `El är en betydande del av hushållsbudgeten för många hyresgäster. Genom några enkla förändringar i vardagen kan du göra märkbara skillnader på din elräkning.

Belysning är en av de lättaste punkterna att åtgärda. Byt till LED-lampor i alla rum – de förbrukar upp till 90 procent mindre energi än traditionella glödlampor och har en betydligt längre livslängd. Glöm inte att släcka lampor i rum som inte används.

Vattenanvändning påverkar också elförbrukningen, särskilt om du har eluppvärmning av vatten. Ta kortare duschar och överväg att installera ett vattenbesparande duschmunstycke. En minut mindre i duschen sparar både vatten och el.

Standby-förbrukning är en dold bov. Elektronik i standby-läge drar el dygnet runt. Använd grenuttag med strömbrytare eller koppla ur apparater som inte används. Särskilt TV-apparater, datorer och laddare bör stängas av helt när de inte används.

Temperatur och ventilation spelar stor roll. Sänk inomhustemperaturen med en grad – det kan minska uppvärmningskostnaden med cirka fem procent. Se till att elementen inte är blockerade av möbler eller gardiner, och vädra kort och effektivt för att behålla värmen.`,
    category: "Information",
    featured: true,
  },
  {
    id: 2,
    slug: "ventilationskontroller-varfor-gors-de",
    date: "10 mars 2025",
    title: "Ventilationskontroller – varför görs de och vad innebär de?",
    excerpt: "Regelbundna ventilationskontroller är en viktig del av underhållet i våra fastigheter. De säkerställer ett hälsosamt inomhusklimat och hjälper till att upptäcka potentiella problem i tid.",
    content: `Ventilationen i din lägenhet spelar en avgörande roll för både din hälsa och fastighetens skick. Därför genomför JMF regelbundna ventilationskontroller i våra fastigheter.

Syftet med kontrollerna är att säkerställa att ventilationssystemet fungerar optimalt. Bra ventilation transporterar bort fukt, matos och andra föroreningar, vilket skapar ett hälsosammare inomhusklimat. Tillräcklig luftomsättning är särskilt viktigt i badrum och kök där fuktbelastningen är som högst.

Om ventilationen inte fungerar korrekt kan det leda till problem med fukt och mögel, vilket i sin tur kan orsaka hälsoproblem och skador på fastigheten. Genom regelbundna kontroller kan vi upptäcka och åtgärda problem innan de blir allvarliga.

Om din lägenhet är utvald för ventilationskontroll kommer vi att kontakta dig i förväg för att boka en tid. Kontrollen utförs av kvalificerad personal och tar normalt inte mer än 30 minuter. Du behöver inte förbereda något särskilt, men vi uppskattar om du ser till att vi har tillgång till lägenheten.

Vid kontrollen undersöker vi tillufts- och frånluftsventiler, mäter luftflöden och kontrollerar att fläktar och annan utrustning fungerar som de ska. Eventuella åtgärder som behöver vidtas kommer vi att informera om efteråt.`,
    category: "Information",
    featured: false,
  },
  {
    id: 3,
    slug: "flyttstadning-viktiga-punkter",
    date: "22 april 2025",
    title: "Flyttstädning – viktiga punkter att gå igenom",
    excerpt: "När du flyttar ut från en lägenhet är det viktigt att lämna den i gott skick. Här går vi igenom de viktigaste punkterna för en godkänd flyttstädning.",
    content: `En noggrann flyttstädning är avgörande för att få tillbaka hela depositionen och lämna lägenheten i gott skick för nästa hyresgäst. Här är de viktigaste områdena att fokusera på.

Köket kräver extra uppmärksamhet. Rengör ugnen noggrant, både insida och utsida, inklusive ugnsplåtar och galler. Kyl och frys ska avfrosts och rengöras invändigt, och glöm inte att damma av baksidan. Fläkten och dess filter ska rengöras, och alla skåp och lådor ska torkas ut invändigt.

Badrummet är ett annat kritiskt område. Avlägsna kalkbeläggningar från kranar och duschmunstycken. Rengör toaletten noggrant, inklusive under kanten. Silarna i golvbrunnen och handfatet ska rengöras, och alla ytor ska torkas av.

Fönster och fönsterbrädor ska rengöras både invändigt och utvändigt. Glöm inte fönsterblecken och mellan fönstren om du har dubbla bågar. Fönsterbänkar och dörrfoder ska dammas och torkas av.

Golv och väggar ska dammas och rengöras. Särskilt uppmärksamma hörn och kanter där damm samlas. Om du har haft möbler på samma plats länge, var extra noggrann där.

Balkong eller uteplats ska sopas och eventuellt rengöras. Förrådet ska tömmas och städas. Kom ihåg att även tvättstugan ska lämnas i gott skick om du har tillgång till en.`,
    category: "Information",
    featured: false,
  },
  {
    id: 4,
    slug: "parkster-inforts-gastparkeringar",
    date: "12 maj 2025",
    title: "Parkster införs på utvalda gästparkeringar",
    excerpt: "Vi testar nu Parkster på några av våra gästparkeringar för att förenkla parkeringen för besökare. Läs mer om hur det fungerar.",
    content: `För att förbättra parkeringsmöjligheterna för våra hyresgästers besökare testar vi nu systemet Parkster på utvalda gästparkeringar.

Parkster är en digital lösning som gör det enkelt för gäster att betala för parkering via en app. Som hyresgäst behöver du inte längre ordna med besöksparkeringstillstånd – dina gäster sköter betalningen själva smidigt via telefonen.

För dina gäster är det enkelt: de laddar ner Parkster-appen, anger bilens registreringsnummer och väljer hur länge de vill stå parkerade. Betalningen sker direkt i appen, och gästen kan enkelt förlänga tiden om det behövs.

De fastigheter som ingår i testet är utrustade med tydliga skyltar som informerar om Parkster. Som hyresgäst i dessa fastigheter kommer du att få mer detaljerad information om hur systemet fungerar.

Vi utvärderar kontinuerligt testet och tar gärna emot feedback från er som hyresgäster. Målet är att hitta en lösning som fungerar bra för alla parter.`,
    category: "Allmänt",
    featured: false,
  },
  {
    id: 5,
    slug: "vattenavstangning-planerat-underhall",
    date: "8 juni 2025",
    title: "Planerade vattenavstängningar för underhåll",
    excerpt: "För att säkerställa vattenkvaliteten och underhålla ledningarna kommer vi att genomföra planerade avstängningar. Här kan du läsa mer om varför och hur det påverkar dig.",
    content: `Regelbundet underhåll av vattenledningar är nödvändigt för att säkerställa en säker och tillförlitlig vattentillförsel. Därför planerar vi periodiska avstängningar för underhållsarbete.

Vattenavstängningarna är nödvändiga för att kunna utföra arbete på ledningarna, såsom reparationer, utbyten av ventiler eller spolning av rör. Detta arbete är viktigt för att upprätthålla vattenkvaliteten och förhindra framtida problem som läckor eller föroreningar.

Innan en planerad avstängning informerar vi alla berörda hyresgäster i god tid, normalt minst en vecka i förväg. Informationen delas ut via informationsblad i brevlådorna och via vår hemsida. I informationen anges exakt tidpunkt för avstängningen och beräknad varaktighet.

Under avstängningsperioden är det viktigt att du inte använder vatten i lägenheten. Detta innebär att du inte kan spola i toaletten, använda kranar eller duscha. Vi rekommenderar att du i förväg fyller upp vatten i kannor eller flaskor för att ha till hands.

Efter att vattnet är tillbaka kan det vara missfärgat eller innehålla luft i början. Detta är normalt och försvinner vanligtvis efter att du låtit vattnet rinna en stund. Om missfärgningen kvarstår, kontakta oss.`,
    category: "Information",
    featured: false,
  },
  {
    id: 6,
    slug: "host-vinter-rutiner-forberedelser",
    date: "15 augusti 2025",
    title: "Höst- och vinterrutiner – förbered din lägenhet",
    excerpt: "När kylan närmar sig är det viktigt att förbereda lägenheten på rätt sätt. Här ger vi tips på vad du kan göra för att undvika problem under vinterhalvåret.",
    content: `Övergången från sommar till höst och vinter innebär förändringar som påverkar din lägenhet. Med några enkla förberedelser kan du undvika vanliga problem under den kalla årstiden.

Element och värmesystem behöver fungera optimalt när temperaturen sjunker. Kontrollera att elementen inte är blockerade av möbler, gardiner eller annat som hindrar värmen från att spridas. Om du märker att ett element inte blir varmt, kontakta oss så vi kan åtgärda det innan kylan sätter in på allvar.

Fönster och dörrar är kritiska för att behålla värmen. Kontrollera att fönstren stänger tätt och att det inte drar någonstans. Om du upptäcker otätheter eller problem med fönstren, anmäl det till oss så snart som möjligt. Täta fönster minskar både dina uppvärmningskostnader och miljöpåverkan.

Ventilation är viktig året om, men särskilt under vintern när vi håller fönstren stängda. Se till att ventilationsöppningar inte är blockerade. God ventilation motverkar kondens och fuktproblem, vilket är särskilt viktigt under den kalla årstiden.

Vid längre frånvaro, till exempel under vintersemestern, är det viktigt att hålla en viss temperatur i lägenheten för att förhindra frostskador. Aldrig lägre än 15 grader. Om du ska vara borta länge, informera oss gärna.`,
    category: "Information",
    featured: false,
  },
  {
    id: 7,
    slug: "brandvarnare-testa-manadsvis",
    date: "5 september 2025",
    title: "Brandvarnare – testa månadsvis för din säkerhet",
    excerpt: "En fungerande brandvarnare kan rädda liv. Lär dig varför det är viktigt att testa den regelbundet och hur du gör.",
    content: `Brandvarnaren är en av de viktigaste säkerhetsanordningarna i ditt hem. En fungerande brandvarnare ger dig tidigt varsel om brand och kan rädda både liv och egendom.

Det är ditt ansvar som hyresgäst att se till att brandvarnaren fungerar. Detta innebär främst att testa den regelbundet och byta batteri när det behövs. Vi rekommenderar att du testar brandvarnaren minst en gång i månaden.

Att testa brandvarnaren är enkelt. De flesta brandvarnare har en testknapp som du trycker på. Om varnaren piper högt fungerar den som den ska. Om den inte piper, eller om signalen är svag, behöver batteriet bytas. Byt alltid batteri omedelbart när varnaren ger ifrån sig ett svagt pip med jämna mellanrum – det är batterivarningen.

Brandvarnaren ska vara placerad på taket eller högt upp på väggen, helst i hallen utanför sovrummen. Se till att den inte är blockerad av möbler eller annat som hindrar röken från att nå den. Damm kan också påverka funktionen, så torka av varnaren försiktigt vid behov.

Om brandvarnaren inte fungerar trots batteribyte, eller om den är äldre än tio år, kontakta oss för utbyte. Vi ser till att det installeras fungerande brandvarnare i alla våra lägenheter, men underhållet under hyrestiden är hyresgästens ansvar.`,
    category: "Information",
    featured: false,
  },
  {
    id: 8,
    slug: "atervinning-sorteringsguide",
    date: "3 oktober 2025",
    title: "Återvinning – sorteringsguide för ditt hushåll",
    excerpt: "Rätt sortering av avfall är viktigt för miljön. Här kan du läsa mer om vad som ska sorteras var och var du hittar återvinningsstationerna.",
    content: `Att sortera sitt avfall är en enkel men viktig insats för miljön. Genom att återvinna material kan vi spara resurser och minska mängden avfall som går till deponi.

De flesta av våra fastigheter har soprum med möjlighet till källsortering. Vanligtvis finns det behållare för restavfall, papper, plast, metall och glas. Se till att du sorterar rätt – fel sorterat avfall kan förorena hela soptunnan och göra återvinning omöjlig.

Papper och kartong ska vara rena och torra. Tidningar, reklam, äggkartonger och wellpapp hör hemma här. Se till att platta till kartonger så de tar mindre plats. Blött eller smutsigt papper, som pizzakartonger med fettfläckar, ska slängas som restavfall.

Plastförpackningar ska tömmas och sköljas lätt. Locket ska på, men du behöver inte ta bort etiketter. Både hårdplast och mjukplast är välkommet. Dock ska inte annan plast, som leksaker eller plastmöbler, slängas här – det är förpackningar som gäller.

Metallförpackningar inkluderar konservburkar, kapsyler och aluminiumfolie. Töm och skölj dem lätt. Glöm inte att folien ska samlas ihop till en boll.

Glas sorteras i ofärgat och färgat. Flaskor och burkar ska vara tömda. Lägg inte porslin, speglar eller glödlampor i glasåtervinningen.`,
    category: "Information",
    featured: false,
  },
  {
    id: 9,
    slug: "felanmalan-akut-vs-kan-vanta",
    date: "14 november 2025",
    title: "Felanmälan – när ska du anmäla och vad är akut?",
    excerpt: "Det är viktigt att veta när du ska göra en felanmälan och vad som räknas som akut. Här förklarar vi skillnaden.",
    content: `Att veta när du ska göra en felanmälan och vad som räknas som akut kan spara både tid och besvär. Här går vi igenom riktlinjerna för när du ska kontakta oss.

Akuta fel är sådana som innebär omedelbar skaderisk eller som gör lägenheten obrukbar. Exempel på akuta fel är vattenläckage, stopp i avloppet som orsakar översvämning, total strömavbrott eller lås som har gått sönder så du inte kan stänga eller låsa dörren. Vid akuta fel, kontakta oss omedelbart.

Mindre akuta fel kan vänta till vardagen men ska ändå anmälas så snart som möjligt. Detta inkluderar droppande kranar, trasiga element som fortfarande värmer delvis, fläktar som låter men fungerar, eller mindre skador på inredning. Använd vår felanmälningsportal för att göra en anmälan.

Fel som du själv har orsakat genom slarv eller oskicklighet kan komma att debiteras dig. Detta gäller till exempel om du har spolat ner olämpliga föremål i toaletten och orsakat stopp, eller om du har skadat något vid montering av möbler.

Vid felanmälan är det viktigt att du beskriver problemet så utförligt som möjligt. Ange vad som är fel, var i lägenheten det finns, och hur länge det har pågått. Ju mer information vi får, desto lättare är det för oss att åtgärda problemet effektivt.

Kom ihåg att du alltid kan kontakta oss om du är osäker på om något ska anmälas eller inte. Det är bättre att anmäla i onödan än att låta ett problem växa och bli större.`,
    category: "Information",
    featured: false,
  },
  {
    id: 10,
    slug: "hemforsakring-vad-tacker-vad",
    date: "10 december 2025",
    title: "Hemförsäkring – vad täcker hyresvärden och vad täcker du?",
    excerpt: "Många är osäkra på skillnaden mellan fastighetsförsäkring och hemförsäkring. Här förklarar vi vad som ingår i JMF:s försäkring och varför du behöver en egen hemförsäkring.",
    content: `Att förstå vad som täcks av hyresvärdens försäkring och vad du som hyresgäst behöver teckna själv är viktigt för att undvika obehagliga överraskningar om olyckan är framme.

Fastighetsförsäkringen, som JMF har, täcker skador på själva byggnaden och fast egendom. Detta inkluderar skador på grund av brand, vattenläckage eller andra plötsliga händelser som påverkar byggnadens konstruktion. Försäkringen täcker också skador på fasta installationer som element, rör och el-system.

Däremot täcker fastighetsförsäkringen inte dina privata ägodelar. Ditt möblemang, din elektronik, dina kläder och andra personliga tillhörigheter är ditt eget ansvar. För att skydda dessa behöver du en egen hemförsäkring.

En hemförsäkring täcker inte bara dina saker i lägenheten, utan ger dig också skydd på resor och ersätter skador du kan orsaka på andras egendom. Dessutom ingår ofta rättsskydd och hjälp vid ID-kapning.

Om du orsakar skada på lägenheten, till exempel genom att spilla något på golvet som lämnar fläckar, kan du bli ersättningsskyldig gentemot hyresvärden. En hemförsäkring med ansvarsförsäkring kan täcka sådana kostnader.

Vi rekommenderar starkt att alla våra hyresgäster har en giltig hemförsäkring. Kontrollera med ditt försäkringsbolag att du har tillräckligt skydd för dina behov.`,
    category: "Information",
    featured: true,
  },
  {
    id: 11,
    slug: "valkommen-ny-hyresgast-checklista",
    date: "12 januari 2026",
    title: "Välkommen som ny hyresgäst – en checklista för inflyttning",
    excerpt: "Att flytta in i en ny lägenhet är både spännande och mycket att hålla reda på. Här har vi samlat de viktigaste punkterna att tänka på när du flyttar in hos JMF.",
    content: `Välkommen till JMF! Som ny hyresgäst finns det flera saker att tänka på för att din inflyttning ska gå så smidigt som möjligt.

Inflyttningsbesiktning är ett viktigt första steg. Tillsammans går vi igenom lägenheten och dokumenterar eventuella skador eller brister som finns redan när du flyttar in. Detta är viktigt för att du inte ska bli ansvarig för skador som fanns innan du flyttade in. Se till att vara noggrann och påpeka allt du lägger märke till.

Elavläsning bör göras så snart som möjligt efter inflyttning. Notera mätarställningen och skicka in den till oss så vi vet varifrån din elförbrukning räknas. Om du inte gör detta kan du riskera att betala för el som den förra hyresgästen har förbrukat.

Hemförsäkring är ett krav från vår sida. Se till att teckna en hemförsäkring som täcker dina ägodelar och ger dig ansvarsskydd. Vi behöver ofta ett intyg på att försäkringen är tecknad.

Adressändring ska göras hos Skatteverket för att du ska få din post. Kom också ihåg att anmäla din nya adress till bank, arbetsgivare och andra viktiga instanser.

Felanmälningssystemet är tillgängligt via vår hemsida. Spara länken och gör dig bekant med hur det fungerar. Om du upptäcker något som inte fungerar i lägenheten när du flyttar in, anmäl det omedelbart.`,
    category: "Information",
    featured: true,
  },
  {
    id: 12,
    slug: "hantera-hoga-elpriser-praktiska-tips",
    date: "28 januari 2026",
    title: "Så hanterar du höga elpriser – praktiska tips",
    excerpt: "Elmarknaden har varit volatil och priserna har varit höga. Här ger vi dig en överblick över elmarknaden och konkreta tips för att hantera höga elräkningar.",
    content: `Elpriserna har varit fortsatt höga under vintern, vilket påverkar många hushålls ekonomi. Här delar vi med oss av tips för att hantera situationen och sänka dina elkostnader.

Först och främst är det viktigt att förstå vad som påverkar elpriset. Priset varierar beroende på tillgång och efterfrågan, väder, och bränslepriser. Under kalla perioder när efterfrågan är hög, stiger priserna. Detta är särskilt märkbart under vintermorgnar och kvällar.

Ett av de mest effektiva sätten att påverka din elkostnad är att flytta din förbrukning till tider när priset är lägre. Om du har möjlighet, kör diskmaskinen, tvättmaskinen och torktumlaren på natten eller under helgen när priserna ofta är lägre.

Sänk inomhustemperaturen. En grads sänkning kan minska uppvärmningskostnaden med ungefär fem procent. Använd varma kläder och filtar istället för att höja temperaturen. Se till att stänga dörrar mellan rum för att behålla värmen där du faktiskt vistas.

Korta, effektiva duschar sparar både vatten och el. Om du har möjlighet, sänk temperaturen på varmvattnet något. Även små förändringar märks på elförbrukningen.

Om du har möjlighet, överväg att teckna ett elavtal med rörligt pris om du kan flytta din förbrukning, eller fast pris om du vill ha förutsägbara kostnader. Jämför olika elbolag för att hitta det bästa alternativet för dig.`,
    category: "Information",
    featured: true,
  },
];

// Hjälpfunktion för att få featured nyheter
export const getFeaturedNews = () => {
  return newsArticles.filter(article => article.featured).slice(0, 3);
};

// Hjälpfunktion för att få alla nyheter sorterade efter datum
export const getAllNews = () => {
  return [...newsArticles].sort((a, b) => b.id - a.id);
};

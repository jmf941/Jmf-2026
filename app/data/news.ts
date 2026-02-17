// Nyhetsartiklar för JMF AB - Februari 2025 till Januari 2026
// Kategorier: Allmänt, Information

export interface NewsArticle {
  id: number;
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
    date: "20 april 2025",
    title: "Flyttstädning – så gör du rätt",
    excerpt: "När det är dags att flytta är det viktigt att lägenheten lämnas i ett gott skick. Här går vi igenom de viktigaste punkterna för en godkänd flyttstädning.",
    content: `En noggrann flyttstädning är en viktig del av avflyttningsprocessen. Lägenheten ska lämnas i samma skick som när du flyttade in, rent och välvårdat. Här är en checklista över de områden som kräver extra uppmärksamhet.

I köket är det flera detaljer som behöver tas om hand. Ugnen ska rengöras invändigt, inklusive ugnsplåtar och ugnsgaller. Kyl och frys ska avfrostas och rengöras både invändigt och utvändigt. Kom ihåg att rengöra bakom och under vitvarorna om möjligt. Spisfläkten behöver rengöras noggrant, särskilt fettfiltret. Töm och rengör alla skåp och lådor.

Badrummet kräver särskild uppmärksamhet på grund av kalkavlagringar. Rengör toalett, handfat, badkar och dusch med lämpliga medel. Avlägsna kalk från kranar och duschmunstycken. Rengör golvbrunnen och se till att silen är ren. Torka av väggar och golv noggrant.

Fönster och balkongdörrar ska rengöras både invändigt och utvändigt, om möjligt. Glöm inte fönsterbrädor och karmar. För innerfönster räcker det oftast med invändig rengöring.

Golv och väggar behöver också ses över. Dammsug och torka alla golv. Särskilda golv som parkett eller laminat kan behöva särskild behandling – var noga med att använda rätt rengöringsmedel. Torka av väggarna om det behövs och kontrollera särskilt runt strömbrytare och dörrhandtag.

Balkong, förråd och gemensamma utrymmen som hör till lägenheten ska också städas. Töm balkongen på alla tillhörigheter och feja ordentligt. Rensa förrådet helt och se till att inget lämnas kvar.`,
    category: "Information",
    featured: false,
  },
  {
    id: 4,
    date: "18 maj 2025",
    title: "Parkster införs på utvalda gästparkeringar",
    excerpt: "Vi testar nu ett nytt system för gästparkering på vissa av våra fastigheter. Parkster gör det enklare för besökare att parkera och för oss att hantera parkeringsplatserna.",
    content: `JMF inför nu Parkster som ett test på utvalda gästparkeringar i våra fastigheter. Systemet är utformat för att förenkla parkering för gäster och förbättra kontrollen av parkeringsplatserna.

Parkster är en digital lösning som gör att gäster enkelt kan betala för parkering via en app. Det eliminerar behovet av fysiska p-skivor eller parkeringsbrickor och gör det möjligt att hantera parkeringen på distans.

För dig som hyresgäst innebär detta att dina gäster enkelt kan parkera när de besöker dig. De laddar ner Parkster-appen, registrerar sitt fordon och betalar för den tid de vill parkera. Systemet är smidigt och användarvänligt.

Om du har frågor om vilka fastigheter som omfattas av testet eller hur Parkster fungerar, är du välkommen att kontakta vår kundservice. Vi utvärderar löpande testet och återkommer med mer information om eventuell permanent införande.

Tänk på att de ordinarie parkeringsreglerna fortfarande gäller. Parkster är ett komplement för att underlätta gästparkering, inte en ersättning för befintliga boendeparkeringstillstånd eller regler.`,
    category: "Allmänt",
    featured: false,
  },
  {
    id: 5,
    date: "12 juni 2025",
    title: "Planerade vattenavstängningar för underhåll",
    excerpt: "För att säkerställa att vattenledningarna fungerar optimalt kommer vi att genomföra underhållsarbete som kräver tillfälliga vattenavstängningar. Här informerar vi om vad detta innebär.",
    content: `Regelbundet underhåll av vattenledningar är nödvändigt för att säkerställa en tillförlitlig vattentillförsel och förebygga läckor och andra problem. Därför kommer JMF att genomföra planerade vattenavstängningar i vissa fastigheter under kommande period.

Vattenavstängningarna är nödvändiga för att utföra inspektioner, rengöring och eventuella reparationer av ledningarna. Detta arbete bidrar till att förlänga livslängden på rörsystemet och minskar risken för akuta vattenläckor som kan orsaka större skador.

Innan en planerad avstängning kommer alla berörda hyresgäster att informeras i god tid, normalt minst en vecka i förväg. Informationen lämnas via anslag i trapphuset, digitalt eller via brev. I meddelandet anges exakt tidpunkt för avstängningen och beräknad varaktighet.

Under en vattenavstängning har du inte tillgång till rinnande vatten i lägenheten. Det är därför bra att förbereda sig genom att till exempel fylla vattenflaskor eller kastruller i förväg. Tänk också på att inte använda diskmaskin eller tvättmaskin strax före avstängningen.

Om det uppstår akuta situationer under avstängningsperioden, kontakta vår jour enligt de instruktioner som lämnas i informationsmeddelandet. Vi strävar alltid efter att genomföra arbetet så snabbt och smidigt som möjligt för att minimera olägenheten för våra hyresgäster.`,
    category: "Information",
    featured: false,
  },
  {
    id: 6,
    date: "25 augusti 2025",
    title: "Förbered din lägenhet för hösten och vintern",
    excerpt: "När sommaren går mot sitt slut är det dags att förbereda lägenheten för kallare väder. Här är våra bästa tips för att säkerställa ett varmt och behagligt inomhusklimat under höst och vinter.",
    content: `Hösten och vintern medför sina utmaningar för bostaden. Genom att förbereda i tid kan du undvika problem och skapa ett trivsamt inomhusklimat även under de kallaste månaderna.

Fönster och dörrar är de viktigaste punkterna att kontrollera. Se till att fönstren stänger ordentligt och att det inte finns några glipor som släpper in kalluft. Kontrollera lister och tätningar – om de är skadade eller slitna bör de bytas ut. Drag från fönster kan leda till både obehag och onödig energiförbrukning.

Elementen behöver också ses över. Kontrollera att de värmer som de ska och att de inte är blockerade av möbler eller gardiner. Element som står bakom långa gardiner eller stora möbler har svårt att värma rummet effektivt. Se också till att det inte finns några luftbubblor i systemet – om elementet är kallt upptill kan det behöva luftas.

Ventilationen är särskilt viktig under vintern när vi håller fönstren stängda mer än vanligt. Se till att ventilationskanalerna inte är blockerade. God ventilation hjälper till att transportera bort fukt och skapar ett hälsosammare inomhusklimat. Vädra gärna kort och effektivt genom att öppna fönstren på vid gavel några minuter istället för att ha fönstren på glänt under lång tid.

Tänk också på att förbereda för eventuella oväder. Kontrollera att balkongen är säker och att inga lösa föremål kan blåsa ner. Om du har förråd på vinden eller i källaren, se till att inget står i vägen för ventilationen och att det inte finns risk för fuktskador.`,
    category: "Information",
    featured: false,
  },
  {
    id: 7,
    date: "15 september 2025",
    title: "Brandvarnare – din viktigaste livräddare",
    excerpt: "En fungerande brandvarnare kan rädda liv. Lär dig varför det är så viktigt att testa din brandvarnare regelbundet och hur du gör det på rätt sätt.",
    content: `Brandvarnaren är en av de viktigaste säkerhetsanordningarna i ditt hem. Vid en brand kan du ha så lite som två minuter på dig att ta dig ut – en fungerande brandvarnare ger dig den tiden.

Det är ditt ansvar som hyresgäst att se till att brandvarnaren i din lägenhet fungerar. Detta inkluderar att testa den regelbundet och byta batteri när det behövs. Vi rekommenderar att du testar brandvarnaren minst en gång i månaden.

Att testa brandvarnaren är enkelt. De flesta brandvarnare har en testknapp som du trycker på i några sekunder. Om den piper högt fungerar den som den ska. Om ljudet är svagt eller uteblir är det dags att byta batteri eller hela brandvarnaren.

Brandvarnaren ska placeras på taket eller högt upp på väggen, då rök stiger uppåt. Se till att den inte blockeras av möbler eller gardiner. I en större lägenhet kan det behövas mer än en brandvarnare – varje våning och varje sovrum bör ha en egen brandvarnare.

Om brandvarnaren börjar pipa med jämna mellanrum är det ofta ett tecken på att batteriet håller på att ta slut. Byt batteri omedelbart – ett utan batteri är ett liv i fara. Även om du har en brandvarnare med tioårigt batteri bör du testa den regelbundet för att säkerställa att den fungerar.

Om brandvarnaren i din lägenhet inte fungerar eller om du saknar brandvarnare, kontakta JMF omedelbart så hjälper vi dig.`,
    category: "Information",
    featured: false,
  },
  {
    id: 8,
    date: "08 oktober 2025",
    title: "Så sorterar du ditt avfall rätt",
    excerpt: "Rätt avfallssortering är viktigt för miljön och en del av ditt hyreskontrakt. Här guidar vi dig till hur du sorterar olika typer av avfall och var du hittar soprum och miljörum.",
    content: `Att sortera avfall på rätt sätt är en viktig del av vårt gemensamma miljöansvar. Korrekt källsortering minskar mängden avfall som går till förbränning och möjliggör återvinning av värdefulla material.

I din lägenhet bör du ha olika kärl för olika typer av avfall. Hushållssopor är det som inte kan återvinnas och ska kastas i den bruna eller gråa soptunnan. Matavfall sorteras separat – använd den bruna påsen för matavfall som kan bli biogas och biogödsel.

Förpackningar av papper, plast, metall och glas ska sorteras i speciella behållare i soprummet eller miljörummet. Tidningar och returpapper lämnas i anvisade behållare. Tomglas ska sorteras efter färg – ofta finns separata kärl för ofärgat och färgat glas.

Elektroniskt avfall, batterier och farligt avfall som färgrester eller sprayburkar ska aldrig kastas i hushållssoporna. Dessa lämnas i miljörummet eller på en återvinningscentral. Läkemedel lämnas på apoteket.

Du hittar soprum och miljörum i anslutning till din fastighet. Information om exakt placering finns i ditt hyreskontrakt eller på anslag i trapphuset. Om du är osäker på var du ska slänga något, kontakta din fastighetsförvaltare.

Större avfall som möbler eller cyklar ska inte kastas i soprummet. Kontakta din kommun för information om grovsophämtning eller återvinningscentraler.`,
    category: "Information",
    featured: false,
  },
  {
    id: 9,
    date: "05 november 2025",
    title: "Felanmälan – när och hur ska du anmäla?",
    excerpt: "Att veta när man ska göra en felanmälan och vilken prioritet den har kan vara förvirrande. Här förklarar vi skillnaden mellan akuta fel och sådant som kan vänta.",
    content: `När något inte fungerar som det ska i din lägenhet är det viktigt att du vet hur och när du ska göra en felanmälan. Rätt hantering hjälper oss att åtgärda problem snabbt och effektivt.

Akuta fel kräver omedelbar åtgärd och ska alltid anmälas direkt till vår jourtjänst. Dit räknas till exempel stora vattenläckor, avloppsstopp som orsakar översvämning, total strömavbrott, lås som inte fungerar eller andra fel som utgör en omedelbar risk för säkerhet eller hälsa. Vid akuta fel utanför kontorstid, ring vår jourtelefon.

Fel som kan vänta till nästa arbetsdag anmäls via vår hemsida eller till kundservice. Exempel på sådana fel är kranar som droppar, element som inte värmer ordentligt, lossna lister, eller fönster som inte stänger ordentligt. Även om dessa problem är besvärande är de inte akuta och kan planeras in för åtgärd.

När du gör en felanmälan, var så tydlig som möjligt. Besriv vad problemet är, var det finns och hur länge det har pågått. Om möjligt, ta gärna bilder som du kan bifoga i felanmälan. Detta hjälper oss att bedöma problemet och ta med rätt utrustning.

Tänk på att vissa fel kan vara ditt ansvar som hyresgäst. Normalt slitage, skador du orsakat själv eller problem med egna installationer är ditt eget ansvar att åtgärda. Om du är osäker på om något är JMF:s eller ditt ansvar, kontakta oss så hjälper vi dig att reda ut det.

Du kan göra felanmälan via vår hemsida under fliken "Felanmälan" eller genom att kontakta vår kundservice. Vid akuta fel, ring alltid vår jourtelefon.`,
    category: "Information",
    featured: false,
  },
  {
    id: 10,
    date: "10 december 2025",
    title: "Hemförsäkring – vad täcker hyresvärden och vad täcker du?",
    excerpt: "Många är osäkra på skillnaden mellan fastighetsförsäkring och hemförsäkring. Här förklarar vi vad som ingår i JMF:s försäkring och varför du behöver en egen hemförsäkring.",
    content: `Att förstå försäkringsskyddet är en viktig del av att vara hyresgäst. JMF har en fastighetsförsäkring som täcker vissa saker, men det är viktigt att du också har en egen hemförsäkring.

Fastighetsförsäkringen som JMF har täcker själva fastigheten – det vill säga byggnaden, fast inredning som kök och badrum, och fastighetens gemensamma utrymmen. Om det uppstår skador på fastigheten som påverkar din lägenhet, till exempel vid en vattenläcka eller brand, täcker vår försäkring reparation av fastigheten och fast inredning.

Däremot täcker fastighetsförsäkringen inte dina privata ägodelar. Det är där din hemförsäkring kommer in. En hemförsäkring täcker dina möbler, elektronik, kläder och andra personliga tillhörigheter vid till exempel brand, inbrott eller vattenskada. Hemförsäkringen ger också ofta ett ansvarsskydd som skyddar dig om du skulle orsaka skada på någon annan eller deras egendom.

Om du orsakar en skada i lägenheten, till exempel genom att lämna en kran på eller orsaka en översvämning, kan du bli ersättningsskyldig. Då kan hemförsäkringens ansvarsskydd komma väl till pass. Utan hemförsäkring kan du själv behöva stå för kostnaderna.

Det är ditt ansvar som hyresgäst att teckna och upprätthålla en hemförsäkring. Kontakta ett försäkringsbolag för att teckna en försäkring som passar dina behov. JMF kan inte rekommendera specifika bolag, men de flesta större försäkringsbolag erbjuder hemförsäkringar.`,
    category: "Information",
    featured: false,
  },
  {
    id: 11,
    date: "12 januari 2026",
    title: "Välkommen som ny hyresgäst – en checklista för inflyttning",
    excerpt: "Att flytta in i en ny lägenhet är både spännande och mycket att hålla reda på. Här har vi samlat de viktigaste punkterna att tänka på när du flyttar in hos JMF.",
    content: `Grattis till din nya lägenhet! För att göra inflyttningen så smidig som möjligt har vi satt ihop en checklista med viktiga saker att tänka på.

Innan du flyttar in är det viktigt att ordna med elavtalet. Du behöver själv teckna ett elavtal med ett elbolag. Kontakta dem i god tid innan inflyttningsdatumet för att säkerställa att elen är påslagen när du flyttar in. Kom ihåg att läsa av elmätaren vid inflyttning och rapportera mätarställningen till ditt elbolag.

När du får tillgång till lägenheten, börja med att gå igenom den noggrant. Kontrollera att allt fungerar – vatten, el, spis, kyl och frys. Notera eventuella skador eller brister som finns redan vid inflyttningen. Det är viktigt att dokumentera detta för att undvika tvister vid utflyttning. Fotografera gärna befintliga skador.

Se till att teckna en hemförsäkring innan du flyttar in. Den täcker dina ägodelar och ger dig ett ansvarsskydd. Läs mer om hemförsäkring i en separat artikel på vår hemsida.

Om du flyttar från en annan lägenhet, glöm inte att skicka in ditt avflyttningsdatum till oss. Detta är viktigt för att vi ska kunna planera kommande hyresgäster och för att du inte ska stå kvar som hyresgäst på den gamla adressen.

Vid inflyttning får du nycklar och eventuella brickor till lägenheten. Kontrollera att du får rätt antal nycklar och att de fungerar. Om du har frågor om nycklar, passage eller säkerhet, kontakta oss.

Kom också ihåg att anmäla din nya adress till Skatteverket och uppdatera din adress hos andra myndigheter, banker och abonnemang. Gör en adressändring på posten för att få din post eftersänd.`,
    category: "Information",
    featured: false,
  },
  {
    id: 12,
    date: "28 januari 2026",
    title: "Så hanterar du höga elpriser – praktiska tips",
    excerpt: "Elmarknaden har varit volatil och priserna har varit höga. Här ger vi dig en överblick över elmarknaden och konkreta tips för att hantera höga elräkningar.",
    content: `Elpriserna har varit höga och volatila under en längre period. Förståelse för elmarknaden och smarta sätt att minska förbrukningen kan hjälpa dig att hantera situationen.

Elpriset bestäms av flera faktorer: väder, tillgång på vatten i vattenkraftens magasin, underhåll av kärnkraftverk, efterfrågan från industri och hushåll, samt internationella händelser som påverkar gas- och kolpriser. Sverige har delat upp elnätet i fyra elområden, och priserna kan variera mellan dessa områden beroende på tillgång och efterfrågan.

För att hantera höga elpriser finns det flera strategier. Ett alternativ är att byta till ett elavtal med rörligt pris om du har fast pris och marknadspriset har sjunkkt, eller tvärtom – teckna fast pris om du tror att priserna kommer att stiga. Jämför alltid olika elbolag och avtalsformer för att hitta det som passar dig bäst.

Det mest effektiva sättet att påverka elräkningen är att minska förbrukningen. Se vår artikel om elförbrukning för detaljerade tips, men kom ihåg de viktigaste: byt till LED-belysning, duscha kortare, stäng av standby-förbrukning och sänk inomhustemperaturen med en grad.

Tidsstyrd förbrukning kan också spara pengar om du har ett avtal med timpriser. Att använda diskmaskin, tvättmaskin och torktumlare under timmar med lägre pris kan märkbart sänka kostnaden. Många elbolag erbjuder appar där du kan se aktuella och kommande priser.

Det finns också stöd att söka för hushåll med höga elräkningar. Kontakta din kommun eller Elsäkerhetsverket för information om eventuella bidrag eller stödinsatser som finns tillgängliga.

Kom ihåg att el är en förutsättning för vårt moderna samhälle. Genom att vara medveten om din förbrukning och göra smarta val kan du både spara pengar och bidra till en mer hållbar energianvändning.`,
    category: "Information",
    featured: false,
  },
];

export const categories = ["Allmänt", "Information", "Hyresförhandling", "Fastigheter"];

export default newsArticles;

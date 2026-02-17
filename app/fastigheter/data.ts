export interface Property {
  id: string;
  name: string;
  address: string;
  area: string;
  coordinates: [number, number]; // [lat, lng]
  apartments: number;
  apartmentTypes: string[];
  description: string;
  image?: string;
  features: string[];
}

export const properties: Property[] = [
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
    description: "Strax en mil utanför Piteå ligger byn Böle där vi idag är stolt ägare av Bölevägen 24. Detta hus byggdes 1986 och har tio lägenheter, alla på 2 ROK. Lägenheterna erbjuder en rymlig hall, kök med utgång mot altan/balkong, vardagsrum, sovrum, klädkammare och badrum utrustade med wc, tvättställ, dusch och tvättmaskin. Alla badrum har dessutom renoverats.",
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
    description: "I närhet till ICA i Lillpite hittar du vårt tegelhus på Lillpitevägen 497. Detta hus består av åtta lägenheter, fyra 2-rumslägenheter och fyra 1-rumslägenheter. Sedan hittar du förråd och tvättstuga i källarutrymmet. Huset har en fin uteplats och ligger i nära anslutning till älven.",
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
    description: "Borta på Hasselvägen 10 i Lillpite hittar du vårt andra 'Bölehus'. Detta hus ligger precis intill älven och på en väldigt lugn gata. Precis som i Böle så består detta hus av tio lägenheter på 2 ROK. Samtliga lägenheter har alla en egen balkong av större storlek. Varje lägenhet är utrustad med egen tvättmaskin.",
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
    description: "Mitt i Svensbyn hittar du Åijvägen 10, precis intill skolan i Svenbyn. Huset består av fyra 2-rumslägenheter och fyra 1-rumslägenheter. I källarutrymmet finns det tvättstuga med torkrum, förråd och även en mindre lokal att låna.",
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
    description: "I Svensbyn hittar du Lövholmsvägen 45. Ett trevligt boende med fina omgivningar och nära till naturen.",
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
    description: "Inne på Funtstigen i Svensbyn strax utanför Piteå hittar du en lugn gata med återvändsgränd. Här har JMF sex stycken fristående småvillor, alla med 2 ROK på 65 kvm. Alla husen har dessutom eget garage i direktanslutning till huset. Dessa fastigheter hör till våra mest populära.",
    features: ["Fristående villa", "Eget garage", "65 kvm", "Lugnt område", "Återvändsgränd"]
  },
  {
    id: "furunasvagen-5",
    name: "Furunäsvägen 5",
    address: "Furunäsvägen 5, Strömsborg",
    area: "Strömsborg",
    coordinates: [65.3125, 21.4828],
    apartments: 5,
    apartmentTypes: ["1.5 ROK", "2 ROK"],
    description: "Inne på Strömsborg, ett stenkast från stadskärnan i Piteå hittar du fastigheten Ekan 5. Huset består av totalt fem lägenheter, fyra 2-rumslägenheter och en 1.5-rumslägenhet. I källarutrymmet hittar du en välutrustad tvättstuga och förråd tillhörande lägenheterna. Alla 2-rumslägenheter har även stora balkonger mot bakgården.",
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
    description: "Utspritt på fastigheten Ekan 8 på Strömsborg. Furunäsvägen 9 består av fem lägenheter, fyra 2-rumslägenheter och en 1-rumslägenhet. Nära till badhusparken med fik, lekplats och mycket annat.",
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
    description: "På Furunäsvägen 11 har vi två hus, med totalt tre lägenheter. Beläget i lugna Strömsborg med närhet till stadskärnan.",
    features: ["Lugnt läge", "Nära centrum", "Balkong"]
  }
];

export const areas = ["Alla", "Centrum", "Strömsborg", "Svensbyn", "Böle", "Lillpite"] as const;

export type Area = (typeof areas)[number];

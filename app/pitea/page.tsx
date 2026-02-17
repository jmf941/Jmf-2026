import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { MapPin, Building, Star, Shield, Clock, Heart, ArrowRight, GraduationCap, Trees, Waves, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Piteå | Lägenheter i Piteå | JMF AB",
  description: "JMF AB erbjuder lägenheter i Piteå. Upptäck våra bostäder i olika områden - både centralt och ute i byarna.",
};

export default function PiteaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Lägenheter
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Bo i <span className="gradient-text">Piteå</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vi äger flertalet fastigheter i Piteå, både centralt men också ute i byarna. 
              Upptäck våra lägenheter och hitta ditt nya hem.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Varför välja oss?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi på JMF AB strävar alltid efter att ge våra hyresgäster en bekväm 
              och bekymmersfri bostadssituation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Kvalitet",
                description: "Vi erbjuder högkvalitativa lägenheter som ger dig möjligheten att bo i ett modernt och välunderhållet hem.",
                color: "blue",
              },
              {
                icon: MapPin,
                title: "Bekvämlighet",
                description: "Våra lägenheter ligger i attraktiva områden med lättillgänglig kollektivtrafik och nära bekvämligheter.",
                color: "emerald",
              },
              {
                icon: Shield,
                title: "Trygghet",
                description: "Vi hanterar själva fastighetsförvaltningen. Vid akuta problem utanför kontorstid är störningsjour tillgänglig.",
                color: "purple",
              },
              {
                icon: Heart,
                title: "Service",
                description: "Vi sätter alltid våra hyresgäster i centrum. Vårt engagerade team står redo att hjälpa till.",
                color: "rose",
              },
              {
                icon: Building,
                title: "Flexibilitet",
                description: "Vi erbjuder ett utbud av lägenheter, från mindre ettor till större flerbäddsrum.",
                color: "amber",
              },
              {
                icon: Clock,
                title: "Snabbhet",
                description: "Listan på lediga lägenheter uppdateras dagligen. Skapa en bevakning så hör vi av oss när något passande dyker upp.",
                color: "cyan",
              },
            ].map((item, index) => {
              const colorClasses = {
                blue: "bg-blue-50 text-blue-600",
                emerald: "bg-emerald-50 text-emerald-600",
                purple: "bg-purple-50 text-purple-600",
                rose: "bg-rose-50 text-rose-600",
                amber: "bg-amber-50 text-amber-600",
                cyan: "bg-cyan-50 text-cyan-600",
              };

              return (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", colorClasses[item.color as keyof typeof colorClasses])}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Områden vi finns i
            </h2>
            <p className="text-lg text-slate-600">
              Våra fastigheter finns på flera platser i och runt Piteå
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Piteå Centrum",
                description: "Centralt boende med närhet till affärer, restauranger och kommunikationer.",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
              },
              {
                name: "Bergsviken",
                description: "Ett populärt område med närhet till både natur och stad.",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
              },
              {
                name: "Hortlax",
                description: "Lantligt läge med charmiga fastigheter och närhet till havet.",
                image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{area.name}</h3>
                  <p className="text-slate-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Housing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="w-5 h-5" />
                <span>För studenter</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Studentboende
              </h2>
              <div className="text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Det kommer dagligen in förfrågningar om studentboende i Piteå till oss. 
                  Tyvärr har vi idag inga specifika studentlägenheter i Piteå men ett antal 
                  mindre lägenheter till förmånligt pris.
                </p>
                <p>
                  Vi håller på att försöka hitta studentboenden att förvärva och hoppas 
                  kunna erbjuda detta inom kort.
                </p>
                <p>
                  Kontakta oss gärna om du är student och letar boende, så hjälper vi dig 
                  att hitta något som passar dina behov.
                </p>
              </div>
              <div className="mt-8">
                <a href="/ansokan" className="btn-primary inline-flex items-center space-x-2">
                  <span>Sök bostad</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="Studentboende"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Piteå */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Om Piteå
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Piteå är en levande stad med närhet till både natur och stadsliv
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: "Natur",
                description: "Piteå omges av vacker natur med skogar, sjöar och hav. Perfekt för den som älskar friluftsliv.",
              },
              {
                icon: Waves,
                title: "Pite Havsbad",
                description: "Ett av Sveriges största och mest populära badhotell ligger strax utanför stan.",
              },
              {
                icon: Building,
                title: "Stadskärna",
                description: "Piteå har en charmig stadskärna med butiker, caféer och restauranger vid vattnet.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hitta ditt nya hem i Piteå
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            När du väljer att hyra genom oss, väljer du en hyresvärd som bryr sig. 
            Kontakta oss idag för att ta reda på hur vi kan hjälpa dig.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/ansokan" className="btn-primary text-lg px-8 py-4">
              Sök bostad
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://homeq.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <span>Se lediga lägenheter</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

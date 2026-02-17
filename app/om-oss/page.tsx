import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Building, Users, Target, MapPin, Calendar, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss | JMF AB - Fastighetsförvaltning i Piteå",
  description: "Lär känna JMF AB - ett fastighetsbolag som förvärvar, uppför, äger och förvaltar attraktiva bostäder och lokaler i Norrbotten.",
};

export default function OmOssPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Om JMF
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Ditt <span className="gradient-text">framtida hem</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              JMF är ett fastighetsbolag som förvärvar, uppför, äger och förvaltar 
              attraktiva bostäder och lokaler.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Fastighetsbolag med fokus på Norrbotten
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Bolagets strategi är att förvärva befintliga bostadsfastigheter liksom 
                  mark för nyproduktion i norra Sverige.
                </p>
                <p>
                  Bolaget grundades 2021 i Piteå av Joakim och Martin som båda är födda 
                  och uppvuxna här. Det föll sig därför naturligt att det även var här 
                  som första fastighetsförvärvet gjordes vilket blev startskottet för bolaget.
                </p>
                <p>
                  Vi kommer att fortsätta förvärva fastigheter i Piteå men även runt omkring 
                  på andra orter i Norrbotten.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-slate-700 font-medium">
                  Vid mer frågor kontakta oss på{" "}
                  <a href="mailto:info@jmf.se" className="text-blue-600 hover:underline">
                    info@jmf.se
                  </a>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="JMF Fastigheter"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-1">2021</div>
                <div className="text-slate-600">Året vi grundades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vad som driver oss
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Våra kärnvärden formar allt vi gör
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategisk tillväxt",
                description: "Vi växer kontrollerat och hållbart med fokus på rätt lägen och fastigheter.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Lokal förankring",
                description: "Som lokala entreprenörer förstår vi marknaden och våra hyresgästers behov.",
                color: "emerald",
              },
              {
                icon: Award,
                title: "Kvalitet i allt",
                description: "Vi kompromissar aldrig med kvaliteten i våra fastigheter eller vår service.",
                color: "amber",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                  item.color === "blue" && "bg-blue-50 text-blue-600",
                  item.color === "emerald" && "bg-emerald-50 text-emerald-600",
                  item.color === "amber" && "bg-amber-50 text-amber-600",
                )}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vår resa
            </h2>
            <p className="text-lg text-slate-600">
              Från starten till idag
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

            {[
              {
                year: "2021",
                title: "JMF grundas",
                description: "Joakim och Martin startar JMF AB i Piteå med visionen att skapa ett modernt fastighetsbolag.",
              },
              {
                year: "2022",
                title: "Första fastigheten",
                description: "Förvärvet av den första fastigheten blir startskottet för vår tillväxtresa.",
              },
              {
                year: "2023",
                title: "Expansion",
                description: "Vi fortsätter att växa och förvärvar flera fastigheter i Piteå och omnejden.",
              },
              {
                year: "2024",
                title: "Nya höjder",
                description: "Fortsatt tillväxt med fokus på hållbarhet och långsiktiga relationer.",
              },
            ].map((milestone, index) => (
              <div key={milestone.year} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 border-4 border-white shadow-lg" />
                <div className="ml-20">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Vill du veta mer om oss?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Vi är alltid intresserade av att höra från dig. Oavsett om du har 
            frågor om våra fastigheter eller vill veta mer om vårt företag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Kontakta oss
            </a>
            <a href="/ansokan" className="btn-secondary text-lg px-8 py-4">
              Sök bostad
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

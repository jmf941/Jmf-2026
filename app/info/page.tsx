import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Info, FileText, Car, Clock, Users, CheckCircle, AlertCircle, Shield, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Information | För hyresgäster | JMF AB",
  description: "Information för hyresgäster hos JMF AB. Frågor och svar om att hyra lägenhet, parkering och mer.",
};

export default function InfoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Information
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              För <span className="gradient-text">hyresgäster</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Här hittar du svar på vanliga frågor och viktig information för dig 
              som hyr lägenhet eller lokal av JMF AB.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vanliga frågor och svar
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Vad krävs för att få hyra?
                  </h3>
                  <div className="text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      Vi har som krav att du som hyresgäst har en fast anställning som ska 
                      kunna bestyrkas med kontrakt eller liknande. Via din anställning så 
                      ska du ha en inkomst som motsvarar minst 4 x hyran på lägenheten.
                    </p>
                    <p>
                      En kreditupplysning kommer att tas innan du får möjligheten att komma 
                      på visning. Vi ser även att du inte har några betalningsanmärkningar 
                      sedan tidigare och är över 18 år gammal.
                    </p>
                    <p>
                      Det kommer även att krävas referens från tidigare boende där vi vill 
                      se positiva vitsord från att du varit en god granne. När det kommer 
                      till antalet personer i lägenheten så ska detta tas upp vid skrivandet 
                      av kontraktet och hyresgästen ska förhålla sig till detta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Hur lång är uppsägningstiden?
                  </h3>
                  <div className="text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      Som hyresgäst hos JMF AB så har du <strong>3 månaders uppsägningstid</strong>. 
                      Det är viktigt att du får en bekräftelse på din uppsägning så att du med 
                      all säkerhet vet om att informationen nått fram till oss.
                    </p>
                    <p>
                      <a href="/saga-upp" className="text-blue-600 hover:underline font-medium">
                        Läs mer om uppsägning →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Kan jag hyra parkeringsplats?
                  </h3>
                  <div className="text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      Vi har flertalet parkering och garageplatser som vi hyr ut. Som befintlig 
                      hyresgäst kan du logga in i vårt fastighetssystem för att se lediga platser. 
                      Vi hyr även ut garage och parkering externt men prioriterar alltid befintliga 
                      hyresgäster.
                    </p>
                    <p>
                      Skulle du vara intresserad av att hyra parkering från oss så maila in till 
                      oss så återkommer vi inom kort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Hur gör jag en felanmälan?
                  </h3>
                  <div className="text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      Det snabbaste sättet är att använda vår hyresgästportal där du kan 
                      registrera din felanmälan direkt och följa status på ditt ärende. 
                      Du kan också ringa oss eller skicka e-post.
                    </p>
                    <p>
                      <a href="/felanmalan" className="text-blue-600 hover:underline font-medium">
                        Läs mer om felanmälan →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Snabblänkar för dig som hyresgäst
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Felanmälan",
                description: "Gör en felanmälan dygnet runt",
                href: "/felanmalan",
                color: "red",
              },
              {
                icon: Clock,
                title: "Säga upp",
                description: "Information om uppsägning",
                href: "/saga-upp",
                color: "orange",
              },
              {
                icon: Car,
                title: "Parkering",
                description: "Hyra parkeringsplats",
                href: "mailto:info@jmf.se",
                color: "emerald",
              },
              {
                icon: Shield,
                title: "Mina Sidor",
                description: "Logga in på portalen",
                href: "https://portal.pigello.se/kustbo",
                external: true,
                color: "blue",
              },
            ].map((link) => {
              const colorClasses = {
                red: "bg-red-50 text-red-600 hover:bg-red-100",
                orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
                emerald: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
                blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
              };

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "block p-6 rounded-2xl border border-slate-100 transition-all duration-300",
                    colorClasses[link.color as keyof typeof colorClasses]
                  )}
                >
                  <link.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-1">{link.title}</h3>
                  <p className="text-slate-600 text-sm">{link.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rights */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Dina rättigheter</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "En välunderhållen lägenhet vid inflyttning",
                  "Snabb hjälp vid fel och problem",
                  "Förutsebar hyreshöjning enligt avtal",
                  "Besked om eventuella förändringar",
                  "Respektfull behandling",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600" />
                <h2 className="text-2xl font-bold text-slate-900">Dina skyldigheter</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Betala hyran i tid",
                  "Ta hand om lägenheten och dess utrustning",
                  "Följa ordningsreglerna i fastigheten",
                  "Anmäla fel och skador omgående",
                  " Visa hänsyn till grannar",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Har du fler frågor?</h2>
          <p className="text-slate-400 mb-8">
            Tveka inte att kontakta oss om du har frågor som du inte hittar svar på här.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@jmf.se" className="btn-primary">
              <Mail className="w-5 h-5 mr-2" />
              Skicka e-post
            </a>
            <a href="tel:0703663747" className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span>070-366 37 47</span>
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

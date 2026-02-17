import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Wrench, Phone, Mail, ExternalLink, AlertTriangle, Clock, CheckCircle, ArrowRight, FileText, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Felanmälan | JMF AB",
  description: "Gör en felanmälan till JMF AB. Vi finns tillgängliga dygnet runt för att hjälpa dig.",
};

export default function FelanmalanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-6">
              Felanmälan
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Behöver du <span className="text-red-600">hjälp</span>?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Om du upplever problem med din lägenhet eller har upptäckt brister 
              i fastighetens gemensamma utrymmen, hjälper vi dig så snabbt som möjligt.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-8 h-8" />
              <div>
                <h2 className="font-bold text-lg">Akut fel utanför kontorstid?</h2>
                <p className="text-red-100">Ring störningsjour på 0911-73336</p>
              </div>
            </div>
            <a
              href="tel:091173336"
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
            >
              <Phone size={20} />
              <span>0911-73336</span>
            </a>
          </div>
        </div>
      </section>

      {/* Portal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Använd vår hyresgästportal
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Det snabbaste och enklaste sättet att göra en felanmälan är via vår 
                hyresgästportal. Där kan du även följa status på din anmälan och få 
                uppdateringar om åtgärder som vidtas.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Registrera din felanmälan direkt",
                  "Ladda upp bilder på felet",
                  "Följ status på din anmälan",
                  "Få notifieringar när åtgärd är vidtagen",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.pigello.se/kustbo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg inline-flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>Gå till portalen</span>
              </a>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Så här gör du:
              </h3>
              <ol className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Besök portalen",
                    description: "Gå till portal.pigello.se/kustbo",
                  },
                  {
                    step: "2",
                    title: "Logga in",
                    description: "Använd dina inloggningsuppgifter. Har du inget konto? Följ instruktionerna för att skapa ett.",
                  },
                  {
                    step: "3",
                    title: "Välj felanmälan",
                    description: "Välj alternativet för att lämna en felanmälan i menyn.",
                  },
                  {
                    step: "4",
                    title: "Beskriv problemet",
                    description: "Fyll i formuläret med detaljer om problemet och lägg gärna till bilder.",
                  },
                  {
                    step: "5",
                    title: "Skicka in",
                    description: "Klicka på skicka. Du får en bekräftelse och kan följa ärendet.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Andra sätt att nå oss
            </h2>
            <p className="text-lg text-slate-600">
              Om du inte kan använda portalen finns det andra sätt att göra din felanmälan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Telefon",
                value: "0911-73336",
                description: "Vardagar 10:00 - 16:00",
                href: "tel:091173336",
                color: "blue",
              },
              {
                icon: Mail,
                title: "E-post",
                value: "info@jmf.se",
                description: "Svar inom 24 timmar",
                href: "mailto:info@jmf.se",
                color: "emerald",
              },
              {
                icon: Home,
                title: "Post",
                value: "JMF AB",
                description: "Kivra: 559318-6611, 106 31 Stockholm",
                href: null,
                color: "purple",
              },
            ].map((method) => {
              const colorClasses = {
                blue: "bg-blue-50 text-blue-600",
                emerald: "bg-emerald-50 text-emerald-600",
                purple: "bg-purple-50 text-purple-600",
              };

              const CardContent = (
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 text-center">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6", colorClasses[method.color as keyof typeof colorClasses])}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-slate-800 mb-1">{method.value}</p>
                  <p className="text-slate-600 text-sm">{method.description}</p>
                </div>
              );

              return method.href ? (
                <a key={method.title} href={method.href}>
                  {CardContent}
                </a>
              ) : (
                <div key={method.title}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vad händer efter din anmälan?
            </h2>
            <p className="text-lg text-slate-600">
              Så hanterar vi ditt ärende
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 md:left-1/2 md:-translate-x-1/2" />

            {[
              {
                title: "Mottagen",
                description: "Din felanmälan registreras i vårt system och du får en bekräftelse.",
                time: "Omedelbart",
              },
              {
                title: "Bedömning",
                description: "Vi bedömer felet och bestämmer prioritering och vilken åtgärd som behövs.",
                time: "Inom 24 timmar",
              },
              {
                title: "Åtgärd",
                description: "Akuta fel åtgärdas omgående. Övriga fel planeras in efter prioritet.",
                time: "Varierar",
              },
              {
                title: "Uppföljning",
                description: "Du får besked när åtgärden är utförd och kan ge feedback.",
                time: "Efter åtgärd",
              },
            ].map((step, index) => (
              <div key={step.title} className={cn(
                "relative flex items-start mb-12 last:mb-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                {/* Dot */}
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 border-4 border-white shadow-lg z-10 md:left-1/2" />
                
                {/* Content */}
                <div className={cn(
                  "ml-20 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                )}>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                    {step.time}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
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

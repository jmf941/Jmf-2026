import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FileText, Download, Mail, Calendar, AlertCircle, CheckCircle, ArrowRight, Clock, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Säga upp lägenhet | JMF AB",
  description: "Information om hur du säger upp din lägenhet hos JMF AB. Uppsägningstid är tre månader.",
};

export default function SagaUppPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-semibold mb-6">
              Uppsägning
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Säga upp <span className="text-orange-600">lägenhet</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Här hittar du all information du behöver för att säga upp din lägenhet, 
              parkering eller förråd hos JMF AB.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Period Info */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-white" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Uppsägningstid
                  </h2>
                </div>
                <p className="text-orange-100 text-lg mb-4">
                  Som hyresgäst hos JMF AB har du <strong className="text-white">tre månaders uppsägningstid</strong>.
                  Detta gäller för lägenhet, parkering och förråd.
                </p>
                <p className="text-orange-100">
                  Uppsägningstiden räknas från den månadsskifte som infaller närmast 
                  efter att vi mottagit din uppsägning.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Exempel:</h3>
                <div className="space-y-3 text-slate-600">
                  <p>Om vi mottar din uppsägning den <strong>15 januari</strong>:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Uppsägningstid: 1 februari - 30 april
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Sista hyresdag: 30 april
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Avflyttning senast: 30 april
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Terminate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Hur du säger upp din lägenhet
            </h2>
            <p className="text-lg text-slate-600">
              Följ dessa steg för en smidig uppsägning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Download,
                title: "Ladda ner blanketten",
                description: "Ladda ner vår uppsägningsblankett och fyll i alla uppgifter noggrant.",
                action: {
                  text: "Ladda ner blankett",
                  href: "https://jmf.se/wp-content/uploads/2022/01/uppsagning-hyresavtal.pdf",
                },
              },
              {
                step: "2",
                icon: FileText,
                title: "Fyll i och skicka",
                description: "Fyll i blanketten och skicka den till oss via e-post eller post.",
                action: {
                  text: "Mejla blanketten",
                  href: "mailto:info@jmf.se",
                },
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Bekräftelse",
                description: "Vi skickar en bekräftelse på din uppsägning så snart vi mottagit den.",
                action: null,
              },
            ].map((item) => (
              <div key={item.step} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.description}</p>
                {item.action && (
                  <a
                    href={item.action.href}
                    className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700"
                  >
                    <span>{item.action.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Important reminders */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-orange-500" />
                Viktigt att tänka på
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Bekräftelse krävs",
                    description: "Det är viktigt att du får en bekräftelse på din uppsägning så att du med all säkerhet vet om att informationen nått fram till oss.",
                  },
                  {
                    title: "Skriftlig uppsägning",
                    description: "Uppsägning måste ske skriftligt via post eller mejl. Telefon eller muntlig uppsägning är inte bindande.",
                  },
                  {
                    title: "Avflyttningsbesiktning",
                    description: "Vi bokar en avflyttningsbesiktning innan du lämnar lägenheten. Var noga med att städa noggrant.",
                  },
                  {
                    title: "Adressändring",
                    description: "Glöm inte att göra adressändring hos Skatteverket och att meddela oss din nya adress.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3 text-emerald-500" />
                Inför avflyttning
              </h2>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-6">Checklista:</h3>
                <ul className="space-y-3">
                  {[
                    "Anmäl till oss när du vill flytta",
                    "Gör en adressändring hos Skatteverket",
                    "Meddela oss din nya adress",
                    "Stäng av el, vatten och eventuell fjärrvärme",
                    "Återlämna alla nycklar",
                    "Rapportera eventuella fel eller skador",
                    "Städa lägenheten noggrant",
                    "Gör en flyttstädning av lägenheten",
                    "Ta med alla dina tillhörigheter",
                    "Avsluta eventuell hemförsäkring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-slate-300 rounded mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Har du frågor om uppsägning?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Kontakta oss om du har några frågor eller funderingar kring uppsägning 
              eller avflyttning. Vi hjälper dig gärna.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@jmf.se" className="btn-primary">
                <Mail className="w-5 h-5 mr-2" />
                Mejla oss
              </a>
              <a href="tel:0703663747" className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <span>070-366 37 47</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

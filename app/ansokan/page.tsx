import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Building, ArrowRight, ExternalLink, CheckCircle, User, Mail, Phone, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Ansökan | Sök bostad hos JMF AB",
  description: "Ansök om lägenhet hos JMF AB. Vi har lägenheter i olika storlekar i Piteå och Norrbotten.",
};

export default function AnsokanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Ansökan
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Sök <span className="gradient-text">bostad</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Letar du efter en ny lägenhet? Vi har lägenheter i olika storlekar 
              och gör vårt bästa för att plocka fram någonting som passar just dig.
            </p>
          </div>
        </div>
      </section>

      {/* HomeQ Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Se våra lediga lägenheter
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Vi använder oss av tjänsten HomeQ för att lista lediga lägenheter. 
                  Hittar du ingenting som vi har ledigt just nu så kan du skapa en 
                  bevakning på HomeQ.se.
                </p>
                <a
                  href="https://homeq.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Gå till HomeQ</span>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <Building className="w-24 h-24 text-blue-600 mx-auto" />
                  <p className="text-center mt-4 text-slate-600 font-medium">Lediga lägenheter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Intresseanmälan
            </h2>
            <p className="text-lg text-slate-600">
              Fyll i formuläret nedan om du är intresserad av att hyra. 
              Vi återkommer sedan inom kort för att gå vidare med ärendet.
            </p>
          </div>

          <form className="space-y-6 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Personuppgifter
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="firstName">Förnamn *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="form-input"
                    placeholder="Ange förnamn"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="lastName">Efternamn *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="form-input"
                    placeholder="Ange efternamn"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="email">E-post *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input pl-10"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Telefon *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="form-input pl-10"
                      placeholder="070-123 45 67"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Housing Preferences */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Boendepreferenser
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="rooms">Önskat antal rum</label>
                  <select id="rooms" name="rooms" className="form-input">
                    <option value="">Välj...</option>
                    <option value="1">1 rum</option>
                    <option value="2">2 rum</option>
                    <option value="3">3 rum</option>
                    <option value="4">4 rum</option>
                    <option value="5+">5+ rum</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="area">Önskat område</label>
                  <select id="area" name="area" className="form-input">
                    <option value="">Välj...</option>
                    <option value="pitea-centrum">Piteå centrum</option>
                    <option value="pitea-norr">Piteå norr</option>
                    <option value="pitea-soder">Piteå söder</option>
                    <option value="bergsviken">Bergsviken</option>
                    <option value=" hortlax">Hortlax</option>
                    <option value="annat">Annat i Norrbotten</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="moveIn">Önskat inflyttningsdatum</label>
                <input
                  type="date"
                  id="moveIn"
                  name="moveIn"
                  className="form-input"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Övrig information
              </h3>

              <div>
                <label className="form-label" htmlFor="employment">Nuvarande sysselsättning *</label>
                <select id="employment" name="employment" required className="form-input">
                  <option value="">Välj...</option>
                  <option value="fast-anstallning">Fast anställning</option>
                  <option value="tidsbegransad">Tidsbegränsad anställning</option>
                  <option value="egenforetagare">Egenföretagare</option>
                  <option value="student">Student</option>
                  <option value="pensionar">Pensionär</option>
                  <option value="annat">Annat</option>
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Berätta gärna mer om dig själv och vad du söker..."
                />
              </div>
            </div>

            {/* Consent */}
            <div className="pt-6 border-t border-slate-200">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-slate-600 text-sm">
                  Jag godkänner att JMF AB lagrar och behandlar mina personuppgifter 
                  enligt GDPR. Uppgifterna används endast för att hantera min förfrågan 
                  om bostad.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full text-lg py-4">
              Skicka ansökan
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vad krävs för att få hyra?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Fast inkomst",
                description: "Du ska ha en fast anställning som kan bestyrkas med kontrakt eller liknande.",
              },
              {
                icon: CheckCircle,
                title: "Inkomstkrav",
                description: "Din inkomst ska motsvara minst 4x hyran på lägenheten.",
              },
              {
                icon: CheckCircle,
                title: "Kreditupplysning",
                description: "En kreditupplysning kommer att tas innan visning.",
              },
              {
                icon: CheckCircle,
                title: "Betalningsanmärkningar",
                description: "Vi ser helst att du inte har några betalningsanmärkningar.",
              },
              {
                icon: CheckCircle,
                title: "Åldersgräns",
                description: "Du måste vara över 18 år gammal för att hyra lägenhet.",
              },
              {
                icon: CheckCircle,
                title: "Referenser",
                description: "Referens från tidigare boende med positiva vitsord.",
              },
            ].map((req, index) => (
              <div key={req.title} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-slate-100">
                <req.icon className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{req.title}</h3>
                  <p className="text-slate-600 text-sm">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

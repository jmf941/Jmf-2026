import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, Tag, ArrowRight, ChevronRight, Newspaper, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Nyheter | JMF AB",
  description: "Läs de senaste nyheterna från JMF AB. Information om hyresförhandlingar, nya fastigheter och annat som rör våra hyresgäster.",
};

const newsArticles = [
  {
    id: 1,
    date: "16 februari 2026",
    title: "Årlig hyresförhandling 2026 pågår",
    excerpt: "Hyresförhandlingen för 2026 är igång. Just nu pågår den årliga hyresförhandlingen mellan JMF AB, via vår representant Fastighetsägarna, och Hyresgästföreningen.",
    content: "",
    category: "Allmänt",
    featured: true,
  },
  {
    id: 2,
    date: "02 april 2025",
    title: "Årlig hyresförhandling klar!",
    excerpt: "Den årliga förhandlingen mellan Fastighetsägarna som representerat oss och Hyresgästföreningen är nu avklarad. Hyreshöjningen sker retroaktivt från 1 januari.",
    content: "",
    category: "Allmänt",
    featured: false,
  },
  {
    id: 3,
    date: "18 november 2024",
    title: "Årlig hyresförhandling 2025",
    excerpt: "Det är nu dags för årlig hyreshöjning hos oss på JMF. Den årliga förhandlingen kommer att skötas av Fastighetsägarna på uppdrag av JMF.",
    content: "",
    category: "Allmänt",
    featured: false,
  },
  {
    id: 4,
    date: "04 mars 2024",
    title: "Nya rutiner för felanmälan",
    excerpt: "Nytt Felanmälningssystem och Jourtjänst på JMF. Vi på JMF är glada att kunna meddela lanseringen av vårt nya system för felanmälningar.",
    content: "",
    category: "Allmänt",
    featured: false,
  },
  {
    id: 5,
    date: "15 juli 2023",
    title: "Årlig hyresförhandling klar!",
    excerpt: "Den årliga förhandlingen mellan Fastighetsägarna som representerat oss och Hyresgästföreningen är nu avklarad.",
    content: "",
    category: "Allmänt",
    featured: false,
  },
];

const categories = ["Allmänt", "Hyresförhandling", "Fastigheter", "Information"];

export default function NyheterPage() {
  const featuredNews = newsArticles.find(n => n.featured);
  const regularNews = newsArticles.filter(n => !n.featured);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Newspaper className="w-4 h-4 inline mr-2" />
              Nyheter
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Senaste <span className="gradient-text">nytt</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Här hittar du de senaste uppdateringarna och nyheterna från JMF AB.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    <Bell className="w-4 h-4 mr-1.5" />
                    Senaste nytt
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
                    <Tag className="w-4 h-4 mr-1.5" />
                    {featuredNews.category}
                  </span>
                  <span className="inline-flex items-center text-blue-100 text-sm">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {featuredNews.date}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl mb-6">
                  {featuredNews.excerpt}
                </p>
                <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  <span>Läs mer</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <h2 className="text-3xl font-bold text-slate-900">Alla nyheter</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Alla
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3 mr-1.5" />
                      {article.category}
                    </span>
                    <span className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <button className="inline-flex items-center space-x-2 text-blue-600 font-semibold group/link">
                    <span>Läs mer</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vill du få våra nyheter direkt?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Anmäl dig till vårt nyhetsbrev för att få de senaste uppdateringarna 
              om hyresförhandlingar, nya fastigheter och annan viktig information.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Prenumerera
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Archive Link */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600">
            Letar du efter äldre nyheter?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Besök vårt nyhetsarkiv
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

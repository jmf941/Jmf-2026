"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { newsArticles } from "../../data/news";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const article = newsArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Nyheten hittades inte</h1>
          <a href="/nyheter" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Tillbaka till nyheter
          </a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="/nyheter" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Tillbaka till nyheter
            </a>
            
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {article.title}
            </h1>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10">
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </motion.div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}

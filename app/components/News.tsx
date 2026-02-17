"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag, ChevronRight } from "lucide-react";
import { newsArticles } from "../data/news";

// Get the 3 most recent news articles for the homepage
const news = newsArticles
  .slice()
  .reverse()
  .slice(0, 3)
  .map(article => ({
    date: article.date,
    title: article.title,
    excerpt: article.excerpt,
    href: "/nyheter",
    category: article.category,
  }));

export default function News() {
  return (
    <section id="nyheter" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Aktuellt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Senaste <span className="gradient-text">nyheterna</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Här hittar du de senaste uppdateringarna från JMF
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="p-8">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    <Tag className="w-3 h-3 mr-1.5" />
                    {item.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {item.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Read more link */}
                <a
                  href={item.href}
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold group/link"
                >
                  <span>Läs mer</span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.article>
          ))}
        </div>

        {/* View all news button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/nyheter"
            className="group inline-flex items-center space-x-2 btn-secondary"
          >
            <span>Se alla nyheter</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

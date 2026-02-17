"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    date: "16 februari 2026",
    title: "Årlig hyresförhandling 2026 pågår",
    excerpt: "Hyresförhandlingen för 2026 är igång. Just nu pågår den årliga hyresförhandlingen mellan JMF AB, via vår representant Fastighetsägarna, och Hyresgästföreningen.",
    href: "/nyheter/arlig-hyresforhandling-2026-pagar/",
    category: "Allmänt",
  },
  {
    date: "02 april 2025",
    title: "Årlig hyresförhandling klar!",
    excerpt: "Den årliga förhandlingen mellan Fastighetsägarna som representerat oss och Hyresgästföreningen är nu avklarad. Hyreshöjningen sker retroaktivt.",
    href: "/nyheter/arlig-hyresforhandling-klar-2/",
    category: "Allmänt",
  },
  {
    date: "18 november 2024",
    title: "Årlig hyresförhandling 2025",
    excerpt: "Det är nu dags för årlig hyreshöjning hos oss på JMF. Den årliga förhandlingen kommer att skötas av Fastighetsägarna på uppdrag av JMF.",
    href: "/nyheter/arlig-hyresforhandling-2025/",
    category: "Allmänt",
  },
];

export default function News() {
  return (
    <section id="nyheter" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nyheter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center space-x-2 text-sm text-blue-600 mb-3">
                  <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold group/link"
                >
                  <span>Läs mer</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/nyheter/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            <span>Se alla nyheter</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

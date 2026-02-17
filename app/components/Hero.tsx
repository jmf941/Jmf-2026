"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Phone, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span>Piteå & Norrbotten</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Hyr ditt boende eller lokal
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              direkt från oss
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            JMF AB äger och förvaltar bostäder och affärslokaler i Norrbotten. 
            Vi erbjuder trygg förvaltning med fokus på långsiktiga relationer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#bostad"
              className="group inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
            >
              <Building2 size={20} />
              <span>Sök bostad</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://portal.pigello.se/kustbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              <span>Mina Sidor</span>
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <a href="#felanmalan" className="group p-6 bg-white/80 backdrop-blur rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <Wrench className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Felanmälan</h3>
              <p className="text-sm text-gray-500 mt-1">Dygnet runt</p>
            </a>
            <a href="tel:091173336" className="group p-6 bg-white/80 backdrop-blur rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <Phone className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">0911 73336</h3>
              <p className="text-sm text-gray-500 mt-1">Martin Larsson</p>
            </a>
            <a href="mailto:info@jmf.se" className="group p-6 bg-white/80 backdrop-blur rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <svg className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-900">info@jmf.se</h3>
              <p className="text-sm text-gray-500 mt-1">Maila oss</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

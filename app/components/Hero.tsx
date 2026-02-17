"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Phone, Wrench, MapPin, Home } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Piteå & Norrbotten</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
          >
            Hyr ditt boende eller lokal
            <br />
            <span className="gradient-text">
              direkt från oss
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
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
              href="/ansokan"
              className="group inline-flex items-center space-x-3 btn-primary text-lg px-8 py-4"
            >
              <Building2 size={22} />
              <span>Sök bostad</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://portal.pigello.se/kustbo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 btn-secondary text-lg px-8 py-4"
            >
              <Home size={22} />
              <span>Mina Sidor</span>
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                href: "/felanmalan",
                icon: Wrench,
                title: "Felanmälan",
                subtitle: "Dygnet runt",
                color: "blue"
              },
              {
                href: "tel:0703663747",
                icon: Phone,
                title: "0911 73336",
                subtitle: "Martin Larsson",
                color: "green"
              },
              {
                href: "mailto:info@jmf.se",
                icon: () => (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "info@jmf.se",
                subtitle: "Maila oss",
                color: "purple"
              },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-6 bg-white/80 backdrop-blur rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110",
                  item.color === "blue" && "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
                  item.color === "green" && "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
                  item.color === "purple" && "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
                )}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">{item.subtitle}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper function for className merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

"use client";

import { motion } from "framer-motion";
import { Home, Wrench, ArrowRight, Shield, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Hyr hos oss",
    description: "Kontakta gärna oss och beskriv vad du är intresserad av. Vi har lägenheter i olika storlekar och gör vårt bästa för att plocka fram någonting som passar just dig.",
    cta: "Sök bostad",
    href: "/ansokan",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    benefits: ["Snabb hantering", "Inga dolda avgifter", "Personlig service"],
  },
  {
    icon: Wrench,
    title: "Felanmälan",
    description: "Vid eventuella fel så ber vi dig ta kontakt med oss omgående. Vi ser till att hjälpa dig när problem dyker upp. Ni kan nå oss dygnet runt på mail och telefon.",
    cta: "Felanmälan",
    href: "/felanmalan",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    benefits: ["Dygnet runt", "Snabb åtgärd", "Professionell hjälp"],
  },
];

export default function Features() {
  return (
    <section id="bostad" className="section-padding bg-white relative overflow-hidden">
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
            Våra Tjänster
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Vi på JMF fokuserar på att hyra ut lägenheter och lokaler
            <br />
            <span className="gradient-text">i Norrland med hög standard</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upptäck fördelarna med att vara hyresgäst hos JMF AB
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 hover:bg-white transition-all duration-500 border border-slate-100 hover:border-slate-200 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">{feature.description}</p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.benefits.map((benefit) => (
                    <span 
                      key={benefit}
                      className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      <Star className="w-3 h-3 mr-1.5" />
                      {benefit}
                    </span>
                  ))}
                </div>

                <a
                  href={feature.href}
                  className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg group/link hover:text-blue-700"
                >
                  <span>{feature.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "200+", label: "Lägenheter", icon: Home },
            { value: "99%", label: "Nöjda hyresgäster", icon: Star },
            { value: "24/7", label: "Support", icon: Clock },
            { value: "3", label: "Års erfarenhet", icon: Shield },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

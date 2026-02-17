"use client";

import { motion } from "framer-motion";
import { Home, Wrench, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Hyr hos oss",
    description: "Kontakta gärna oss och beskriv vad du är intresserad av. Vi har lägenheter i olika storlekar och gör vårt bästa för att plocka fram någonting som passar just dig.",
    cta: "Sök bostad",
    href: "#bostad",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Felanmälan",
    description: "Vid eventuella fel så ber vi dig ta kontakt med oss omgående. Vi ser till att hjälpa dig när problem dyker upp. Ni kan nå oss dygnet runt på mail och telefon.",
    cta: "Felanmälan",
    href: "https://jmf.se/felanmalan/",
    external: true,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
];

export default function Features() {
  return (
    <section id="bostad" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vi på JMF fokuserar på att hyra ut lägenheter och lokaler
            <br />
            <span className="text-blue-600">i Norrland med hög standard</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <a
                  href={feature.href}
                  target={feature.external ? "_blank" : undefined}
                  rel={feature.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold group/link"
                >
                  <span>{feature.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

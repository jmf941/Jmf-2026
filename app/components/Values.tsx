"use client";

import { motion } from "framer-motion";
import { Building, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Building,
    title: "Fastigheter",
    description: "Vi hyr idag ut hyresrätter till privatpersoner och lokaler till företagare i Norrbotten.",
  },
  {
    icon: Heart,
    title: "Långsiktighet",
    description: "Vårt mål är att du som hyresgäst ska trivas bra och stanna länge hos oss.",
  },
  {
    icon: Users,
    title: "Erfarenhet",
    description: "Vi lägger vår vikt i att du som hyresgäst ska få snabb hjälp vid minsta problem.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center p-8"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25"
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

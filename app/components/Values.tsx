"use client";

import { motion } from "framer-motion";
import { Building, Heart, Users, Leaf, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Building,
    title: "Fastigheter",
    description: "Vi hyr idag ut hyresrätter till privatpersoner och lokaler till företagare i Norrbotten.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Långsiktighet",
    description: "Vårt mål är att du som hyresgäst ska trivas bra och stanna länge hos oss.",
    color: "rose",
  },
  {
    icon: Users,
    title: "Erfarenhet",
    description: "Vi lägger vår vikt i att du som hyresgäst ska få snabb hjälp vid minsta problem.",
    color: "amber",
  },
  {
    icon: Leaf,
    title: "Hållbarhet",
    description: "Vi arbetar aktivt med miljöfrågor och strävar efter energieffektiva fastigheter.",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Vi använder moderna lösningar för att göra ditt boende enklare och mer bekvämt.",
    color: "purple",
  },
  {
    icon: Target,
    title: "Kvalitet",
    description: "Hög standard på underhåll och löpande investeringar i våra fastigheter.",
    color: "indigo",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", hover: "group-hover:bg-blue-100" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", hover: "group-hover:bg-rose-100" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", hover: "group-hover:bg-amber-100" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", hover: "group-hover:bg-emerald-100" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", hover: "group-hover:bg-purple-100" },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", hover: "group-hover:bg-indigo-100" },
};

export default function Values() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Våra Värderingar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Varför välja <span className="gradient-text">JMF?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi är mer än bara en hyresvärd. Vi skapar hem där människor trivs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const colors = colorClasses[value.color];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg",
                    colors.bg,
                    colors.icon,
                    colors.hover
                  )}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

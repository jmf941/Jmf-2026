"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0911 73336",
    subtitle: "Vardagar 10-16",
    href: "tel:091173336",
    color: "emerald",
  },
  {
    icon: Mail,
    title: "E-post",
    value: "info@jmf.se",
    subtitle: "Svar inom 24h",
    href: "mailto:info@jmf.se",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Postadress",
    value: "Kivra: 559318-6611",
    subtitle: "106 31 Stockholm",
    href: null,
    color: "purple",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-300 rounded-full text-sm font-semibold mb-4 backdrop-blur">
            Kontakta oss
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Vi finns här för <span className="text-blue-400">dig</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tveka inte att höra av dig vid frågor eller funderingar. Vi svarar så snart vi kan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const colorClasses = {
              emerald: "bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30",
              blue: "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30",
              purple: "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30",
            };

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group text-center p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300",
                  method.href ? "hover:bg-white/10 hover:border-white/20 cursor-pointer" : undefined
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110",
                  colorClasses[method.color as keyof typeof colorClasses]
                )}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-300">{method.title}</h3>
                <p className="text-2xl font-bold text-white mb-2">{method.value}</p>
                <p className="text-slate-400 text-sm">{method.subtitle}</p>
              </motion.div>
            );

            return method.href ? (
              <a key={method.title} href={method.href}>
                {content}
              </a>
            ) : (
              <div key={method.title}>{content}</div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Öppettider</h4>
                <p className="text-slate-400 text-sm">Vardagar 10:00 - 16:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Felanmälan</h4>
                <p className="text-slate-400 text-sm">Via Mina Sidor dygnet runt</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

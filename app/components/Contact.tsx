"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kontakta oss</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vi finns här för dig. Tveka inte att höra av dig vid frågor eller funderingar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="tel:0703663747"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Telefon</h3>
            <p className="text-2xl font-bold text-blue-400">070-366 37 47</p>
            <p className="text-gray-400 text-sm mt-1">Martin Larsson</p>
          </motion.a>

          <motion.a
            href="mailto:info@jmf.se"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">E-post</h3>
            <p className="text-xl font-bold text-blue-400">info@jmf.se</p>
            <p className="text-gray-400 text-sm mt-1">Svar inom 24h</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Postadress</h3>
            <p className="text-gray-300">Kivra: 559318-6611</p>
            <p className="text-gray-300">106 31 Stockholm</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

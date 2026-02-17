"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { name: "Nyheter", href: "https://jmf.se/nyheter/" },
  { name: "Kontakta oss", href: "#kontakt" },
  { name: "Information", href: "https://jmf.se/info/" },
  { name: "Piteå", href: "https://jmf.se/pitea/" },
  { name: "Om oss", href: "https://jmf.se/om-oss/" },
  { name: "Säga upp lägenhet", href: "https://jmf.se/saga-upp-lagenhet/" },
  { name: "Ansökan", href: "https://jmf.se/ansokan/" },
  { name: "Felanmälan", href: "https://jmf.se/felanmalan/" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & beskrivning */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <span className="text-xl font-bold text-white">JMF AB</span>
            </div>
            <p className="text-gray-400 max-w-md">
              JMF AB äger och förvaltar bostäder och affärslokaler i Norrbotten. 
              Trygg fastighetsförvaltning med fokus på långsiktiga relationer.
            </p>
          </div>

          {/* Länkar */}
          <div>
            <h4 className="text-white font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} JMF AB. Alla rättigheter reserverade.
          </p>
          <p className="text-sm mt-2 md:mt-0">
            Org.nr: 559318-6611
          </p>
        </div>
      </div>
    </footer>
  );
}

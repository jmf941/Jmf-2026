"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  tjanster: [
    { name: "Sök bostad", href: "/ansokan" },
    { name: "Felanmälan", href: "/felanmalan" },
    { name: "Säga upp lägenhet", href: "/saga-upp" },
    { name: "Mina Sidor", href: "https://portal.pigello.se/kustbo", external: true },
  ],
  omOss: [
    { name: "Om JMF", href: "/om-oss" },
    { name: "Piteå", href: "/pitea" },
    { name: "Information", href: "/info" },
    { name: "Nyheter", href: "/nyheter" },
  ],
  kontakt: [
    { name: "info@jmf.se", href: "mailto:info@jmf.se" },
    { name: "0911 73336", href: "tel:091173336" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & beskrivning */}
          <div className="lg:col-span-1">
            <img src="/logo.jpg" alt="JMF Fastigheter" className="h-16 w-auto object-contain mb-6" />
            <p className="text-slate-400 leading-relaxed mb-6">
              JMF AB äger och förvaltar bostäder och affärslokaler i Norrbotten. 
              Trygg fastighetsförvaltning med fokus på långsiktiga relationer.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:091173336" className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>0911 73336</span>
              </a>
              <a href="mailto:info@jmf.se" className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@jmf.se</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>106 31 Stockholm</span>
              </div>
            </div>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Tjänster</h4>
            <ul className="space-y-3">
              {footerLinks.tjanster.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    {link.external && <ExternalLink className="w-3 h-3 ml-1.5 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Om oss */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Om oss</h4>
            <ul className="space-y-3">
              {footerLinks.omOss.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Snabbkontakt */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Snabbkontakt</h4>
            <p className="text-slate-400 mb-4 text-sm">
              Har du frågor? Tveka inte att kontakta oss direkt.
            </p>
            <a
              href="mailto:info@jmf.se"
              className="btn-primary w-full text-center text-sm"
            >
              Skicka e-post
            </a>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Org.nr: 559318-6611
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} JMF AB. Alla rättigheter reserverade.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="/info" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Information för hyresgäster
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

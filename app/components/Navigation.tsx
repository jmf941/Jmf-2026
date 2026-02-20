"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Länkar som visas i hamburgermenyn (alla förutom Kontakt och Sök bostad)
const hamburgerLinks = [
  { name: "Hem", href: "/" },
  { name: "Fastigheter", href: "/fastigheter" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Piteå", href: "/pitea" },
  { name: "Information", href: "/info" },
  { name: "Nyheter", href: "/nyheter" },
  { name: "Felanmälan", href: "/felanmalan" },
  { name: "Säga upp lägenhet", href: "/saga-upp" },
  { name: "Mina Sidor", href: "https://portal.pigello.se/kustbo", external: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/logo.jpg" alt="JMF Fastigheter" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop Navigation - Endast Kontakt och Sök bostad synliga */}
          <nav className="hidden lg:flex items-center space-x-2">
            <a
              href="/ansokan"
              className="px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium transition-all duration-200"
            >
              Sök bostad
            </a>
            <a
              href="/#kontakt"
              className="px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium transition-all duration-200"
            >
              Kontakt
            </a>

            {/* Hamburgermeny-knapp (Desktop) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center space-x-2"
              aria-label="Öppna meny"
            >
              <span className="text-slate-700 font-medium">Meny</span>
              <Menu size={24} className="text-slate-700" />
            </button>
          </nav>

          {/* Mobile: Sök bostad + Kontakt + Hamburgermeny */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="/ansokan"
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium text-sm transition-all"
            >
              Sök bostad
            </a>
            <a
              href="/#kontakt"
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium text-sm transition-all"
            >
              Kontakt
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hamburgermeny Dropdown (Desktop & Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white border-t border-slate-100 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {/* Stäng-knapp */}
              <div className="flex justify-end mb-4 lg:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={24} className="text-slate-700" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {hamburgerLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors border border-transparent hover:border-blue-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    {link.external ? (
                      <span className="text-xs text-slate-400">↗</span>
                    ) : (
                      <span className="text-slate-400">→</span>
                    )}
                  </motion.a>
                ))}
              </div>
              
              {/* Footer i menyn */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center text-sm text-slate-500">
                <p>Vid akuta fel utanför kontorstid, ring Securitas: <a href="tel:0104705779" className="text-blue-600 hover:underline">010-470 57 79</a></p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PropertyMap from "./components/PropertyMap";
import PropertyList from "./components/PropertyList";
import AreaFilter from "./components/AreaFilter";
import { properties, Property, Area } from "./data";

export default function FastigheterPage() {
  const [selectedArea, setSelectedArea] = useState<Area>("Alla");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    if (selectedArea === "Alla") return properties;
    return properties.filter(p => p.area === selectedArea);
  }, [selectedArea]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Tillbaka till startsidan</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] flex items-center justify-center">
                <Building2 size={28} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Våra fastigheter
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              JMF äger och förvaltar bostäder i Piteå med omnejd. 
              Här hittar du alla våra fastigheter på kartan.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Fastigheter", value: properties.length, icon: Building2 },
              { label: "Lägenheter", value: properties.reduce((sum, p) => sum + p.apartments, 0), icon: MapPin },
              { label: "Områden", value: 6, icon: MapPin },
              { label: "År i Piteå", value: "5+", icon: Building2 },
            ].map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={20} className="text-[#1e3a5f]" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <AreaFilter
              selectedArea={selectedArea}
              onSelectArea={setSelectedArea}
              propertyCount={filteredProperties.length}
              totalCount={properties.length}
            />
          </motion.div>

          {/* Map and List */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[400px] lg:h-[600px]"
            >
              <PropertyMap
                properties={filteredProperties}
                selectedProperty={selectedProperty}
                onSelectProperty={setSelectedProperty}
              />
            </motion.div>

            {/* Property List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[400px] lg:h-[600px] overflow-y-auto pr-2 custom-scrollbar"
            >
              <PropertyList
                properties={filteredProperties}
                selectedProperty={selectedProperty}
                onSelectProperty={setSelectedProperty}
              />
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Intresserad av att bo hos oss?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Vi har kontinuerligt lägenheter som blir lediga i våra fastigheter. 
                  Registrera dig i vår bostadskö för att få information om lediga lägenheter 
                  och möjlighet att anmäla ditt intresse.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://portal.pigello.se/kustbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e3a5f] font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Till bostadskön
                    <ArrowLeft size={18} className="rotate-180" />
                  </a>
                  <a
                    href="/ansokan"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Läs mer
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Tryggt boende",
                  "Närhet till natur",
                  "Centrala lägen",
                  "God service"
                ].map((item, index) => (
                  <div key={item} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, MapPin, BedDouble, ArrowRight, Check } from "lucide-react";
import { Property } from "../data";

interface PropertyListProps {
  properties: Property[];
  selectedProperty: Property | null;
  onSelectProperty: (property: Property) => void;
}

export default function PropertyList({ 
  properties, 
  selectedProperty, 
  onSelectProperty 
}: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-100">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
          <Home size={32} className="text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Inga fastigheter hittades</h3>
        <p className="text-slate-500">Prova att välja ett annat område i filtret.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => onSelectProperty(property)}
            className={`bg-white rounded-2xl p-5 shadow-md border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              selectedProperty?.id === property.id
                ? "border-[#1e3a5f] ring-4 ring-blue-100"
                : "border-transparent hover:border-slate-200"
            }`}
          >
            <div className="flex gap-4">
              {/* Image placeholder */}
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] flex items-center justify-center flex-shrink-0">
                <Home size={32} className="text-white/70" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 truncate">{property.name}</h3>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap">
                    {property.area}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                  <MapPin size={14} />
                  <span className="truncate">{property.address}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <BedDouble size={16} className="text-[#1e3a5f]" />
                    <span className="font-medium">{property.apartments} lägenheter</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {property.apartmentTypes.slice(0, 2).map(type => (
                      <span key={type} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                        {type}
                      </span>
                    ))}
                    {property.apartmentTypes.length > 2 && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                        +{property.apartmentTypes.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expanded details */}
            <AnimatePresence>
              {selectedProperty?.id === property.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                      {property.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map(feature => (
                        <span key={feature} className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                          <Check size={12} />
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href="https://portal.pigello.se/kustbo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-[#1e3a5f] text-white font-semibold rounded-xl hover:bg-[#2c5282] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Intresseanmälan
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

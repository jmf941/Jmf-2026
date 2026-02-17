"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Filter } from "lucide-react";
import { Area, areas } from "../data";

interface AreaFilterProps {
  selectedArea: Area;
  onSelectArea: (area: Area) => void;
  propertyCount: number;
  totalCount: number;
}

export default function AreaFilter({ 
  selectedArea, 
  onSelectArea,
  propertyCount,
  totalCount
}: AreaFilterProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] flex items-center justify-center">
          <Filter size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Filtrera områden</h3>
          <p className="text-sm text-slate-500">
            Visar {propertyCount} av {totalCount} fastigheter
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <motion.button
            key={area}
            onClick={() => onSelectArea(area)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              selectedArea === area
                ? "bg-[#1e3a5f] text-white shadow-lg shadow-blue-900/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
            }`}
          >
            {area}
          </motion.button>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Building2 size={16} className="text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{totalCount}</p>
            <p className="text-xs text-slate-500">Fastigheter</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
            <MapPin size={16} className="text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">6</p>
            <p className="text-xs text-slate-500">Områden</p>
          </div>
        </div>
      </div>
    </div>
  );
}

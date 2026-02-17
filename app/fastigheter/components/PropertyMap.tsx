"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { Property } from "../data";

// Dynamic import to avoid SSR issues with Leaflet
const PropertyMapInner = dynamic(() => import("./PropertyMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] bg-slate-100 rounded-2xl animate-pulse flex items-center justify-center">
      <div className="text-slate-400 flex flex-col items-center gap-3">
        <MapPin size={48} className="opacity-50" />
        <span className="text-lg font-medium">Laddar karta...</span>
      </div>
    </div>
  ),
});

interface PropertyMapProps {
  properties: Property[];
  selectedProperty: Property | null;
  onSelectProperty: (property: Property) => void;
}

export default function PropertyMap(props: PropertyMapProps) {
  return <PropertyMapInner {...props} />;
}

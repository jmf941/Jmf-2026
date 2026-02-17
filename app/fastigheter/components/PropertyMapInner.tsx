"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon, DivIcon } from "leaflet";
import { motion } from "framer-motion";
import { Home, MapPin, ArrowRight } from "lucide-react";
import { Property } from "../data";
import "leaflet/dist/leaflet.css";

// Fix for default markers in Next.js
import L from "leaflet";

// Custom marker icon with JMF colors
const createCustomIcon = (isSelected: boolean) => {
  return new DivIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: ${isSelected ? "44px" : "36px"};
        height: ${isSelected ? "44px" : "36px"};
        background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(30, 58, 95, 0.4);
        border: 3px solid white;
        transition: all 0.3s ease;
        animation: markerPulse 2s infinite;
      ">
        <svg width="${isSelected ? "20" : "16"}" height="${isSelected ? "20" : "16"}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
    `,
    iconSize: [isSelected ? 44 : 36, isSelected ? 44 : 36],
    iconAnchor: [isSelected ? 22 : 18, isSelected ? 44 : 36],
    popupAnchor: [0, -40],
  });
};

// Map bounds component
function MapBounds({ properties }: { properties: Property[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (properties.length > 0) {
      const bounds = L.latLngBounds(properties.map(p => p.coordinates));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
  }, [map, properties]);
  
  return null;
}

interface PropertyMapProps {
  properties: Property[];
  selectedProperty: Property | null;
  onSelectProperty: (property: Property) => void;
}

export default function PropertyMap({ 
  properties, 
  selectedProperty, 
  onSelectProperty 
}: PropertyMapProps) {
  // Piteå center coordinates
  const center: [number, number] = [65.31, 21.48];

  return (
    <>
      <style jsx global>{`
        @keyframes markerPulse {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.05); }
        }
        .leaflet-popup-content-wrapper {
          border-radius: 16px !important;
          padding: 0 !important;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(30, 58, 95, 0.25) !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: 280px !important;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl shadow-xl"
        style={{ zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds properties={properties} />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.coordinates}
            icon={createCustomIcon(selectedProperty?.id === property.id)}
            eventHandlers={{
              click: () => onSelectProperty(property),
            }}
          >
            <Popup>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white"
              >
                <div className="h-24 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] flex items-center justify-center">
                  <Home size={40} className="text-white/80" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{property.address}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {property.apartments} lägenheter
                    </span>
                    {property.apartmentTypes.map(type => (
                      <span key={type} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://portal.pigello.se/kustbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-blue-600 transition-colors"
                  >
                    Intresseanmälan
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

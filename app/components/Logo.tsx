"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { container: 32, icon: 32, text: "text-lg" },
    md: { container: 40, icon: 40, text: "text-xl" },
    lg: { container: 48, icon: 48, text: "text-2xl" },
    xl: { container: 64, icon: 64, text: "text-3xl" },
  };

  const s = sizes[size];

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* SVG Logo */}
      <div 
        className="relative flex items-center justify-center"
        style={{ width: s.container, height: s.container }}
      >
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Background shape */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="50%" stopColor="#2c5282" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#152a45" />
              <stop offset="50%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          
          {/* House/Building shape */}
          <rect
            x="4"
            y="12"
            width="40"
            height="32"
            rx="4"
            fill="url(#logoGradient)"
          />
          
          {/* Roof */}
          <path
            d="M4 16L24 4L44 16"
            fill="#1e3a5f"
          />
          
          {/* Windows */}
          <rect x="10" y="22" width="8" height="8" rx="1" fill="white" fillOpacity="0.9" />
          <rect x="30" y="22" width="8" height="8" rx="1" fill="white" fillOpacity="0.9" />
          
          {/* Door */}
          <rect x="18" y="28" width="12" height="16" rx="1" fill="white" fillOpacity="0.95" />
          
          {/* JMF Letters overlay */}
          <text
            x="24"
            y="36"
            textAnchor="middle"
            fill="#1e3a5f"
            fontSize="10"
            fontWeight="bold"
            fontFamily="Inter, system-ui, sans-serif"
          >
            JMF
          </text>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${s.text} font-bold tracking-tight text-slate-900 leading-none`}>
            JMF
          </span>
          <span className="text-xs text-slate-500 font-medium tracking-wide">
            FASTIGHETER
          </span>
        </div>
      )}
    </motion.div>
  );
}

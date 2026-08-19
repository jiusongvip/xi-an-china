import React, { useState } from "react";
import { Bike, Bell, Utensils, Landmark, Lamp, Globe, Swords, Flame, Mountain, Wallet, Clock, MapPin, type LucideIcon } from "lucide-react";

interface MapAttraction {
  name: string;
  slug: string;
  x: number; // percentage position on map
  y: number;
  zone: "city-center" | "lintong" | "far-east" | "south";
  price: number;
  duration: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
}

const mapAttractions: MapAttraction[] = [
  { name: "City Wall", slug: "city-wall", x: 48, y: 44, zone: "city-center", price: 54, duration: "1.5-2h", icon: Bike, color: "#b45309", tagline: "Cycle the 14km ancient loop" },
  { name: "Bell & Drum Towers", slug: "bell-drum-tower", x: 46, y: 40, zone: "city-center", price: 50, duration: "1-1.5h", icon: Bell, color: "#b45309", tagline: "The heart of old Xi'an" },
  { name: "Muslim Quarter", slug: "muslim-quarter", x: 43, y: 38, zone: "city-center", price: 0, duration: "2-3h", icon: Utensils, color: "#b45309", tagline: "1,300-year-old food street" },
  { name: "Big Wild Goose Pagoda", slug: "big-wild-goose-pagoda", x: 50, y: 56, zone: "south", price: 40, duration: "1-2h", icon: Landmark, color: "#0e7490", tagline: "1,300-year-old Buddhist landmark" },
  { name: "Shaanxi History Museum", slug: "shaanxi-history-museum", x: 44, y: 52, zone: "south", price: 0, duration: "3-4h", icon: Landmark, color: "#0e7490", tagline: "China's best provincial museum" },
  { name: "Tang Paradise", slug: "tang-paradise", x: 54, y: 58, zone: "south", price: 120, duration: "3-4h", icon: Lamp, color: "#0e7490", tagline: "Tang Dynasty cultural theme park" },
  { name: "Han Yangling", slug: "han-yangling", x: 30, y: 34, zone: "city-center", price: 70, duration: "2-3h", icon: Globe, color: "#b45309", tagline: "Glass-floored Han Dynasty tomb" },
  { name: "Terracotta Warriors", slug: "terracotta-warriors", x: 72, y: 38, zone: "lintong", price: 120, duration: "3-4h", icon: Swords, color: "#dc2626", tagline: "8,000 life-sized soldiers" },
  { name: "Huaqing Hot Springs", slug: "huaqing-pool", x: 76, y: 34, zone: "lintong", price: 120, duration: "2-3h", icon: Flame, color: "#dc2626", tagline: "Tang Dynasty imperial baths" },
  { name: "Mount Huashan", slug: "mount-huashan", x: 93, y: 30, zone: "far-east", price: 160, duration: "Full day", icon: Mountain, color: "#7c3aed", tagline: "China's most dramatic hike" },
];

const zones = [
  { id: "city-center" as const, label: "City Center", desc: "Walkable old city", color: "bg-amber-100 border-amber-300 text-amber-800" },
  { id: "south" as const, label: "South (Yanta)", desc: "Culture & museums", color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
  { id: "lintong" as const, label: "Lintong District", desc: "40 min east", color: "bg-red-100 border-red-300 text-red-800" },
  { id: "far-east" as const, label: "Mount Huashan", desc: "120km / day trip", color: "bg-violet-100 border-violet-300 text-violet-800" },
];

export default function AttractionMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const selectedA = mapAttractions.find((a) => a.slug === selected);

  const filteredAttractions = hoveredZone
    ? mapAttractions.filter((a) => a.zone === hoveredZone)
    : mapAttractions;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-stone-100 via-stone-50 to-amber-50/30 border border-stone-200/60">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #78716c 0.5px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative p-5 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-100/80 mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta-600"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-stone-900">Where Everything Is</h3>
          <p className="mt-2 text-sm text-stone-500 max-w-md mx-auto">
            Click any marker to see details. Most attractions cluster inside or near the ancient City Wall.
          </p>
        </div>

        {/* Zone legend */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {zones.map((z) => (
            <button
              key={z.id}
              onClick={() => setHoveredZone(hoveredZone === z.id ? null : z.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all backdrop-blur-sm ${z.color} ${hoveredZone === z.id ? "ring-2 ring-offset-1 ring-stone-400 shadow-sm" : "opacity-75 hover:opacity-100"}`}
            >
              {z.label}
              <span className="text-[10px] opacity-60">· {z.desc}</span>
            </button>
          ))}
        </div>

        {/* Map area */}
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-amber-50/50 via-stone-50 to-sky-50/30 rounded-xl border border-stone-200/80 overflow-hidden select-none shadow-inner">
          {/* Background SVG with geographic context */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Subtle grid */}
            {[20, 40, 60, 80].map((v) => (
              <g key={v}>
                <line x1={v} y1="0" x2={v} y2="100" stroke="#e7e5e4" strokeWidth="0.12" />
                <line x1="0" y1={v} x2="100" y2={v} stroke="#e7e5e4" strokeWidth="0.12" />
              </g>
            ))}

            {/* Wei River (north) */}
            <path d="M 15 22 Q 35 20, 55 23 Q 75 26, 95 22" fill="none" stroke="#bfdbfe" strokeWidth="0.8" opacity="0.6" />
            <text x="55" y="20" textAnchor="middle" fontSize="1.2" fill="#93c5fd" fontStyle="italic" opacity="0.7">Wei River</text>

            {/* City Wall outline (rounded rectangle with gates) */}
            <rect x="38" y="33" width="18" height="16" rx="1.5" fill="#fef3c7" fillOpacity="0.15" stroke="#d6d3d1" strokeWidth="0.5" strokeDasharray="1,0.5" />
            {/* Gate markers */}
            <rect x="46" y="32.5" width="2" height="1" rx="0.3" fill="#d6d3d1" />
            <text x="47" y="32" textAnchor="middle" fontSize="1" fill="#a8a29e">N Gate</text>
            <rect x="46" y="48.5" width="2" height="1" rx="0.3" fill="#d6d3d1" />
            <text x="47" y="51" textAnchor="middle" fontSize="1" fill="#a8a29e">S Gate</text>
            <text x="47" y="42" textAnchor="middle" fontSize="2" fill="#a8a29e" fontWeight="500" opacity="0.6">City Wall</text>

            {/* High-speed rail line from west */}
            <line x1="0" y1="45" x2="38" y2="42" stroke="#c4b5fd" strokeWidth="0.3" strokeDasharray="0.6,0.3" />
            <text x="18" y="43" textAnchor="middle" fontSize="1" fill="#a78bfa" opacity="0.6">← HSR to Beijing</text>

            {/* Road to Lintong */}
            <line x1="56" y1="41" x2="72" y2="38" stroke="#e7e5e4" strokeWidth="0.35" strokeDasharray="0.8,0.4" />
            <text x="64" y="37" textAnchor="middle" fontSize="1.3" fill="#d6d3d1">→ Lintong</text>

            {/* Road to Huashan */}
            <line x1="76" y1="36" x2="93" y2="30" stroke="#e7e5e4" strokeWidth="0.35" strokeDasharray="0.8,0.4" />
            <text x="85" y="29" textAnchor="middle" fontSize="1.3" fill="#d6d3d1">→ Huashan</text>

            {/* Metro line hint (south) */}
            <line x1="47" y1="49" x2="50" y2="56" stroke="#67e8f9" strokeWidth="0.25" strokeDasharray="0.4,0.2" />
            <text x="52" y="53" fontSize="0.9" fill="#67e8f9" opacity="0.5">Metro</text>

            {/* Compass */}
            <g transform="translate(8, 8)">
              <circle cx="0" cy="0" r="3.5" fill="white" stroke="#d6d3d1" strokeWidth="0.2" />
              <text x="0" y="-0.8" textAnchor="middle" fontSize="1.6" fill="#78716c" fontWeight="600">N</text>
              <line x1="0" y1="-0.3" x2="0" y2="1.8" stroke="#a8a29e" strokeWidth="0.3" />
              <polygon points="0,-2.5 -0.6,-1.5 0.6,-1.5" fill="#78716c" />
            </g>

            {/* Scale bar */}
            <line x1="5" y1="95" x2="15" y2="95" stroke="#a8a29e" strokeWidth="0.3" />
            <line x1="5" y1="94" x2="5" y2="96" stroke="#a8a29e" strokeWidth="0.2" />
            <line x1="15" y1="94" x2="15" y2="96" stroke="#a8a29e" strokeWidth="0.2" />
            <text x="10" y="98" textAnchor="middle" fontSize="1.3" fill="#a8a29e">~20 km</text>
          </svg>

          {/* Attraction markers */}
          {filteredAttractions.map((a) => {
            const isSelected = selected === a.slug;
            const isCityCenter = a.zone === "city-center";
            return (
              <button
                key={a.slug}
                onClick={() => setSelected(isSelected ? null : a.slug)}
                className={`absolute flex flex-col items-center transition-all duration-200 group`}
                style={{ left: `${a.x}%`, top: `${a.y}%`, transform: "translate(-50%, -100%)" }}
              >
                {/* Marker pin */}
                <div
                  className={`relative flex items-center justify-center rounded-full border-2 shadow-md transition-all duration-200
                    ${isSelected ? "w-9 h-9 md:w-10 md:h-10 z-30 scale-110" : "w-7 h-7 md:w-8 md:h-8 z-10 group-hover:scale-110 group-hover:z-20"}`}
                  style={{ backgroundColor: a.color + "18", borderColor: a.color }}
                >
                  <a.icon className={isSelected ? "h-5 w-5 md:h-6 md:w-6" : "h-4 w-4 md:h-5 md:w-5"} strokeWidth={1.6} style={{ color: a.color }} />
                </div>
                {/* Pin point */}
                <div
                  className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent -mt-[1px]"
                  style={{ borderTopColor: a.color }}
                />
                {/* Label */}
                <span
                  className={`mt-0.5 text-[9px] md:text-[10px] font-medium whitespace-nowrap px-1 rounded transition-colors
                    ${isSelected ? "text-stone-900 font-bold" : "text-stone-500 group-hover:text-stone-700"}`}
                  style={isSelected ? { backgroundColor: a.color + "15" } : {}}
                >
                  {a.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected attraction detail */}
        {selectedA ? (
          <div className="mt-5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/60 p-4 md:p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <selectedA.icon className="h-6 w-6 shrink-0" strokeWidth={1.6} style={{ color: selectedA.color }} />
                  <h4 className="text-lg font-bold text-stone-900">{selectedA.name}</h4>
                </div>
                <p className="text-sm text-stone-500 mb-3">{selectedA.tagline}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                    <Wallet className="h-3.5 w-3.5" strokeWidth={1.6} /> {selectedA.price === 0 ? "Free" : `$${selectedA.price}`}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.6} /> {selectedA.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} /> {zones.find((z) => z.id === selectedA.zone)?.label}
                  </span>
                </div>
              </div>
              <a
                href={`/attractions/${selectedA.slug}/`}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-terracotta-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-terracotta-600 shadow-sm shadow-terracotta-500/20 no-underline"
              >
                Full Guide
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3l5 5-5 5" /></svg>
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-dashed border-stone-200/80 bg-white/40 p-4 text-center">
            <p className="text-sm text-stone-400">Click a marker on the map to see attraction details</p>
          </div>
        )}

        {/* Quick distance reference */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { from: "City Wall", to: "Terracotta Warriors", time: "40 min by bus 5" },
            { from: "City Wall", to: "Big Wild Goose Pagoda", time: "15 min by metro" },
            { from: "Terracotta Warriors", to: "Huaqing Pool", time: "10 min by taxi" },
            { from: "Xi'an North Station", to: "City Wall", time: "25 min by metro" },
          ].map((r) => (
            <div key={r.from + r.to} className="rounded-lg bg-white/60 backdrop-blur-sm border border-stone-200/50 p-2.5 text-center">
              <p className="text-[10px] text-stone-400 leading-tight">{r.from} → {r.to}</p>
              <p className="text-xs font-semibold text-stone-700 mt-0.5">{r.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

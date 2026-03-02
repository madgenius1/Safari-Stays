"use client"

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function FilterBar({ activeVibe, setActiveVibe }: { activeVibe: string; setActiveVibe: (vibe: string) => void }) {
  const vibes = [
    { id: "all", label: "All Stays" },
    { id: "urban", label: "Urban Chic" },
    { id: "wild", label: "Wild Retreats" },
    { id: "coastal", label: "Coastal Bliss" },
    { id: "mountain", label: "Mountain Escapes" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by name or area..."
          className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8E3DB] rounded-2xl focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
        />
      </div>

      {/* Vibe Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
        {vibes.map((vibe) => (
          <button
            key={vibe.id}
            onClick={() => setActiveVibe(vibe.id)}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeVibe === vibe.id
                ? "bg-[#2D4032] text-white shadow-lg shadow-[#2D4032]/20"
                : "bg-white text-[#1A1A1A] border border-[#E8E3DB] hover:border-[#C5A059]"
            }`}
          >
            {vibe.label}
          </button>
        ))}
        <button className="flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-bold bg-white text-[#1A1A1A] border border-[#E8E3DB] hover:border-[#C5A059]">
          <SlidersHorizontal size={14} />
          <span>Filters</span>
        </button>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

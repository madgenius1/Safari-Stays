"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  showFilters?: boolean;
}

export function SearchBar({ onSearch, placeholder = "Search...", showFilters = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#E8E3DB] rounded-2xl focus:outline-none focus:border-[#C5A059] transition-colors text-[#1A1A1A]"
        />
        {showFilters && (
          <button
            type="button"
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-[#FDFBF7] rounded-lg transition-colors"
          >
            <SlidersHorizontal size={20} className="text-[#C5A059]" />
          </button>
        )}
      </form>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilterPanel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-white border-2 border-[#E8E3DB] rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button
                onClick={() => setShowFilterPanel(false)}
                className="p-2 hover:bg-[#FDFBF7] rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            {/* Filter content would go here */}
            <p className="text-sm text-[#1A1A1A]/50">Advanced filters coming soon...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface PropertySearchProps {
  onSearch: (filters: {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }) => void;
}

export function PropertySearch({ onSearch }: PropertySearchProps) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border-2 border-[#E8E3DB] p-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Location */}
        <div className="relative">
          <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where to?"
            className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:bg-[#FDFBF7] transition-colors"
          />
        </div>

        {/* Check In */}
        <div className="relative">
          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:bg-[#FDFBF7] transition-colors"
          />
        </div>

        {/* Check Out */}
        <div className="relative">
          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:bg-[#FDFBF7] transition-colors"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center">
          <div className="relative flex-1">
            <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              min="1"
              max="20"
              className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:bg-[#FDFBF7] transition-colors"
              placeholder="Guests"
            />
          </div>
          <button
            type="submit"
            className="ml-2 bg-[#C5A059] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#b08e4d] transition-colors whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
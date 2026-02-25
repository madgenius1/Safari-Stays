"use client";

import { useState } from "react";
import { properties } from "../../lib/mockData";
import PropertyCard from "../../components/stays/PropertyCard";
import FilterBar from "../../components/stays/FilterBar";
import { motion } from "motion/react";

export default function StaysListingPage() {
  const [activeVibe, setActiveVibe] = useState("all");

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-4">
            Curated Stays
          </h1>
          <p className="text-xl text-[#1A1A1A]/60 max-w-2xl leading-relaxed font-instrument-serif italic">
            From luxury lofts in the city to eco-retreats in the heart of the
            savannah. Every home is verified for quality and connection.
          </p>
        </div>

        {/* Filters */}
        <FilterBar activeVibe={activeVibe} setActiveVibe={setActiveVibe} />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More Placeholder */}
        <div className="mt-20 text-center">
          <button className="bg-white border border-[#2D4032] text-[#2D4032] px-10 py-4 rounded-full font-bold hover:bg-[#2D4032] hover:text-white transition-all shadow-xl shadow-black/5">
            Load More Verified Stays
          </button>
        </div>
      </div>
    </div>
  );
}

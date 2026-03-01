"use client";

//destinations/page.tsx

import { useState } from "react";
import { destinations } from "../../lib/mockData";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Plane } from "lucide-react";
import Link from "next/link";

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");

  const filteredDestinations =
    activeFilter === "featured"
      ? destinations.filter((d) => d.featured)
      : destinations;

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-360 mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
              Discover Kenya
            </h1>
            <p className="text-xl text-[#1A1A1A]/80 leading-relaxed font-instrument-serif mb-8">
              From pristine beaches to endless savannahs, historic coastal towns
              to modern cities. Each destination offers its own unique magic.
            </p>

            {/* Filter Toggle */}
            <div className="inline-flex bg-white p-1.5 rounded-full shadow-lg border border-[#E8E3DB]">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-[#2D4032] text-white"
                    : "text-[#1A1A1A] hover:bg-[#FDFBF7]"
                }`}
              >
                All Destinations ({destinations.length})
              </button>
              <button
                onClick={() => setActiveFilter("featured")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === "featured"
                    ? "bg-[#2D4032] text-white"
                    : "text-[#1A1A1A] hover:bg-[#FDFBF7]"
                }`}
              >
                Featured ({destinations.filter((d) => d.featured).length})
              </button>
            </div>
          </motion.div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.a
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8E3DB]"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.coverImage.url}
                  alt={destination.coverImage.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                {/* Featured Badge */}
                {destination.featured && (
                  <div className="absolute top-4 right-4 bg-[#C5A059] text-white px-4 py-2 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>
                )}

                {/* Property Count */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <MapPin size={16} className="text-[#2D4032]" />
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {destination.propertyCount} Properties
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-instrument-serif text-[#1A1A1A] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {destination.name}
                </h2>
                <p className="text-[#1A1A1A]/60 italic font-instrument-serif mb-4">
                  {destination.tagline}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-xs text-[#1A1A1A]/50 mb-4">
                  <div className="flex items-center space-x-1">
                    <Plane size={14} />
                    <span>{destination.gettingThere.airport}</span>
                  </div>
                </div>

                {/* Best For Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.bestFor.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#FDFBF7] text-[#2D4032] text-xs rounded-full border border-[#E8E3DB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-[#C5A059] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span>Explore Destination</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center bg-[#2D4032] text-white rounded-3xl p-12"
        >
          <h3 className="text-4xl text-white font-instrument-serif mb-4">
            Need Help Planning?
          </h3>
          <p className="text-lg mb-8 text-white/80 mx-auto">
            Our local experts can help you choose the perfect destinations and
            create a custom itinerary for your Kenya adventure.
          </p>
          <Link
            href="https://wa.me/254700000000?text=Hi! I need help planning my Kenya itinerary."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
          >
            <span>Chat with a Travel Expert</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
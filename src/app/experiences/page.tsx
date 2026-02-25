"use client";

import { useState } from "react";
import { experiences } from "../../lib/mockData";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Star,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Experiences", icon: "🌍" },
  { id: "safari", label: "Safari & Wildlife", icon: "🦁" },
  { id: "cultural", label: "Cultural Tours", icon: "🏛️" },
  { id: "adventure", label: "Adventure", icon: "🏔️" },
  { id: "food-wine", label: "Food & Wine", icon: "🍷" },
  { id: "photography", label: "Photography", icon: "📸" },
];

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExperiences =
    activeCategory === "all"
      ? experiences
      : experiences.filter((e) => e.category === activeCategory);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-360 mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
              Unforgettable Experiences
            </h1>
            <p className="text-xl text-[#1A1A1A]/70 leading-relaxed font-instrument-serif italic mb-12">
              From thrilling safaris to cultural immersions, expert-led
              adventures to culinary journeys. Create memories that last a
              lifetime.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#2D4032] text-white shadow-lg"
                      : "bg-white text-[#1A1A1A] border border-[#E8E3DB] hover:border-[#2D4032]"
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience, index) => (
            <motion.a
              key={experience.id}
              href={`/experiences/${experience.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8E3DB]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={experience.coverImage.url}
                  alt={experience.coverImage.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Featured Badge */}
                {experience.featured && (
                  <div className="absolute top-4 right-4 bg-[#C5A059] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    ⭐ Popular
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#2D4032] capitalize">
                    {experience.category.replace("-", " & ")}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-[#2D4032]">
                      From Ksh {experience.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-instrument-serif text-[#1A1A1A] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {experience.title}
                </h2>
                <p className="text-[#1A1A1A]/60 text-sm mb-4 line-clamp-2">
                  {experience.tagline}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs text-[#1A1A1A]/50 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>
                      {experience.groupSize.min}-{experience.groupSize.max}{" "}
                      guests
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Rating */}
                {experience.averageRating && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-bold text-sm">
                        {experience.averageRating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-xs text-[#1A1A1A]/50">
                      Excellent
                    </span>
                  </div>
                )}

                {/* Difficulty */}
                {experience.difficulty && (
                  <div className="mb-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full capitalize ${
                        experience.difficulty === "easy"
                          ? "bg-green-100 text-green-700"
                          : experience.difficulty === "moderate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {experience.difficulty}
                    </span>
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-[#C5A059] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#1A1A1A]/50 font-instrument-serif italic">
              No experiences found in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center bg-[#2D4032] text-white rounded-3xl p-12"
        >
          <h3 className="text-4xl font-instrument-serif mb-4">
            Custom Experience Planning
          </h3>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Want to combine multiple experiences or create a custom itinerary?
            Our team can design the perfect Kenya adventure tailored to your
            interests.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hi! I'd like to plan a custom experience in Kenya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
          >
            <span>Plan My Custom Adventure</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
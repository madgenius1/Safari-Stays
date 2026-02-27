"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { activities, activityCategories, activityRegions  } from "@/src/lib/mockData.activities";
import { MapPin, Clock, Users, Star, TrendingUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/src/components/shared/SEO";

// export const metadata = generateMetadata({
//   title: "Activities in Diani, Watamu & Malindi",
//   description: "Discover exciting water sports, beach photoshoots, and adventure activities across Kenya's stunning coastline. From jet skiing to clear kayak photography.",
//   keywords: [
//     "Kenya coast activities",
//     "Diani water sports",
//     "Watamu snorkeling",
//     "Malindi activities",
//     "beach photoshoot Kenya",
//     "clear kayak Diani",
//     "jet ski Kenya",
//     "skydiving Diani",
//     "Kenya adventure sports",
//   ],
// });

export default function ActivitiesPage() {
  const [activeRegion, setActiveRegion] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredActivities = activities.filter((activity) => {
    const matchesRegion = activeRegion === "all" || activity.region === activeRegion;
    const matchesCategory = activeCategory === "all" || activity.category === activeCategory;
    return matchesRegion && matchesCategory;
  });

  const featuredActivities = activities.filter((a) => a.featured).slice(0, 3);

  return (
    <div className="bg-safari-bone min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000"
            alt="Kenya Coast Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-safari-bone" />
        </div>

        <div className="relative z-10 max-w-360 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-instrument-serif text-white mb-6">
              Coastal Kenya Activities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-instrument-serif italic mb-8">
              From adrenaline-pumping water sports to stunning beach photoshoots
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-safari-gold rounded-full" />
                <span>15+ Activities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-safari-gold rounded-full" />
                <span>3 Coastal Regions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-safari-gold rounded-full" />
                <span>Instant WhatsApp Booking</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>

      <div className="max-w-360 mx-auto px-6 py-16">
        {/* Featured Activities Banner */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-instrument-serif">Most Popular</h2>
            <TrendingUp size={32} className="text-safari-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredActivities.map((activity) => (
              <Link key={activity.id} href={`/activities/${activity.slug}`}>
                <div className="group relative h-80 rounded-3xl overflow-hidden">
                  <img
                    src={activity.coverImage.url}
                    alt={activity.coverImage.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block bg-safari-gold text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 w-fit">
                      POPULAR
                    </span>
                    <h3 className="text-2xl font-instrument-serif text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">{activity.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">
                        KES {activity.price.toLocaleString()}
                      </span>
                      <span className="text-safari-gold font-semibold">Book Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Region Filter */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-safari-charcoal/60 tracking-wider">
              FILTER BY LOCATION
            </h3>
            <div className="flex flex-wrap gap-3">
              {activityRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    activeRegion === region.id
                      ? "bg-safari-green text-white shadow-lg scale-105"
                      : "bg-white text-safari-charcoal border-2 border-safari-border hover:border-safari-green hover:scale-105"
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-safari-charcoal/60 tracking-wider">
              FILTER BY TYPE
            </h3>
            <div className="flex flex-wrap gap-3">
              {activityCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category.id
                      ? "bg-safari-gold text-white shadow-lg scale-105"
                      : "bg-white text-safari-charcoal border-2 border-safari-border hover:border-safari-gold hover:scale-105"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-safari-charcoal/70 text-lg">
            <span className="font-bold text-safari-green text-2xl">
              {filteredActivities.length}
            </span>{" "}
            {filteredActivities.length === 1 ? "activity" : "activities"} available
          </p>
          {(activeRegion !== "all" || activeCategory !== "all") && (
            <button
              onClick={() => {
                setActiveRegion("all");
                setActiveCategory("all");
              }}
              className="text-safari-gold hover:text-safari-green font-semibold text-sm"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/activities/${activity.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-safari-border hover:shadow-safari-lg transition-all duration-300 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={activity.coverImage.url}
                      alt={activity.coverImage.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      {activity.featured && (
                        <span className="bg-safari-gold text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <TrendingUp size={12} />
                          POPULAR
                        </span>
                      )}
                      {activity.originalPrice && (
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full ml-auto">
                          SAVE KES {(activity.originalPrice - activity.price).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-safari-gold" />
                      <span className="text-sm font-bold text-safari-green uppercase tracking-wide">
                        {activity.location}
                      </span>
                    </div>

                    <h3 className="font-instrument-serif text-2xl mb-2 text-safari-charcoal group-hover:text-safari-green transition-colors">
                      {activity.title}
                    </h3>

                    <p className="text-safari-charcoal/60 text-sm mb-4 line-clamp-2 flex-1">
                      {activity.subtitle}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-safari-border text-sm text-safari-charcoal/60">
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={16} />
                        <span>
                          {activity.groupSize.min === activity.groupSize.max
                            ? activity.groupSize.max
                            : `${activity.groupSize.min}-${activity.groupSize.max}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star size={16} className="fill-safari-gold text-safari-gold" />
                        <span className="font-semibold">{activity.reviews.averageRating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-end justify-between">
                      <div>
                        {activity.originalPrice && (
                          <span className="text-sm text-safari-charcoal/40 line-through block mb-1">
                            KES {activity.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-safari-green">
                          KES {activity.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-safari-gold uppercase group-hover:translate-x-1 transition-transform">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-safari-border">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-3xl font-instrument-serif text-safari-charcoal mb-4">
              No activities found
            </h3>
            <p className="text-safari-charcoal/60 mb-8 max-w-md mx-auto">
              Try adjusting your filters to discover more amazing experiences
            </p>
            <button
              onClick={() => {
                setActiveRegion("all");
                setActiveCategory("all");
              }}
              className="bg-safari-green text-white px-8 py-4 rounded-full font-bold hover:bg-safari-green/90 transition-colors"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-linear-to-br from-safari-green to-safari-green/80 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-safari-gold rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-instrument-serif mb-6">
              Need a Custom Experience?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We can arrange personalized activities tailored to your interests and group size.
              Chat with us on WhatsApp for expert recommendations.
            </p>
            <a
              href="https://wa.me/254759711145?text=Hi! I'm interested in booking activities on the Kenya coast."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-safari-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-safari-gold/90 hover:scale-105 transition-all shadow-lg"
            >
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
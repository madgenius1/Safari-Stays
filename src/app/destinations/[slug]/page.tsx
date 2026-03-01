"use client";

import { use } from "react";
import Link from "next/link";
import { destinations, getPropertiesByDestination } from "../../../lib/mockData";
import {
  MapPin,
  ArrowLeft,
  Plane,
  Calendar,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import PropertyCard from "../../../components/stays/PropertyCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center">
          <h1 className="text-4xl font-instrument-serif mb-4">
            Destination Not Found
          </h1>
          <Link href="/destinations" className="text-[#C5A059] font-bold">
            Back to All Destinations
          </Link>
        </div>
      </div>
    );
  }

  const properties = getPropertiesByDestination(destination.name);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-16">
        <img
          src={destination.coverImage.url}
          alt={destination.coverImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-360 mx-auto">
            <a
              href="/destinations"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Destinations
            </a>
            <h1 className="text-6xl md:text-7xl font-instrument-serif mb-4">
              {destination.name}
            </h1>
            <p className="text-2xl italic font-instrument-serif text-white/90 mb-6">
              {destination.tagline}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-[#C5A059]" />
                <span>{destination.propertyCount} Properties</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane size={20} className="text-[#C5A059]" />
                <span>{destination.gettingThere.distance}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Thermometer size={20} className="text-[#C5A059]" />
                <span>{destination.climate.temperature}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-360 mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Description & Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-4xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">
                Overview
              </h2>
              <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-8">
                {destination.description}
              </p>

              {/* Best For Tags */}
              <div className="flex flex-wrap gap-3">
                {destination.bestFor.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-[#2D4032] rounded-full border border-[#E8E3DB] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-4xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">
                Why Visit {destination.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-[#E8E3DB]"
                  >
                    <h3 className="text-xl font-bold text-[#2D4032] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-[#1A1A1A]/70">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Guide */}
            <section>
              <h2 className="text-4xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">
                Local Guide
              </h2>

              {/* Restaurants */}
              {destination.localGuide.restaurants.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-instrument-serif mb-4 text-[#2D4032]">
                    🍽️ Where to Eat
                  </h3>
                  <div className="space-y-4">
                    {destination.localGuide.restaurants.map((place, i) => (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-xl border border-[#E8E3DB]"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">{place.name}</h4>
                          {place.priceRange && (
                            <span className="text-sm text-[#C5A059] font-semibold">
                              {place.priceRange}
                            </span>
                          )}
                        </div>
                        <p className="text-[#1A1A1A]/70 text-sm">
                          {place.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Activities */}
              {destination.localGuide.activities.length > 0 && (
                <div>
                  <h3 className="text-2xl font-instrument-serif mb-4 text-[#2D4032]">
                    🎯 What to Do
                  </h3>
                  <div className="space-y-4">
                    {destination.localGuide.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-xl border border-[#E8E3DB]"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">{activity.name}</h4>
                          {activity.priceRange && (
                            <span className="text-sm text-[#C5A059] font-semibold">
                              {activity.priceRange}
                            </span>
                          )}
                        </div>
                        <p className="text-[#1A1A1A]/70 text-sm">
                          {activity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Getting There */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB]">
                <h3 className="text-2xl font-instrument-serif mb-4 flex items-center">
                  <Plane size={24} className="mr-2 text-[#C5A059]" />
                  Getting There
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold mb-1">Airport</p>
                    <p className="text-[#1A1A1A]/70">
                      {destination.gettingThere.airport}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Distance</p>
                    <p className="text-[#1A1A1A]/70">
                      {destination.gettingThere.distance}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Transport Options</p>
                    <ul className="text-[#1A1A1A]/70 space-y-1">
                      {destination.gettingThere.transportOptions.map(
                        (option, i) => (
                          <li key={i}>• {option}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Climate */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB]">
                <h3 className="text-2xl font-instrument-serif mb-4 flex items-center">
                  <Calendar size={24} className="mr-2 text-[#C5A059]" />
                  Best Time to Visit
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold mb-1">Peak Season</p>
                    <p className="text-[#1A1A1A]/70">
                      {destination.climate.peakSeason}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Off-Peak</p>
                    <p className="text-[#1A1A1A]/70">
                      {destination.climate.offPeakSeason}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Best Months</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {destination.climate.bestMonths.map((month, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#FDFBF7] text-[#2D4032] text-xs rounded-full border border-[#E8E3DB]"
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/254700000000?text=Hi! I want to learn more about ${destination.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#C5A059] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b08e4d] transition-colors"
              >
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>

        {/* Available Properties */}
        {properties.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl font-instrument-serif mb-8 border-b border-[#E8E3DB] pb-4">
              Available Properties in {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-[#2D4032] text-white rounded-3xl p-12">
          <h3 className="text-4xl font-instrument-serif text-white mb-4">
            Ready to Explore {destination.name}?
          </h3>
          <p className="text-lg mb-8 text-white/80  mx-auto">
            Let our local experts help you find the perfect accommodation and
            create unforgettable experiences.
          </p>
          <a
            href={`https://wa.me/254700000000?text=Hi! I'm interested in visiting ${destination.name}. Can you help me plan?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
          >
            <span>Get Personalized Recommendations</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
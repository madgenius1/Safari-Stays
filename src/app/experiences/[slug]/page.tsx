"use client";

import { experiences } from "../../../lib/mockData";
import { use } from "react";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  Star,
  Check,
  X,
  Calendar,
  Info,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ExperienceDetailPage({ params }: PageProps) {
   const resolvedParams = use(params);
    const slug = resolvedParams?.slug;
  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center">
          <h1 className="text-4xl font-instrument-serif mb-4">Experience Not Found</h1>
          <a href="/experiences" className="text-[#C5A059] font-bold">Back to Experiences</a>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/254700000000?text=${encodeURIComponent(
    `Hi! I'm interested in booking "${experience.title}". Can you help me with availability?`
  )}`;

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-16">
        <img
          src={experience.coverImage.url}
          alt={experience.coverImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-360 mx-auto">
            <a
              href="/experiences"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Experiences
            </a>

            <div className="mb-4">
              <span className="bg-[#C5A059] px-4 py-2 rounded-full text-sm font-bold capitalize">
                {experience.category.replace("-", " & ")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-instrument-serif text-white/90 mb-4">{experience.title}</h1>
            <p className="text-xl  font-instrument-serif text-white/70 mb-6">{experience.tagline}</p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-[#C5A059]" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-[#C5A059]" />
                <span>{experience.groupSize.min}-{experience.groupSize.max} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-[#C5A059]" />
                <span>{experience.location}</span>
              </div>
              {experience.averageRating && (
                <div className="flex items-center space-x-2">
                  <Star size={20} className="fill-[#C5A059] text-[#C5A059]" />
                  <span>{experience.averageRating.toFixed(1)} Excellent</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-360 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">Overview</h2>
              <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">{experience.description}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-[#E8E3DB]">
                    <Check size={20} className="text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-[#1A1A1A]/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-3xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-[#2D4032]">✓ Included</h3>
                  <ul className="space-y-2">
                    {experience.included.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check size={18} className="text-green-600 shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A]/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-[#1A1A1A]/50">✗ Not Included</h3>
                  <ul className="space-y-2">
                    {experience.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <X size={18} className="text-[#1A1A1A]/30 shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A]/60 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Meeting Point */}
            <section>
              <h2 className="text-3xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">Meeting Point</h2>
              <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB]">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-[#C5A059] shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Location</p>
                    <p className="text-[#1A1A1A]/70 mb-3">{experience.meetingPoint}</p>
                    <p className="text-xs text-[#1A1A1A]/50">Exact coordinates shared upon booking</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section>
              <h2 className="text-3xl font-instrument-serif mb-6 border-b border-[#E8E3DB] pb-4">Important Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Info size={24} className="text-blue-600 shrink-0" />
                  <div className="space-y-2 text-sm text-[#1A1A1A]/80">
                    <p><strong>Group Size:</strong> {experience.groupSize.min} to {experience.groupSize.max} participants</p>
                    <p><strong>Duration:</strong> {experience.duration}</p>
                    {experience.difficulty && (
                      <p><strong>Difficulty:</strong> <span className="capitalize">{experience.difficulty}</span></p>
                    )}
                    {experience.availability.seasonalAvailability && (
                      <p><strong>Best Season:</strong> {experience.availability.seasonalAvailability}</p>
                    )}
                    <p className="mt-4 pt-4 border-t border-blue-200">
                      <strong>Cancellation Policy:</strong> Free cancellation up to 48 hours before start. Full refund applies.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-[#E8E3DB] shadow-xl">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#1A1A1A]/60 mb-1">From</p>
                  <p className="text-4xl font-bold text-[#2D4032]">Ksh {experience.price.toLocaleString()}</p>
                  <p className="text-sm text-[#1A1A1A]/60">per person</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center">
                    <Calendar size={18} className="mr-2 text-[#C5A059]" />
                    Availability
                  </h3>
                  <div className="text-sm text-[#1A1A1A]/70 space-y-1">
                    {experience.availability.daysAvailable.length === 7 ? (
                      <p>Available every day</p>
                    ) : (
                      <p>Available {experience.availability.daysAvailable.length} days per week</p>
                    )}
                    {experience.availability.startTimes.length > 0 && (
                      <p>Start times: {experience.availability.startTimes.join(", ")}</p>
                    )}
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#C5A059] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b08e4d] transition-colors mb-4"
                >
                  Book via WhatsApp
                </a>

                <p className="text-xs text-center text-[#1A1A1A]/50">Instant confirmation • Best price guarantee</p>
              </div>

              <div className="bg-[#2D4032] text-white p-6 rounded-2xl">
                <h3 className="font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>Expert local guides</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>Small group sizes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>Free cancellation (48h)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>Best price guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-[#FDFBF7] border-2 border-[#E8E3DB] rounded-3xl p-12">
          <h3 className="text-3xl font-instrument-serif mb-4">Ready for an Unforgettable Experience?</h3>
          <p className="text-lg mb-8 text-[#1A1A1A]/70 mx-auto">
            Book now to secure your spot. We'll confirm availability via WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
          >
            <span>Book This Experience</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
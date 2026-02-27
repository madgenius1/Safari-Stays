"use client";

import { use } from "react";
import { activities } from "@/src/lib/mockData.activities";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  CheckCircle,
  XCircle,
  Info,
  Package,
  AlertCircle,
  Share2,
  Heart,
} from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  const relatedActivities = activities
    .filter(
      (a) =>
        a.id !== activity.id &&
        (a.region === activity.region || a.category === activity.category)
    )
    .slice(0, 3);

  const whatsappMessage = `Hi! I'm interested in booking: ${activity.title} in ${activity.location}. Can you provide more details?`;
  const whatsappLink = `https://wa.me/254759711145?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-safari-bone min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src={activity.coverImage.url}
          alt={activity.coverImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Breadcrumbs */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/activities" className="hover:text-white transition-colors">
                Activities
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">{activity.title}</span>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-4">
                {activity.featured && (
                  <span className="bg-safari-gold text-white text-sm font-bold px-4 py-2 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <span className="bg-safari-green text-white text-sm font-bold px-4 py-2 rounded-full capitalize">
                  {activity.category.replace("-", " ")}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full">
                  {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-instrument-serif text-white mb-4">
                {activity.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-instrument-serif italic mb-6">
                {activity.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-safari-gold" />
                  <span className="font-semibold">{activity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-safari-gold text-safari-gold" />
                  <span className="font-semibold">
                    {activity.reviews.averageRating} ({activity.reviews.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-32 right-6 flex gap-3">
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Share2 size={20} className="text-safari-charcoal" />
          </button>
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Heart size={20} className="text-safari-charcoal" />
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-safari-border text-center hover:shadow-lg transition-shadow">
                <Clock size={28} className="mx-auto mb-3 text-safari-gold" />
                <p className="text-sm text-safari-charcoal/60 mb-1">Duration</p>
                <p className="font-bold text-safari-charcoal text-lg">{activity.duration}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-safari-border text-center hover:shadow-lg transition-shadow">
                <Users size={28} className="mx-auto mb-3 text-safari-gold" />
                <p className="text-sm text-safari-charcoal/60 mb-1">Group Size</p>
                <p className="font-bold text-safari-charcoal text-lg">
                  {activity.groupSize.min === activity.groupSize.max
                    ? activity.groupSize.max
                    : `${activity.groupSize.min}-${activity.groupSize.max}`}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-safari-border text-center hover:shadow-lg transition-shadow">
                <Star size={28} className="mx-auto mb-3 text-safari-gold fill-safari-gold" />
                <p className="text-sm text-safari-charcoal/60 mb-1">Rating</p>
                <p className="font-bold text-safari-charcoal text-lg">
                  {activity.reviews.averageRating}/5
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-safari-border text-center hover:shadow-lg transition-shadow">
                <MapPin size={28} className="mx-auto mb-3 text-safari-gold" />
                <p className="text-sm text-safari-charcoal/60 mb-1">Location</p>
                <p className="font-bold text-safari-charcoal text-sm">{activity.location}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-3xl border border-safari-border">
              <h2 className="text-3xl font-instrument-serif mb-6 text-safari-charcoal">
                Experience Overview
              </h2>
              <p className="text-lg text-safari-charcoal/80 leading-relaxed">
                {activity.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-safari-green/5 to-safari-gold/5 p-8 rounded-3xl border border-safari-border">
              <h2 className="text-3xl font-instrument-serif mb-6 text-safari-charcoal">
                Experience Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activity.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl"
                  >
                    <CheckCircle size={24} className="text-safari-green flex-shrink-0 mt-0.5" />
                    <span className="text-safari-charcoal/90">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What's Included / Not Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <Package size={28} className="text-green-700" />
                  <h3 className="text-2xl font-instrument-serif text-green-900">
                    What's Included
                  </h3>
                </div>
                <ul className="space-y-3">
                  {activity.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-green-800">
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle size={28} className="text-red-700" />
                  <h3 className="text-2xl font-instrument-serif text-red-900">Not Included</h3>
                </div>
                <ul className="space-y-3">
                  {activity.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-red-800">
                      <XCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            {activity.itinerary && activity.itinerary.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-safari-border">
                <h2 className="text-3xl font-instrument-serif mb-8 text-safari-charcoal">
                  Your Day Timeline
                </h2>
                <div className="space-y-6">
                  {activity.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="bg-gradient-to-br from-safari-gold to-safari-gold/80 text-white min-w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-2xl font-bold">{item.time}</span>
                      </div>
                      <div className="flex-1 bg-safari-bone p-6 rounded-2xl">
                        <p className="text-safari-charcoal/90 text-lg">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What to Bring */}
            <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-200">
              <h2 className="text-3xl font-instrument-serif mb-6 text-blue-900">
                What to Bring
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activity.whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-900 bg-white p-4 rounded-xl">
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <AlertCircle size={32} className="text-yellow-700 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-instrument-serif text-yellow-900 mb-4">
                    Important Information
                  </h2>
                  <ul className="space-y-3">
                    {activity.importantInfo.map((info, index) => (
                      <li key={index} className="text-yellow-900 flex items-start gap-2">
                        <span className="text-yellow-700 font-bold">•</span>
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white p-8 rounded-3xl border border-safari-border">
              <h2 className="text-3xl font-instrument-serif mb-4 text-safari-charcoal">
                Cancellation Policy
              </h2>
              <div className="flex items-start gap-3">
                <Info size={24} className="text-safari-gold flex-shrink-0 mt-1" />
                <p className="text-safari-charcoal/80 text-lg">{activity.cancellationPolicy}</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Main Booking Card */}
              <div className="bg-white p-8 rounded-3xl border-2 border-safari-green shadow-2xl">
                <div className="mb-6">
                  {activity.originalPrice && (
                    <>
                      <span className="text-xl text-safari-charcoal/40 line-through block mb-2">
                        KES {activity.originalPrice.toLocaleString()}
                      </span>
                      <div className="bg-red-100 text-red-700 text-sm font-bold px-4 py-2 rounded-xl mb-4 inline-block">
                        Save KES {(activity.originalPrice - activity.price).toLocaleString()} 🎉
                      </div>
                    </>
                  )}
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-bold text-safari-green">
                      KES {activity.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-safari-charcoal/60 text-sm">per person</span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-safari-green text-white text-center py-5 rounded-2xl font-bold text-lg hover:bg-safari-green/90 hover:scale-[1.02] transition-all mb-4 shadow-lg"
                >
                  Book on WhatsApp
                </a>

                <p className="text-center text-sm text-safari-charcoal/60 mb-4">
                  ⚡ Instant confirmation via WhatsApp
                </p>

                <div className="pt-6 border-t border-safari-border space-y-3 text-sm text-safari-charcoal/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-safari-green" />
                    <span>Secure booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-safari-green" />
                    <span>Free cancellation available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-safari-green" />
                    <span>Best price guarantee</span>
                  </div>
                </div>
              </div>

              {/* Meeting Point */}
              <div className="bg-white p-6 rounded-2xl border border-safari-border">
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="text-safari-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-safari-charcoal">Meeting Point</h3>
                    <p className="text-sm text-safari-charcoal/70">{activity.meetingPoint}</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white p-6 rounded-2xl border border-safari-border">
                <div className="flex items-start gap-3">
                  <Calendar size={24} className="text-safari-gold flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="font-bold mb-3 text-safari-charcoal">Availability</h3>
                    <p className="text-sm text-safari-charcoal/70 mb-3">
                      Available {activity.availability.daysAvailable.length === 7 ? "daily" : `${activity.availability.daysAvailable.length} days a week`}
                    </p>
                    <div className="bg-safari-bone p-4 rounded-xl">
                      <p className="text-xs font-semibold mb-2 text-safari-charcoal/60">
                        START TIMES:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activity.availability.startTimes.map((time, index) => (
                          <span
                            key={index}
                            className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-safari-charcoal border border-safari-border"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                    {activity.availability.seasonalNotes && (
                      <p className="text-xs text-safari-charcoal/50 mt-3 italic">
                        💡 {activity.availability.seasonalNotes}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Perfect For */}
              <div className="bg-gradient-to-br from-safari-gold/10 to-safari-green/10 p-6 rounded-2xl border border-safari-border">
                <h3 className="font-bold mb-4 text-safari-charcoal">Perfect For:</h3>
                <div className="flex flex-wrap gap-2">
                  {activity.bestFor.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white text-safari-charcoal text-sm font-semibold px-4 py-2 rounded-full border border-safari-gold/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white p-6 rounded-2xl border border-safari-border">
                <div className="space-y-4 text-center">
                  <div className="text-4xl">🏆</div>
                  <p className="font-bold text-safari-charcoal">Verified Activity</p>
                  <p className="text-sm text-safari-charcoal/60">
                    This experience has been verified by Safari Stays & Homes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Activities */}
        {relatedActivities.length > 0 && (
          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-instrument-serif mb-12 text-safari-charcoal">
              You Might Also Enjoy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedActivities.map((related) => (
                <Link key={related.id} href={`/activities/${related.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-safari-border hover:shadow-safari-lg transition-all">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={related.coverImage.url}
                        alt={related.coverImage.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin size={14} className="text-safari-gold" />
                        <span className="text-xs font-bold text-safari-green uppercase">
                          {related.location}
                        </span>
                      </div>
                      <h3 className="font-instrument-serif text-xl mb-2 text-safari-charcoal group-hover:text-safari-green transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-safari-charcoal/60 mb-4 line-clamp-2">
                        {related.subtitle}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-safari-border">
                        <span className="text-2xl font-bold text-safari-green">
                          KES {related.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-safari-gold font-bold group-hover:translate-x-1 transition-transform">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
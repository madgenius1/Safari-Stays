"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Home,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Clock,
  Star,
  CheckCircle,
  Download,
  Share2,
  ArrowLeft,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { generateTripPlan } from "@/src/lib/tripPlanner";
import { TripPlan, TripPreferences } from "@/src/lib/types";

export default function TripResultsPage() {
  const router = useRouter();
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get preferences from sessionStorage
    const preferencesStr = sessionStorage.getItem('tripPreferences');
    if (!preferencesStr) {
      router.push('/plan-my-trip');
      return;
    }

    try {
      const preferences: TripPreferences = JSON.parse(preferencesStr);
      
      // Generate trip plan
      const plan = generateTripPlan(preferences);
      
      if (!plan) {
        setError('Unable to generate trip plan. Please try different preferences.');
        setLoading(false);
        return;
      }

      setTripPlan(plan);
      setLoading(false);
    } catch (err) {
      setError('An error occurred while generating your trip.');
      setLoading(false);
    }
  }, [router]);

  const whatsappMessage = tripPlan
    ? `Hi! I used your trip planner and I'm interested in:\n\n🏠 ${tripPlan.accommodation.property.name}\n📅 ${tripPlan.preferences.duration} nights\n👥 ${tripPlan.preferences.guests} guests\n💰 Budget: KES ${tripPlan.preferences.budget.toLocaleString()}\n\nCan you help me book this trip?`
    : '';
  const whatsappLink = `https://wa.me/254759711145?text=${encodeURIComponent(whatsappMessage)}`;

  if (loading) {
    return (
      <div className="min-h-screen bg-safari-bone flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-safari-gold border-t-transparent rounded-full mx-auto mb-6"
          />
          <h2 className="text-2xl font-instrument-serif text-safari-charcoal mb-2">
            Creating Your Perfect Itinerary...
          </h2>
          <p className="text-safari-charcoal/60">
            Matching properties, activities, and experiences
          </p>
        </div>
      </div>
    );
  }

  if (error || !tripPlan) {
    return (
      <div className="min-h-screen bg-safari-bone flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">😔</div>
          <h2 className="text-3xl font-instrument-serif text-safari-charcoal mb-4">
            {error || 'Unable to create trip plan'}
          </h2>
          <p className="text-safari-charcoal/60 mb-8">
            Try adjusting your preferences or contact us for personalized assistance.
          </p>
          <div className="flex gap-4">
            <Link
              href="/plan-my-trip"
              className="flex-1 py-4 px-6 bg-safari-green text-white rounded-2xl font-bold hover:bg-safari-green/90 transition-colors text-center"
            >
              Try Again
            </Link>
            <a
              href="https://wa.me/254759711145?text=I need help planning my Kenya trip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-6 bg-safari-gold text-white rounded-2xl font-bold hover:bg-safari-gold/90 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  const { accommodation, activities, itinerary, budget, recommendations } = tripPlan;

  return (
    <div className="min-h-screen bg-safari-bone pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-safari-gold/10 text-safari-gold px-6 py-3 rounded-full font-bold mb-6">
            <Sparkles size={20} />
            Your Perfect Kenya Adventure
          </div>
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-safari-charcoal mb-4">
            Your Personalized Itinerary
          </h1>
          <p className="text-xl text-safari-charcoal/70 max-w-2xl mx-auto">
            {tripPlan.preferences.duration} nights in {accommodation.property.location.area} • {tripPlan.preferences.guests} {tripPlan.preferences.guests === 1 ? 'guest' : 'guests'} • {activities.length} activities curated
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-safari-green text-white px-8 py-4 rounded-2xl font-bold hover:bg-safari-green/90 transition-all shadow-lg"
          >
            <CheckCircle size={20} />
            Book This Trip
          </a>
          <button className="flex items-center gap-2 bg-white border-2 border-safari-border px-8 py-4 rounded-2xl font-bold hover:border-safari-gold transition-all">
            <Download size={20} />
            Download PDF
          </button>
          <button className="flex items-center gap-2 bg-white border-2 border-safari-border px-8 py-4 rounded-2xl font-bold hover:border-safari-gold transition-all">
            <Share2 size={20} />
            Share
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Accommodation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-safari-border shadow-lg"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={accommodation.property.images[0].url}
                  alt={accommodation.property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-safari-gold text-white px-4 py-2 rounded-full font-bold">
                  <Home size={16} className="inline mr-2" />
                  Your Stay
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-instrument-serif mb-2">
                      {accommodation.property.name}
                    </h2>
                    <div className="flex items-center gap-4 text-safari-charcoal/70">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {accommodation.property.location.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={16} className="fill-safari-gold text-safari-gold" />
                        {accommodation.property.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-safari-green">
                      KES {accommodation.totalCost.toLocaleString()}
                    </div>
                    <div className="text-sm text-safari-charcoal/60">
                      {accommodation.totalNights} nights
                    </div>
                  </div>
                </div>

                <p className="text-safari-charcoal/80 mb-6">
                  {accommodation.property.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-safari-bone rounded-xl">
                    <Users size={24} className="mx-auto mb-2 text-safari-gold" />
                    <div className="font-bold">{accommodation.property.capacity.guests}</div>
                    <div className="text-xs text-safari-charcoal/60">Guests</div>
                  </div>
                  <div className="text-center p-4 bg-safari-bone rounded-xl">
                    <Home size={24} className="mx-auto mb-2 text-safari-gold" />
                    <div className="font-bold">{accommodation.property.capacity.bedrooms}</div>
                    <div className="text-xs text-safari-charcoal/60">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-safari-bone rounded-xl">
                    <CheckCircle size={24} className="mx-auto mb-2 text-safari-gold" />
                    <div className="font-bold">{accommodation.property.amenities.length}</div>
                    <div className="text-xs text-safari-charcoal/60">Amenities</div>
                  </div>
                  <div className="text-center p-4 bg-safari-bone rounded-xl">
                    <TrendingUp size={24} className="mx-auto mb-2 text-safari-gold" />
                    <div className="font-bold">{accommodation.property.wifi?.speed || 0} Mbps</div>
                    <div className="text-xs text-safari-charcoal/60">WiFi</div>
                  </div>
                </div>

                <Link
                  href={`/stays/${accommodation.property.slug}`}
                  className="block w-full text-center py-3 bg-safari-bone border-2 border-safari-border rounded-xl font-bold hover:border-safari-green transition-colors"
                >
                  View Property Details →
                </Link>
              </div>
            </motion.div>

            {/* Activities Section */}
            {activities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-safari-border shadow-lg"
              >
                <h2 className="text-3xl font-instrument-serif mb-6">
                  Included Activities
                </h2>
                <div className="space-y-4">
                  {activities.map(({ activity, day, timeSlot }, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-6 bg-safari-bone rounded-2xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={activity.coverImage.url}
                          alt={activity.title}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{activity.title}</h3>
                            <p className="text-sm text-safari-charcoal/60">{activity.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-safari-green">
                              KES {activity.price.toLocaleString()}
                            </div>
                            <div className="text-xs text-safari-charcoal/60">per person</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-safari-charcoal/70">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            Day {day}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {timeSlot}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {activity.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Day-by-Day Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-safari-border shadow-lg"
            >
              <h2 className="text-3xl font-instrument-serif mb-8">
                Your Day-by-Day Itinerary
              </h2>
              <div className="space-y-8">
                {itinerary.map((day, idx) => (
                  <div key={idx} className="relative">
                    {idx < itinerary.length - 1 && (
                      <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-safari-border" />
                    )}
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-safari-gold text-white rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                      </div>
                      
                      <div className="flex-1 pb-8">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold mb-1">{day.title}</h3>
                          <p className="text-sm text-safari-charcoal/60">{day.date}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {day.activities.map((activity, actIdx) => (
                            <div
                              key={actIdx}
                              className="flex gap-4 p-4 bg-safari-bone rounded-xl"
                            >
                              <div className="flex-shrink-0 text-safari-gold font-bold text-sm w-20">
                                {activity.time}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1">{activity.activity}</div>
                                <p className="text-sm text-safari-charcoal/70">{activity.description}</p>
                                {activity.cost && (
                                  <div className="text-sm text-safari-green font-semibold mt-1">
                                    KES {activity.cost.toLocaleString()}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-safari-border flex justify-between items-center">
                          <span className="text-sm text-safari-charcoal/60">Day Total</span>
                          <span className="font-bold text-safari-green">
                            KES {day.estimatedCost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-safari-green/5 to-safari-gold/5 rounded-3xl p-8 border border-safari-border"
            >
              <h2 className="text-3xl font-instrument-serif mb-6">
                Local Recommendations
              </h2>
              
              <div className="space-y-6">
                {/* Nearby Attractions */}
                <div>
                  <h3 className="font-bold mb-3">🗺️ Places to Visit</h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.attractions.map((attr, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-4 py-2 rounded-full text-sm border border-safari-border"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Travel Tips */}
                <div>
                  <h3 className="font-bold mb-3">💡 Travel Tips</h3>
                  <ul className="space-y-2">
                    {recommendations.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-safari-charcoal/80">
                        <CheckCircle size={16} className="text-safari-green flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Budget Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-safari-border shadow-lg"
              >
                <h3 className="text-2xl font-instrument-serif mb-6">
                  Budget Breakdown
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-safari-border">
                    <span className="text-safari-charcoal/70">Accommodation</span>
                    <span className="font-bold">KES {budget.accommodation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-safari-border">
                    <span className="text-safari-charcoal/70">Activities</span>
                    <span className="font-bold">KES {budget.activities.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-safari-border">
                    <span className="text-safari-charcoal/70">Meals</span>
                    <span className="font-bold">KES {budget.meals.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-safari-border">
                    <span className="text-safari-charcoal/70">Transport</span>
                    <span className="font-bold">KES {budget.transport.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 bg-safari-bone rounded-xl px-4 mb-6">
                  <span className="font-bold">Total Cost</span>
                  <span className="text-2xl font-bold text-safari-green">
                    KES {budget.total.toLocaleString()}
                  </span>
                </div>

                {budget.remaining > 0 && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
                    <strong>✓ Under Budget!</strong><br />
                    KES {budget.remaining.toLocaleString()} remaining for extras
                  </div>
                )}

                {budget.remaining < 0 && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
                    <strong>⚠️ Slightly Over</strong><br />
                    KES {Math.abs(budget.remaining).toLocaleString()} above your budget
                  </div>
                )}
              </motion.div>

              {/* Book Now CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-safari-green to-safari-green/80 text-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-instrument-serif mb-4">
                  Ready to Book?
                </h3>
                <p className="mb-6 text-white/90">
                  Chat with us on WhatsApp to confirm availability and secure your perfect Kenya adventure.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-white text-safari-green rounded-2xl font-bold hover:bg-white/90 transition-colors"
                >
                  Book on WhatsApp
                </a>
                <div className="mt-4 text-center text-sm text-white/80">
                  ⚡ Instant confirmation • 💯 Best price guarantee
                </div>
              </motion.div>

              {/* Back Button */}
              <Link
                href="/plan-my-trip"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-safari-border rounded-2xl font-bold hover:border-safari-gold transition-colors"
              >
                <ArrowLeft size={20} />
                Plan Another Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
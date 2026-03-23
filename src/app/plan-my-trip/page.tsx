"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Users,
  Calendar,
  DollarSign,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";
import { vibeOptions } from "@/src/lib/mockData.misc";
import { validatePreferences } from "@/src/lib/tripPlanner";
import { TripPreferences } from "@/src/lib/types";

const destinations = [
  { id: 'diani', label: 'Diani Beach', description: 'White sand beaches & water sports' },
  { id: 'watamu', label: 'Watamu', description: 'Marine park & snorkeling' },
  { id: 'malindi', label: 'Malindi', description: 'Historic town & kite surfing' },
  { id: 'nairobi', label: 'Nairobi', description: 'City life & urban adventures' },
  { id: 'maasai-mara', label: 'Maasai Mara', description: 'World-class safari' },
  { id: 'any', label: 'Surprise Me', description: 'Let us choose the best spot' },
];

export default function PlanMyTripPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<Partial<TripPreferences>>({
    budget: 50000,
    destination: '',
    guests: 2,
    vibe: [],
    duration: 3,
  });
  const [errors, setErrors] = useState<string[]>([]);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setErrors([]);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors([]);
    }
  };

  const handleSubmit = () => {
    const validationErrors = validatePreferences(preferences);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store preferences in sessionStorage
    sessionStorage.setItem('tripPreferences', JSON.stringify(preferences));
    
    // Navigate to results
    router.push('/plan-my-trip/results');
  };

  const updatePreference = (key: keyof TripPreferences, value: any) => {
    setPreferences({ ...preferences, [key]: value });
  };

  const toggleVibe = (vibeId: string) => {
    const currentVibes = preferences.vibe || [];
    if (currentVibes.includes(vibeId)) {
      updatePreference('vibe', currentVibes.filter((v) => v !== vibeId));
    } else {
      updatePreference('vibe', [...currentVibes, vibeId]);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-safari-bone via-white to-safari-bone pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-safari-charcoal mb-4">
            Plan Your Perfect Trip
          </h1>
          <p className="text-xl text-safari-charcoal/70 font-instrument-serif italic">
            Answer a few questions and we'll curate your ideal Kenya experience
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    idx + 1 < step
                      ? 'bg-safari-green text-white'
                      : idx + 1 === step
                      ? 'bg-safari-gold text-white scale-110'
                      : 'bg-safari-border text-safari-charcoal/40'
                  }`}
                >
                  {idx + 1 < step ? <Check size={20} /> : idx + 1}
                </div>
                {idx < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-all ${
                      idx + 1 < step ? 'bg-safari-green' : 'bg-safari-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-safari-charcoal/60">
            Step {step} of {totalSteps}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-safari-border"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Destination */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={40} className="text-safari-gold" />
                  </div>
                  <h2 className="text-3xl font-instrument-serif mb-2">
                    Where would you like to go?
                  </h2>
                  <p className="text-safari-charcoal/60">
                    Choose your dream destination in Kenya
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => updatePreference('destination', dest.id)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${
                        preferences.destination === dest.id
                          ? 'border-safari-green bg-safari-green/5 shadow-lg'
                          : 'border-safari-border hover:border-safari-gold'
                      }`}
                    >
                      <h3 className="font-bold text-lg mb-1">{dest.label}</h3>
                      <p className="text-sm text-safari-charcoal/60">{dest.description}</p>
                      {preferences.destination === dest.id && (
                        <div className="mt-3">
                          <span className="inline-flex items-center gap-1 text-safari-green text-sm font-bold">
                            <Check size={16} /> Selected
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Guests */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={40} className="text-safari-gold" />
                  </div>
                  <h2 className="text-3xl font-instrument-serif mb-2">
                    How many people are traveling?
                  </h2>
                  <p className="text-safari-charcoal/60">
                    Include yourself in the count
                  </p>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-6">
                    <button
                      onClick={() => updatePreference('guests', Math.max(1, (preferences.guests || 1) - 1))}
                      className="w-14 h-14 rounded-full bg-safari-border hover:bg-safari-gold hover:text-white transition-colors flex items-center justify-center text-2xl font-bold"
                    >
                      -
                    </button>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-safari-green mb-2">
                        {preferences.guests}
                      </div>
                      <div className="text-safari-charcoal/60">
                        {preferences.guests === 1 ? 'Guest' : 'Guests'}
                      </div>
                    </div>
                    <button
                      onClick={() => updatePreference('guests', Math.min(10, (preferences.guests || 1) + 1))}
                      className="w-14 h-14 rounded-full bg-safari-border hover:bg-safari-gold hover:text-white transition-colors flex items-center justify-center text-2xl font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-sm text-blue-900">
                      💡 <strong>Tip:</strong> We'll match you with accommodations that comfortably fit your group size.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Duration */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={40} className="text-safari-gold" />
                  </div>
                  <h2 className="text-3xl font-instrument-serif mb-2">
                    How long is your stay?
                  </h2>
                  <p className="text-safari-charcoal/60">
                    Number of nights you'd like to stay
                  </p>
                </div>

                <div className="max-w-md mx-auto">
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={preferences.duration}
                    onChange={(e) => updatePreference('duration', parseInt(e.target.value))}
                    className="w-full h-3 bg-safari-border rounded-lg appearance-none cursor-pointer accent-safari-gold"
                  />
                  
                  <div className="text-center mt-6">
                    <div className="text-6xl font-bold text-safari-green mb-2">
                      {preferences.duration}
                    </div>
                    <div className="text-safari-charcoal/60 text-lg">
                      {preferences.duration === 1 ? 'Night' : 'Nights'}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mt-8">
                    {[2, 3, 5, 7].map((nights) => (
                      <button
                        key={nights}
                        onClick={() => updatePreference('duration', nights)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          preferences.duration === nights
                            ? 'border-safari-gold bg-safari-gold/10'
                            : 'border-safari-border hover:border-safari-gold'
                        }`}
                      >
                        <div className="font-bold text-2xl">{nights}</div>
                        <div className="text-xs text-safari-charcoal/60 mt-1">
                          {nights === 2 ? 'Weekend' : nights === 3 ? 'Short' : nights === 5 ? 'Week' : 'Extended'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Budget */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={40} className="text-safari-gold" />
                  </div>
                  <h2 className="text-3xl font-instrument-serif mb-2">
                    What's your total budget?
                  </h2>
                  <p className="text-safari-charcoal/60">
                    Total amount for accommodation, activities & meals
                  </p>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-safari-green mb-2">
                      KES {(preferences.budget || 0).toLocaleString()}
                    </div>
                    <div className="text-safari-charcoal/60">
                      ≈ ${Math.round((preferences.budget || 0) / 125)} USD
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={preferences.budget}
                    onChange={(e) => updatePreference('budget', parseInt(e.target.value))}
                    className="w-full h-3 bg-safari-border rounded-lg appearance-none cursor-pointer accent-safari-gold mb-6"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { amount: 30000, label: 'Budget' },
                      { amount: 75000, label: 'Mid-Range' },
                      { amount: 150000, label: 'Comfort' },
                      { amount: 300000, label: 'Luxury' },
                    ].map((preset) => (
                      <button
                        key={preset.amount}
                        onClick={() => updatePreference('budget', preset.amount)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          preferences.budget === preset.amount
                            ? 'border-safari-gold bg-safari-gold/10'
                            : 'border-safari-border hover:border-safari-gold'
                        }`}
                      >
                        <div className="font-bold text-lg">KES {(preset.amount / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-safari-charcoal/60 mt-1">{preset.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Vibe */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={40} className="text-safari-gold" />
                  </div>
                  <h2 className="text-3xl font-instrument-serif mb-2">
                    What's your vibe?
                  </h2>
                  <p className="text-safari-charcoal/60">
                    Select all that match your travel style
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vibeOptions.map((vibe) => {
                    const isSelected = preferences.vibe?.includes(vibe.id);
                    return (
                      <button
                        key={vibe.id}
                        onClick={() => toggleVibe(vibe.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${
                          isSelected
                            ? 'border-safari-green bg-safari-green/5 shadow-lg'
                            : 'border-safari-border hover:border-safari-gold'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{vibe.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{vibe.label}</h3>
                            <p className="text-sm text-safari-charcoal/60">{vibe.description}</p>
                            {isSelected && (
                              <div className="mt-3">
                                <span className="inline-flex items-center gap-1 text-safari-green text-sm font-bold">
                                  <Check size={16} /> Selected
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {preferences.vibe && preferences.vibe.length > 0 && (
                  <div className="text-center text-sm text-safari-charcoal/60">
                    {preferences.vibe.length} {preferences.vibe.length === 1 ? 'vibe' : 'vibes'} selected
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <ul className="text-sm text-red-800 space-y-1">
                {errors.map((error, idx) => (
                  <li key={idx}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-12">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border-2 border-safari-border hover:border-safari-green transition-all font-bold"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            )}

            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !preferences.destination) ||
                  (step === 5 && (!preferences.vibe || preferences.vibe.length === 0))
                }
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-safari-green text-white hover:bg-safari-green/90 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-safari-gold text-white hover:bg-safari-gold/90 transition-all font-bold text-lg shadow-lg"
              >
                <Sparkles size={20} />
                Create My Itinerary
              </button>
            )}
          </div>
        </motion.div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: '🤖', title: 'AI-Powered', desc: 'Smart matching algorithm' },
            { icon: '⚡', title: 'Instant Results', desc: 'Get your plan in seconds' },
            { icon: '💯', title: 'Personalized', desc: 'Tailored to your preferences' },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-safari-border">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-safari-charcoal/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
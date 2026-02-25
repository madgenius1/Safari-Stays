"use client";

import { motion } from "motion/react";
import { Heart, Shield, Wifi, Users, Award, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-360 mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
            Your Home Away From Home in Kenya
          </h1>
          <p className="text-xl text-[#1A1A1A]/70 leading-relaxed font-instrument-serif italic">
            We're reimagining how travelers experience Kenya—one verified stay at a time.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800"
              alt="Kenya Landscape"
              className="rounded-3xl shadow-2xl w-full h-125 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-instrument-serif text-[#1A1A1A] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Safari Stays & Homes was born from a simple frustration: finding quality,
                verified accommodations in Kenya was unnecessarily complicated.
              </p>
              <p>
                As digital nomads and Kenya enthusiasts ourselves, we knew there was a
                better way. We started by personally vetting properties, testing WiFi speeds,
                and building relationships with incredible hosts across the country.
              </p>
              <p>
                Today, we're Kenya's first WhatsApp-first travel marketplace, combining
                the personal touch of local expertise with instant booking convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-instrument-serif text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Properties",
                desc: "Every property passes our 50-point inspection. We personally visit and verify all amenities.",
              },
              {
                icon: Wifi,
                title: "Tested WiFi Speeds",
                desc: "All listed speeds are actually tested—essential for remote workers.",
              },
              {
                icon: Heart,
                title: "WhatsApp-First",
                desc: "Book via WhatsApp for instant responses and personal service.",
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Our team lives in Kenya. We know the best spots and hidden gems.",
              },
              {
                icon: Users,
                title: "24/7 Support",
                desc: "Always here via WhatsApp—day or night.",
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                desc: "No booking fees, no hidden charges.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[#E8E3DB] text-center"
              >
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#2D4032] text-white rounded-3xl p-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold font-instrument-serif mb-2">15+</p>
              <p className="text-white/80">Verified Properties</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-instrument-serif mb-2">8</p>
              <p className="text-white/80">Destinations</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-instrument-serif mb-2">500+</p>
              <p className="text-white/80">Happy Guests</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-instrument-serif mb-2">4.8</p>
              <p className="text-white/80">Average Rating</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#FDFBF7] border-2 border-[#E8E3DB] rounded-3xl p-12">
          <h3 className="text-4xl font-instrument-serif mb-4">
            Ready to Experience Kenya?
          </h3>
          <p className="text-lg text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect place to stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/stays"
              className="inline-block bg-[#2D4032] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1f2d23] transition-colors"
            >
              Browse Properties
            </a>
            <a
              href="https://wa.me/254700000000?text=Hi! I'd like to learn more about Safari Stays."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
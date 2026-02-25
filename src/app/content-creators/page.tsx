"use client";

import { Camera, Wifi, Sun, Zap, MapPin, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { properties } from "../../lib/mockData";
import { formatKES } from "../../utils/formatting";

const creatorFeatures = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description:
      "50-250 Mbps fiber & Starlink connections tested before you arrive. Upload 4K content without waiting.",
  },
  {
    icon: Sun,
    title: "Natural Lighting",
    description:
      "Floor-to-ceiling windows, skylights, and room orientation optimized for golden hour shoots.",
  },
  {
    icon: Camera,
    title: "Content-Ready Spaces",
    description:
      "Aesthetic interiors, neutral backgrounds, and Instagram-worthy views in every room.",
  },
  {
    icon: Zap,
    title: "Creator Amenities",
    description:
      "Ring lights, tripods, power backup, and quiet spaces for editing and calls.",
  },
];

const testimonials = [
  {
    name: "Sarah J.",
    handle: "@sarahtravels",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b4b635e3?auto=format&fit=crop&w=100",
    quote:
      "The fiber WiFi was fast enough for live streaming! Plus, the natural light in the loft was perfect for my morning content.",
    platform: "YouTube Creator",
  },
  {
    name: "Mike Chen",
    handle: "@mikeinkenya",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
    quote:
      "I edited an entire vlog series from the Mara retreat. Starlink kept me connected even in the middle of the savannah.",
    platform: "Travel Vlogger",
  },
];

export default function ContentCreatorsPage() {
  // Filter properties that are creator-friendly
  const creatorProperties = properties.filter((p) =>
    p.highlights.some(
      (h) =>
        h.includes("WiFi") ||
        h.includes("Studio") ||
        h.includes("Fiber") ||
        h.includes("Starlink"),
    ),
  );

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 pb-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-6">
                <Camera size={16} className="mr-2" />
                For Creators
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
                Create Your Best <br /> Content in Kenya
              </h1>
              <p className="text-lg sm:text-xl text-[#1A1A1A]/60 leading-relaxed mb-8">
                We get it. You need more than just a pretty view. Fast WiFi,
                natural light, aesthetic spaces, and zero interruptions. Every
                stay is creator-tested.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/stays"
                  className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b08e4d] transition-colors shadow-xl shadow-[#C5A059]/20 text-center"
                >
                  Browse Creator Stays
                </a>
                <a
                  href="https://wa.me/254700000000?text=Hi! I'm a content creator looking for the perfect Kenya stay."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#2D4032] text-[#2D4032] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2D4032] hover:text-white transition-colors text-center"
                >
                  Chat with Concierge
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=800"
                  alt="Creator working on laptop with scenic view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Wifi className="text-[#2D4032]" size={24} />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">
                        Tested WiFi Speeds
                      </p>
                      <p className="text-sm text-[#1A1A1A]/60">
                        Verified before every booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-instrument-serif text-[#1A1A1A] mb-4">
              Everything a Creator Needs
            </h2>
            <p className="text-lg sm:text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
              We've obsessed over the details so you can focus on creating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {creatorFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 border border-[#E8E3DB] hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#2D4032] text-white p-4 rounded-2xl w-fit mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Creator Testimonials */}
        <div className="mb-20 bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E8E3DB]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-instrument-serif text-[#1A1A1A] mb-4">
              Loved by Creators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E8E3DB]"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#1A1A1A]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#C5A059]">
                      {testimonial.handle}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/40">
                      {testimonial.platform}
                    </p>
                  </div>
                </div>
                <p className="text-[#1A1A1A]/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creator-Friendly Properties */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-instrument-serif text-[#1A1A1A] mb-4">
              Creator-Verified Stays
            </h2>
            <p className="text-lg sm:text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
              Every property below has been tested for WiFi speed, lighting
              quality, and content-friendly aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {creatorProperties.map((property, index) => (
              <motion.a
                key={property.id}
                href={`/stays/${property.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8E3DB] hover:shadow-2xl hover:shadow-black/5 transition-all"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={property.images[0].url}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-[#2D4032]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <CheckCircle size={12} />
                      <span>Creator Verified</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2D4032] flex items-center space-x-1">
                      <Wifi size={12} />
                      <span>{property.wifiSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center text-[#1A1A1A]/60 text-xs font-bold uppercase tracking-widest mb-2">
                      <MapPin size={12} className="mr-1 text-[#C5A059]" />
                      {property.location.area}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-instrument-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors mb-2">
                      {property.name}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/40 italic line-clamp-1">
                      {property.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E3DB] flex justify-between items-center">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-lg font-bold text-[#C5A059]">
                        {formatKES(property.pricing.basePrice)}
                      </span>
                      <span className="text-xs text-[#1A1A1A]/40">/ night</span>
                    </div>
                    <span className="text-xs font-bold text-[#2D4032] group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

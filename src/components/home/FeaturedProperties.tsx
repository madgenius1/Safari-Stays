'use client'

import { MapPin, Wifi } from "lucide-react";
import { properties } from "../../lib/mockData";
import { formatKES } from "../../utils/formatting";
import { motion } from "motion/react";

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-instrument-serif mb-4">
            Featured Stays
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
            Our hand-picked selection of the most unique and high-standard
            properties across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <motion.a
              key={property.id}
              href={`/stays/${property.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={property.images[0].url}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                    <Wifi size={14} className="text-[#2D4032]" />
                    <span className="text-[10px] font-bold text-[#2D4032]">
                      {property.wifiSpeed}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-[#1A1A1A]/60 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} className="mr-1 text-[#C5A059]" />
                  {property.location.area}
                </div>
                <h3 className="text-2xl font-instrument-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                  {property.name}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-[#C5A059] font-bold text-lg">
                    {formatKES(property.pricing.basePrice)}
                  </span>
                  <span className="text-[#1A1A1A]/40 text-sm">/ night</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/stays"
            className="inline-block border-b-2 border-[#2D4032] pb-1 font-bold text-[#2D4032] hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
          >
            View All Stays
          </a>
        </div>
      </div>
    </section>
  );
}

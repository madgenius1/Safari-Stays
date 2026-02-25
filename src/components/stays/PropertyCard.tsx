import { MapPin, Wifi, Users, Bed } from "lucide-react";
import { formatKES } from "../../utils/formatting";
import { motion } from "motion/react";

export default function PropertyCard({ property }) {
  return (
    <motion.a
      href={`/stays/${property.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-[#E8E3DB] hover:shadow-2xl hover:shadow-black/5 transition-all"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={property.images[0].url}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
            <Wifi size={14} className="text-[#2D4032]" />
            <span className="text-[10px] font-bold text-[#2D4032]">
              {property.wifiSpeed}
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-[#2D4032]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {property.location.area}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-instrument-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors mb-1">
            {property.name}
          </h3>
          <p className="text-sm text-[#1A1A1A]/40 line-clamp-1 italic">
            {property.tagline}
          </p>
        </div>

        <div className="flex items-center space-x-4 text-xs text-[#1A1A1A]/60">
          <div className="flex items-center space-x-1">
            <Users size={14} />
            <span>{property.capacity.guests} Guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bed size={14} />
            <span>{property.capacity.bedrooms} Beds</span>
          </div>
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
  );
}

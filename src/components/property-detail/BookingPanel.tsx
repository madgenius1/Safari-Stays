import { useState, useMemo } from "react";
import { Calendar, Users, Info } from "lucide-react";
import { formatKES } from "../../utils/formatting";
import { calculateSeasonalPrice } from "../../utils/pricing";
import { generateWhatsAppLink } from "../../utils/whatsapp";
import { motion } from "motion/react";

export default function BookingPanel({ property }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const pricingDetails = useMemo(() => {
    return calculateSeasonalPrice(
      property.pricing.basePrice,
      checkIn,
      checkOut,
    );
  }, [checkIn, checkOut, property.pricing.basePrice]);

  const handleBook = () => {
    const link = generateWhatsAppLink(
      property,
      { start: checkIn, end: checkOut },
      guests,
      pricingDetails.totalPrice,
    );
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="bg-white border border-[#E8E3DB] rounded-[32px] p-8 shadow-xl shadow-black/5">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-widest block mb-1">
            Nightly Rate
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-[#C5A059]">
              {formatKES(pricingDetails.nightlyRate)}
            </span>
            <span className="text-sm text-[#1A1A1A]/40">/ night</span>
          </div>
        </div>
        {pricingDetails.season !== "Regular" && (
          <div className="bg-[#E8E3DB]/30 px-3 py-1 rounded-full text-[10px] font-bold text-[#2D4032]">
            {pricingDetails.season} Rate
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative group">
            <label className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-1 block ml-2">
              Check-in
            </label>
            <div className="flex items-center space-x-2 bg-[#FDFBF7] border border-[#E8E3DB] rounded-xl px-4 py-3 group-hover:border-[#C5A059] transition-colors">
              <Calendar size={16} className="text-[#C5A059]" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
              />
            </div>
          </div>
          <div className="relative group">
            <label className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-1 block ml-2">
              Check-out
            </label>
            <div className="flex items-center space-x-2 bg-[#FDFBF7] border border-[#E8E3DB] rounded-xl px-4 py-3 group-hover:border-[#C5A059] transition-colors">
              <Calendar size={16} className="text-[#C5A059]" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
              />
            </div>
          </div>
        </div>

        <div className="relative group">
          <label className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-1 block ml-2">
            Guests
          </label>
          <div className="flex items-center space-x-2 bg-[#FDFBF7] border border-[#E8E3DB] rounded-xl px-4 py-3 group-hover:border-[#C5A059] transition-colors">
            <Users size={16} className="text-[#C5A059]" />
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="bg-transparent border-none focus:ring-0 text-sm w-full appearance-none"
            >
              {[...Array(property.capacity.guests)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {pricingDetails.totalPrice > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-[#FDFBF7] rounded-2xl p-6 mb-8 border border-[#E8E3DB]"
        >
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#1A1A1A]/60">
                {formatKES(pricingDetails.nightlyRate)} ×{" "}
                {pricingDetails.nights} nights
              </span>
              <span className="font-medium">
                {formatKES(pricingDetails.totalPrice)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#1A1A1A]/60">Concierge Service</span>
              <span className="text-[#2D4032] font-bold">FREE</span>
            </div>
            <div className="pt-3 border-t border-[#E8E3DB] flex justify-between items-center">
              <span className="font-bold text-[#1A1A1A]">Total Estimated</span>
              <span className="font-bold text-xl text-[#2D4032]">
                {formatKES(pricingDetails.totalPrice)}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      <button
        onClick={handleBook}
        className="w-full bg-[#C5A059] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#C5A059]/20 hover:bg-[#b08e4d] transition-all flex items-center justify-center space-x-2"
      >
        <span>Book via WhatsApp</span>
      </button>

      <p className="text-center text-[10px] text-[#1A1A1A]/40 mt-6 flex items-center justify-center">
        <Info size={12} className="mr-1" />
        Booking is handled directly via WhatsApp with our local experts.
      </p>
    </div>
  );
}

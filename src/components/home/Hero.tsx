'use client'

import { Search, Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to stays page
    window.location.href = "/stays";
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-[clamp(2.5rem,8vw,5rem)] font-instrument-serif leading-tight mb-4 sm:mb-6"
        >
          Experience Kenya, <br /> Authentically
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          Curated stays. Local expertise. Book via WhatsApp.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          variants={itemVars}
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-xl p-2 rounded-2xl md:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto border border-white/20"
        >
          {/* Location */}
          <div className="flex items-center flex-1 w-full px-6 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-200 group">
            <MapPin className="text-[#C5A059] group-hover:scale-110 transition-transform" size={22} />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Destination</span>
              <input
                type="text"
                placeholder="Where to?"
                className="bg-transparent border-none focus:ring-0 text-sm font-semibold w-full outline-none text-gray-800 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex items-center flex-1 w-full px-6 py-3 gap-3">
            <Calendar className="text-[#C5A059]" size={22} />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Travel Dates</span>
              <input
                type="text"
                placeholder="Add dates"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="bg-transparent border-none focus:ring-0 text-sm font-semibold w-full outline-none text-gray-800"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-[#2D4032] hover:bg-[#1a261d] text-white pl-8 pr-6 py-4 md:py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-4 transition-all active:scale-95 group"
          >
            <span className="text-sm">Search Stays</span>
            <div className="bg-white/10 rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

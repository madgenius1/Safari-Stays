import { Search, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to stays page
    window.location.href = "/stays";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
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
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-3 sm:p-4 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <div className="flex items-center space-x-3 px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-[#E8E3DB] pb-3 md:pb-0">
            <MapPin className="text-[#C5A059] flex-shrink-0" size={20} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full outline-none"
            />
          </div>

          <div className="flex items-center space-x-3 px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-[#E8E3DB] pb-3 md:pb-0">
            <Calendar className="text-[#C5A059] flex-shrink-0" size={20} />
            <input
              type="text"
              placeholder="Add dates"
              onFocus={(e) => (e.target.type = "date")}
              className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-[#2D4032] text-white px-6 sm:px-8 py-3 md:py-3 rounded-xl md:rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#1e2a21] transition-colors"
          >
            <Search size={18} />
            <span className="text-sm sm:text-base">Explore Stays</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

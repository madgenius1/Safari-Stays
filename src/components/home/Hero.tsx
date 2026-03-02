'use client'

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   // Redirect to stays page
  //   window.location.href = "/stays";
  // };
6
  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/10 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center lg:mt-18 px-4 sm:px-6 max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/90 text-[clamp(2.5rem,8vw,5rem)] font-instrument-serif leading-normal lg:mt-6 lg:pt-12 mb-4 sm:mb-6"
        >
          Travel and Experience Kenya, <br /> Authentically
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white lg:not-only:text-xl flex flex-col gap-4 sm:text-lg md:text-xl font-medium my-6 sm:mb-12 max-w-6xl mx-auto px-4"
        >
            Experience the magic of Kenya with luxury accommodations, unforgettable excursions, and unique ocean adventures.
          {/* <span className="text-white/80 text-base font-light mt-4 mb-6 sm-mb-10 max-w-4xl mx-auto px-4">
            Experience the magic of Kenya with luxury accommodations, unforgettable excursions, and unique ocean adventures.
          </span> */}

        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-2 mb-12 max-w-4xl mx-auto"
        >
          {/* Stay Button */}
          <Link
            href="/stays"
            className="w-full md:w-auto bg-[#2D4032] hover:bg-[#1a261d] text-white pl-8 pr-6 py-4 md:py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-4 transition-all active:scale-95 group"
          >
            <span className="text-sm">Explore Stays</span>
            <div className="bg-white/10 rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </Link>
          {/* Activities */}
          <Link
            href="/activities"
            className="w-full md:w-auto bg-[#2D4032] hover:bg-[#1a261d] text-white pl-8 pr-6 py-4 md:py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-4 transition-all active:scale-95 group"
          >
            <span className="text-sm">Explore Activities</span>
            <div className="bg-white/10 rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

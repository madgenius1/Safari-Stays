import { vibes } from "../../lib/mockData";
import { motion } from "motion/react";

//To address the specific vibes

export default function VibeSelector() {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-360 mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">
              Curated Activities
            </span>
            <h2 className="text-4xl font-instrument-serif font-medium text-[#1A1A1A] mt-2">
              Find Your Vibe. <br /> Find Your Tribe.
            </h2>
          </div>
          <p className="text-[#1A1A1A]/80 ">
            Whether you are looking for city lights, savannah sunsets, or white sandy beaches, we hve
            curated the perfect spots for your experience.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-8 no-scrollbar">
          {vibes.map((vibe, index) => (
            <motion.div
              key={vibe.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shrink-0 w-75 h-100 relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={vibe.image}
                alt={vibe.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-instrument-serif">
                  {vibe.label}
                </h3>
                <span className="text-white/70 text-sm">
                  Explore Activity →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

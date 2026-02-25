import { motion } from "motion/react";

export default function NewsletterCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#2D4032] rounded-[32px] overflow-hidden relative"
        >
          {/* Decorative background image */}
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200')",
            }}
          />

          <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-6 sm:px-8 text-center max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-instrument-serif leading-tight">
              Ready to Discover <br className="hidden sm:block" /> the Magic of
              Kenya?
            </h2>
            <p className="text-white/80 text-base sm:text-lg px-4">
              Our travel experts are ready to curate your perfect itinerary.
              Book your verified stay and experience the authentic beauty of our
              home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/254700000000?text=Hi! I need help planning my Kenya journey."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#C5A059] text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#b08e4d] transition-colors shadow-xl shadow-black/20 text-center"
              >
                Plan My Journey
              </a>
              <a
                href="/stays"
                className="w-full sm:w-auto border border-white/30 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-colors text-center"
              >
                Browse All Stays
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

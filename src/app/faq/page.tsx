"use client";

import { useState } from "react";
import { faqs } from "../../lib/mockData";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search } from "lucide-react";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "booking", label: "Booking & Payment" },
  { id: "properties", label: "Properties" },
  { id: "wifi", label: "WiFi & Tech" },
  { id: "safety", label: "Safety" },
  { id: "cancellation", label: "Cancellation" },
  { id: "general", label: "General" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#1A1A1A]/70 font-instrument-serif italic">
            Everything you need to know about staying with us
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#E8E3DB] rounded-2xl focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#2D4032] text-white shadow-lg"
                  : "bg-white text-[#1A1A1A] border border-[#E8E3DB] hover:border-[#2D4032]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-[#E8E3DB] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FDFBF7] transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`shrink-0 text-[#C5A059] transition-transform ${
                    openQuestion === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#1A1A1A]/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#1A1A1A]/50 font-instrument-serif italic">
              No questions found. Try a different search or category.
            </p>
          </div>
        )}

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-[#2D4032] text-white rounded-3xl p-12">
          <h3 className="text-3xl font-instrument-serif mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help via WhatsApp.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hi! I have a question about Safari Stays."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
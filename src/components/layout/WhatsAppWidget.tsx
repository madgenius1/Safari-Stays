'use client'

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppWidget() {
  const whatsappNumber = "254700000000";
  const defaultMessage = encodeURIComponent(
    "Hi Safari Stays team! I'm planning a trip to Kenya and would like some help.",
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-[#1A1A1A] px-4 py-2 rounded-lg text-sm font-semibold shadow-md whitespace-nowrap opacity-0 transition-opacity hover:opacity-100 hidden md:block">
        Chat with Concierge
      </span>
    </motion.a>
  );
}

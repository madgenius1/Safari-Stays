'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X } from "lucide-react";

interface Image {
  url: string;
  alt: string;
}

export default function ImageGallery({ images }: { images: Image[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-125 md:h-150 rounded-[32px] overflow-hidden shadow-2xl">
        {/* Main Hero Image */}
        <div
          className="md:col-span-2 md:row-span-2 relative group cursor-pointer"
          onClick={() => setSelectedImage(images[0].url)}
        >
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* Secondary Images */}
        {images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="hidden md:block relative group cursor-pointer"
            onClick={() => setSelectedImage(img.url)}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            {idx === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold">
                  +{images.length - 4} More
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox placeholder logic could go here */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

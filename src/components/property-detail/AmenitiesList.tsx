import { Check } from "lucide-react";

interface AmenitiesListProps {
  amenities: string[];
  highlights: string[];
}

export default function AmenitiesList({ amenities, highlights }: AmenitiesListProps) {
  return (
    <div className="space-y-12">
      {/* Highlights */}
      <section className="space-y-6">
        <h2 className="text-3xl font-instrument-serif border-b border-[#E8E3DB] pb-4">
          Property Highlights
        </h2>
        <div className="flex flex-wrap gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-[#2D4032] text-white px-6 py-2 rounded-full text-sm font-bold shadow-sm"
            >
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* Full Amenities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-instrument-serif border-b border-[#E8E3DB] pb-4">
          Essential Amenities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 text-[#1A1A1A]/80"
            >
              <div className="text-[#C5A059]">
                <Check size={18} />
              </div>
              <span className="text-sm font-medium">{amenity}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

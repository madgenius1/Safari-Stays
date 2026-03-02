// pages/airport-transfers.tsx
import { RateCalculator } from "@/src/components/transfers/RateCalculator";

export default function AirportTransfers() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <header className="py-24 px-6 text-center bg-[#C5A059] text-white">
        <h1 className="text-5xl font-instrument-serif mb-4">Airport Transfers</h1>
        <p className="text-white/80 max-w-4xl mx-auto">
          Premium chauffeur services for JKIA and Wilson Airport.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-start">
        <RateCalculator title="Airport Transfer" defaultDistance={25} />
        
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-instrument-serif mb-4 text-[#1A1A1A]">Luxury Arrival Experience</h2>
            <p className="text-gray-600 leading-relaxed">
              Skip the long taxi queues. Our airport transfer service covers all major hotels in Nairobi, 
              Westlands, and Karen. Whether you are arriving at JKIA or catching a domestic flight at Wilson, 
              we ensure a seamless transition.
            </p>
          </section>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-xl">
            <h4 className="font-bold text-[#C5A059] uppercase tracking-tighter mb-4 text-xs">Recommended Routes</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>JKIA to Westlands</span>
                <span className="font-mono italic">~ 22km</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Wilson to Karen</span>
                <span className="font-mono italic">~ 12km</span>
              </div>
              <div className="flex justify-between">
                <span>JKIA to CBD</span>
                <span className="font-mono italic">~ 16km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
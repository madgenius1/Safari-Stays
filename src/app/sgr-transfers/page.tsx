// pages/sgr-transfers.tsx
import { RateCalculator } from "@/src/components/transfers/RateCalculator";


export default function SGRTransfers() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <header className="py-24 px-6 text-center bg-[#1A1A1A] text-white">
        <h1 className="text-5xl font-instrument-serif mb-4">SGR Station Transfers</h1>
        <p className="text-gray-400 max-w-4xl mx-auto">
          Punctual pickups from Syokimau (Nairobi) and Miritini (Mombasa) Terminals.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-instrument-serif mb-4 text-[#1A1A1A]">Never Miss Your Train</h2>
            <p className="text-gray-600">
              We coordinate our pickups with the Madaraka Express schedules. Our drivers wait at the 
              designated passenger exit with a personalized name board.
            </p>
          </section>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Flight-style Meet & Greet', 'Luggage Assistance', 'Door-to-door service', 'Real-time monitoring'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <RateCalculator title="SGR Transfer" defaultDistance={18} />
      </div>
    </main>
  );
}
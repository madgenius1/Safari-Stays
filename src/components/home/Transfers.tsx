import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Transfers() {
    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="max-w-360 mx-auto px-6">
                <div className="flex flex-col gap-12 mb-16">
                    <div className="max-w-4xl">
                        <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm block mb-3">
                            Seamless Travel
                        </span>
                        <h2 className="text-4xl md:text-5xl font-instrument-serif font-medium text-[#1A1A1A] leading-tight">
                            Reliable Transfers from Airports and SGR Across Kenya.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Airport Transfers Link */}
                        <Link href="/airport-transfers" className="group block rounded-md shadow-md p-4 bg-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                                    Airport Pickups and Transfers
                                </h3>
                                <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Professional chauffeur services from JKIA, Wilson, and Moi International Airport. We track your flight to ensure timely arrivals.
                            </p>
                        </Link>

                        {/* SGR Transfers Link */}
                        <Link href="/sgr-transfers" className="group block rounded-md shadow-md p-4 bg-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                                    SGR Station Transfers
                                </h3>
                                <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Hassle-free door-to-door connections from Syokimau, Miritini, and other major terminals across the Madaraka Express line.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
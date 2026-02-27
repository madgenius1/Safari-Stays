"use client";

import { use } from "react";
import { properties } from "../../../lib/mockData";
import ImageGallery from "@/src/components/property-detail/ImageGallery";
// import StatsBar from "../../../components/property-detail/StatsBar";
import BookingPanel from "@/src/components/property-detail/BookingPanel";
import AmenitiesList from "@/src/components/property-detail/AmenitiesList";
import Testimonials from "../../../components/home/Testimonials";
import { MapPin, ArrowLeft, Clock, Shield, Info } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default function PropertyDetailPage({ params }: PageProps) {

  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  // const { slug } = use(params);

  const property = properties.find((p) => p.slug === slug);
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center">
          <h1 className="text-4xl font-instrument-serif mb-4">
            Property Not Found
          </h1>
          <a href="/stays" className="text-[#C5A059] font-bold">
            Back to Stays
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 pb-20">
      <div className="max-w-360 mx-auto px-6">
        {/* Navigation / Breadcrumbs */}
        <div className="mb-8">
          <a
            href="/stays"
            className="inline-flex items-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to All Stays
          </a>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-4">
            <MapPin size={14} className="mr-1" />
            {property.location.area}
          </div>
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-[#1A1A1A] mb-4">
            {property.name}
          </h1>
          <p className="text-xl text-[#1A1A1A]/60 italic font-instrument-serif">
            {property.tagline}
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery images={property.images} />

        {/* Main Content Area */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* <StatsBar
              capacity={property.capacity}
              wifiSpeed={property.wifiSpeed}
            /> */}

            <section className="space-y-6">
              <h2 className="text-3xl font-instrument-serif border-b border-[#E8E3DB] pb-4">
                About this place
              </h2>
              <div className="prose prose-lg text-[#1A1A1A]/80 max-w-none leading-relaxed">
                {property.description}
              </div>
            </section>

            <AmenitiesList
              amenities={property.amenities}
              highlights={property.highlights}
            />

            <section className="space-y-6">
              <h2 className="text-3xl font-instrument-serif border-b border-[#E8E3DB] pb-4">
                House Rules & Safety
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-[#1A1A1A]/80">
                    <Clock size={18} className="text-[#C5A059]" />
                    <span className="text-sm">Check-in: After 2:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#1A1A1A]/80">
                    <Clock size={18} className="text-[#C5A059]" />
                    <span className="text-sm">Check-out: 11:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#1A1A1A]/80">
                    <Shield size={18} className="text-[#C5A059]" />
                    <span className="text-sm">
                      Verified Security on Premises
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB] space-y-3">
                  <h4 className="font-bold flex items-center space-x-2">
                    <Info size={16} className="text-[#C5A059]" />
                    <span>Important to note</span>
                  </h4>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    This property has specific seasonal rates. Please use the
                    booking panel to see festive and off-peak pricing.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-instrument-serif border-b border-[#E8E3DB] pb-4">
                Recent Guest Reviews
              </h2>
              <Testimonials />
            </section>
          </div>

          {/* Right Column: Sticky Booking Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingPanel property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

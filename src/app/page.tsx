'use client'

import Hero from "../components/home/Hero";
import VibeSelector from "../components/home/VibeSelector";
import NewsletterCTA from "../components/home/NewsletterCTA";
import FeaturedProperties from "../components/home/FeaturedProperties";
import TrustBar from "../components/home/TrustBar";
import Testimonials from "../components/home/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VibeSelector />
      <FeaturedProperties />
      <TrustBar />
      <Testimonials />
      <NewsletterCTA />
    </div>
  );
}

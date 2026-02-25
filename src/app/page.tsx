import Hero from "../components/home/Hero";
import VibeSelector from "../components/home/VibeSelector";
import FeaturedStays from "../components/home/FeaturedStays";
import TrustBar from "../components/home/TrustBar";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VibeSelector />
      <FeaturedStays />
      <TrustBar />
      <Testimonials />
      <CTASection />
    </div>
  );
}

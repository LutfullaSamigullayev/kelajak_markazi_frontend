import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DirectionsSection from "@/components/DirectionsSection";
import FeaturedClubs from "@/components/FeaturedClubs";
import RegionalMapSection from "@/components/RegionalMapSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <StatsSection />
      <DirectionsSection />
      <FeaturedClubs />
      <RegionalMapSection />
      <NewsSection />
    </div>
  );
}

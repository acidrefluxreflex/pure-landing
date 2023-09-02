import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import OverviewSection from "@/components/sections/OverviewSection";
import GetStartSection from "@/components/sections/GetStartSecton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <OverviewSection />
        <FeatureSection />
        <StrengthsSection />
        <TestimonialSection />
        <FAQSection />
        <GetStartSection />
      </div>
    </main>
  );
}

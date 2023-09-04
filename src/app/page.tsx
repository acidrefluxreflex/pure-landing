import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import OverviewSection from "@/components/sections/OverviewSection";
import GetStartSection from "@/components/sections/GetStartSection";
import ContactSection from "@/components/sections/ContactSection";
import App from "@/components/shared/FramerTextLine";

export const metadata: Metadata = {
  title: "Zeboot",
  description: "Block Sexual Content on the Web",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
  
      <div className="lg:max-w-7xl md:max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <OverviewSection />
        <StrengthsSection />
        <FeatureSection />

        <FAQSection />
        <GetStartSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  );
}

"use client";

import ParallaxGallery from "@/components/boutique/ParallaxGallery";
import AgencyBlock from "@/components/boutique/AgencyBlock";
import SplitSection from "@/components/boutique/SplitSection";
import LayoutSection from "@/components/boutique/LayoutSection";
import { useParallax } from "@/components/boutique/hooks/useParallax";
import { useHorizontalScroll } from "@/components/boutique/hooks/useHorizontalScroll";

export default function Page() {
  useParallax();
  useHorizontalScroll();

  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden">
      <ParallaxGallery />

      <section className="relative min-h-screen">
        <AgencyBlock />
        <SplitSection /> {/* ScrollText is inside this */}
      </section>

      <LayoutSection />
    </div>
  );
}
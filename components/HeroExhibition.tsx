"use client";
import Footer from "@/components/Footer";
import Lottie from "lottie-react";
import animationData from "../public/assets/lottie/audio-bg.json.json";
import LifestyleSplitCards from "@/components/LifestyleSplitCards";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white min-h-screen overflow-hidden">

      {/* 🔥 SHARED BACKGROUND SECTION */}
      <section className="relative">

        {/* ✅ LOTTIE BACKGROUND (ONLY HERE) */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Lottie animationData={animationData} loop autoplay />
        </div>

        {/* ✅ DARK OVERLAY */}
        <div className="absolute inset-0 bg-slate-900/90 z-0" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10">

          {/* HERO */}
          <div className="min-h-screen flex items-center justify-center text-center px-3">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              Lifestyle <span className="text-amber-400">Home Audio</span>
            </h1>

          </div>
          {/* 🔥 CARDS (NO BACKGROUND HERE) */}
          <LifestyleSplitCards />
        </div>
      </section>
    </main>
  );
}
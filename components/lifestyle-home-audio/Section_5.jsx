"use client";

import Image from "next/image";

export default function Section_5() {
  return (
    <>
      <section className="relative w-full h-screen md:h-screen overflow-hidden">

        {/* 🔥 BACKGROUND IMAGE (ONLY DESKTOP) */}
        <div className="hidden md:block">
          <Image
            src="/assets/lottie/3.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* 🔥 OVERLAY (ONLY DESKTOP) */}
        <div className="hidden md:block absolute inset-0 bg-black/20 z-0" />

        {/* 🔥 GRID */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 h-auto md:h-full">

          {/* CARD 1 */}
          <a className="aspect-square bg-[#e5e1d8]/90 backdrop-blur-md flex items-center justify-center">
            Card 1
          </a>

          {/* CARD 2 */}
          <a className="aspect-square bg-[#c9904a]/90 backdrop-blur-md text-white flex items-center justify-center">
            Card 2
          </a>

          {/* TOP RIGHT EMPTY (ONLY DESKTOP) */}
          <div className="hidden md:block md:col-span-2" />

          {/* CARD 3 */}
          <a className="col-span-2 md:col-span-1 min-h-[200px] md:min-h-0 bg-[#2f3a3a]/90 backdrop-blur-md text-white flex items-center justify-center">
            Card 3
          </a>

          {/* BOTTOM EMPTY (ONLY DESKTOP) */}
          <div className="hidden md:block md:col-span-3" />

        </div>

      </section>

      {/* ✅ LOCAL CSS (SAFE) */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
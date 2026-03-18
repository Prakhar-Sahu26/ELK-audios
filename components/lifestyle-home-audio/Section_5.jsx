"use client";

import Image from "next/image";

export default function Section_5() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src="/assets/lottie/3.jpeg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* 🔥 GRID */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

        {/* TOP LEFT CARD */}
        <a className="bg-[#e5e1d8]/90 backdrop-blur-md flex items-center justify-center">
          Card 1
        </a>

        {/* TOP MIDDLE CARD */}
        <a className="bg-[#c9904a]/90 backdrop-blur-md text-white flex items-center justify-center">
          Card 2
        </a>

        {/* TOP RIGHT EMPTY */}
        <div className="col-span-2" />

        {/* BOTTOM LEFT CARD */}
        <a className="bg-[#2f3a3a]/90 backdrop-blur-md text-white flex items-center justify-center">
          Card 3
        </a>

        {/* BOTTOM EMPTY SPACE */}
        <div className="col-span-3" />

      </div>

    </section>
  );
}
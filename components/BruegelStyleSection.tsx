"use client";

import Image from "next/image";

export default function BruegelStyleSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE (ONLY ONCE) */}
      <Image
        src="/assets/lottie/HeroEx.svg" // replace with your image
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* 🔥 GRID CONTENT */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

        {/* LEFT VIDEO BLOCK (2 ROWS) */}
        <a
          href="#"
          className="row-span-2 col-span-1 relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              ▶
            </div>
          </div>
        </a>

        {/* TOP CENTER EMPTY */}
        <div className="col-span-1 bg-[#e5e1d8]" />

        {/* TOP RIGHT ORANGE */}
        <a
          href="#"
          className="col-span-1 bg-[#c9904a] text-white p-6 flex flex-col justify-between"
        >
          <p className="text-lg">
            How was a panel painting created in the 16th century?
          </p>
          <span className="text-xs opacity-70">→ READ MORE</span>
        </a>

        {/* TOP FAR RIGHT LIGHT */}
        <a
          href="#"
          className="col-span-1 bg-[#e5e1d8] text-black p-6 flex flex-col justify-between"
        >
          <p className="text-lg">The Tower of Babel</p>
          <span className="text-xs opacity-70">→ READ MORE</span>
        </a>

        {/* BOTTOM LEFT IMAGE CONTINUE */}
        <div className="col-span-2" />

        {/* BOTTOM RIGHT DARK CARD */}
        <a
          href="#"
          className="col-span-1 bg-[#2f3a3a] text-white p-6 flex flex-col justify-between"
        >
          <p className="text-lg">New Dimensions</p>
          <span className="text-xs opacity-70">→ READ MORE</span>
        </a>

      </div>

    </section>
  );
}
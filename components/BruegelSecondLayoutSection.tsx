"use client";

import Image from "next/image";

export default function BruegelSecondLayoutSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <Image
        src="/assets/lottie/bg-cardCover.png" // use a DIFFERENT image
        alt="Background"
        fill
        className="object-cover"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* 🔥 GRID (DIFFERENT FROM FIRST ONE) */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

        {/* TOP LEFT WIDE CARD */}
        <a
          href="#"
          className="col-span-2 bg-[#2f3a3a] text-white p-8 flex items-center"
        >
          <p className="text-lg md:text-xl">
            Designed for immersive living experiences through sound.
          </p>
        </a>

        {/* TOP RIGHT SMALL CARD */}
        <a
          href="#"
          className="bg-[#e5e1d8] text-black p-6 flex items-center justify-center"
        >
          About Us
        </a>

        {/* TOP FAR RIGHT EMPTY */}
        <div />

        {/* BOTTOM LEFT VIDEO */}
        <a
          href="#"
          className="col-span-2 relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              ▶
            </div>
          </div>
        </a>

        {/* BOTTOM MID CARD */}
        <a
          href="#"
          className="bg-[#c9904a] text-white p-6 flex flex-col justify-between"
        >
          <p className="text-lg">Projects</p>
          <span className="text-xs opacity-70">→ VIEW</span>
        </a>

        {/* BOTTOM RIGHT EMPTY */}
        <div />

      </div>

    </section>
  );
}
"use client";

import Image from "next/image";

export default function Section_2() {
  return (
    <section className="relative w-full overflow-hidden md:h-screen">

      {/* ================= MOBILE ================= */}
      {/* ================= MOBILE ================= */}
<div className="md:hidden relative w-full aspect-[1/2] overflow-hidden">

  {/* 🔥 TOP BACKGROUND (ROWS 1–2) */}
  <div className="absolute top-0 left-0 w-full h-1/2">
    <Image
      src="/assets/lottie/1.jpeg" // 🔁 change image
      alt="Top Background"
      fill
      className="object-cover"
    />
  </div>

  {/* 🔥 BOTTOM BACKGROUND (ROWS 3–4) */}
  <div className="absolute bottom-0 left-0 w-full h-1/2">
    <Image
      src="/assets/lottie/3.jpg" // 🔁 change image
      alt="Bottom Background"
      fill
      className="object-cover"
    />
  </div>

  {/* 🔥 OVERLAY (optional for readability) */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  {/* 🔥 GRID */}
  <div className="relative z-10 grid grid-cols-2 grid-rows-4 h-full">

    {/* 1 EMPTY */}
    <div />

    {/* 2 TOP CARD */}
    <a className="bg-[#4a5a5a]/90 backdrop-blur-md text-white p-4 flex flex-col justify-between">
      <p className="text-sm">Neue Maßstäbe</p>
      <span className="text-xs opacity-70">→ MEHR LESEN</span>
    </a>

    {/* 3 EMPTY */}
    <div />

    {/* 4 EMPTY */}
    <div />

    {/* 5 IMAGE CARD */}
    <div className="relative overflow-hidden">
      <Image
        src="/assets/lottie/painting.jpg"
        alt=""
        fill
        className="object-cover"
      />
    </div>

    {/* 6 VIDEO (SPAN 2 ROWS) */}
    <div className="row-span-2 relative overflow-hidden">
      <Image
        src="/assets/lottie/video-thumb.jpg"
        alt=""
        fill
        className="object-cover"
      />

      {/* PLAY */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          ▶
        </div>
      </div>
    </div>

    {/* 7 RED CARD */}
    <a className="bg-[#c44532]/90 backdrop-blur-md text-white p-4 flex flex-col justify-between">
      <p className="text-sm">Radikale Details</p>
      <span className="text-xs opacity-70">→ MEHR LESEN</span>
    </a>

    {/* 8 EMPTY */}
    <div />

  </div>
</div>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-full">

        {/* 🔥 BACKGROUND IMAGE (UNCHANGED) */}
        <Image
          src="/assets/lottie/2.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* 🔥 ORIGINAL GRID (UNCHANGED) */}
        <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

          {/* LEFT VIDEO BLOCK */}
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

          {/* EMPTY */}
          <div className="col-span-1 bg-[#e5e1d8]" />

          {/* ORANGE */}
          <a className="col-span-1 bg-[#c9904a] text-white p-6 flex flex-col justify-between">
            <p className="text-lg">
              How was a panel painting created in the 16th century?
            </p>
            <span className="text-xs opacity-70">→ READ MORE</span>
          </a>

          {/* LIGHT */}
          <a className="col-span-1 bg-[#e5e1d8] text-black p-6 flex flex-col justify-between">
            <p className="text-lg">The Tower of Babel</p>
            <span className="text-xs opacity-70">→ READ MORE</span>
          </a>

          {/* IMAGE CONTINUE */}
          <div className="col-span-2" />

          {/* DARK CARD */}
          <a className="col-span-1 bg-[#2f3a3a] text-white p-6 flex flex-col justify-between">
            <p className="text-lg">New Dimensions</p>
            <span className="text-xs opacity-70">→ READ MORE</span>
          </a>

        </div>
      </div>

    </section>
  );
}
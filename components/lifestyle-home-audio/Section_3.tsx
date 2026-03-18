"use client";

import Image from "next/image";

export default function Section_2() {
  return (
    <div className="relative w-full h-[60%]">

      {/* 🔥 BACKGROUND */}
      <Image
        src="/assets/lottie/slider1.jpg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🔥 GRID */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-3 h-full">

        {/* ===== ROW 1 ===== */}
        <div />
        <div />

        <a className="aspect-square bg-[#e5e1d8] flex items-center justify-center">
          Ticket Info
        </a>

        <a className="aspect-square bg-[#6b2c1f] text-white p-4 flex items-start">
          Tickets & Info
        </a>

        {/* ===== ROW 2 (EMPTY) ===== */}
        <div className="col-span-4" />

        {/* ===== ROW 3 ===== */}
        <a className="col-span-2 aspect-[2/1] bg-[#c9904a] text-white p-6">
          Musikstück
        </a>

        <div className="aspect-square flex items-center justify-center text-white">
          ● ● ●
        </div>

        <div />

      </div>
    </div>
  );
}
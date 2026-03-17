"use client";

import Image from "next/image";

export default function LifestyleSplitCards() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <Image
        src="/assets/lottie/bg-cardCover.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-slate-900/60 z-0" />

      {/* 🔥 GRID */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

        {/* EMPTY */}
        <div className="col-span-2" />

        {/* GREEN */}
        <a
          href="#"
          className="col-span-2 bg-[#2f4f3f]/80 backdrop-blur-md 
                     text-white flex items-center justify-center text-center px-6"
        >
          Premium lifestyle audio systems designed to transform your living space.
        </a>

        {/* WHITE */}
        <a
          href="#"
          className="bg-[#e5e1d8]/90 backdrop-blur-md text-black 
                     flex items-center justify-center"
        >
          Who is
        </a>

        {/* BEIGE */}
        <a
          href="#"
          className="bg-[#c8b8a6]/90 backdrop-blur-md text-black 
                     flex items-center justify-center"
        >
          Lifestyle Audio
        </a>

        {/* EMPTY */}
        <div className="col-span-2" />

      </div>

    </section>
  );
}
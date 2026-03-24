"use client";

import Image from "next/image";

export default function Section_4() {
  return (
    <div className="w-full">

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block w-full h-[40%]">

        <div className="grid grid-cols-4 grid-rows-2 h-full">

          {/* LEFT TOP CARD */}
          <a className="aspect-square bg-[#3b2a1f] text-white p-4 flex items-end">
            Bruegel barrierefrei
          </a>

          {/* VIDEO (3x2) */}
          <a className="col-span-3 row-span-2 relative overflow-hidden bg-black">

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/lifestyle/cards/earbuds_video.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

            </div>

          </a>

          {/* LEFT BOTTOM CARD */}
          <a className="aspect-square bg-[#e5e1d8] flex items-center justify-center">
            <Image
              src="/assets/lottie/character.png"
              alt="Character"
              width={100}
              height={100}
            />
          </a>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full aspect-[2/3]">

        <div className="grid grid-cols-2 grid-rows-3 h-full">

          {/* 🔥 VIDEO (ROWS 1–2 FULL WIDTH) */}
          <a className="col-span-2 row-span-2 relative overflow-hidden">

            <Image
              src="/assets/lottie/video-thumb.jpg"
              alt="Video"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* PLAY */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>

          </a>

          {/* 🔥 BOTTOM LEFT CARD */}
          <a className="aspect-square bg-[#3b2a1f] text-white flex items-end justify-center p-4">
            Bruegel barrierefrei
          </a>

          {/* 🔥 BOTTOM RIGHT CARD */}
          <a className="aspect-square bg-[#e5e1d8] flex items-center justify-center">
            <Image
              src="/assets/lottie/character.png"
              alt="Character"
              width={80}
              height={80}
            />
          </a>

        </div>
      </div>

    </div>
  );
}
"use client";

import Image from "next/image";

export default function Section_4() {
  return (
    <div className="w-full h-[40%]">

      <div className="grid grid-cols-4 grid-rows-2 h-full">

        {/* LEFT TOP CARD */}
        <a className="aspect-square bg-[#3b2a1f] text-white p-4 flex items-end">
          Bruegel barrierefrei
        </a>

        {/* VIDEO (3x2) */}
        <a className="col-span-3 row-span-2 relative overflow-hidden">

          <Image
            src="/assets/lottie/video-thumb.jpg"
            alt="Video"
            fill
            className="object-cover"
          />

          {/* PLAY */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              ▶
            </div>
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
  );
}
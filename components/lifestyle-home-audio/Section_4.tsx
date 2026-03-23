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
          <a className="col-span-3 row-span-2 relative overflow-hidden">

            <video
              src="https://audiopro.com/cdn/shop/videos/c/vp/16141f6d9f0944bca320d1f565a049f9/16141f6d9f0944bca320d1f565a049f9.HD-720p-3.0Mbps-49552585.mp4?v=0"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
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
              src="https://audiopro.com/cdn/shop/files/wireless-multiroom-speaker-C10MkII-W-airplay2-google-cast-chromecast-AudioPro-white_2.png?v=1758186661&width=1790"
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

            <video
              src="https://audiopro.com/cdn/shop/videos/c/vp/16141f6d9f0944bca320d1f565a049f9/16141f6d9f0944bca320d1f565a049f9.HD-720p-3.0Mbps-49552585.mp4?v=0"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
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
              src="https://audiopro.com/cdn/shop/files/wireless-multiroom-speaker-C10MkII-W-airplay2-google-cast-chromecast-AudioPro-white_2.png?v=1758186661&width=1790"
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
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Section_3() {
  const images = [
    "/assets/Sec-3(slider_1).webp",
    "/assets/Sec-3(slider_2).webp",
    "/assets/Sec-3(slider_3).webp"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative w-full h-[60%]">

        {/* 🔥 BACKGROUND SLIDER */}
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* 🔥 GRID */}
        <div className="relative z-10 grid grid-cols-4 grid-rows-3 h-full">

          <div />
          <div />

          <a className="aspect-square bg-[#e5e1d8] flex items-center justify-center">
            Ticket Info
          </a>

          <a className="aspect-square bg-[#6b2c1f] text-white p-4 flex items-start">
            Tickets & Info
          </a>

          <div className="col-span-4" />

          {/* ✅ FIXED BIG CARD */}
          <a className="col-span-2 h-full bg-[#c9904a] text-white flex items-center justify-center">
            Musikstück
          </a>

          {/* CONTROLLER */}
          <div className="aspect-square flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <div />

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative w-full aspect-[2/3] overflow-hidden">

        {/* 🔥 BACKGROUND SLIDER (FIXED) */}
        <div className="absolute top-[20%] left-0 w-full h-[80%] overflow-hidden">
          {images.map((img, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-[5000ms] ease-in-out ${
      index === current ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
          <Image
            key={index}
            src={img}
            alt="Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
  </div>
))}

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* 🔥 GRID */}
        <div className="relative z-10 grid grid-cols-2 grid-rows-5 h-full">

          {/* ROW 1 */}
          <a className="aspect-square bg-[#e5e1d8] flex items-center justify-center">
            Ticket Info
          </a>

          <a className="aspect-square bg-[#6b2c1f] text-white flex items-center justify-center">
            Tickets & Info
          </a>

          {/* ROW 2 */}
          <div />
          <div />

          {/* ROW 3 */}
          <div />
          <div />

          {/* ROW 4 (CONTROLLER CENTERED PERFECTLY) */}
          <div />
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* ROW 5 (FIXED HEIGHT MATCH) */}
          <a className="col-span-2 h-full bg-[#c9904a] text-white flex items-center justify-center">
            Musikstück
          </a>

        </div>
      </div>

    </div>
  );
}
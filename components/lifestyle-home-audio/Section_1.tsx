"use client";

import Image from "next/image";
import { useState } from "react";
import { lifestyleCards } from "@/data/lifestyleCards";

export default function Section_1() {
  const [hovered, setHovered] = useState<string | null>(null);

  const main = lifestyleCards[0];
  const who = lifestyleCards[1];
  const lifestyle = lifestyleCards[2];

  return (
    <section className="relative w-full overflow-hidden md:h-screen">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full aspect-[1/1] flex flex-col">

  {/* GREEN */}
  <a className="bg-[#2f4f3f]/80 flex-1 relative overflow-hidden">
    <Image src={main.image} alt={main.title} fill className="object-cover" />
    <div className="absolute inset-0 bg-black/20" />
      <p className="relative z-10">{main.title}</p>
  </a>

  {/* WHITE + BEIGE */}
  <div className="flex flex-1">

    <a className="bg-[#e5e1d8]/90 w-1/2 relative overflow-hidden">
      <Image src={who.image} alt={who.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <p className="relative z-10">{who.title}</p>
    </a>

    <a className="bg-[#c8b8a6]/90 w-1/2 relative overflow-hidden">
      <Image src={lifestyle.image} alt={lifestyle.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <p className="relative z-10">{lifestyle.title}</p>
    </a>

  </div>
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-full">

        {/* BACKGROUND */}
        <Image
          src="https://www.bowerswilkins.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Sites-master-catalog-soundunited/default/dwb67ac7bc/bowers/PDP/Formation-Duo/Formation-Duo-Black/Formation-Duo-Black_Image_4.jpg?sw=2160"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 z-0" />

        {/* GRID (UNCHANGED STRUCTURE) */}
        <div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

          {/* EMPTY */}
          <div className="col-span-2" />

          {/* GREEN */}
          <a
            href={main.link}
            onMouseEnter={() => setHovered(main.id)}
            onMouseLeave={() => setHovered(null)}
            className="col-span-2 bg-[#2f4f3f]/80 backdrop-blur-md text-white flex items-center justify-center text-center px-6 relative overflow-hidden"
          >
            {main.video && hovered === main.id ? (
              <video
                src={main.video}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={main.image}
                alt={main.title}
                fill
                className="object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black/40" />
            <p className="relative z-10">{main.title}</p>
          </a>

          {/* WHITE */}
          <a
            href={who.link}
            onMouseEnter={() => setHovered(who.id)}
            onMouseLeave={() => setHovered(null)}
            className="bg-[#e5e1d8]/90 backdrop-blur-md text-black flex items-center justify-center relative overflow-hidden"
          >
            {who.video && hovered === who.id ? (
              <video
                src={who.video}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={who.image}
                alt={who.title}
                fill
                className="object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black/20" />
            <p className="relative z-10 font-medium">{who.title}</p>
          </a>

          {/* BEIGE */}
          <a
            href={lifestyle.link}
            onMouseEnter={() => setHovered(lifestyle.id)}
            onMouseLeave={() => setHovered(null)}
            className="bg-[#c8b8a6]/90 backdrop-blur-md text-black flex items-center justify-center relative overflow-hidden"
          >
            {lifestyle.video && hovered === lifestyle.id ? (
              <video
                src={lifestyle.video}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={lifestyle.image}
                alt={lifestyle.title}
                fill
                className="object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black/20" />
            <p className="relative z-10 font-medium">{lifestyle.title}</p>
          </a>

          {/* EMPTY */}
          <div className="col-span-2" />

        </div>
      </div>

    </section>
  );
}
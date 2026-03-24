"use client";

import Image from "next/image";
import { useState } from "react";
import { lifestyleCards } from "@/data/lifestyleCards";

export default function Section_2() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const who = lifestyleCards[1];
  const lifestyle = lifestyleCards[2];

  return (
    <section className="relative w-full overflow-hidden md:h-screen">

      {/* ================= DESKTOP BACKGROUND ================= */}
      <div className="hidden md:block absolute inset-0 bg-[#0f172a] z-0" />

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative w-full aspect-[1/2] overflow-hidden z-10">

        {/* BACKGROUNDS */}
        <div className="absolute top-0 left-0 w-full h-1/2">
          <Image
            src="/assets/lifestyle/background/Klipsch-R-41PM-best-powered-monitors-with-TV.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <Image
            src="/assets/lottie/3.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* GRID */}
        <div className="relative z-10 grid grid-cols-2 grid-rows-4 h-full">

          <div />

          {/* CARD 1 */}
          <a className="group bg-[#3f3f3f]/80 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/formationbass.png"
              alt={who.title}
              fill
              className="object-cover scale-90 transition duration-500 group-hover:scale-100"
            />
          </a>

          <div />
          <div />

          {/* CARD 2 */}
          <a className="group bg-[#1f2933]/70 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/black-earbuds.png"
              alt={lifestyle.title}
              fill
              className="object-cover scale-80 transition duration-500 group-hover:scale-100"
            />
          </a>

          <div />

          {/* CARD 3 */}
          <a className="group bg-[#5a4636]/80 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/egg-speaker.png"
              alt={who.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </a>

          {/* CARD 4 */}
          <a className="group bg-[#2a1f1a]/80 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/black-speaker.png"
              alt={who.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </a>
        </div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="relative z-10 hidden md:grid grid-cols-4 grid-rows-2 h-full">

        {/* LEFT SPACE */}
        <div className="row-span-2 col-span-1" />

        {/* CARD 1 */}
        <div className="group bg-[#3f3f3f] relative overflow-hidden">
          <Image
            src="/assets/lifestyle/cards/formationbass.png"
            alt={who.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* CARD 2 */}
        <div className="group bg-[#1f2933] relative overflow-hidden">
          <Image
            src="/assets/lifestyle/cards/white-headphone.png"
            alt={who.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* CARD 3 */}
        <div className="group bg-[#5a4636] relative overflow-hidden">
          <Image
            src="/assets/lifestyle/cards/Formation-Wedge-Black_Image_4.jpg"
            alt={who.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* EMPTY SPACE */}
        <div className="col-span-2" />

        {/* CARD 4 */}
        <div className="group bg-[#2a1f1a] relative overflow-hidden">
          <Image
            src="/assets/lifestyle/cards/black-speaker.png"
            alt={who.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

      </div>
    </section>
  );
}
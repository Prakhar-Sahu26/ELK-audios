"use client";

import Image from "next/image";
import { useState } from "react";
import { lifestyleCards } from "@/data/lifestyleCards";

export default function Section_2() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const main = lifestyleCards[0];
  const who = lifestyleCards[1];
  const lifestyle = lifestyleCards[2];

  return (
    <section className="relative w-full overflow-hidden md:h-screen">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative w-full aspect-[1/2] overflow-hidden">

        {/* BACKGROUNDS */}
        <div className="absolute top-0 left-0 w-full h-1/2">
          <Image src="/assets/lifestyle/background/Klipsch-R-41PM-best-powered-monitors-with-TV.webp" alt="" fill className="object-cover scale-100" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <Image src="/assets/lottie/3.jpeg" alt="" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* GRID */}
        <div className="relative z-10 grid grid-cols-2 grid-rows-4 h-full">

          <div />
          {/* GREEN (UNCHANGED) */}
          <a className="group bg-[#3f3f3f]/8  0 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/formationbass.png"
              alt={who.title}
              fill
              className="object-cover scale-90 transition duration-500 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-2">
              {who.title}
            </p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-2">
              {lifestyle.title}
            </p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-2">
              {who.title}
            </p>
          </a>
          {/* CARD 4 */}
          <a className="group bg-[#2a1f1a]/80 relative overflow-hidden">
            <Image
              src="/assets/lifestyle/cards/black-speaker.png"
              alt={who.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-2">
              {who.title}
            </p>
          </a>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-full">

        {/* BACKGROUND */}
        <Image
          src="/assets/lifestyle/background/backgorund__.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-0" />

        {/* GRID */}
        {/* GRID */}
<div className="relative z-10 grid grid-cols-4 grid-rows-2 h-full">

  {/* LEFT BLOCK */}
  <div className="row-span-2 col-span-1 relative overflow-hidden" />

  {/* CARD 1 */}
  <div className="group bg-[#3f3f3f] opacity-75 hover:opacity-100 backdrop-blur-md relative overflow-hidden">
    <Image
      src="/assets/lifestyle/cards/formationbass.png"
      alt={who.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
    <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-4">
      {who.title}
    </p>
  </div>

  {/* CARD 2 */}
  <div className="group bg-[#1f2933] opacity-75 hover:opacity-100 backdrop-blur-md relative overflow-hidden">
    <Image
      src="/assets/lifestyle/cards/black-earbuds.png"
      alt={who.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
    <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-4">
      {who.title}
    </p>
  </div>

  {/* CARD 3 */}
  <div className="group bg-[#5a4636] opacity-85 hover:opacity-100 backdrop-blur-md relative overflow-hidden">
    <Image
      src="/assets/lifestyle/cards/egg-speaker.png"
      alt={who.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
    <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-4">
      {who.title}
    </p>
  </div>

  {/* EMPTY SPACE */}
  <div className="col-span-2" />

  {/* CARD 4 */}
  <div className="group bg-[#2a1f1a] opacity-95 hover:opacity-100 backdrop-blur-md relative overflow-hidden">
    <Image
      src="/assets/lifestyle/cards/black-speaker.png"
      alt={who.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
    <p className="absolute inset-0 flex items-center justify-center text-white text-center z-10 opacity-0 group-hover:opacity-100 transition duration-300 px-4">
      {who.title}
    </p>
  </div>

</div>
      </div>
    </section>
  );
}
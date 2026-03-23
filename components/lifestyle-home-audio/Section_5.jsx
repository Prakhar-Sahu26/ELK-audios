"use client";

import Image from "next/image";

export default function Section_5() {
  return (
    <>
      <section className="relative w-full h-screen md:h-screen overflow-hidden">

        {/* 🔥 BACKGROUND IMAGE (ONLY DESKTOP) */}
        <div className="hidden md:block">
          <Image
            src="https://audiopro.com/cdn/shop/files/AP_Hero_-_Drumfire_W-2.jpg?v=1767867832&width=2000"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* 🔥 OVERLAY (ONLY DESKTOP) */}
        <div className="hidden md:block absolute inset-0 bg-black/20 z-0" />

        {/* 🔥 GRID */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 h-auto md:h-full">

          {/* CARD 1 */}
          <a className="aspect-square relative overflow-hidden backdrop-blur-md flex items-center justify-center">
            <Image
              src="https://cdn.shopify.com/s/files/1/0729/3072/2025/files/Jamo-C113-Bookshelf-Speaker-high-gloss-black-detail-840-840-1.png?v=1745560299&width=1800"
              alt="Card 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <span className="relative z-10 text-white">Card 1</span>
          </a>

          {/* CARD 2 */}
          <a className="aspect-square relative overflow-hidden backdrop-blur-md text-white flex items-center justify-center">
            <Image
              src="https://audiopro.com/cdn/shop/files/Hero-A10MkII-W.jpg?v=1759826413&width=2000"
              alt="Card 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <span className="relative z-10">Card 2</span>
          </a>

          {/* TOP RIGHT EMPTY (ONLY DESKTOP) */}
          <div className="hidden md:block md:col-span-2" />

          {/* CARD 3 */}
          <a className="col-span-2 md:col-span-1 min-h-[200px] md:min-h-0 relative overflow-hidden backdrop-blur-md text-white flex items-center justify-center">
            <Image
              src="https://audiopro.com/cdn/shop/files/Hero-A28W.jpg?v=1759223933&width=2000"
              alt="Card 3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <span className="relative z-10">Card 3</span>
          </a>

          {/* BOTTOM EMPTY (ONLY DESKTOP) */}
          <div className="hidden md:block md:col-span-3" />

        </div>

      </section>

      {/* ✅ LOCAL CSS (SAFE) */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
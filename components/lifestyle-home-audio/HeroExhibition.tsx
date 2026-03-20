"use client";
import LifestyleSplitCards from "@/components/lifestyle-home-audio/Section_1";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white min-h-screen overflow-x-hidden">

      <section className="relative w-full min-h-screen overflow-hidden">

        {/* 🔥 SVG BACKGROUND */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-slate-900/70 z-0" />

        <div className="relative z-10 flex flex-col">

          {/* ================= MOBILE VERSION ================= */}
          <div className="block md:hidden">
            <div className="
              relative
              min-h-[70vh]
              flex items-center justify-center 
              text-center 
              px-4
            ">
              <h1 className="
                font-bold tracking-tight leading-tight
                text-3xl
              ">
                Lifestyle{" "}
                <span className="text-amber-400 block">
                  Home Audio
                </span>
              </h1>

              <div className="
                absolute bottom-0 left-0 w-full 
                h-24 from-slate-900 to-transparent
              " />
            </div>
          </div>

          {/* ================= DESKTOP VERSION ================= */}
          <div className="hidden md:block">
            <div className="
              relative
              min-h-screen
              flex items-center justify-center 
              text-center 
              px-8
            ">
              <h1 className="
                font-bold tracking-tight leading-tight
                text-6xl lg:text-7xl xl:text-8xl
              ">
                Lifestyle{" "}
                <span className="text-amber-400 inline">
                  Home Audio
                </span>
              </h1>

              <div className="
                absolute bottom-0 left-0 w-full 
                h-40
                bg-gradient-to-t from-slate-900 to-transparent
              " />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
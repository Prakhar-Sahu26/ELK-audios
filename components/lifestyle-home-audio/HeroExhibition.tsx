"use client";
import LifestyleSplitCards from "@/components/lifestyle-home-audio/Section_1";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white min-h-screen overflow-x-hidden">

      <section className="relative w-full min-h-screen overflow-hidden">

        {/* 🔥 SVG BACKGROUND (BEST METHOD) */}
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

        {/* 🔥 CONTENT */}
        <div className="relative z-10 flex flex-col">

          {/* HERO */}
          <div className="
            relative
            min-h-[80vh] sm:min-h-screen
            flex items-center justify-center 
            text-center 
            px-4 sm:px-6 md:px-8
          ">

            <h1 className="
              font-bold tracking-tight leading-tight
              text-3xl 
              sm:text-4xl 
              md:text-6xl 
              lg:text-7xl 
              xl:text-8xl
            ">
              Lifestyle{" "}
              <span className="text-amber-400 block sm:inline">
                Home Audio
              </span>
            </h1>

            {/* 🔥 GRADIENT FADE */}
            <div className="
              absolute bottom-0 left-0 w-full 
              h-24 sm:h-32 md:h-40
              bg-gradient-to-t from-slate-900 to-transparent
            " />

          </div>
        </div>
      </section>
    </main>
  );
}
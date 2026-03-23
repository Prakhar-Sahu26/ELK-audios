"use client";
import LifestyleSplitCards from "@/components/lifestyle-home-audio/Section_1";

export default function Page() {
  return (
    <main className="m-0 p-0 w-screen h-screen bg-slate-900 text-white overflow-hidden">

      <section className="relative m-0 p-0 w-screen h-screen overflow-hidden">

        {/* 🔥 VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 w-[100vw] h-[100vh] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1067672001?background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Lifestyle home audio background video"
          />
        </div>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-slate-900/0 z-0" />

        <div className="relative z-10 flex flex-col">

          {/* ================= MOBILE VERSION ================= */}
          <div className="block md:hidden">
            <div className="
              relative
              min-h-[70vh]
              flex items-center justify-center 
              text-center 
              px-0
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
              px-0
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
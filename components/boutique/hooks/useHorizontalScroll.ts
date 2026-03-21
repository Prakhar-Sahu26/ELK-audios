import { useEffect } from "react";
import Lenis from "lenis";

export function useHorizontalScroll() {
  useEffect(() => {

    const init = () => {
      const textTracks = document.querySelectorAll(".text-track");
      const textWrapper = document.querySelector(".text-wrapper-container");

      if (!textWrapper || textTracks.length === 0) {
        requestAnimationFrame(init); // wait until mounted
        return;
      }

      let currentX = 50;
      let targetX = 50;

      const lenis = new Lenis({
        duration: 1.8,
        smoothWheel: true,
      });

      function onScroll(e: any) {
        const rect = (textWrapper as HTMLElement).getBoundingClientRect();
        const vh = window.innerHeight;

        const center = rect.top + rect.height / 2;

        const progress = Math.max(0, Math.min(1, 1 - center / vh));
        const eased = Math.pow(progress, 2.2);

        targetX = 50 - eased * 50;
      }

      lenis.on("scroll", onScroll);

      function raf(time: number) {
        lenis.raf(time);

        currentX += (targetX - currentX) * 0.06;

        textTracks.forEach((track) => {
          (track as HTMLElement).style.transform =
            `translateX(${currentX}%)`;
        });

        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    init();

  }, []);
}
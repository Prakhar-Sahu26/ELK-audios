import { useEffect } from "react";
import Lenis from "lenis";

export function useParallax() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    const images = document.querySelectorAll(".parallax-img");
    const currentY = new Map();

    const LERP = 0.08;

    function raf(time: number) {
      lenis.raf(time);

      images.forEach((img) => {
        const rect = img.parentElement!.getBoundingClientRect();
        const vh = window.innerHeight;

        const progress =
          (vh - rect.top) / (vh + rect.height);

        const clamped = Math.max(0, Math.min(1, progress));

        const maxTravel = rect.height * 1.5;
        const targetY = clamped * maxTravel;

        const prev = currentY.get(img) ?? targetY;
        const next = prev + (targetY - prev) * LERP;

        currentY.set(img, next);

        (img as HTMLElement).style.transform = `translateY(${next}px)`;
      });

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
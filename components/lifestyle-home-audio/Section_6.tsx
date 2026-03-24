"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Section_6() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const percentage = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
    setPosition(percentage);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    document.body.style.userSelect = isDragging ? "none" : "";
    return () => {
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  return (
    <section className="w-full bg-[#0f172a] py-8 md:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="relative mx-auto h-[38vh] w-[92vw] overflow-hidden rounded-xl bg-[#0f172a] touch-none select-none sm:h-[46vh] sm:w-[88vw] md:h-[60vh] md:w-[80vw]"
          onClick={(event) => updateFromClientX(event.clientX)}
        >
          <Image
            src="/assets/slider-1.png"
            alt="Before lifestyle home audio setup"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 768px) 88vw, 80vw"
            className="object-contain"
          />

          <Image
            src="/assets/slider-2.png"
            alt="After lifestyle home audio setup"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 768px) 88vw, 80vw"
            className="object-contain"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          />

          <div className="absolute left-4 top-4 z-20 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white sm:left-5 sm:top-5 sm:text-sm">
            Before
          </div>
          <div className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white sm:right-5 sm:top-5 sm:text-sm">
            After
          </div>

          <div
            role="slider"
            aria-label="Before and after image comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            className="absolute top-0 z-30 h-full w-8 -translate-x-1/2 cursor-ew-resize"
            style={{ left: `${position}%` }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                setPosition((prev) => clamp(prev - 2, 0, 100));
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                setPosition((prev) => clamp(prev + 2, 0, 100));
              }
            }}
          >
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white" />
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e0e0e0] bg-white text-[#666] shadow-md transition-transform duration-150 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
              >
                <polyline points="5,12 10,7 10,17" />
                <polyline points="19,12 14,7 14,17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

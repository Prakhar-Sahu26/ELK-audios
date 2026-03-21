"use client";

import styles from "./boutique.module.css";
import ScrollText from "./ScrollText";

const SPLIT_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85";

export default function SplitSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden mb-10">
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html.lenis,
    html.lenis body {
      height: auto;
    }
    .lenis.lenis-smooth {
      scroll-behavior: auto;
    }
    .lenis.lenis-smooth [data-lenis-prevent] {
      overscroll-behavior: contain;
    }
    .lenis.lenis-stopped {
      overflow: hidden;
    }
    .lenis.lenis-smooth iframe {
      pointer-events: none;
    }
    /* Ensure split section and images remain visible */
    .boutique-three-col__cell--wide {
      position: relative;
      z-index: 1;
    }

    .split-section {
      padding-left: 0;
      padding-bottom: 24px;
      /* Preserve desktop layout: 2 halves side-by-side */
      flex-direction: row;
      gap: 1px;
      align-items: flex-start;
    }

    .split-section .split {
      width: 50%;
      height: 60vh !important;
      /* Preserve desktop "split panorama" crop */
      background-size: 200% 130% !important;
    }

    .split-section .split.left {
      background-position: left center;
    }

    .split-section .split.right {
      /* Keep a constant stagger on phones */
      margin-top: 80px;
      background-position: right center;
    }
  }

  .split-section {
    display: flex;
    align-items: center;
    gap: 1px;
    width: 100%;
  }

  .split-section .split {
    width: 50%;
    background-repeat: no-repeat;
    background-size: 200% 150%;
    height: 90vh;
    margin-bottom: 17vh;
  }

  .split-section .split.left {
    background-position: left top;
    
  }

  .split-section .split.right {
    margin-top: 300px;
    background-position: right -150px;
    
  }
    
    .split-section {
      position: relative;
      z-index: 1;
    }

    /* Text wrapper container - positions both text elements */
    .text-wrapper-container {
      position: absolute;
      left: 0;
      top: 88vh;
      width: 100vw;
      height: 20vh;
      z-index: 3;
      pointer-events: none;
      overflow: visible;
    }

    /* Plain text wrapper - covers left 2/3 of viewport */
    .plain-text-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 66.666vw;
      height: 100%;
      z-index: 11;
      overflow: hidden;
      pointer-events: none;
      /* Clip to only show text in the plain area (left 2/3) */
    }

    /* Masked text wrapper - covers right 1/3 of viewport */
    .masked-text-wrapper {
      position: absolute;
      left: 66.666vw;
      /* Slightly raise the right-side (masked) text */
      top: -2vh;
      width: 33.333vw;
      height: 100%;
      z-index: 12;
      overflow: hidden;
      pointer-events: none;
      /* Clip to only show text in the image area (right 1/3) */
    }


    .text-track {
      position: absolute;
      /* Position both tracks at the same location relative to container */
      left: 0;
      top: 0;
      will-change: transform;
      transform: translateX(50%);
      width: 100vw;
      display: flex;
      align-items: flex-start;
      /* Both tracks align at the same position - positioned relative to their wrapper */
    }

    /* Ensure both text tracks align by positioning them relative to container */
    .plain-text-wrapper .text-track {
      position: absolute;
      left: 0;
      top: 0;
    }

    .masked-text-wrapper .text-track {
      position: absolute;
      left: -66.666vw; /* Offset to align with plain text track */
      top: 0;
    }

    /* Base text styles */
    .scroll-text {
      font-size: 12vw;
      font-weight: 600;
      white-space: nowrap;
      will-change: transform;
      font-family: var(--font-heading), sans-serif;
      line-height: 1.2;
      margin: 0;
      padding: 0;
      display: block;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    }

    /* Solid text - plain area */
    .scroll-text-solid {
      color: #fff !important;
      transform: translateY(-0.1em);
      opacity: 1;
    }
    /* Masked text - transparent fill with white outline only (right side) */
    .masked-text-outline {
      /* Force no fill color at all, only outline */
      color: transparent !important;
      -webkit-text-fill-color: transparent !important;
      /* Medium white outline */
      -webkit-text-stroke: 1.5px #ffffff;
      text-stroke: 1.5px #ffffff;
      /* No inner glow so the inside stays fully transparent */
      text-shadow: none;
      /* Ensure no background image/gradient affects the fill */
      background: none;
      -webkit-background-clip: border-box;
      background-clip: border-box;
    }

/* ================= FINAL MOBILE FIX ================= */

@media (max-width: 768px) {

  .boutique-three-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .boutique-three-col__cell--content {
    order: 1;
  }

  .boutique-three-col__cell--wide {
    order: 2;
    width: 100%;
  }

  .split-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
  }

  .split-section .split {
    width: 100%;
    height: 260px;
    background-size: cover;
    background-position: center;

    
    
  }
  

  /* 🔥 THIS IS KEY FIX */
  .split-section .split.right {
    margin-top: 0 !important;
  }

}
    
  `,
        }}
      />


      <div className="scroll-section-wrapper">
          <section className="boutique-three-col scroll-section sticky-container">
            <div className="boutique-three-col__cell boutique-three-col__cell--wide">
              <section className="split-section">
                <div
                  className="split left"
                  style={{ backgroundImage: `url(${SPLIT_IMAGE})` }}
                />
                <div
                  className="split right"
                  style={{ backgroundImage: `url(${SPLIT_IMAGE})` }}
                />
              </section>
            </div>
            <div className="text-wrapper-container">
              <div className="plain-text-wrapper">
                <div className="text-track">
                  <h1 className="scroll-text scroll-text-solid" aria-hidden="true">
                    Elk Audios
                  </h1>
                </div>
              </div>
              
              <div className="masked-text-wrapper">
                <div className="text-track">
                  <h1 
                    className="scroll-text masked-text-outline" 
                    aria-hidden="true"
                  >
                    Elk Audios
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}
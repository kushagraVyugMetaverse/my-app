// apps/web/src/components/Hero.tsx
import React from "react";

import TopGlowDots from "../assets/bg-top-glow-dots.png";
import BottomGlow from "../assets/bg-bottom-glow.png";
import PhoneLeft from "../assets/phone-left.svg";
import PhoneRight from "../assets/phone-right.svg";
import MaskSubtract from "../assets/mask-bottom-subtract.svg";
import EllipseTrending from "../assets/ellipse-trending.svg";

/**
 * Hero.tsx
 * - Uses the combined glow+dots asset: bg-top-glow-dots.png
 * - Keeps the existing structure/logic; only ensures the top asset is used and layered correctly.
 *
 * Make sure: apps/web/src/assets/bg-top-glow-dots.png exists (case-sensitive).
 */

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden hero-container bg-black">
      <div className="max-w-[1280px] mx-auto relative px-6 lg:px-8 pt-10">

        {/** TOP GLOW + DOTS — combined asset */}
        <img
          src={TopGlowDots.src}
          alt="top glow with dots"
          data-decorative="true"
          className="hero__top-combined pointer-events-none"
          style={{
            // Inline tuning to make the dome position consistent across browsers
            // (the main look is driven by .hero__top-combined in global.css).
            zIndex: 14,
          }}
        />

        {/** PHONES (below glow/dots) */}
        <img
          src={PhoneLeft.src}
          alt="phone left"
          className="hero__phone-left"
          style={{ zIndex: 11 }}
        />

        <img
          src={PhoneRight.src}
          alt="phone right"
          className="hero__phone-right"
          style={{ zIndex: 11 }}
        />

        {/** HERO CONTENT (on top of the glow/dots) */}
        <div className="relative z-20 text-center mt-8" style={{ paddingTop: "40px" }}>
          <div className="inline-block px-4 py-1 rounded-full border border-[#2f2f2f] bg-black/40 text-sm text-white/80 shadow-md">
            <span className="text-[14px] font-medium text-[#A8FF00]">Credd'X</span>
            <span className="text-[13px] ml-2 text-white/80">- X Times Better Trading →</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[84px] leading-tight font-extrabold text-white drop-shadow-[0_12px_12px_rgba(0,0,0,0.6)]">
            Welcome to CreddX:
            <br />
            The Future of Crypto Trading!
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/70 max-w-[720px] mx-auto">
            Redefining Crypto Simplicity with the Best Crypto Exchange
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-gradient-to-b from-[#BBFF52] to-[#76C100] text-black font-semibold shadow-[0_8px_30px_rgba(168,255,0,0.25)]">
              Start Trading
            </button>
            <button className="px-6 py-2 rounded-full border border-white/20 text-white/90">
              Become an affiliate
            </button>
          </div>
        </div>

        {/** BOTTOM MASK / HEAVY VIGNETTE */}
        <img
          src={MaskSubtract.src}
          alt="mask bottom subtract"
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[120px] w-[110%]"
          style={{ opacity: 0.95, zIndex: 12 }}
        />

        {/** bottom glow (subtle) */}
        <img
          src={BottomGlow.src}
          alt="bottom glow"
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%]"
          style={{ opacity: 0.95, zIndex: 6 }}
        />

        {/** Trending ellipse (kept but not visible by default) */}
        <div className="relative z-20 text-center mt-[56px] mb-24">
          <img src={EllipseTrending.src} alt="" className="mx-auto w-[60%] max-w-[1100px] opacity-0" />
          <p className="text-sm text-white/60">Trending coins</p>

          <div className="mt-6 text-white/60 flex gap-8 justify-center items-center">
            <span className="opacity-40">DOGE/USDT: -1.03%</span>
            <span>ETH/USDT: +2.3%</span>
            <span className="font-semibold text-white">SOL/USDT: +4.3%</span>
            <span>BTC/USDT: -2.3%</span>
            <span className="opacity-40">TETHER/USDT: +0.1%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

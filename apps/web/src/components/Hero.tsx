// apps/web/src/components/Hero.tsx
import React from "react";

import TopGlow from "../assets/bg-top-glow.png";
import BottomGlow from "../assets/bg-bottom-glow.png";
import DotCenter from "../assets/bg-dotgrid-center.svg";
import DotTop from "../assets/bg-dotgrid-top.svg";
import GradientEllipse from "../assets/green-gradient-ellipse.png";
import PhoneLeft from "../assets/phone-left.svg";
import PhoneRight from "../assets/phone-right.svg";
import MaskSubtract from "../assets/mask-bottom-subtract.svg";
import EllipseTrending from "../assets/ellipse-trending.svg";

/**
 * Hero.tsx
 * - Use `.src` on imported images so <img src={...}> receives a string (fixes TS types).
 */

export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden hero-container bg-black">
      <div className="max-w-[1280px] mx-auto relative px-6 lg:px-8 pt-10">
        {/* TOP GLOW */}
        <img
          src={TopGlow.src}
          alt="top glow"
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-0 w-[90%] max-w-[1400px] opacity-95"
          style={{ mixBlendMode: "screen" }}
        />

        {/* DOT GRID (top) */}
        <img
          src={DotTop.src}
          alt=""
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[58px] w-[56%] opacity-60"
        />

        {/* CENTER gradient / bright strip */}
        <img
          src={GradientEllipse.src}
          alt="center gradient"
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[240px] w-[80%] max-w-[1100px] opacity-95"
          style={{ filter: "blur(1px)" }}
        />

        {/* LEFT PHONE */}
        <img
          src={PhoneLeft.src}
          alt="phone left"
          className="absolute left-[2%] top-[220px] w-[340px] md:w-[420px] transform -rotate-[6deg] drop-shadow-2xl z-20"
          style={{ willChange: "transform" }}
        />

        {/* RIGHT PHONE */}
        <img
          src={PhoneRight.src}
          alt="phone right"
          className="absolute right-[2%] top-[220px] w-[340px] md:w-[420px] transform rotate-[8deg] drop-shadow-2xl z-20"
        />

        {/* DOT GRID (center / main) */}
        <img
          src={DotCenter.src}
          alt=""
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[360px] w-[85%] opacity-60 z-10"
        />

        {/* HERO TEXT + badge + buttons (center block) */}
        <div className="relative z-30 text-center mt-8">
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

        {/* BOTTOM MASK / subtract shape */}
        <img
          src={MaskSubtract.src}
          alt=""
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[120px] w-[110%] opacity-95 z-5"
        />

        {/* bottom glow */}
        <img
          src={BottomGlow.src}
          alt="bottom glow"
          data-decorative="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] opacity-95 z-0"
        />

        {/* Trending ellipse / text */}
        <div className="relative z-40 text-center mt-[56px] mb-24">
          <img
            src={EllipseTrending.src}
            alt=""
            className="mx-auto w-[60%] max-w-[1100px] opacity-0"
          />
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

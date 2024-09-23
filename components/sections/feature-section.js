"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function FeatureSection() {
  return (
    <div id="Work" className="w-full dark:bg-[#0b011d] bg-[#60478b] dark:bg-dot-white/[0.3] bg-dot-white/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0b011d] bg-[#60478b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#ffffff)]"></div>
      <div className="flex md:flex-row flex-col gap-4 md:max-w-6xl md:mx-auto mx-5 w-full py-10">
        <div className="flex flex-col items-start gap-4">
          <WobbleCard
            containerClassName="h-full bg-pink-800 md:min-h-[350px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-3xl md:text-xl font-semibold tracking-[-0.015em] text-white">
                Chat Web App
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="h-full bg-blue-900 md:min-h-[500px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance md:text-xl text-3xl font-semibold tracking-[-0.015em] text-white">
                Task management mobile app
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
        </div>
        <div className="flex flex-col items-start gap-4">
          <WobbleCard containerClassName="h-full bg-blue-900 md:min-h-[500px] z-10">
            <h2 className="max-w-80  text-left text-balance md:text-xl text-3xl font-semibold tracking-[-0.015em] text-white">
              Get me a chai
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is
              over.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="h-full bg-pink-800 md:min-h-[350px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-3xl md:text-xl font-semibold tracking-[-0.015em] text-white">
                quizzical
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
        </div>
        <div className="flex flex-col items-start gap-4">
          <WobbleCard containerClassName=" bg-blue-900 md:min-h-[350px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance md:text-xl text-3xl font-semibold tracking-[-0.015em] text-white">
                chrome extension
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName=" h-full bg-pink-800 md:max-h-[500px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-3xl md:text-xl font-semibold tracking-[-0.015em] text-white">
                tailor management app
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}

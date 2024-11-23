"use client";
import React from "react";
import { ShootingStars } from "@/components/effects/shooting-stars";
import { SparklesCore } from "@/components/effects/sparkles";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { IoColorWandSharp } from "react-icons/io5";
import { Spotlight } from "../effects/spotlight";
import Image from "next/image";

export function HeroSection() {
  return (
    <div
      id="YR"
      className="md:h-full md:min-h-screen max-h-[50vh] w-full dark:bg-[#0b011d] bg-[#60478b] flex flex-col items-center justify-start md:justify-center"
    >
      <Spotlight className="animate-spotlight1 -top-32 left-0 md:left-60 md:-top-20" />

      <div className="max-h-screen absolute flex flex-col md:top-auto top-20 z-20">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=""
        >
          <h1 className="font-bold lg:text-[250px] md:text-9xl text-7xl text-center font-outline-2 dark:text-white/60 text-[#41175f] md:py-10 pb-20 py-10 drop-shadow-[0px_10px_10px_rgba(191,100,255,0.5)]">
            YUSUF.R
          </h1>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center gap-3 flex-wrap md:w-full md:mx-auto mx-10"
          >
            <button className="custom-button px-4 py-1.5 rounded-full relative backdrop-blur-2xl bg-[#362a51] bg-opacity-50 text-white lg:text-lg md:text-sm text-sm border border-[#584878] cursor-none">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px -left-px shadow-2xl bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="flex items-center justify-center">
                <Image
                  src="/pen.svg"
                  loading="eager"
                  alt=""
                  width={20}
                  height={20}
                  className="custom-icon"
                />
                <span className="px-2">Websites</span>
              </div>
            </button>
            <button className="custom-button px-4 py-1.5 rounded-full relative backdrop-blur-2xl bg-[#362a51] bg-opacity-50 text-white lg:text-lg md:text-sm text-sm border border-[#584878] cursor-none">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px -left-px shadow-2xl  bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="flex items-center justify-center">
                <BsStars color="#bf64ff" size={20} className="custom-icon" />
                <span className=" px-2">Mobile Apps</span>
              </div>
            </button>
            <button className="custom-button px-4 py-1.5 rounded-full relative backdrop-blur-2xl bg-[#362a51] bg-opacity-50 text-white lg:text-lg md:text-sm text-sm border border-[#584878] cursor-none">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px -left-px shadow-2xl  bg-gradient-to-r from-[#584878] via-[#bf64ff] to-transparent" />
              <div className="flex items-center justify-center">
                <IoColorWandSharp
                  color="#bf64ff"
                  size={20}
                  className="custom-icon"
                />
                <span className=" px-2">Designing</span>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
      <ShootingStars />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={20}
        className="w-full h-screen"
        particleColor="#FFFFFF"
        speed={5}
      />
    </div>
  );
}

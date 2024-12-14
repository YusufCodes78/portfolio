"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { Beams, Rays } from "./beams-rays";

export function FeatureCard({ title, description, tech, src, link }) {
  return (
    <div>
      <div className="w-full relative rounded-3xl overflow-hidden mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 md:p-5 border border-neutral-700">
        <Rays />
        <Beams />
        <Noise />
        <div className="relative z-10">
          <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-3xl">
            <Image
              src={src}
              alt="image"
              fill
              className="rounded-3xl hover:scale-105 ease-in duration-150 transition-all"
            />
          </div>
          <motion.div className="py-4 relative z-10">
            <div className="flex items-center gap-3">
              <h2 className="text-white text-2xl text-left font-bold">
                {title}
              </h2>
              {link != "" && (
                <Link href={link} className="cursor-none">
                  <div className="rounded-lg ease-in duration-150 hover:rounded-full bg-[#584878] p-2">
                    <LuGithub className="text-white font-bold w-4 h-4 hover:scale-125" />
                  </div>
                </Link>
              )}
            </div>
            <p className="text-neutral-200 text-left  mt-1">{description}</p>
          </motion.div>
          <div className="flex items-center justify-start gap-2">
            {tech.map((techno, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full relative backdrop-blur-2xl bg-[#584878] bg-opacity-50 text-white text-sm cursor-none"
              >
                {techno}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};

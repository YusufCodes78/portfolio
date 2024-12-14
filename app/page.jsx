"use client";
import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FeatureSection } from "@/components/sections/feature-section";
import ContactSection from "@/components/sections/contact-section";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full cursor-none">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeatureSection />
      <ContactSection />
    </main>
  );
}

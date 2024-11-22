"use client";
import React from "react";
import { FeatureCard } from "../ui/feature-card";

const projects = [
  {
    title: "Employee Management App",
    description: "An app to manage employees and assign tasks to them daily. Features include attendance, timer, work logs, etc.",
    tech: [
      "Flutter"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "Jeweler Management App",
    description: "App for maintaining the intricate values of gold and silver stock, and the transactions between jewellers and customers.",
    tech: [
      "Flutter"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "Tailoring App",
    description: "App for tracking customer orders, and their measurement values. Includes payment and delivery tracking.",
    tech: [
      "Flutter"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "Location Tracker App",
    description: "App for tracking the location and time of employees on work. Includes reminders and background tracking.",
    tech: [
      "Flutter"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "Osortoo",
    description: "An app to pick winners for a giveaway for social media like Instagram and Facebook. Works by fetching the posts and its comments to select a random winner.",
    tech: [
      "Flutter"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "BlackBelt Media",
    description: "Design of a digital agency to boost their presence on internet, using the power of Next.js and AI to create beautiful responsive pages.",
    tech: [
      "Next.js",
      "Tailwind CSS"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  {
    title: "Chat Web App",
    description: "Basic chat app with the ability to create private rooms, and chat with one another or in groups.",
    tech: [
      "Node.js",
      "Socket.io"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78/chat-web-io"
  },
  {
    title: "Get Me A Chai",
    description: "Patreon clone which accepts payments from users and also post comments for their work.",
    tech: [
      "Next.js",
      "Tailwind CSS"
    ],
    image: "/demo.webp",
    link: "https://github.com/YusufCodes78"
  },
  // {
  //   title: "Chrome Extension",
  //   description: "description",
  //   tech: [
  //     "Javascript"
  //   ],
  //   image: "/demo.webp",
  //   link: "https://github.com/YusufCodes78"
  // },
]

export function FeatureSection() {
  return (
    <div
      id="Work"
      className="w-full dark:bg-[#0b011d] bg-[#60478b] dark:bg-dot-white/[0.3] bg-dot-white/[0.5] relative flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0b011d] bg-[#60478b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#ffffff)]"></div>
      <div className="grid grid-cols-2 gap-10 md:max-w-6xl md:mx-auto mx-5 w-full py-10">
        {projects.map((project, i) => (<FeatureCard key={i} {...project} />))}
      </div>
    </div>
  );
}

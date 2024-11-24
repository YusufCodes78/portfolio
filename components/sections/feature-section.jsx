"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/model-card";

const DummyContent = () => {
  return (
    <>
      {/* {[...new Array(3).fill(1)].map((_, index) => { */}
        {/* return ( */}
          <div
            // key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-medium text-neutral-700 dark:text-neutral-200">
                This app was made for a company called &apos;Raj Electricals&apos; to manage its staff and employees. 
              </span>
              
            </p>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              
              The company was finding very hard to keep a track of the employees and their projects for work so they requested for this app. Because of this app, employee tracking with location and timers, work schedules and finishing projects has been very efficient and deal breaker for them.
            </p>
            <Image
              src="/macbook.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            // key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-center dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-medium text-neutral-700 dark:text-neutral-200">
                TASK ASSIGNMENT
              </span>
              
            </p>
            <br/>
            
            <Image
              src="/macbook.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            // key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-center dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-medium text-neutral-700 dark:text-neutral-200">
                ADMIN LOGS
              </span>
              
            </p>
            <br/>
            
            <Image
              src="/macbook.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
         {/* ); */}
      {/* // })} */}
    </>
  );
};

const projects = [
  {
    title: "Employee Management App",
    description:
      "An app to manage employees and assign tasks to them daily. Features include attendance, timer, work logs, etc.",
    tech: ["Flutter"],
    src: "/project-1.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "Jeweler Management App",
    description:
      "App for maintaining the intricate values of gold and silver stock, and the transactions between jewellers and customers.",
    tech: ["Flutter"],
    src: "/project-2.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "Tailoring App",
    description:
      "App for tracking customer orders, and their measurement values. Includes payment and delivery tracking.",
    tech: ["Flutter"],
    src: "/project-3.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "Location Tracker App",
    description:
      "App for tracking the location and time of employees on work. Includes reminders and background tracking.",
    tech: ["Flutter"],
    src: "/project-4.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "Osortoo",
    description:
      "An app to pick winners for a giveaway for social media like Instagram and Facebook. Works by fetching the posts and its comments to select a random winner.",
    tech: ["Flutter"],
    src: "/project-5.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "BlackBelt Media",
    description:
      "Design of a digital agency to boost their presence on internet and to generate leads, using the power of Next.js and AI to create beautiful responsive pages.",
    tech: ["Next.js", "Tailwind CSS", "Typescript"],
    src: "/project-6.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  {
    title: "Chat Web App",
    description:
      "Basic chat app with the ability to create private rooms, and chat with one another or in groups.",
    tech: ["Node.js", "Socket.io"],
    src: "/project-7.png",
    link: "https://github.com/YusufCodes78/chat-web-io",
    content: <DummyContent />,
  },
  {
    title: "Get Me A Chai",
    description:
      "Patreon clone which accepts payments from users and also post comments for their work.",
    tech: ["Next.js", "Tailwind CSS"],
    src: "/project-8.png",
    link: "https://github.com/YusufCodes78",
    content: <DummyContent />,
  },
  // {
  //   title: "Chrome Extension",
  //   description: "description",
  //   tech: [
  //     "Javascript"
  //   ],
  //   src: "/demo.webp",
  //   link: "https://github.com/YusufCodes78",
  // content: <DummyContent />,
  // },
];

export function FeatureSection() {
  return (
    <div
      id="Work"
      className="w-full dark:bg-[#0b011d] bg-[#60478b] dark:bg-dot-white/[0.3] bg-dot-white/[0.5] relative flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0b011d] bg-[#60478b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#ffffff)]"></div>
      <div className="h-full py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-5 md:mx-auto">
        {projects.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

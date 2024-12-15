"use client";
import React from "react";
import { Card } from "@/components/ui/model-card";

const projects = [
  {
    title: "Employee Management App",
    description:
      "An app to manage employees and assign tasks to them daily. Features include attendance, timer, work logs, etc.",
    tech: ["Flutter"],
    src: "/project-1.png",
    link: "",
    content: {
      title:
        "This app was made for a B2C company to manage its staff and employees. (Work for: Codekernel Solutions)",
      description:
        "The company was finding very hard to keep a track of the employees and their projects for work so they requested for this app. Because of this app, employee tracking with location and timers, work schedules and finishing projects has been very efficient and deal breaker for them.",
      image: "/project-1/file-1.png",
    },
  },
  // {
  //   title: "Jeweler Management App",
  //   description:
  //     "App for maintaining the intricate values of gold and silver stock, and the transactions between jewellers and customers.",
  //   tech: ["Flutter"],
  //   src: "/project-2.png",
  //   link: "",
  //   content: {
  //     title:
  //       "Forget about remembering delicate values of gold and silver, this app will do it for you.",
  //     description:
  //       "It was very hard for the client to keep track of the values of gold and silver so they requested for this app. It can handle all the calculations and give precise values. It can also handle the transactions between jewellers and customers. And above all, you can connect your bluetooth weighing machine to get exact reading, and also print the receipts of the customers.",
  //     image: "/project-2/file-1.png",
  //   },
  // },
  {
    title: "Tailoring App",
    description:
      "App for tracking customer orders, and their measurement values. Includes payment and delivery tracking.",
    tech: ["Flutter"],
    src: "/project-3.png",
    link: "",
    content: {
      title:
        "Deliver order on time, and also keep track of the measurements of the customer without the hassle of mixing it with others customers. (Work for: CodeKernel Solutions)",
      description:
        "There are many orders that a tailor has to complete within a given time period and they also have to keep track of the measurements of the customers. This app replaced the old system of writing measurements in a book to a more modern way of entering and editing measurement details on the go. Also the current week orders can be completed with the dashboard reminders.",
      image: "/project-3/file-1.png",
    },
  },
  {
    title: "Location Tracker App",
    description:
      "App for tracking the location and time of employees on work. Includes reminders and background tracking.",
    tech: ["Flutter"],
    src: "/project-4.png",
    link: "",
    content: {
      title:
        "Keep an eye on the employees and their work schedules, and also keep track of the employees' location. (Work for: Codekernel Solutions)",
      description:
        "Don't know what your employees are doing on their work visits? Track each of them with this app and also know their location and time of work. The employee can't stop the tracking as it remains active in the background.",
      image: "/project-4/file-1.png",
    },
  },
  {
    title: "Giveaway App",
    description:
      "An app to pick winners for a giveaway for social media like Instagram and Facebook. Works by fetching the posts and its comments to select a random winner.",
    tech: ["Flutter"],
    src: "/project-5.png",
    link: "",
    content: {
      title:
        "Arrange giveaways on the go with this app and pick a winner for your Instagram and Facebook giveaways. (Work for: Oshara)",
      description:
        "Giveaways has never been this easy before this app! Connect your social media handles and perform giveaways by picking a lucky winner from the comments of your posts. Announce directly from the app.",
      image: "/project-5/file-1.png",
    },
  },
  {
    title: "BlackBelt Media",
    description:
      "Design of a digital agency to boost their presence on internet and to generate leads, using the power of Next.js and AI to create beautiful responsive pages.",
    tech: ["Next.js", "Tailwind CSS", "Typescript"],
    src: "/project-6.png",
    link: "nexustechline.vercel.app",
    content: {
      title:
        "Elegant web design for a digital agency to showcase their work and services.",
      description:
        "This was a design project for a Digital Agency to have their online presence to show their projects and works done by them and also for a professional website design. The design includes animated components on a ninja theme based design.",
      image: "/project-6/file-2.png",
    },
  },
  {
    title: "Chat Web App",
    description:
      "Basic chat app with the ability to create private rooms, and chat with one another or in groups.",
    tech: ["Node.js", "Socket.io"],
    src: "/project-7.png",
    link: "https://github.com/YusufCodes78/chat-web-io",
    content: {
      title:
        "A chat app completely built with Node.js and Socket.io, with conversation pages designed in HTML and CSS.",
      description:
        "The project helped me understand the basics of Socket.io and how it works. Also, I built a basic chat app with the ability to create private rooms, and chat with one another or in groups. It also notifies when a user has joined or left a room.",
      image: "/project-7/file-1.png",
    },
  },
  {
    title: "Get Me A Chai",
    description:
      "Patreon clone which accepts payments from users and also post comments for their work.",
    tech: ["Next.js", "Tailwind CSS"],
    src: "/project-8.png",
    link: "https://github.com/YusufCodes78/get-me-a-chai",
    content: {
      title:
        "This project was made in Next.js and helps creators accept token of appreciation from their fans in the form of payment. This project was inspired from the website patreons.",
      description:
        "I learnt how to make a Patreon clone in Next.js by understanding its client side and server side components. Implemented Github OAuth for authentication and Tailwind CSS for styling. Used the razorpay API to integrate secure payments. This app currently doesn't accept real payments and is in test mode only.",
      image: "/project-8/file-1.png",
    },
  },
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

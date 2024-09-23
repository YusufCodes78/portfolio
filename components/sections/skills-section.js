import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const languages = [
  {
    name: "Javascript",
    type: "Languages",
    img: "/js.png",
  },
  {
    name: "Typescript",
    type: "Languages",
    img: "/ts.png",
  },
  {
    name: "Java",
    type: "Languages",
    img: "/java.png",
  },
  {
    name: "Dart",
    type: "Languages",
    img: "/dart.png",
  },
];
const tech = [
  {
    name: "NextJS",
    type: "Tech",
    img: "/nextjs.svg",
  },
  {
    name: "ReactJS",
    type: "Tech",
    img: "/reactjs.png",
  },
  {
    name: "ExpressJS",
    type: "Tech",
    img: "/expressjs.png",
  },
  {
    name: "NodeJS",
    type: "Tech",
    img: "/nodejs.png",
  },
  {
    name: "TailwindCSS",
    type: "Tech",
    img: "/tailwindcss.png",
  },
  {
    name: "MongoDB",
    type: "Tech",
    img: "/mongodb.png",
  },
  {
    name: "Flutter",
    type: "Tech",
    img: "/flutter.png",
  },
];
const tools = [
  {
    name: "Git",
    type: "Tools",
    img: "/git.png",
  },
  {
    name: "Firebase",
    type: "Tools",
    img: "/firebase.png",
  },
  {
    name: "AWS",
    type: "Tools",
    img: "/aws.png",
  },
  {
    name: "Figma",
    type: "Tools",
    img: "/figma.svg",
  },
  {
    name: "Illustrator",
    type: "Tools",
    img: "/illustrator.png",
  },
  {
    name: "Photoshop",
    type: "Tools",
    img: "/photoshop.png",
  },
  {
    name: "Framer Motion",
    type: "Tools",
    img: "/framer-motion.png",
  },
  {
    name: "Wordpress",
    type: "Tools",
    img: "/wordpress.png",
  },
  {
    name: "WooCommerce",
    type: "Tools",
    img: "/woocommerce.png",
  },
  {
    name: "Webflow",
    type: "Tools",
    img: "/webflow.svg",
  },
  {
    name: "ERP",
    type: "Tools",
    img: "/erp.png",
  },
];

const SkillCard = ({ img, name, type }) => {
  return (
    <figure
      className={cn(
        "relative h-12 overflow-hidden rounded-xl border p-2 flex items-center justify-center",
        // dark styles
        "border-gray-50/[.1] backdrop-blur-sm"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full p-1 w-8 h-8 object-scale-down bg-white"
          alt="icons"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{type}</p>
        </div>
      </div>
    </figure>
  );
};

export function SkillsSection() {
  return (
    <div className="relative dark:bg-[#0b011d] bg-[#60478b] flex w-full flex-col items-center justify-center overflow-hidden md:pb-32 pb-16">
      <div className="absolute inset-x-0">
        <svg
          width="100%"
          height="100%"
          viewBox="1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="select-none"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="0.5"
            className="font-[helvetica] font-bold dark:stroke-neutral-500 stroke-neutral-400 fill-transparent md:text-9xl text-6xl"
          >
            WHAT I KNOW
          </text>
        </svg>
      </div>
      <Marquee className="[--duration:20s] pb-5">
        {languages.map((language) => (
          <SkillCard key={language.name} {...language} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s] pb-5">
        {tech.map((technology) => (
          <SkillCard key={technology.name} {...technology} />
        ))}
      </Marquee>
      <Marquee className="">
        {tools.map((tool) => (
          <SkillCard key={tool.name} {...tool} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-[#0b011d] from-[#60478b]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-[#0b011d] from-[#60478b]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-[#0b011d] from-[#60478b]"></div>
    </div>
  );
}

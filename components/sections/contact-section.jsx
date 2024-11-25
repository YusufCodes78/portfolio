import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const ContactSection = () => {
  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      id="Contact"
      className="w-full relative dark:bg-[#0b011d] bg-[#60478b] dark:bg-dot-white/[0.3] bg-dot-white/[0.5] pb-14 mx-auto md:px-28"
    >
      <div className="absolute pointer-events-none inset-0 dark:bg-[#0b011d] bg-[#60478b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0b011d)]" />
      <div className="md:h-[40vh] h-[50vh] flex  md:flex-row flex-col items-center md:justify-between justify-center">
        <div className="md:text-2xl text-xl text-white text-center relative z-20 md:pb-1 pb-5 md:flex md:items-center flex flex-col justify-start">
          <div className="flex items-center justify-center">
            <span className="inline-block md:p-3 pr-3">
              <Image
                src="/hi.webp"
                alt="hi"
                className="md:w-10 w-8 md:h-10 h-8"
                width={32}
                height={32}
              />
            </span>
            <span>Want to get in touch? </span>
          </div>
          <div>
            I would love to hear from you.
          </div>
        </div>
        <div className="flex flex-col md:items-end md:gap-2 gap-3 z-20">
          <div className="text-white ease-in duration-150 hover:scale-105">
            <Link
              href={"mailto:rashidyusuf5253@gmail.com"}
              target="blank"
              className="cursor-none flex-row-reverse md:flex-row flex items-center justify-end md:justify-center"
            >
              rashidyusuf5253@gmail.com
              <BiLogoGmail className="text-white w-5 h-5 ease-in duration-150 mr-3 md:ml-3 hover:scale-105" />
            </Link>
          </div>
          <div className="text-white ease-in duration-150 hover:scale-105">
            <Link
              href={"https://github.com/YusufCodes78"}
              target="blank"
              className="cursor-none flex-row-reverse md:flex-row flex items-center justify-end md:justify-center"
            >
              YusufCodes78
              <LuGithub className="text-white w-5 h-5 ease-in duration-150 mr-3 md:ml-3 hover:scale-105" />
            </Link>
          </div>
          <div className="text-white ease-in duration-150 hover:scale-105">
            <Link
              href={"https://www.linkedin.com/in/yusuf-rashid5253/"}
              target="blank"
              className="cursor-none flex-row-reverse md:flex-row flex items-center justify-end md:justify-center"
            >
              Yusuf Rashid
              <FaLinkedinIn className="text-white w-5 h-5 ease-in duration-150 mr-3 md:ml-3 hover:scale-105" />
            </Link>
          </div>
          <div className="text-white ease-in duration-150 hover:scale-105">
            <Link
              href={"https://x.com/imyr_53"}
              target="blank"
              className="cursor-none flex-row-reverse md:flex-row flex items-center justify-end md:justify-center"
            >
              @imyr_53
              <FaXTwitter className="text-white w-5 h-5 ease-in duration-150 mr-3 md:ml-3 hover:scale-105" />
            </Link>
          </div>
          <div className="text-white ease-in duration-150 hover:scale-105">
            <Link
              href={"https://www.instagram.com/imyr_53/"}
              target="blank"
              className="cursor-none flex-row-reverse md:flex-row flex items-center justify-end md:justify-center"
            >
              @imyr_53
              <FaInstagram className="text-white w-5 h-5 ease-in duration-150 mr-3 md:ml-3 hover:scale-105" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white md:px-0 px-5">
        <div className="footer-divider h-[1px] mb-4 z-20" />
        <div className="text-xs mx-auto flex justify-between items-center relative">
          <span>&copy; 2024 Yusuf Rashid. All rights reserved.</span>
          <span
            onClick={handleScroll}
            className="scroll-smooth hover:scale-110 duration-150"
          >
            Back to Top
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

import React, { useCallback } from "react";
import { Boxes } from "../ui/background-boxes";
import { AiOutlineGithub } from "react-icons/ai";
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
    // <div className="w-full h-[50vh] p-26 dark:bg-[#0b011d] bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    <div
      id="Contact"
      className="w-full relative dark:bg-[#0b011d] bg-[#60478b] dark:bg-dot-white/[0.3] bg-dot-white/[0.5] pb-14 mx-auto md:px-28"
    >
      <div className="absolute pointer-events-none inset-0 dark:bg-[#0b011d] bg-[#60478b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0b011d)]" />
      <div className="md:min-h-[50vh] min-h-[30vh] flex  md:flex-row flex-col items-center md:justify-between justify-center">
        <div className="md:text-2xl text-xl text-white text-balance text-center relative z-20 md:pb-1 pb-5 md:flex md:items-center">
          <span className="inline-block md:p-3 px-3">
            <img src="/hi.webp" alt="hi" className="md:w-10 w-8 md:h-10 h-8" />
          </span>
          <span>Want to get in touch? I would love to hear from you.</span>
        </div>
        <div className="flex items-center justify-center z-20">
          <AiOutlineGithub className="text-white w-7 h-7 ease-in duration-150 mr-6 hover:scale-125" />
          <FaLinkedinIn className="text-white w-6 h-6 ease-in duration-150 mr-6 hover:scale-125" />
          <FaXTwitter className="text-white w-6 h-6 ease-in duration-150 mr-6 hover:scale-125" />
          <BiLogoGmail className="text-white w-6 h-6 ease-in duration-150 mr-6 hover:scale-125" />
          <FaInstagram className="text-white w-6 h-6 ease-in duration-150 hover:scale-125" />
        </div>
      </div>
      <div className="text-white md:px-0 px-5">
        <div className="footer-divider h-[1px] mb-4 z-20" />
        <div className="text-xs mx-auto flex justify-between items-center relative">
          <span>&copy; 2024 Yusuf Rashid. All rights reserved.</span>
          <span onClick={handleScroll} className="scroll-smooth hover:scale-110 duration-150">
              Back to Top
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

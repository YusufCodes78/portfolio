import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="md:text-2xl text-xl text-white text-center relative z-20 md:pb-1 pb-5 md:flex md:items-center">
          <span className="inline-block md:p-3 px-3">
            <Image
              src="/hi.webp"
              alt="hi"
              className="md:w-10 w-8 md:h-10 h-8"
              width={32}
              height={32}
            />
          </span>
          <span>Want to get in touch? </span>
          <span className="md:invisible block w-1"></span>
          <span>I would love to hear from you.</span>
        </div>
        <div className="flex flex-col items-end z-20">
          <div className="text-white ease-in duration-150 mb-2 hover:scale-125">
            <Link
              href={"mailto:rashidyusuf5253@gmail.com"}
              target="blank"
              className="cursor-none"
            >
              Gmail
            </Link>
          </div>
          <div className="text-white ease-in duration-150 mb-2 hover:scale-125">
            <Link
              href={"https://github.com/YusufCodes78"}
              target="blank"
              className="cursor-none"
            >
              Github
            </Link>
          </div>
          <div className="text-white ease-in duration-150 mb-2 hover:scale-125">
            <Link
              href={"https://www.linkedin.com/in/yusuf-rashid5253/"}
              target="blank"
              className="cursor-none"
            >
              LinkedIn
            </Link>
          </div>
          <div className="text-white ease-in duration-150 mb-2 hover:scale-125">
            <Link
              href={"https://x.com/imyr_53"}
              target="blank"
              className="cursor-none"
            >
              Twitter
            </Link>
          </div>
          <div className="text-white ease-in duration-150 mb-2 hover:scale-125">
            <Link
              href={"https://www.instagram.com/imyr_53/"}
              target="blank"
              className="cursor-none"
            >
              Instagram
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

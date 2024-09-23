"use client";

import { ModeToggle } from "./mode-toggle";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="fixed z-50 w-full mt-4 px-4 flex justify-between items-center">
          <ModeToggle />
          <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      ) : (
        <SlideBar />
      )}
    </>
  );
}

const SlideBar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const handleScroll = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element?.id === "YR") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (element?.id === "Work") {
      const navbarHeight = 80; // Adjust this value based on your navbar's height
      const offset = 20; // Additional offset for extra space
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed z-50 w-full mt-4 px-4 flex justify-center items-center"
    >
      <Menu>
        <Tab setPosition={setPosition} onClick={() => handleScroll("YR")}>
          
            <MenuItem item="YR"></MenuItem>
        </Tab>
        <Tab setPosition={setPosition} onClick={() => handleScroll("About")}>
          
            <MenuItem item="About"></MenuItem>
        </Tab>
        <Tab setPosition={setPosition} onClick={() => handleScroll("Work")}>
          
            <MenuItem item="Work"></MenuItem>
        </Tab>
        <Tab setPosition={setPosition} onClick={() => handleScroll("Contact")}>
          
            <MenuItem item="Contact"></MenuItem>
        </Tab>
        <Tab setPosition={setPosition}>
          <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-neutral-200 hover:bg-opacity-10 cursor-none">
            <span>Resume</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#bf64ff] to-transparent h-[2px]" />
          </button>
        </Tab>
        <Tab setPosition={setPosition}>
          <ModeToggle />
        </Tab>
        <Cursor position={position} />
      </Menu>
    </div>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const handleScroll = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element?.id === "YR") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (element?.id === "Work") {
      const navbarHeight = 80;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer border border-white/[0.2] p-2 rounded-full hover:bg-neutral-200 bg-neutral-200 bg-opacity-50 hover:bg-opacity-10 transition-colors duration-150"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoCloseSharp size={24} /> : <IoMenuSharp size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-2 shadow-lg overflow-hidden"
          >
            <ul className="py-2">
              <MobileMenuItem onClick={() => handleScroll("YR")}>YR</MobileMenuItem>
              <MobileMenuItem onClick={() => handleScroll("About")}>About</MobileMenuItem>
              <MobileMenuItem onClick={() => handleScroll("Work")}>Work</MobileMenuItem>
              <MobileMenuItem onClick={() => handleScroll("Contact")}>
                Contact
              </MobileMenuItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenuItem = ({ children, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className="cursor-pointer border border-white/[0.2] rounded-full p-2 hover:bg-neutral-200 bg-neutral-200 bg-opacity-50 hover:bg-opacity-30 transition-colors duration-150 w-full text-white mb-2"
    >
      {children}
    </button>
  </li>
);

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref?.current?.getBoundingClientRect();
        setPosition({
          left: ref.current?.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 md:mx-2 select-none"
    >
      {children}
    </div>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 w-auto h-7 border border-white/[0.2] bg-neutral-200 bg-opacity-10 rounded-full  md:h-10"
    />
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="relative">
      <p className="md:px-3 md:py-[8px] rounded-full text-white">
        {item}
      </p>
    </div>
  );
};

const Menu = ({ children }) => {
  return (
    <HoverBorderGradient as="nav">
      <nav className="relative rounded-full border border-white/[0.2] bg-white/5 backdrop-blur-lg shadow-input flex justify-between items-center py-1 px-0 z-50">
        {children}
      </nav>
    </HoverBorderGradient>
  );
};

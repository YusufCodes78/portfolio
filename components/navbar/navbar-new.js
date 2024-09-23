"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { ModeToggle } from "./mode-toggle";

export const NavbarNew = () => {
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
    <div className="fixed z-50 w-full mt-4 px-4 flex justify-between items-center">
      {isMobile ? (
        <>
          <DarkModeToggle />
          <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </>
      ) : (
        <SlideTabs />
      )}
    </div>
  );
};

const DarkModeToggle = () => {
  return (
    <div className=" shadow-lg transition-colors duration-200">
      <ModeToggle />
    </div>
  );
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
}) => {
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
        className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full transition-colors duration-200"
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
            className="absolute top-full right-0 mt-2 bg-black dark:bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <ul className="py-2">
              <MenuItem onClick={() => handleScroll("YR")}>YR</MenuItem>
              <MenuItem onClick={() => handleScroll("About")}>About</MenuItem>
              <MenuItem onClick={() => handleScroll("Work")}>
                Work
              </MenuItem>
              <MenuItem onClick={() => handleScroll("Contact")}>
                Contact
              </MenuItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuItem = ({
  children,
  onClick,
}) => (
  <li>
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
    >
      {children}
    </button>
  </li>
);

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const handleScroll = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element?.id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (element?.id === "projects") {
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
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 dark:border-black border-white dark:bg-white bg-black items-center p-2"
    >
      <Tab setPosition={setPosition} onClick={() => handleScroll("YR")}>
        YR
      </Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("About")}>
        About
      </Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("Work")}>
        Work
      </Tab>
      <Tab setPosition={setPosition} onClick={() => handleScroll("Contact")}>
        Contact
      </Tab>
      <Tab setPosition={setPosition}>
        <ModeToggle />
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
}) => {
  const ref = useRef(null);

  return (
    <li
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base select-none"
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full dark:bg-black bg-white md:h-12"
    />
  );
};
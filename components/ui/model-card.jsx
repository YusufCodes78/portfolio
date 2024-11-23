"use client";;
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/ui/hooks/use-outside-click";
import { FeatureCard } from "./feature-card";

export const Card = ({
  card,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl relative">
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={handleClose}>
              <IoMdClose className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <motion.p
              className="text-2xl md:text-5xl font-semibold text-neutral-700  dark:text-white">
              {card.title}
            </motion.p>
            <motion.p
              className="text-md font-medium text-black mt-4 text-balance dark:text-white">
              {card.description}
            </motion.p>
            <div className="py-10">{card.content}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    <motion.div
      onClick={handleOpen}
      className="">
        <FeatureCard {...card} />
    </motion.div>
  </>);
};

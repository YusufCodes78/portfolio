"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/ui/hooks/use-outside-click";
import { FeatureCard } from "./feature-card";
import { DummyContent } from "../model-content";

export const Card = ({ card }) => {
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

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 mx-3 overflow-scroll">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto dark:bg-[#0b011d] bg-[#60478b] z-[60] my-5 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IoMdClose className="h-6 w-6 text-neutral-900" />
              </button>
              <motion.p className="text-2xl md:text-5xl font-semibold text-white">
                {card.title}
              </motion.p>
              <motion.p className="text-lg font-medium mt-4 text-balance text-white">
                {card.description}
              </motion.p>
              <div className="pt-10">
                <DummyContent {...card.content} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div onClick={handleOpen} className="">
        <FeatureCard {...card} />
      </motion.div>
    </>
  );
};

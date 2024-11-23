"use client";

import * as React from "react";
import { RxMoon } from "react-icons/rx";
import { AiOutlineSun } from "react-icons/ai";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="relative cursor-pointer border border-white/[0.2] p-2 rounded-full hover:bg-neutral-200 bg-neutral-200 bg-opacity-50 hover:bg-opacity-10 "
      onClick={() => toggle()}
    >
      {theme === "dark" ? (
        <AiOutlineSun className="h-5 w-5 scale-100 transition-all text-white" />
      ) : (
        <RxMoon className="h-5 w-5 scale-100 transition-all text-black" />
      )}
    </button>
  );
}

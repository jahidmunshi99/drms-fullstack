"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        transition-all
        duration-300
        hover:border-blue-500
        hover:text-blue-400
        bg:white
        dark:bg-slate-900`}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-white " />
      )}
    </button>
  );
}

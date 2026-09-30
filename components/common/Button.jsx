"use client";

import clsx from "clsx";

export default function Button({
  children,
  variant = "secondary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-300 bg-slate-100 p-2 text-slate-900 hover:bg-slate-300 dark:border-slate-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-slate-700",

    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all cursor-pointer shadow-sm",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

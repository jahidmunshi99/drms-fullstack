"use client";

import clsx from "clsx";

export default function Input({
  label,
  error,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "h-11 w-full rounded border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white",
          className,
        )}
      />

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}

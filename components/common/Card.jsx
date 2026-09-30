"use client";

import clsx from "clsx";

export default function Card({
  title,
  description,
  children,
  className = "",
  bodyClassName = "",
  headerAction = null,
}) {
  return (
    <section
      className={clsx(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
    >
      {(title || description || headerAction) && (
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>

          {headerAction && <div>{headerAction}</div>}
        </div>
      )}

      <div className={clsx("p-6", bodyClassName)}>{children}</div>
    </section>
  );
}

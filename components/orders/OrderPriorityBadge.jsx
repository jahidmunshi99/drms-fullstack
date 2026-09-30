"use client";

const variants = {
  normal: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",

  high: "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",

  urgent: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export default function OrderPriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${variants[priority]}`}
    >
      {priority}
    </span>
  );
}

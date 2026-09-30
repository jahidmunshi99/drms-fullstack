"use client";

const variants = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",

  accepted: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",

  in_progress:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",

  revision:
    "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",

  completed:
    "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",

  cancelled: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export default function OrderStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${variants[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

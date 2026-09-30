"use client";

import {
  CircleCheckBig,
  ClipboardList,
  Clock3,
  LoaderCircle,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Total Orders",
    value: 125,
    icon: ClipboardList,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Pending",
    value: 18,
    icon: Clock3,
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
  },
  {
    id: 3,
    title: "In Progress",
    value: 34,
    icon: LoaderCircle,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
  },
  {
    id: 4,
    title: "Completed",
    value: 73,
    icon: CircleCheckBig,
    color:
      "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
  },
];

export default function OrderStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:mb-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

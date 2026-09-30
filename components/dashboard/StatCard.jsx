"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,

  value,

  growth,

  description,

  icon: Icon,

  color,

  bg,
}) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-slate-900 p-3">
          <Icon size={22} className="text-blue-400" />
        </div>

        <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <ArrowUpRight size={14} />
          {growth}
        </span>
      </div>

      <h3 className="text-sm font-medium text-slate-400">{title}</h3>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
        {value}
      </h2>

      <p className="mt-4 text-xs text-slate-500">Compared with last week</p>
    </div>
  );
}

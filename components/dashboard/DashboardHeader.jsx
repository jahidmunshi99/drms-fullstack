"use client";

import { CalendarDays, Download, Plus, RefreshCw } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div>
        <span className="text-sm font-medium text-blue-400">
          Welcome Back 👋
        </span>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
          Jahid Munshi
        </h1>

        <p className="mt-3 max-w-xl text-slate-400">
          Here's an overview of your freelance business today. Manage orders,
          clients, projects, tasks and finances from one workspace.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3">
          <CalendarDays size={18} className="text-slate-400" />

          <span className="text-sm text-slate-300">{today}</span>
        </div>

        <button className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-500">
          <RefreshCw size={18} />
          Refresh
        </button>

        <button className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-500">
          <Download size={18} />
          Export
        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          <Plus size={18} />
          New
        </button>
      </div>
    </section>
  );
}

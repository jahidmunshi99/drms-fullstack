"use client";

import Link from "next/link";

export default function Logo({ collapsed = false }) {
  return (
    <Link
      href="/dashboard"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      {/* Logo Icon */}
      <div
        className="
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-2xl
          bg-linear-to-br
          from-blue-600
          via-blue-500
          to-cyan-500
          text-lg
          font-extrabold
          text-white
          shadow-lg
          shadow-blue-500/20
          transition-all
          duration-300
          group-hover:scale-105
        "
      >
        F
      </div>

      {/* Logo Text */}
      {!collapsed && (
        <div className="flex flex-col overflow-hidden">
          <h1 className="truncate text-lg font-bold tracking-tight text-white">
            FreelanceOS
          </h1>

          <p className="truncate text-xs text-slate-400">
            Freelancer Workspace
          </p>
        </div>
      )}
    </Link>
  );
}

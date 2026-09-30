"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import sidebarMenu from "@/data/sidebarMenu";
import Logo from "./Logo";
import SidebarGroup from "./SidebarGroup";

const SIDEBAR_EXPANDED = 288;
const SIDEBAR_COLLAPSED = 88;

export default function Sidebar({ collapsed }) {
  const [width, setWidth] = useState(
    collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED
  );

  // Future: Replace with authenticated user role
  const userRole = "admin";

  useEffect(() => {
    const nextWidth = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED;

    setWidth(nextWidth);
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <aside
      style={{ width }}
      className={clsx(
        "hidden lg:flex",
        "h-screen shrink-0 flex-col",
        "border-r border-slate-800",
        "bg-slate-950",
        "transition-[width] duration-300 ease-in-out"
      )}
    >
      {/* ================= Logo ================= */}

      <div className="border-b border-slate-800 p-4">
        <Logo collapsed={collapsed} />
      </div>

      {/* ================= Navigation ================= */}

      <div className="flex-1 overflow-y-auto hide-scrollbar px-3 py-4">
        {sidebarMenu.map((group, index) => (
          <SidebarGroup
            key={index}
            group={group}
            collapsed={collapsed}
            userRole={userRole}
          />
        ))}
      </div>

      {/* ================= Storage ================= */}

      {/* {!collapsed && (
        <div className="mx-4 mb-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">Storage</span>

            <span className="text-xs text-slate-500">780MB / 1GB</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[78%] rounded-full bg-blue-600 transition-all duration-500" />
          </div>
        </div>
      )} */}

      {/* ================= User ================= */}

      <div className="border-t border-slate-800 p-4">
        <button
          className={clsx(
            "flex w-full items-center rounded-2xl",
            "transition-all duration-200",
            "hover:bg-slate-900",
            collapsed ? "justify-center p-2" : "gap-3 p-3"
          )}
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="h-11 w-11 rounded-full object-cover"
          />

          {!collapsed && (
            <div className="min-w-0 text-left">
              <h4 className="truncate text-sm font-semibold text-white">
                Jahid Munshi
              </h4>

              <p className="truncate text-xs text-slate-400">Administrator</p>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}

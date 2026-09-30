"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ item, collapsed = false }) {
  const pathname = usePathname();

  // Active Route
  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={clsx(
        "group relative flex items-center rounded transition-all duration-200",

        collapsed ? "justify-center h-12 w-12 mx-auto" : "gap-3 px-4 py-3",

        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white",
      )}
    >
      {/* Active Left Border */}
      {isActive && !collapsed && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-400" />
      )}

      {/* Icon */}
      <Icon
        size={20}
        className={clsx(
          "flex-shrink-0 transition-transform duration-200",
          !isActive && "group-hover:scale-110",
        )}
      />

      {/* Label */}
      {!collapsed && (
        <>
          <span className="flex-1 truncate text-sm font-medium">
            {item.title}
          </span>

          {/* Badge */}
          {item.badge && (
            <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-red-500 px-2 text-xs font-semibold text-white">
              {item.badge}
            </span>
          )}
        </>
      )}

      {/* Tooltip (Collapsed Mode) */}
      {collapsed && (
        <div
          className="
            pointer-events-none
            absolute
            left-16
            z-50
            whitespace-nowrap
            rounded-xl
            bg-slate-900
            px-3
            py-2
            text-sm
            text-white
            opacity-0
            shadow-xl
            transition-all
            duration-200
            group-hover:opacity-100
        "
        >
          {item.title}

          {item.badge && (
            <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs">
              {item.badge}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

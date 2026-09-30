"use client";
import { Bell, Menu, Search } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";

export default function Header({ collapsed, setCollapsed }) {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 backdrop-blur-md">
      {/* ================= Left ================= */}

      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <Menu size={22} />
        </button>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden rounded-xl p-2"
        >
          <Menu size={22} />
        </button>

        {/* Breadcrumb */}

        <div>
          <h1 className="text-xl font-bold text-white">Welcome Back 👋</h1>
        </div>
      </div>

      {/* ================= Center ================= */}

      <div className="hidden w-full max-w-xl px-10 lg:block">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search orders, clients, tasks..."
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              pl-11
              pr-20
              text-sm
              text-white
              placeholder:text-slate-500
              outline-none
              transition
              focus:border-blue-600
            "
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-slate-700 px-2 py-1 text-xs text-slate-500">
            Ctrl K
          </span>
        </div>
      </div>

      {/* ================= Right ================= */}

      <div className="flex items-center gap-3">
        {/* New */}

        {/* <button
          className="
            hidden
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            lg:flex
          "
        >
          <Plus size={18} />
          New
        </button> */}

        {/* Theme */}

        {/* <ThemeToggle /> */}

        {/* Notification */}

        <button className="relative rounded-xl bg-slate-900 p-3 text-slate-400 transition hover:text-white">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Avatar */}

        <button className="flex items-center gap-3 rounded-2xl bg-slate-900 p-2 pl-2 pr-4 transition hover:bg-slate-800">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="hidden text-left xl:block">
            <h4 className="text-sm font-semibold text-white">Jahid Munshi</h4>

            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  );
}

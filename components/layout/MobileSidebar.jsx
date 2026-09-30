"use client";

import { X } from "lucide-react";

import sidebarMenu from "@/data/sidebarMenu";
import Logo from "./Logo";
import SidebarGroup from "./SidebarGroup";

export default function MobileSidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      />

      {/* Drawer */}

      <aside
        className="
                fixed
                left-0
                top-0
                z-50
                flex
                h-screen
                w-72
                flex-col
                bg-slate-950
                border-r
                border-slate-800
                shadow-2xl
                lg:hidden
                animate-slideIn
            "
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-4">
          <Logo />

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-800"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}

        <div className="flex-1 overflow-y-auto px-3 py-4">
          {sidebarMenu.map((group) => (
            <SidebarGroup key={group.section} group={group} userRole="admin" />
          ))}
        </div>
      </aside>
    </>
  );
}

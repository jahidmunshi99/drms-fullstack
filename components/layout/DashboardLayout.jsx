"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  // Desktop sidebar collapsed state
  const [collapsed, setCollapsed] = useState(false);

  // Mobile sidebar open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load sidebar state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");

    if (saved === "true") {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* =========================
          Desktop Sidebar
      ========================== */}
      <Sidebar collapsed={collapsed} />

      {/* =========================
          Mobile Sidebar
      ========================== */}
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* =========================
          Main Content Wrapper
      ========================== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#11100F] p-3">
          {children}
        </main>
      </div>
    </div>
  );
}

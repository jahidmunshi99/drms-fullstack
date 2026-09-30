"use client";

export default function SidebarSectionTitle({ title, collapsed = false }) {
  // Sidebar collapse হলে Section Title দেখাবো না
  if (collapsed) return null;

  return (
    <div className="px-4 pt-6 pb-2">
      <h2 className="select-none text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h2>
    </div>
  );
}

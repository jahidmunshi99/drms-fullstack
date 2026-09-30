"use client";

import SidebarItem from "./SidebarItem";

export default function SidebarGroup({
  group,
  collapsed = false,
  userRole = "admin",
}) {
  // Future Ready:
  // Role অনুযায়ী Menu Filter
  const filteredItems = group.items.filter((item) =>
    item.permission.includes(userRole),
  );

  // যদি কোনো Item না থাকে তাহলে Section Render করবে না
  if (filteredItems.length === 0) return null;

  return (
    <>
      {/* Section Title */}
      {/* <SidebarSectionTitle title={group.section} collapsed={collapsed} /> */}

      {/* Menu Items */}
      <div className="space-y-2">
        {filteredItems.map((item, index) => (
          <SidebarItem key={index} item={item} collapsed={collapsed} />
        ))}
      </div>
    </>
  );
}

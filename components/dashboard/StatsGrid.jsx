"use client";

import { CheckCircle2, ClipboardList, DollarSign, Users } from "lucide-react";
import dashboardStats from "./dashboardStats";
import StatCard from "./StatCard";

const stats = [
  {
    title: "Revenue",
    value: "$4,820",
    growth: "+18%",
    icon: DollarSign,
  },
  {
    title: "Running Orders",
    value: "26",
    growth: "+6%",
    icon: ClipboardList,
  },
  {
    title: "Active Clients",
    value: "58",
    growth: "+12%",
    icon: Users,
  },
  {
    title: "Pending Tasks",
    value: "14",
    growth: "+4%",
    icon: CheckCircle2,
  },
];

export default function StatsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <StatCard key={item.id} {...item} />
      ))}
    </section>
  );
}

import { CheckCircle2, ClipboardList, DollarSign, Users } from "lucide-react";

const dashboardStats = [
  {
    id: 1,
    title: "Revenue",
    value: "$4,820",
    growth: "+18%",
    description: "Compared with last week",
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },

  {
    id: 2,
    title: "Running Orders",
    value: "26",
    growth: "+6%",
    description: "4 due today",
    icon: ClipboardList,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },

  {
    id: 3,
    title: "Active Clients",
    value: "58",
    growth: "+12%",
    description: "8 new this month",
    icon: Users,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },

  {
    id: 4,
    title: "Pending Tasks",
    value: "14",
    growth: "+4%",
    description: "3 high priority",
    icon: CheckCircle2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default dashboardStats;

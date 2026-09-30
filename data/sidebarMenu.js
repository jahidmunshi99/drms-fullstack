import {
  Briefcase,
  ChartColumn,
  LayoutDashboard,
  Mail,
  Network,
  Settings,
  ShoppingCart,
  SquareCheckBig,
  Unlink,
  UserCheck,
  Users,
} from "lucide-react";

const sidebarMenu = [
  {
    section: "MAIN",
    items: [
      {
        id: 1,
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        permission: ["admin", "editor", "user"],
      },
    ],
  },

  {
    section: "MANAGEMENT",
    items: [
      {
        id: 2,
        title: "Rehabilitation",
        href: "/rehabilitation",
        icon: SquareCheckBig,
        permission: ["admin", "editor"],
      },
      {
        id: 2,
        title: "Orders",
        href: "/orders",
        icon: ShoppingCart,
        permission: ["admin", "editor"],
      },
      {
        id: 3,
        title: "Clients",
        href: "/clients",
        icon: Users,
        permission: ["admin"],
      },
      {
        id: 4,
        title: "Services",
        href: "/services",
        icon: Briefcase,
        permission: ["admin", "editor"],
      },
      {
        id: 4,
        title: "Reports",
        href: "/reports",
        icon: ChartColumn,
        permission: ["admin", "editor"],
      },
      {
        id: 4,
        title: "My Tasks",
        href: "/Users",
        icon: Unlink,
        permission: ["admin", "editor"],
      },
      {
        id: 4,
        title: "Submitted",
        href: "/Users",
        icon: Briefcase,
        permission: ["admin", "editor"],
      },
      {
        id: 4,
        title: "Categories",
        href: "/Users",
        icon: Network,
        permission: ["admin", "editor"],
      },
      {
        id: 4,
        title: "Messages",
        href: "/Users",
        icon: Mail,
        permission: ["admin", "editor"],
      },
    ],
  },

  {
    section: "SYSTEM",
    items: [
      {
        id: 5,
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
        permission: ["admin"],
      },
      {
        id: 4,
        title: "Team",
        href: "/team",
        icon: UserCheck,
        permission: ["admin", "editor"],
      },
    ],
  },
];

export default sidebarMenu;

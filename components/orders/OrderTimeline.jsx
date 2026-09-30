"use client";

import Card from "@/components/common/Card";
import {
  CheckCircle2,
  ClipboardList,
  FileUp,
  MessageCircle,
  Pencil,
  RefreshCw,
  Truck,
  UserPlus,
} from "lucide-react";

const iconMap = {
  created: ClipboardList,
  assigned: UserPlus,
  updated: Pencil,
  uploaded: FileUp,
  revision: RefreshCw,
  message: MessageCircle,
  delivered: Truck,
  completed: CheckCircle2,
};

const colorMap = {
  created: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",

  assigned: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",

  updated:
    "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",

  uploaded:
    "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",

  revision:
    "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",

  message:
    "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",

  delivered:
    "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",

  completed:
    "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
};

const activities = [
  {
    id: 1,
    type: "created",
    title: "Order Created",
    description: "The order was created successfully.",
    date: "14 Jul 2026 • 10:20 AM",
    user: "Jahid Munshi",
  },
  {
    id: 2,
    type: "assigned",
    title: "Assigned to Designer",
    description: "The project was assigned to Rakib Hasan.",
    date: "14 Jul 2026 • 10:45 AM",
    user: "Jahid Munshi",
  },
  {
    id: 3,
    type: "uploaded",
    title: "Source Files Uploaded",
    description: "Client manuscript and cover files were uploaded.",
    date: "15 Jul 2026 • 08:30 AM",
    user: "John Smith",
  },
  {
    id: 4,
    type: "revision",
    title: "Revision Requested",
    description: "Client requested clickable Table of Contents.",
    date: "18 Jul 2026 • 04:15 PM",
    user: "John Smith",
  },
  {
    id: 5,
    type: "delivered",
    title: "Files Delivered",
    description: "Final PDF and EPUB delivered successfully.",
    date: "20 Jul 2026 • 11:10 AM",
    user: "Jahid Munshi",
  },
];

export default function OrderTimeline({ activities = [] }) {
  return (
    <Card
      title="Activity Timeline"
      description="History of all important order activities."
    >
      {activities.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">
            No activity found.
          </p>
        </div>
      ) : (
        <div className="relative">
          {activities.map((activity, index) => {
            const Icon = iconMap[activity.type] || ClipboardList;

            const color = colorMap[activity.type] || colorMap.created;

            const isLast = index === activities.length - 1;

            return (
              <div
                key={activity.id || index}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {!isLast && (
                  <div className="absolute left-5 top-12 h-full w-px bg-slate-200 dark:bg-slate-700" />
                )}

                {/* Icon */}

                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color}`}
                >
                  <Icon size={18} />
                </div>

                {/* Content */}

                <div className="flex-1 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {activity.title}
                    </h4>

                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {activity.date}
                    </span>
                  </div>

                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                    {activity.description}
                  </p>

                  {activity.user && (
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                      By{" "}
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {activity.user}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}

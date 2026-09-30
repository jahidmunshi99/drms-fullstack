"use client";

import Button from "@/components/common/Button";
import OrderPriorityBadge from "./OrderPriorityBadge";
import OrderStatusBadge from "./OrderStatusBadge";

const order = {
  orderId: "FG-1001",
  title: "Paperback Formatting",
  platform: "fiverr",

  status: "in_progress",
  priority: "high",

  total: 150,

  createdAt: "14 Jul 2026",
  dueDate: "30 Jul 2026",
};

export default function OrderHeader() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}

        <div>
          <button
            type="button"
            className="mb-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to Orders
          </button>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {order.orderId}
          </h1>

          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
            {order.title}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <OrderStatusBadge status={order.status} />

            <OrderPriorityBadge priority={order.priority} />
          </div>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>Created: {order.createdAt}</span>

            <span>Deadline: {order.dueDate}</span>
          </div>
        </div>

        {/* Right */}

        <div className="flex gap-3">
          <Button variant="secondary">Edit Order</Button>

          <Button>Complete Order</Button>
        </div>
      </div>
    </div>
  );
}

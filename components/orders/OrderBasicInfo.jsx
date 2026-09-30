"use client";

import Card from "@/components/common/Card";
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

export default function OrderBasicInfo({ order }) {
  return (
    <Card
      title="Basic Information"
      description="General information about this order."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Order ID */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Order ID
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.orderId}
          </p>
        </div>

        {/* Order Title */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Order Title
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.title}
          </p>
        </div>

        {/* Status */}

        <div>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            Status
          </p>

          <OrderStatusBadge status={order.status} />
        </div>

        {/* Priority */}

        {/* <div>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            Priority
          </p>

          <OrderPriorityBadge priority={order.priority} />
        </div> */}

        {/* Platform */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Platform
          </p>

          <p className="font-semibold capitalize text-slate-900 dark:text-white">
            {order.platform}
          </p>
        </div>

        {/* Due Date */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Due Date
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.dueDate}
          </p>
        </div>

        {/* Created */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Created At
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.createdAt}
          </p>
        </div>

        {/* Total Amount */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Total Amount
          </p>

          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
            ${order.total}
          </p>
        </div>
      </div>
    </Card>
  );
}

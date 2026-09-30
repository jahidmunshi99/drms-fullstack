"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function OrdersActionMenu({ order, onView, onEdit, onDelete }) {
  console.log("this is from orderaction menu", order);
  return (
    <div className="flex items-center justify-center gap-2">
      {/* View */}

      <Link href={`/orders/${order}/view`}>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 cursor-pointer"
          title="View Order"
        >
          <Eye size={18} />
        </button>
      </Link>

      {/* Edit */}

      <button
        type="button"
        onClick={() => onEdit?.(order)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:bg-amber-500/10 dark:hover:text-amber-400"
        title="Edit Order"
      >
        <Pencil size={18} />
      </button>

      {/* Delete */}

      <button
        type="button"
        onClick={() => onDelete?.(order._id)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-red-500 hover:bg-red-50 hover:text-red-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-red-500 dark:hover:bg-red-500/10 dark:hover:text-red-400"
        title="Delete Order"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

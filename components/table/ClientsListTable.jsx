"use client";

import { Shield } from "lucide-react";
import Button from "../common/Button";
import OrderStatusBadge from "../orders/OrderStatusBadge";
import OrdersActionMenu from "../orders/OrdersActionMenu";
import TableFooter from "./TableFooter";

export default function ClientsListTable({
  orders = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-950">
        <p className="text-slate-500 dark:text-slate-400">Loading orders...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <section className="mt-8 min-h-105 rounded-2xl border border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700 p-7 shadow-sm">
        <div>
          <h2 className="text-md font-semibold dark:text-white">All Clients</h2>
          <p className="mt-1 text-gray-600">No Clients yet</p>
        </div>

        {/* Empty State */}
        <div className="flex min-h-75 flex-col items-center justify-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center">
            <Shield className="h-14 w-14 stroke-[1.5] text-gray-400" />
          </div>

          <p className="mb-5 text-md text-gray-600">No clients yet</p>

          <Button className="px-4 py-2">Add Your First Client</Button>
        </div>
      </section>
    );
  }

  return (
    <div className="overflow-x-auto rounded border border-slate-200 text-slate-800 dark:text-slate-300 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-full">
        <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-800">
          <tr>
            <th className="px-5 py-4 text-left text-sm font-semibold">SL</th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Client ID
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Client Name
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold">Email</th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Platform
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold">
              Earnings
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Total Tasks
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Active
            </th>
            <th className="px-5 py-4 text-left text-sm font-semibold">
              Country
            </th>
            <th className="px-5 py-4 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order?._id}
              className="border-b border-slate-100 transition text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:border-slate-700 dark:hover:bg-[#3B3A39]"
            >
              <td className="px-5 py-2">{index + 1}</td>
              <td className="px-5 py-2">{order?.orderId}</td>
              <td className="px-5 py-2">{order?.clientName}</td>
              <td className="px-5 py-2 capitalize">{order?.email}</td>
              <td className="px-5 py-2 capitalize">{order?.platform}</td>
              <td className="px-5 py-2 font-semibold text-center">
                ${order?.total}
              </td>
              <td className="px-5 py-2">{order?.dueDate}</td>
              <td className="px-5 py-2">
                <OrderStatusBadge status={order?.status} />
              </td>
              <td className="px-5 py-2 capitalize">{order?.country}</td>
              <td className="px-5 py-2 text-center">
                <OrdersActionMenu
                  order={order}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter orders={orders} />
    </div>
  );
}

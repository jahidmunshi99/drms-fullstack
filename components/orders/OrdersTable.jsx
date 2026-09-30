"use client";

import Loading from "../../app/(dashboard)/orders/loading";
import TableFooter from "../table/TableFooter";
import OrderStatusBadge from "./OrderStatusBadge";
import OrdersActionMenu from "./OrdersActionMenu";

export default function OrdersTable({
  loading = false,
  orders = [],
  error = null,
  onView,
  onEdit,
  onDelete,
}) {
  //Date formatting
  const formatDate = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="rounded border border-red-200 bg-red-50 p-12 text-center dark:border-red-900 dark:bg-red-950/30">
        <h3 className="text-xl font-semibold text-red-700 dark:text-red-400">
          Failed to Load Orders
        </h3>

        <p className="mt-2 text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          No Orders Found
        </h3>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Create your first order to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded border border-slate-200 text-slate-800 dark:text-slate-300 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="p-2 bg-slate-950 rounded border border-slate-900">
        <table className="min-w-full border border-slate-800">
          <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-800">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold">SL</th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                ID No
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Client Name
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Platform
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Services
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Amount
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Due Date
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Author
              </th>
              <th className="px-5 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 transition text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:border-slate-700 dark:hover:bg-[#3B3A39]"
              >
                <td className="px-5 py-2">{index + 1}</td>
                <td className="px-5 py-2">{order?.client?.clientId}</td>
                <td className="px-5 py-2">{order?.client?.clientName}</td>
                <td className="px-5 py-2 capitalize">
                  {order?.marketplace.platform}
                </td>
                <td className="px-5 py-2 capitalize">
                  {order?.serviceType}
                  {""}
                </td>
                <td className="px-5 py-2 font-semibold">${order.price}</td>
                <td className="px-5 py-2">{formatDate(order?.dueDate)}</td>
                <td className="px-5 py-2">
                  <OrderStatusBadge status={order?.status} />
                </td>
                <td className="px-5 py-2 capitalize">
                  {order?.assignment?.manager}
                </td>
                <td className="px-5 py-2 text-center">
                  <OrdersActionMenu
                    order={order?.client?.clientId}
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
    </div>
  );
}

"use client";

import Card from "@/components/common/Card";

const services = [
  {
    id: 1,
    name: "Paperback Formatting",
    description: "Amazon KDP 6x9 Layout",
    quantity: 1,
    price: 120,
  },
  {
    id: 2,
    name: "EPUB Formatting",
    description: "Reflowable EPUB",
    quantity: 1,
    price: 40,
  },
  {
    id: 3,
    name: "Cover Resize",
    description: "Paperback Cover",
    quantity: 2,
    price: 15,
  },
];

export default function OrderServices({ services = [] }) {
  const grandTotal = services.reduce((total, service) => {
    return total + service.quantity * service.price;
  }, 0);

  return (
    <Card title="Order Services" description="Services included in this order.">
      {services.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">
            No services found.
          </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    #
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Service
                  </th>

                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Qty
                  </th>

                  <th className="px-4 py-3 text-right text-sm font-semibold">
                    Unit Price
                  </th>

                  <th className="px-4 py-3 text-right text-sm font-semibold">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {services.map((service, index) => {
                  const lineTotal = service.quantity * service.price;

                  return (
                    <tr
                      key={service.id || index}
                      className="border-b border-slate-100 last:border-0 dark:border-slate-800"
                    >
                      <td className="px-4 py-4">{index + 1}</td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {service.name}
                          </p>

                          {service.description && (
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              {service.description}
                            </p>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center">
                        {service.quantity}
                      </td>

                      <td className="px-4 py-4 text-right">
                        ${service.price.toFixed(2)}
                      </td>

                      <td className="px-4 py-4 text-right font-semibold">
                        ${lineTotal.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Grand Total */}

          <div className="mt-6 flex justify-end border-t border-slate-200 pt-5 dark:border-slate-800">
            <div className="w-full max-w-sm rounded-xl bg-slate-50 p-5 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">
                  Grand Total
                </span>

                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

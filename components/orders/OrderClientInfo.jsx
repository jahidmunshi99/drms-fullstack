"use client";

import Card from "@/components/common/Card";

const order = {
  clientName: "John Smith",
  clientEmail: "john@example.com",
  clientPhone: "+1 555-123-4567",
  clientCountry: "United States",
  clientTimezone: "UTC-5",
  clientLanguage: "English",

  platform: "fiverr",
  buyerUsername: "john_writer",
};

export default function OrderClientInfo({ order }) {
  return (
    <Card
      title="Client Information"
      description="Client contact and marketplace details."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Client Name */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Client Name
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientName}
          </p>
        </div>

        {/* Email */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Email
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientEmail || "Not Provided"}
          </p>
        </div>

        {/* Phone */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Phone
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientPhone || "Not Provided"}
          </p>
        </div>

        {/* Country */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Country
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientCountry || "Unknown"}
          </p>
        </div>

        {/* Time Zone */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Time Zone
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientTimezone || "Not Set"}
          </p>
        </div>

        {/* Preferred Language */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Preferred Language
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.clientLanguage || "English"}
          </p>
        </div>

        {/* Marketplace Username */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Marketplace Username
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {order.buyerUsername || "-"}
          </p>
        </div>

        {/* Platform */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Platform
          </p>

          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            {order.platform}
          </span>
        </div>
      </div>
    </Card>
  );
}

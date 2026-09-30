"use client";

import Card from "@/components/common/Card";

const order = {
  platform: "fiverr",
  orderId: "FO-123456",
  buyerUsername: "john_writer",
  marketplaceTitle: "Amazon KDP Book Formatting",
  marketplaceUrl: "https://www.fiverr.com/orders/123456",
};

// const order = {
//   platform: "upwork",
//   orderId: "UP-45896",
//   buyerUsername: "emily_dev",
//   marketplaceTitle: "EPUB Formatting Project",
//   marketplaceUrl: "https://www.upwork.com/contracts/45896",
// };

// const order = {
//   platform: "direct",
//   companyName: "ABC Publishing",
//   website: "https://abcpublishing.com",
//   marketplaceTitle: "Referral from LinkedIn",
// };

export default function OrderMarketplaceInfo() {
  return (
    <Card
      title="Marketplace Information"
      description="Marketplace specific order details."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Platform */}

        <div>
          <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Platform
          </p>

          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            {order.platform}
          </span>
        </div>

        {/* ================= Fiverr ================= */}

        {order.platform === "fiverr" && (
          <>
            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Order ID
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.orderId}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Buyer Username
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.buyerUsername}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Gig Title
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.marketplaceTitle}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Order URL
              </p>

              {order.marketplaceUrl ? (
                <a
                  href={order.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Open Fiverr Order
                </a>
              ) : (
                <p className="text-slate-500">Not Available</p>
              )}
            </div>
          </>
        )}

        {/* ================= Upwork ================= */}

        {order.platform === "upwork" && (
          <>
            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Contract ID
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.orderId}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Client Username
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.buyerUsername}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Job Title
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.marketplaceTitle}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Contract URL
              </p>

              {order.marketplaceUrl ? (
                <a
                  href={order.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Open Upwork Contract
                </a>
              ) : (
                <p className="text-slate-500">Not Available</p>
              )}
            </div>
          </>
        )}

        {/* ================= Direct Client ================= */}

        {order.platform === "direct" && (
          <>
            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Company Name
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.companyName || "Not Available"}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Website
              </p>

              {order.website ? (
                <a
                  href={order.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Visit Website
                </a>
              ) : (
                <p className="text-slate-500">Not Available</p>
              )}
            </div>

            <div className="md:col-span-2">
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                Reference
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {order.marketplaceTitle || "Not Available"}
              </p>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

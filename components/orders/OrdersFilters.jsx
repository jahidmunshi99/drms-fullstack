"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Link from "next/link";
import { IoPrintOutline } from "react-icons/io5";

const platformOptions = [
  { label: "All Platforms", value: "" },
  { label: "Fiverr", value: "fiverr" },
  { label: "Upwork", value: "upwork" },
  { label: "Direct Client", value: "direct" },
];

const statusOptions = [
  { label: "All Status", value: "" },
  { label: "New", value: "new" },
  { label: "Accepted", value: "accepted" },
  { label: "In Progress", value: "in_progress" },
  { label: "Revision", value: "revision" },
  { label: "Completed", value: "completed" },
];

export default function OrdersFilters({ filters, onChange, onCreateOrder }) {
  return (
    <>
      <div className="rounded border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-4 xl:grid-cols-12 items-center">
          {/* Platform */}

          <div className="xl:col-span-2">
            <Select
              name="platform"
              value={filters.platform}
              onChange={onChange}
              options={platformOptions}
            />
          </div>

          {/* Status */}
          <div className="xl:col-span-2">
            <Select
              name="status"
              value={filters.status}
              onChange={onChange}
              options={statusOptions}
            />
          </div>

          {/* Search */}
          <div className="xl:col-span-5">
            <Input
              name="search"
              placeholder="Order ID, Client, Buyer..."
              value={filters.search}
              onChange={onChange}
            />
          </div>

          <Button type="button">
            <Link href="/orders/new">+ Add New</Link>
          </Button>
          <Button>Export CSV</Button>
          <div className="">
            <Button className="px-2">
              <IoPrintOutline className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

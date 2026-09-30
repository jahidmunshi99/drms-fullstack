"use client";
import SummaryCard from "../orders/ui/SummaryCard.jsx";

import { useState } from "react";
const priorityOptions = [
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

const statusOptions = [
  { value: "new", label: "New" },
  { value: "accepted", label: "Accepted" },
  { value: "in_progress", label: "In Progress" },
];

const platformOptions = [
  { value: "fiverr", label: "Fiverr" },
  { value: "upwork", label: "Upwork" },
  { value: "direct", label: "Direct Client" },
];

export default function CreateOrderForm() {
  const [formData, setFormData] = useState({
    title: "",
    priority: "normal",
    status: "new",
    dueDate: "",

    clientName: "",
    clientEmail: "",

    platform: "fiverr",
    orderId: "",
    buyerUsername: "",

    notes: "",
    marketplaceId: "",
    marketplaceTitle: "",
    marketplaceUrl: "",
    companyName: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 xl:grid-cols-12">
        {/* Left */}

        <div className="space-y-6 xl:col-span-8">{/* সব Card এখানে */}</div>

        {/* Right */}

        <div className="xl:col-span-4">
          <SummaryCard formData={formData} services={services} />
        </div>
      </div>
    </form>
  );
}

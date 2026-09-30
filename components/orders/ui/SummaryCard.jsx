"use client";

import { useMemo, useState } from "react";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Textarea from "@/components/common/Textarea";

import ServiceItem from "../ui/ServiceItem";
import SummaryCard from "../ui/SummaryCard";

// ==========================================
// OPTIONS
// ==========================================

const priorityOptions = [
  { label: "Normal", value: "normal" },
  { label: "High", value: "high" },
  { label: "Urgent", value: "urgent" },
];

const statusOptions = [
  { label: "New", value: "new" },
  { label: "Accepted", value: "accepted" },
  { label: "In Progress", value: "in_progress" },
  { label: "Revision", value: "revision" },
  { label: "Completed", value: "completed" },
];

const platformOptions = [
  { label: "Fiverr", value: "fiverr" },
  { label: "Upwork", value: "upwork" },
  { label: "Direct Client", value: "direct" },
];

// ==========================================
// INITIAL FORM DATA
// ==========================================

const initialFormData = {
  // Basic Information
  title: "",
  priority: "normal",
  status: "new",
  dueDate: "",

  // Client Information
  clientName: "",
  clientEmail: "",

  // Marketplace
  platform: "fiverr",
  orderId: "",
  buyerUsername: "",
  marketplaceTitle: "",
  marketplaceUrl: "",
  companyName: "",
  website: "",

  // Assignment
  manager: "",
  reviewer: "",
  estimatedHours: "",

  // Notes
  notes: "",
};

// ==========================================
// CREATE EMPTY SERVICE
// ==========================================

const createEmptyService = () => ({
  id: crypto.randomUUID(),
  service: "",
  price: "",
  quantity: 1,
});

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CreateOrderForm() {
  // ==========================================
  // STATES
  // ==========================================

  const [formData, setFormData] = useState(initialFormData);

  const [services, setServices] = useState([createEmptyService()]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState("");

  // ==========================================
  // HANDLE NORMAL FORM CHANGE
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE PLATFORM CHANGE
  // ==========================================

  const handlePlatformChange = (event) => {
    const platform = event.target.value;

    setFormData((prev) => ({
      ...prev,

      platform,

      // Reset marketplace fields
      orderId: "",
      buyerUsername: "",
      marketplaceTitle: "",
      marketplaceUrl: "",
      companyName: "",
      website: "",
    }));
  };

  // ==========================================
  // ADD SERVICE
  // ==========================================

  const addService = () => {
    setServices((prev) => [...prev, createEmptyService()]);
  };

  // ==========================================
  // REMOVE SERVICE
  // ==========================================

  const removeService = (id) => {
    setServices((prev) => {
      // Prevent removing the last service
      if (prev.length <= 1) {
        return prev;
      }

      return prev.filter((service) => service.id !== id);
    });
  };

  // ==========================================
  // UPDATE SERVICE
  // ==========================================

  const updateService = (id, field, value) => {
    setServices((prev) =>
      prev.map((service) => {
        if (service.id !== id) {
          return service;
        }

        if (field === "price" || field === "quantity") {
          return {
            ...service,
            [field]: value === "" ? "" : Number(value),
          };
        }

        return {
          ...service,
          [field]: value,
        };
      })
    );
  };

  // ==========================================
  // CALCULATE SUBTOTAL
  // ==========================================

  const subtotal = useMemo(() => {
    return services.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;

      return total + price * quantity;
    }, 0);
  }, [services]);

  // ==========================================
  // VALIDATE FORM
  // ==========================================

  const validateForm = () => {
    if (!formData.title.trim()) {
      return "Please enter an order title.";
    }

    if (!formData.clientName.trim()) {
      return "Please enter the client name.";
    }

    if (!formData.dueDate) {
      return "Please select a delivery date.";
    }

    if (
      formData.clientEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)
    ) {
      return "Please enter a valid email address.";
    }

    if (!services.length) {
      return "Please add at least one service.";
    }

    for (const item of services) {
      if (!item.service.trim()) {
        return "Please enter a service name.";
      }

      if (item.price === "" || Number(item.price) <= 0) {
        return "Service price must be greater than 0.";
      }

      if (item.quantity === "" || Number(item.quantity) <= 0) {
        return "Service quantity must be greater than 0.";
      }
    }

    return null;
  };

  // ==========================================
  // SHOW MESSAGE
  // ==========================================

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 4000);
  };

  // ==========================================
  // SAVE DRAFT
  // ==========================================

  const handleSaveDraft = () => {
    try {
      const draftData = {
        formData,
        services,
        subtotal,
        savedAt: new Date().toISOString(),
      };

      localStorage.setItem("create-order-draft", JSON.stringify(draftData));

      showMessage("Draft saved successfully!", "success");
    } catch (error) {
      console.error(error);

      showMessage("Failed to save draft.", "error");
    }
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      showMessage(validationError, "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        ...formData,

        estimatedHours: formData.estimatedHours
          ? Number(formData.estimatedHours)
          : 0,

        services: services.map((service) => ({
          service: service.service,
          price: Number(service.price),
          quantity: Number(service.quantity),
          total: Number(service.price) * Number(service.quantity),
        })),

        subtotal,

        createdAt: new Date().toISOString(),
      };

      // ======================================
      // CURRENTLY LOGGING DATA
      // ======================================

      console.log("ORDER DATA:", orderData);

      // ======================================
      // FUTURE API REQUEST
      // ======================================

      /*
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to create order."
        );
      }
      */

      // Remove saved draft

      localStorage.removeItem("create-order-draft");

      showMessage("Order created successfully!", "success");

      // ======================================
      // RESET FORM
      // ======================================

      setFormData(initialFormData);

      setServices([createEmptyService()]);
    } catch (error) {
      console.error(error);

      showMessage(
        error.message || "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // RETURN JSX
  // ==========================================

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Create New Order
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Create a new Fiverr, Upwork or Direct Client order.
          </p>
        </div>

        <div className="flex gap-3">
          <Button type="button" variant="secondary" onClick={handleSaveDraft}>
            Save Draft
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Order"}
          </Button>
        </div>
      </div>

      {/* ======================================
          MESSAGE
      ====================================== */}

      {message && (
        <div
          className={`rounded-xl border p-4 text-sm ${
            messageType === "error"
              ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
              : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
          }`}
        >
          {message}
        </div>
      )}

      {/* ======================================
          MAIN GRID
      ====================================== */}

      <div className="grid gap-6 xl:grid-cols-12">
        {/* ====================================
            LEFT SIDE
        ==================================== */}

        <div className="space-y-6 xl:col-span-8">
          {/* BASIC INFORMATION */}

          <Card
            title="Basic Information"
            description="Basic project information."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Order Title"
                required
                name="title"
                placeholder="Paperback Formatting"
                value={formData.title}
                onChange={handleChange}
              />

              <Select
                label="Priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                options={priorityOptions}
              />

              <Select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                options={statusOptions}
              />

              <Input
                label="Delivery Date"
                type="date"
                required
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* CLIENT INFORMATION */}

          <Card title="Client Information" description="Client basic details.">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Client Name"
                required
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
              />

              <Input
                label="Client Email"
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* MARKETPLACE */}

          <Card
            title="Marketplace Information"
            description="Where did this order come from?"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label="Platform"
                name="platform"
                value={formData.platform}
                onChange={handlePlatformChange}
                options={platformOptions}
              />

              {/* FIVERR */}

              {formData.platform === "fiverr" && (
                <>
                  <Input
                    label="Order ID"
                    name="orderId"
                    placeholder="FO123456789"
                    value={formData.orderId}
                    onChange={handleChange}
                  />

                  <Input
                    label="Buyer Username"
                    name="buyerUsername"
                    placeholder="john_writer"
                    value={formData.buyerUsername}
                    onChange={handleChange}
                  />

                  <Input
                    label="Gig Title"
                    name="marketplaceTitle"
                    placeholder="Book Formatting"
                    value={formData.marketplaceTitle}
                    onChange={handleChange}
                  />

                  <Input
                    label="Order URL"
                    name="marketplaceUrl"
                    placeholder="https://www.fiverr.com/..."
                    value={formData.marketplaceUrl}
                    onChange={handleChange}
                  />
                </>
              )}

              {/* UPWORK */}

              {formData.platform === "upwork" && (
                <>
                  <Input
                    label="Contract ID"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleChange}
                  />

                  <Input
                    label="Client Username"
                    name="buyerUsername"
                    value={formData.buyerUsername}
                    onChange={handleChange}
                  />

                  <Input
                    label="Job Title"
                    name="marketplaceTitle"
                    value={formData.marketplaceTitle}
                    onChange={handleChange}
                  />

                  <Input
                    label="Contract URL"
                    name="marketplaceUrl"
                    value={formData.marketplaceUrl}
                    onChange={handleChange}
                  />
                </>
              )}

              {/* DIRECT CLIENT */}

              {formData.platform === "direct" && (
                <>
                  <Input
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Website"
                    name="website"
                    placeholder="https://"
                    value={formData.website}
                    onChange={handleChange}
                  />

                  <Input
                    label="Reference"
                    name="marketplaceTitle"
                    value={formData.marketplaceTitle}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          </Card>

          {/* SERVICES */}

          <Card title="Services" description="Add one or multiple services.">
            <div className="space-y-4">
              {services.map((item) => (
                <ServiceItem
                  key={item.id}
                  item={item}
                  onChange={updateService}
                  onRemove={removeService}
                />
              ))}

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
                <Button type="button" variant="secondary" onClick={addService}>
                  + Add Service
                </Button>

                <div className="text-right">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Current Total
                  </p>

                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${subtotal.toFixed(2)}
                  </h3>
                </div>
              </div>
            </div>
          </Card>

          {/* ASSIGNMENT */}

          <Card
            title="Assignment"
            description="Assign this order to your team."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label="Project Manager"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                options={[
                  {
                    label: "Select Manager",
                    value: "",
                  },
                ]}
              />

              <Select
                label="Reviewer"
                name="reviewer"
                value={formData.reviewer}
                onChange={handleChange}
                options={[
                  {
                    label: "Select Reviewer",
                    value: "",
                  },
                ]}
              />

              <Input
                label="Estimated Hours"
                type="number"
                name="estimatedHours"
                placeholder="5"
                min="0"
                value={formData.estimatedHours}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* INTERNAL NOTES */}

          <Card
            title="Internal Notes"
            description="These notes are only visible to your team."
          >
            <Textarea
              label="Notes"
              name="notes"
              rows={6}
              placeholder="Write internal notes..."
              value={formData.notes}
              onChange={handleChange}
            />
          </Card>
        </div>

        {/* ====================================
            RIGHT SIDEBAR
        ==================================== */}

        <div className="xl:col-span-4">
          <SummaryCard formData={formData} services={services} />
        </div>
      </div>
    </form>
  );
}

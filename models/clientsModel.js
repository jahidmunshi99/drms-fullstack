import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    // ── Section 01: Basic Information ──
    fullName: {
      type: String,
      required: [true, "Client full name is required"],
      trim: true,
      maxlength: 150,
    },
    displayName: {
      type: String,
      trim: true,
      maxlength: 80,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      trim: true,
      enum: {
        values: [
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
          "Germany",
          "France",
          "Netherlands",
          "Bangladesh",
          "India",
          "UAE",
          "Singapore",
          "Other",
          "",
        ],
        message: "Invalid country selection",
      },
      default: "",
    },
    clientType: {
      type: String,
      enum: ["Individual", "Business", "Agency", "Publisher"],
      default: "Individual",
    },

    // ── Section 02: Platform & Business ──
    platform: {
      type: String,
      required: [true, "Source platform is required"],
      enum: [
        "Fiverr",
        "Upwork",
        "Freelancer",
        "LinkedIn",
        "Direct",
        "Referral",
      ],
      default: "Fiverr",
    },
    profileUrl: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },
    currency: {
      type: String,
      enum: ["USD ($)", "EUR (€)", "GBP (£)", "AUD (A$)", "CAD (C$)"],
      default: "USD ($)",
    },
    address: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },

    // ── Section 03: Tags & Notes ──
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: (v) => v.length <= 8,
        message: "Maximum 8 tags allowed",
      },
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    // ── Sidebar: Avatar, Status & Priority ──
    avatar: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "VIP"],
      default: "Medium",
    },
  },
  {
    timestamps: true, // auto-generates createdAt & updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// ── Indexes for common queries ──
clientSchema.index({ email: 1 }, { unique: true });
clientSchema.index({ platform: 1, status: 1 });
clientSchema.index({ priority: 1 });
clientSchema.index({ fullName: "text", company: "text", displayName: "text" });
clientSchema.index({ tags: 1 });
clientSchema.index({ createdAt: -1 });

// ── Virtual: initials (useful for avatar fallback) ──
clientSchema.virtual("initials").get(function () {
  if (!this.fullName) return null;
  return this.fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
});

// ── Virtual: profile completion percentage ──
clientSchema.virtual("completionPercent").get(function () {
  const checks = [
    this.fullName,
    this.email,
    this.phone,
    this.country,
    this.profileUrl,
    this.company,
    this.notes,
    this.tags?.length ? "x" : "",
    this.avatar ? "x" : "",
  ];
  const done = checks.filter(Boolean).length;
  return Math.round((done / checks.length) * 100);
});

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;

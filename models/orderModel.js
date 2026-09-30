import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    client: {
      clientId: {
        type: String,
        required: true,
        trim: true,
      },

      userName: {
        type: String,
        required: true,
        trim: true,
      },

      clientName: {
        type: String,
        required: true,
        trim: true,
      },
    },

    serviceType: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: [
        "new",
        "in_progress",
        "review",
        "delivered",
        "completed",
        "cancelled",
      ],
      default: "new",
    },

    dueDate: {
      type: Date,
      required: true,
    },

    marketplace: {
      platform: {
        type: String,
        required: true,
        trim: true,
      },

      orderId: {
        type: String,
        required: true,
        trim: true,
      },
    },

    assignment: {
      manager: {
        type: String,
        trim: true,
      },

      isDelivered: {
        type: Boolean,
        default: false,
      },

      reviewer: {
        type: String,
        trim: true,
      },

      estimatedHours: {
        type: String,
        trim: true,
      },

      dateAssigned: {
        type: Date,
      },
    },

    orderNote: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const OrdersModel =
  mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema);

export default OrdersModel;

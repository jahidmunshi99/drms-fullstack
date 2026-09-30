const orders = [
  {
    client: {
      clientId: "1042",
      userName: "johndoe_fiverr",
      clientName: "John Doe",
    },
    serviceType: "Book Formatting",
    price: "520",
    status: "new",
    dueDate: "2025-07-20T00:00:00.000Z",
    marketplace: { platform: "Fiverr", orderId: "#454554545" },
    assignment: {
      manager: "Alice Johnson",
      isDelivered: false,
      reviewer: "Bob Smith",
      estimatedHours: 24,
      dateAssigned: "2025-07-11T10:00:00.000Z",
    },

    orderNote:
      "Client wants a modern minimalist look. Reference files attached in Fiverr inbox.",
    createdAt: "2025-07-10T14:30:00.000Z",
    updatedAt: "2025-07-10T14:30:00.000Z",
  },
];

export default orders;

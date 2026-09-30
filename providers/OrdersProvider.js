"use client";

/**
 * Order Context
 *
 * Provides centralized order data and update functions
 * to all child components.
 *
 * Use `useOrders()` to access:
 * - allData: List of orders
 * - setAllData: Update order data
 */

import { createContext, useContext, useEffect, useState } from "react";

import getClientsData from "../data/orders/clients";

const OrderContext = createContext(null);

/**
 * Provides OrderContext to child components.
 */
const OrderContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    platform: "",
    status: "",
    priority: "",
    sort: "newest",
  });

  const handleSucessPopup = () => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  // fetch data from server
  useEffect(() => {
    const request = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const result = await response.json();
        setAllData(result.data || []);
        setLoading(false);
        if (!response.ok) {
          throw new Error("faield to fetch data");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };
    request();
  }, []);

  const [clientsData, setClientsData] = useState(getClientsData);

  return (
    <OrderContext.Provider
      value={{
        allData,
        setAllData,
        filters,
        setFilters,
        clientsData,
        setClientsData,
        loading,
        error,
        isSuccess,
        setIsSuccess,
        handleSucessPopup,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

/**
 * Custom hook for accessing order data.
 *
 * @returns {{ allData: Array, setAllData: Function }}
 */
export const useOrders = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderContextProvider");
  }

  return context;
};

export default OrderContextProvider;

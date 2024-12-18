import { useState } from "react";
import { axiosInstance } from "../api/config/axiosInstance";

// Custom hook for POST requests
const usePost = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (transactionData) => {
    if (!endpoint) {
      console.error("Endpoint is not defined.");
      return;
    }

    if (!transactionData) {
      console.error("Transaction data is missing.");
      return;
    }

    setLoading(true);
    setError(null); // Reset error state before new request
    setData(null); // Reset data state before new request

    try {
      const response = await axiosInstance.post(endpoint, transactionData);
      setData(response.data); // Store the response data in state
      return response.data; // Return the response data to the caller
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong";
      console.error("API Error:", errorMessage);
      setError(errorMessage); // Store the error message in state
      throw new Error(errorMessage); // Throw the error for further handling if needed
    } finally {
      setLoading(false); // Always stop loading after the request
    }
  };

  return { data, loading, error, postData };
};

export default usePost;

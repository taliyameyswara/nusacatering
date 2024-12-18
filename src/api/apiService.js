import { axiosInstance } from "../api/config/axiosInstance";

// API service for transactions
export const transactionAPI = {
  approveTransaction: async (id, { payment_type, total }) => {
    try {
      const response = await axiosInstance.post(
        `/admin/transaction/${id}/approve`,
        { payment_type, total } // Include payment_type and total in the request body
      );
      return response.data; // Return data for success
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong";
      throw new Error(errorMessage); // Throw error for error handling
    }
  },

  rejectTransaction: async (id) => {
    try {
      const response = await axiosInstance.post(
        `/admin/transaction/${id}/reject`
      );
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong";
      throw new Error(errorMessage);
    }
  },

  fetchTransactions: async () => {
    try {
      const response = await axiosInstance.get("/admin/transaction");
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong";
      throw new Error(errorMessage);
    }
  },
};

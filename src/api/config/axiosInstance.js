import axios from "axios";

// Base instance for API requests
export const axiosInstance = axios.create({
  baseURL: "https://nusacatering-api-roan.vercel.app/api/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptors for responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

import { axiosInstance } from "./config/axiosInstance";

// API for registration
export const register = async (data) => {
  return await axiosInstance.post("/register", data);
};

// API for login
export const login = async (data) => {
  return await axiosInstance.post("/login", data);
};

import React, { createContext, useState, useEffect } from "react";
import { register, login } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleRegister = async (data) => {
    try {
      const response = await register(data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registrasi gagal";
      throw new Error(errorMessage);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await login(data);
      const { user, token } = response.data;

      setUser(user);
      setToken(token);
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(user));

      // Redirect based on role
      if (user.role === "admin") {
        window.location.href = "/dashboard"; // Arahkan ke halaman admin
      } else {
        window.location.href = "/"; // Arahkan ke halaman user biasa
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login gagal";
      throw new Error(errorMessage);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    window.location.href = "/login"; // Arahkan ke halaman login
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("authUser");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

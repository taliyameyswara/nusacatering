import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleLogin(formData);
      navigate(from, { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message || "Login gagal. Silakan coba lagi."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl text-center mb-6 font-serif">
          Masuk ke <span className="text-primary">NusaCatering</span>
        </h2>
        {error && (
          <p className="text-sm text-red-600 text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan kata sandi Anda"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient text-white py-2 rounded-xl hover:bg-opacity-90 transition duration-300 flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-t-primary border-gray-300 rounded-full animate-spin"></div>
            ) : (
              "Masuk"
            )}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

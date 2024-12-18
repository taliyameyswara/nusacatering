import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleRegister(formData);
      setSuccess("Pendaftaran berhasil! Silakan login.");
      setError(null);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.message || "Pendaftaran gagal. Silakan coba lagi.");
      setSuccess(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-serif text-center mb-6">
          Daftar ke <span className="text-primary">NusaCatering</span>
        </h2>
        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-600 text-center mb-4">{success}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nomor HP
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Masukkan nomor HP Anda"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
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
              "Daftar"
            )}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-primary hover:underline">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

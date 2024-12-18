import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl text-center mb-6 font-serif">
          Masuk ke <span className="text-primary">NusaCatering</span>
        </h2>
        <form>
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
              placeholder="Masukkan email Anda"
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
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
              placeholder="Masukkan kata sandi Anda"
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient text-white py-2 rounded-xl hover:bg-opacity-90 transition duration-300"
          >
            Masuk
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

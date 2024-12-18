import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient">
      <div className="bg-light flex flex-col items-center justify-center p-10 rounded-2xl shadow-lg">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-gradient text-white rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

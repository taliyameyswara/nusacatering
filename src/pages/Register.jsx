import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-serif text-center mb-6">
          Daftar ke <span className="text-primary">NusaCatering</span>
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nohp"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nomor HP
            </label>
            <input
              type="tel"
              id="nohp"
              placeholder="Masukkan nomor HP Anda"
              className="w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
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
            Daftar
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

import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";

const Package = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/packages"); // Fetch semua paket

  // Tampilkan loading state
  if (loading) {
    return <Loading />;
  }

  // Tampilkan error jika ada
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Tampilkan pesan jika data tidak ditemukan
  if (!data?.data || data.data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No packages found</p>
      </div>
    );
  }

  return (
    <section id="paket" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-serif text-black mb-4">
          Layanan Paket Kami
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami menyediakan berbagai paket catering yang dapat disesuaikan dengan
          kebutuhan acara Anda. Temukan layanan terbaik untuk momen spesial
          Anda!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.data.map((service) => (
            <div
              key={service.id}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/package/${service.id}`)} // Arahkan ke detail paket
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;

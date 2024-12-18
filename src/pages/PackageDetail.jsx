import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/packages");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Filter paket berdasarkan ID
  const packageData = data?.data?.find((pkg) => pkg.id === parseInt(id, 10));

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Package not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center py-10 px-4">
      <div className="max-w-5xl w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Detail Text */}
        <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl text-black mb-4 font-serif">
            {packageData.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {packageData.description}
          </p>
          <h3 className="text-lg font-medium text-black mb-3">Pilihan Menu:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {packageData.menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => navigate(`/order/${packageData.id}`)}
            className="mt-6 bg-gradient w-fit text-white px-6 py-2 rounded-xl hover:from-purple-500 hover:to-blue-500 transition duration-300"
          >
            Pesan Sekarang
          </button>
        </div>

        {/* Gambar */}
        <div className="md:w-1/2 h-auto">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;

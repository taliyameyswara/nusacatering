import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const url = `/transaction?page=${currentPage}`;
  const { data, loading, error } = useFetch(url);

  const orderHistory = data?.data || [];
  const pagination = data?.meta?.pagination || {};

  const sortedOrderHistory = [...orderHistory].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const handleNextPage = () => {
    if (pagination.links?.next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-serif text-white mt-20 mb-8">
        Riwayat Pesanan
      </h1>
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8">
        {sortedOrderHistory.length > 0 ? (
          sortedOrderHistory.map((order) => (
            <div
              key={order.id}
              className="mb-6 p-6 border border-gray-200 rounded-xl bg-gradient-to-r from-white to-gray-50 "
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-primary mb-1">
                    {order.package_name}
                  </h2>
                  <p className="text-sm text-gray-500">{order.created_at}</p>
                </div>

                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                    order.status === "pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : order.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status === "pending"
                    ? "Pending"
                    : order.status === "approved"
                    ? "Diterima"
                    : "Ditolak"}
                </span>
              </div>

              <hr className="my-2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800 text-xs">
                      Alamat
                    </span>
                    <br />
                    {order.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800 text-xs">
                      Tanggal Keperluan
                    </span>
                    <br />
                    {order.date_needed}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800 text-xs">
                      Jumlah:
                    </span>
                    <br />
                    {order.quantity}
                  </p>
                </div>

                <div className="">
                  <span className="block text-sm font-semibold text-gray-800 mb-1">
                    Detail Menu Utama
                  </span>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {order.details.map((detail, index) => (
                      <li key={index}>{detail.menu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 font-medium">
            Belum ada riwayat pesanan.
          </p>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage <= 1}
            className={`px-4 py-1.5 rounded-lg ${
              currentPage <= 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient text-white hover:bg-primary"
            }`}
          >
            Sebelumnya
          </button>
          <span className="text-sm text-gray-600">
            Halaman {pagination.current_page} dari {pagination.total_pages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={!pagination.links?.next}
            className={`px-4 py-1.5 rounded-lg ${
              !pagination.links?.next
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient text-white hover:bg-primary"
            }`}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

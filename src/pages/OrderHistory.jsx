import React from "react";

const OrderHistory = () => {
  // Data dummy untuk riwayat pesanan
  const orderHistory = [
    {
      id: 1,
      menuName: "Paket Nasi Box",
      customerName: "John Doe",
      phone: "08123456789",
      address: "Jl. Sudirman No. 12, Jakarta",
      lauk: ["Ayam", "Sapi"],
      sayur: ["Sop"],
      time: "2024-12-18 14:30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-2xl font-medium text-light mb-6">Riwayat Pesanan</h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        {orderHistory.length > 0 ? (
          orderHistory.map((order) => (
            <div key={order.id} className="mb-4 border-b pb-4">
              <h2 className="text-lg font-semibold">{order.menuName}</h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Waktu Pesanan:</span> {order.time}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Nama:</span> {order.customerName}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Nomor HP:</span> {order.phone}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Alamat:</span> {order.address}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Lauk yang dipilih:</span>{" "}
                {order.lauk.join(", ")}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Sayur yang dipilih:</span>{" "}
                {order.sayur.join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Belum ada riwayat pesanan.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;

import React, { useEffect, useState } from "react";
import { transactionAPI } from "../../api/apiService";
import Loading from "../../components/Loading";

const Modal = ({ show, onClose, order, onApprove, onReject }) => {
  const [paymentType, setPaymentType] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (order) {
      setPaymentType(order.payment_type || "");
      setTotalPrice(order.total || "");
    }
  }, [order]);

  if (!show || !order) return null;

  const handleApproveClick = () => {
    if (!paymentType || !totalPrice) {
      alert("Mohon isi semua kolom untuk melanjutkan approve.");
      return;
    }
    onApprove(order.id, {
      payment_type: paymentType,
      total: parseInt(totalPrice, 10),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
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

        <div className="mt-4">
          <label className="block font-medium text-gray-800 mt-4 text-xs mb-1">
            Payment Type
          </label>
          <input
            type="text"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="w-full px-3 py-1.5 border rounded-lg text-sm"
            placeholder="Masukkan jenis pembayaran"
          />

          <label className="block font-medium text-gray-800 mt-4 text-xs mb-1">
            Total Harga
          </label>
          <input
            type="number"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            className="w-full px-3 py-1.5 border rounded-lg text-sm"
            placeholder="Masukkan total harga"
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className={`px-4 py-1.5 rounded-lg text-white ${
              order.status !== "pending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-600"
            }`}
            onClick={handleApproveClick}
            disabled={order.status !== "pending"}
          >
            Approve
          </button>
          <button
            className={`px-4 py-1.5 rounded-lg text-white ${
              order.status !== "pending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600"
            }`}
            onClick={() => onReject(order.id)}
            disabled={order.status !== "pending"}
          >
            Reject
          </button>
          <button
            className="px-4 py-1.5 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await transactionAPI.fetchTransactions();
      setOrders(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const handleApprove = async (id, data) => {
    try {
      setLoading(true);
      const response = await transactionAPI.approveTransaction(id, data);
      alert(response.message || "Pesanan berhasil di-approve.");
      await fetchOrders();
      handleCloseModal();
    } catch (err) {
      console.error("Error approving transaction:", err);
      alert("Terjadi kesalahan saat approve pesanan.");
    }
  };

  const handleReject = async (id) => {
    try {
      setLoading(true);
      const response = await transactionAPI.rejectTransaction(id);
      alert(response.message || "Pesanan berhasil di-reject.");
      await fetchOrders(); // Auto-reload data
      handleCloseModal();
    } catch (err) {
      console.error("Error rejecting transaction:", err);
      alert("Terjadi kesalahan saat reject pesanan.");
    }
  };

  if (loading) return <Loading bgColor="bg-light" color="border-red-800" />;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Daftar Pesanan
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b py-2 px-4">Nama Penerima</th>
            <th className="border-b py-2 px-4">No HP</th>
            <th className="border-b py-2 px-4">Paket</th>
            <th className="border-b py-2 px-4">Jumlah</th>
            <th className="border-b py-2 px-4">Tanggal Keperluan</th>
            <th className="border-b py-2 px-4">Status</th>
            <th className="border-b py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-sm">
              <td className="border-b py-2 px-4">{order.username}</td>
              <td className="border-b py-2 px-4">{order.phone}</td>
              <td className="border-b py-2 px-4">{order.package_name}</td>
              <td className="border-b py-2 px-4">{order.quantity}</td>

              <td className="border-b py-2 px-4">{order.date_needed}</td>
              <td
                className={`border-b py-2 px-4 capitalize ${
                  order.status === "pending"
                    ? "text-yellow-600"
                    : order.status === "approved"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="border-b py-2 px-4">
                <button
                  className="bg-gradient text-xs text-white px-3 py-1 rounded-lg"
                  onClick={() => handleOpenModal(order)}
                >
                  Lihat Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default Orders;

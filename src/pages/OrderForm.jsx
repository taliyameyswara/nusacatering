import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MultiSelectDropdown from "../components/MultiselectDropdown";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const OrderForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "John Doe",
    phone: "08123456789",
    address: "",
    menuChoice: "",
    laukChoices: [],
    sayurChoices: [],
    snackChoices: [],
  });

  const {
    data: mainMenu,
    loading: loadingMain,
    error: errorMain,
  } = useFetch(id === "1" || id === "3" ? `/menu/${id}/main` : null);

  const {
    data: laukMenu,
    loading: loadingLauk,
    error: errorLauk,
  } = useFetch(id === "2" ? `/menu/${id}/lauk` : null);

  const {
    data: sayurMenu,
    loading: loadingSayur,
    error: errorSayur,
  } = useFetch(id === "2" ? `/menu/${id}/sayur` : null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSaveLauk = (selectedItems) => {
    setForm({ ...form, laukChoices: selectedItems });
  };

  const handleSaveSayur = (selectedItems) => {
    setForm({ ...form, sayurChoices: selectedItems });
  };

  const handleSaveSnacks = (selectedItems) => {
    setForm({ ...form, snackChoices: selectedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", form);
    alert("Pesanan berhasil dikirim!");
  };

  if (loadingMain || loadingLauk || loadingSayur) {
    return <Loading />;
  }

  if (errorMain || errorLauk || errorSayur) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {errorMain || errorLauk || errorSayur}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full bg-gradient flex items-center justify-center py-10 px-4">
      <div className="max-w-xl w-full mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
          Form Pemesanan
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={form.name}
              disabled
              className="w-full mt-2 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm">Nomor HP</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              disabled
              className="w-full mt-2 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm">Alamat</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg"
              required
            ></textarea>
          </div>

          {/* Menu Section */}
          {id === "1" && mainMenu && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm">Pilih Menu</label>
              <select
                name="menuChoice"
                value={form.menuChoice}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-lg"
                required
              >
                <option value="">Pilih Menu</option>
                {mainMenu.data.map((option) => (
                  <option key={option.id} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {id === "2" && (
            <>
              <div className="flex gap-4">
                <div className="mb-6 w-full">
                  <label className="block text-gray-700 text-sm">
                    Pilih Lauk (Maks 2)
                  </label>
                  <MultiSelectDropdown
                    options={laukMenu?.data?.map((item) => item.title) || []}
                    onSave={handleSaveLauk}
                    limit={2}
                  />
                </div>
                <div className="mb-6 w-full">
                  <label className="block text-gray-700 text-sm">
                    Pilih Sayur (Maks 2)
                  </label>
                  <MultiSelectDropdown
                    options={sayurMenu?.data?.map((item) => item.title) || []}
                    onSave={handleSaveSayur}
                    limit={2}
                  />
                </div>
              </div>
            </>
          )}

          {id === "3" && mainMenu && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm">
                Pilih Snack (Maks 5)
              </label>
              <MultiSelectDropdown
                options={mainMenu.data.map((item) => item.title)}
                onSave={handleSaveSnacks}
                limit={5}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient text-white px-6 py-2 rounded-lg hover:opacity-90 transition duration-300 font-medium"
          >
            Kirim Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

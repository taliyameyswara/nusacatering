import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../components/MultiselectDropdown";
import useFetch from "../hooks/useFetch";
import usePost from "../hooks/usePost";
import Loading from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

const OrderForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    quantity: 1,
    dateNeeded: "",
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

  const { loading, error, postData } = usePost("/transaction");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("Handle Change Triggered:", name, value);
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSaveLauk = (selectedItems) => {
    const laukChoices = laukMenu.data
      .filter((item) => selectedItems.includes(item.title))
      .map((item) => ({ id: item.id, title: item.title }));
    setForm((prevForm) => ({ ...prevForm, laukChoices }));
    console.log("Lauk choices saved:", laukChoices);
  };

  const handleSaveSayur = (selectedItems) => {
    const sayurChoices = sayurMenu.data
      .filter((item) => selectedItems.includes(item.title))
      .map((item) => ({ id: item.id, title: item.title }));
    setForm((prevForm) => ({ ...prevForm, sayurChoices }));
    console.log("Sayur choices saved:", sayurChoices);
  };

  const handleSaveSnacks = (selectedItems) => {
    const snackChoices = mainMenu.data
      .filter((item) => selectedItems.includes(item.title))
      .map((item) => ({ id: item.id, title: item.title }));
    setForm((prevForm) => ({ ...prevForm, snackChoices }));
    console.log("Snack choices saved:", snackChoices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const packageId = parseInt(id, 10);

    if (!packageId) {
      alert("ID Paket tidak valid.");
      return;
    }

    const transactionData = {
      package_id: packageId,
      address: form.address.trim(),
      quantity: form.quantity,
      date_needed: form.dateNeeded,
      package_detail_id: [],
    };

    if (id === "2") {
      transactionData.package_detail_id = [
        ...form.laukChoices.map((item) => item.id),
        ...form.sayurChoices.map((item) => item.id),
      ];
    } else if (id === "1") {
      if (!form.menuChoice) {
        alert("Harap pilih menu utama.");
        return;
      }

      const selectedMenu = mainMenu?.data.find(
        (item) => item.title === form.menuChoice
      );

      if (selectedMenu) {
        transactionData.package_detail_id.push(selectedMenu.id);
      } else {
        alert("Menu utama yang dipilih tidak valid.");
        return;
      }
    } else if (id === "3") {
      if (form.snackChoices.length === 0) {
        alert("Harap pilih setidaknya satu snack.");
        return;
      }

      transactionData.package_detail_id = form.snackChoices.map(
        (item) => item.id
      );
    }

    console.log("Data sent to API:", JSON.stringify(transactionData, null, 2));

    try {
      const response = await postData(transactionData);
      console.log("API Response:", response);

      if (response?.success) {
        // alert(response.message);

        await sendWhatsAppMessage(response.data.message);

        navigate("/order-history");
      } else {
        console.error("API Error:", response);
        alert("Gagal mengirim pesanan, periksa kembali data Anda.");
      }
    } catch (err) {
      console.error("Error during POST request:", err);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  const sendWhatsAppMessage = (message) => {
    const whatsappApiUrl = "https://api.whatsapp.com/send";
    const phone = "6287827776565";
    const url = `${whatsappApiUrl}?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
  };

  if (loadingMain || loadingLauk || loadingSayur || loading) {
    return <Loading />;
  }

  if (errorMain || errorLauk || errorSayur || error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {errorMain || errorLauk || errorSayur || error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full bg-gradient flex items-center justify-center py-10 px-4">
      <div className="max-w-xl w-full mx-auto bg-white shadow-lg rounded-2xl p-8 mt-16">
        <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
          Form Pemesanan
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={user?.name || ""}
              disabled
              className="w-full mt-2 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm">Nomor HP</label>
            <input
              type="text"
              name="phone"
              value={user?.phone || ""}
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

          <div className="flex gap-4">
            <div className="mb-6 w-full">
              <label className="block text-gray-700 text-sm">Banyaknya</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                min="1"
                placeholder={id === "1" ? "Dalam paket" : "Dalam box"}
                className="w-full mt-2 p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-gray-700 text-sm">
                Tanggal Keperluan
              </label>
              <input
                type="datetime-local"
                name="dateNeeded"
                value={form.dateNeeded}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-lg"
                required
              />
            </div>
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
                {mainMenu?.data?.map((option) => (
                  <option key={option.id} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {id === "2" && laukMenu && sayurMenu && (
            <div className="flex gap-4">
              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-sm">
                  Pilih Lauk (Maks 2)
                </label>
                <MultiSelectDropdown
                  options={laukMenu.data.map((item) => item.title)}
                  onSave={handleSaveLauk}
                  limit={2}
                />
              </div>
              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-sm">
                  Pilih Sayur (Maks 2)
                </label>
                <MultiSelectDropdown
                  options={sayurMenu.data.map((item) => item.title)}
                  onSave={handleSaveSayur}
                  limit={2}
                />
              </div>
            </div>
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
            className="w-full bg-gradient text-white px-6 py-2 rounded-xl hover:opacity-90 transition duration-300 font-medium"
          >
            Kirim Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

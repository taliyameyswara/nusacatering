import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const Users = () => {
  const { data, loading, error } = useFetch("/admin/user");

  if (loading) {
    return <Loading bgColor="bg-light" color="border-red-800" />;
  }

  if (error) {
    return (
      <div className="bg-light shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Daftar Pengguna
        </h2>
        <p className="text-red-500">Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  const users = data?.data || [];

  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Daftar Pengguna
      </h2>
      {users.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-2 px-4 text-gray-600">#</th>
              <th className="text-left py-2 px-4 text-gray-600">Nama</th>
              <th className="text-left py-2 px-4 text-gray-600">Email</th>
              <th className="text-left py-2 px-4 text-gray-600">No Telp</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Tidak ada pengguna yang ditemukan.</p>
      )}
    </div>
  );
};

export default Users;

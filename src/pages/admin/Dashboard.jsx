import React from "react";

const Dashboard = () => {
  const currentHour = new Date().getHours();

  const getGreeting = () => {
    if (currentHour < 12) return "Selamat Pagi 🌅";
    if (currentHour < 18) return "Selamat Siang ☀️";
    return "Selamat Malam 🌙";
  };

  const quickLinks = [
    { title: "Pesanan Baru", href: "/admin/orders", icon: "📦" },

    { title: "Pengguna", href: "/admin/users", icon: "👥" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white border rounded-xl p-6 mb-6">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {getGreeting()}
        </h1>
        <p className="text-lg text-gray-700">
          Selamat datang di panel admin Nusacatering. Semoga hari Anda
          menyenangkan dan penuh produktivitas!
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quick Links
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-center flex-col bg-gray-100 border rounded-lg p-4 hover:bg-gray-200 transition"
            >
              <span className="text-3xl mb-2">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

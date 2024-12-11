import React from "react";

const services = [
  {
    id: 1,
    title: "Paket Prasmanan",
    description:
      "Prasmanan dengan berbagai pilihan menu untuk acara pernikahan, ulang tahun, dan lainnya.",
    image:
      "https://c1.wallpaperflare.com/preview/786/370/483/buffet-indian-food-spices.jpg",
  },
  {
    id: 2,
    title: "Paket Keluarga",
    description:
      "Paket keluarga dengan masakan khas untuk acara outdoor atau bersama keluarga.",
    image:
      "https://lh5.googleusercontent.com/proxy/uY_QIN-_bECzgoKXyGdb0z2K93Kci0fu5BSyE2qufDn7s5Y_YPnFsIP5KNDVrFyy1VGBPsg-iFJXr1Df5IqMy-jgAypXp6PjTVRlWsBXwTvk1hfWWgDn",
  },
  {
    id: 3,
    title: "Paket Nasi Box",
    description:
      "Paket nasi box praktis untuk acara pesta atau harian di rumah/kantor.",
    image:
      "https://rumahtumpengjakarta.com/wp-content/uploads/2023/10/menu-nasi-kotak-bento-ekonomis-A.jpeg",
  },
  {
    id: 4,
    title: "Paket Hampers",
    description:
      "Paket hampers untuk berbagai acara spesial, cocok untuk hadiah dan perayaan.",
    image:
      "https://mustafacatering.com/wp-content/uploads/2022/02/paket-hampers-3.jpg",
  },
];

const Service = () => {
  return (
    <section id="layanan" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-serif text-black mb-4">
          Layanan Kami
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami menyediakan berbagai paket catering yang dapat disesuaikan dengan
          kebutuhan acara Anda. Temukan layanan terbaik untuk momen spesial
          Anda!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay dengan warna gelap lebih kuat */}
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

export default Service;

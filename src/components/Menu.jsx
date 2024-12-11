import React from "react";

const menuItems = [
  {
    id: 1,
    title: "Paket Prasmanan",
    description: "Beragam hidangan prasmanan untuk acara besar dan istimewa.",
    image:
      "https://c1.wallpaperflare.com/preview/786/370/483/buffet-indian-food-spices.jpg",
    price: "Rp 1,500,000",
    dishes: [
      "Nasi Goreng",
      "Ayam Bakar",
      "Ikan Bakar",
      "Sayur Asem",
      "Sambal Terasi",
    ],
  },
  {
    id: 2,
    title: "Paket Keluarga",
    description: "Paket keluarga dengan masakan khas untuk acara santai.",
    image:
      "https://t4.ftcdn.net/jpg/02/75/39/31/360_F_275393147_SA3KtHDTUMoEn6hBbhNiTPeO92gHYgyr.jpg",
    price: "Rp 1,200,000",
    dishes: ["Mie Goreng", "Sate Ayam", "Nasi Putih", "Pecel", "Sambal Matah"],
  },
  {
    id: 3,
    title: "Paket Nasi Box",
    description: "Praktis dan bergizi untuk acara kantor atau acara pribadi.",
    image:
      "https://rumahtumpengjakarta.com/wp-content/uploads/2023/10/menu-nasi-kotak-bento-ekonomis-A.jpeg",
    price: "Rp 50,000 per box",
    dishes: ["Nasi Putih", "Ayam Goreng", "Tempe Orek", "Sambal", "Kerupuk"],
  },
  {
    id: 4,
    title: "Paket Hampers",
    description: "Hampers spesial untuk hadiah acara atau perayaan.",
    image:
      "https://mustafacatering.com/wp-content/uploads/2022/02/paket-hampers-3.jpg",
    price: "Rp 300,000",
    dishes: ["Kue Lapis", "Kue Cubir", "Buah Segar", "Cokelat", "Teh Premium"],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  font-serif text-center mb-4">
          Menu Paket Makanan
        </h2>
        <p className="text-xl text-center text-gray-200 mb-12 max-w-3xl pt-4 mx-auto">
          Kami menawarkan berbagai pilihan menu yang dapat disesuaikan dengan
          acara Anda. Temukan paket yang paling sesuai dengan kebutuhan Anda!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <h4 className="text-lg font-bold text-primary mb-2">
                  {item.price}
                </h4>
                <p className="text-sm mb-4">{item.description}</p>
                <ul className="list-disc pl-5 text-sm mb-4">
                  {item.dishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

import React, { useState, useEffect, useRef } from "react";

const RunningMenu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Nasi Goreng",
      image:
        "https://www.homade.id/wp-content/uploads/2020/05/Nasi-Goreng-Baso-Ayam.jpg",
    },
    {
      id: 2,
      name: "Ayam Bakar",
      image:
        "https://kulina.imgix.net/production/KC1KQD3RTD-Ayam%20Bakar%20dan%20Capcay.JPG",
    },
    {
      id: 3,
      name: "Sate Ayam",
      image:
        "https://mahkotacatering.com/wp-content/uploads/2022/04/satenampan.jpg",
    },
    {
      id: 4,
      name: "Pecel",
      image:
        "https://kulina.imgix.net/production/ZV5NF7TFN6-[BASIC]%20Nasi%20pecel%20ayam%20goreng.JPG",
    },
    {
      id: 5,
      name: "Mie Goreng",
      image:
        "https://siopen.hulusungaiselatankab.go.id/storage/merchant/products/2023/04/11/db70f000ca8db77fe6f5c8c85325f2d2.jpg",
    },
    {
      id: 6,
      name: "Nasi Box",
      image:
        "https://kulina.imgix.net/production/OHFO16QO6D-imgonline-com-ua-CompressToSize-8eOwnArIF4Yb.jpg",
    },
    {
      id: 7,
      name: "Rendang",
      image: "https://img.foodspot.co.id/restaurant//luminary/slider/pkt-e.jpg",
    },
    {
      id: 8,
      name: "Soto",
      image:
        "https://dev.niagatani.id/public/uploads/all/20tpUe7cxcI7aU82qBTBJHvYNTKwf6v97kav857B.jpg",
    },
  ]);
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const clonedList = logosRef.current.cloneNode(true);
      clonedList.setAttribute("aria-hidden", "true");
      logosRef.current.parentNode.appendChild(clonedList);
    }
  }, [menuItems]);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-serif">Menu Makanan</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl pt-4 mx-auto">
          Kami menyediakan berbagai pilihan menu yang dapat disesuaikan dengan
          acara Anda. Temukan hidangan terbaik untuk setiap kesempatan!
        </p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {menuItems.map((item) => (
              <li key={item.id} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full mb-2"
                />
                <p className="text-center text-lg">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RunningMenu;

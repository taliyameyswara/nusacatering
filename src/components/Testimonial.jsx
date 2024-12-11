import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rina Sari",
    image:
      "https://www.nuwansaweddingcorp.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-10-at-11.37.09-692x1024.jpeg",
    text: "Catering dari NusaCatering itu mantap! Makanan enak, bumbunya pas, semua tamu puas banget. Acara pernikahan jadi lebih meriah karena makanan yang enak ini.",
  },
  {
    id: 2,
    name: "Andi Kamal",
    image:
      "https://cdn1-production-images-kly.akamaized.net/SNXzWXWpotJLA4zAutv7zaa9z7s=/469x625/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2919149/original/073789800_1569225125-adrian_7.jpg",
    text: "Pesan catering untuk acara kantor, semuanya smooth banget! Makanannya enak, penyajiannya rapi, dan pas banget dengan budget kami. Highly recommended!",
  },

  {
    id: 3,
    name: "Budi Waluyo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWslx-aIu4AmkwB441pFSjOvY1NaUk0hSkww&s",
    text: "Makanan dari NusaCatering selalu juara! Acara ulang tahun anak saya jadi lebih spesial dengan hidangan enak dan dekorasi yang apik. Terima kasih ya!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  text-center mb-8 text-gray-800 font-serif">
          Apa Kata Pelanggan?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Ulasan dari pelanggan kami yang puas dengan layanan dan kualitas
          makanan dari NusaCatering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary"
                />
                <p className=" italic text-center mb-4">{`"${testimonial.text}"`}</p>
                <h3 className="text-lg font-semibold text-primary">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

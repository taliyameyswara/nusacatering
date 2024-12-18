const HeroSection = () => {
  return (
    <div className="bg-gradient">
      <section className="py-32 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-white p-8">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl leading-tight font-serif">
            Menyajikan Kelezatan di Setiap Acara
          </h1>
          <p className="text-lg font-light pb-8">
            NusaCatering menawarkan layanan catering online dengan pilihan menu
            yang lezat dan berkualitas untuk setiap kebutuhan Anda. Pesan
            sekarang untuk acara spesial Anda!
          </p>
          <a
            href="#contact"
            className="text-primary px-6 py-3 rounded-full text-lg font-semibold bg-white hover:bg-gray-100 transition duration-300"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://img.freepik.com/premium-photo/people-group-catering-buffet-food-indoor-restaurant_916191-57250.jpg"
            alt="Catering Food"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-2xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

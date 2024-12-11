const AboutSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-full"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg')",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Tentang NusaCatering
        </h2>
        <p className="text-base md:text-lg mb-8">
          NusaCatering adalah layanan catering online terbaik yang menyediakan
          beragam pilihan menu untuk berbagai acara. Kami berkomitmen untuk
          menyajikan makanan lezat dengan kualitas terbaik, dipersiapkan dengan
          penuh cinta dan perhatian. Dengan layanan kami, Anda dapat memesan
          makanan untuk acara pribadi, pertemuan bisnis, atau perayaan besar
          dengan mudah dan nyaman.
        </p>
        <a
          href="#contact"
          className="bg-gradient text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
};

export default AboutSection;

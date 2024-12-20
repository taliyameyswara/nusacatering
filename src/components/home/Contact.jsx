import React from "react";
import { PhoneCall } from "lucide-react";

const Contact = () => {
  const phoneNumber = "6281314615546";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  return (
    <section
      id="contact"
      className="h-full flex flex-col  bg-gradient text-white"
    >
      <div className="container mx-auto px-4 text-center flex-grow py-16">
        <h2 className="text-4xl font-serif mb-4">Hubungi Kami</h2>
        <p className="text-xl mb-8">
          Untuk informasi lebih lanjut atau pemesanan, Anda bisa menghubungi
          kami lewat WhatsApp.
        </p>
        <a
          href={whatsappLink}
          className="inline-flex gap-3 items-center justify-center px-6 py-3 bg-green-700 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          <PhoneCall /> Hubungi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;

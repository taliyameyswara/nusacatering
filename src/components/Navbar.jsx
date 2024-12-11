import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isScrolled ? "bg-light shadow-md" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          className={`flex items-center text-2xl font-serif ${
            isScrolled ? "text-primary" : "text-white"
          }`}
          href="#"
        >
          <img
            src={isScrolled ? "logo.png" : "logo2.png"}
            alt="Logo"
            className="w-10 h-auto mr-2"
          />
          <span className="">NusaCatering</span>
        </a>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 items-center`}
        >
          <a
            href="/"
            className={`${isScrolled ? "text-black" : "text-white"} `}
          >
            Home
          </a>
          <a
            className={`${isScrolled ? "text-black" : "text-white"} `}
            href="#layanan"
          >
            Layanan
          </a>
          <a
            className={`${isScrolled ? "text-black" : "text-white"} `}
            href="#menu"
          >
            Menu
          </a>
          <a
            className={`${isScrolled ? "text-black" : "text-white"} `}
            href="#contact"
          >
            Kontak
          </a>
        </div>

        <a
          href="https://wa.me/6281314615546"
          className={`${
            isScrolled
              ? "border-primary text-primary"
              : "border-white text-white"
          } btn rounded-full px-6 py-2 text-lg font-medium border-2 transition duration-300 flex items-center gap-2`}
        >
          <Phone className="size-5" />
          Whatsapp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

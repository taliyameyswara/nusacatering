import { LogIn, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "#layanan", label: "Layanan" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <nav
      className={`
        ${isScrolled ? "bg-light shadow-md" : "bg-transparent"} 
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`
            flex items-center text-2xl font-serif 
            ${isScrolled ? "text-primary" : "text-white"}
          `}
        >
          <img
            src={isScrolled ? "logo.png" : "logo2.png"}
            alt="Logo"
            className="w-10 h-auto mr-2"
          />
          <span>NusaCatering</span>
        </Link>

        {/* Navbar Links */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"} 
            lg:flex space-x-6 items-center
          `}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${isScrolled ? "text-black" : "text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* WhatsApp Button */}
        <Link
          to={"/login"}
          className={`
            btn rounded-full px-6 py-2 text-lg font-medium border-2 
            transition duration-300 flex items-center gap-2 
            ${
              isScrolled
                ? "border-primary text-primary"
                : "border-white text-white"
            }
          `}
        >
          <LogIn className="size-5" />
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

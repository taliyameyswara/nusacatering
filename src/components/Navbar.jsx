import { LogIn, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    }
  }, [location]);

  const handleLinkClick = (href) => {
    if (href.startsWith("#")) {
      const id = href.substring(1);

      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -50; // Offset for scroll
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        navigate(`/${href}`, { replace: false });
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -50; // Offset for scroll
            const y =
              element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 300); // Delay untuk menunggu navigasi selesai
      }
    } else {
      navigate(href);
    }
  };

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
        <a
          href="/"
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
        </a>

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
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`
                ${isScrolled ? "text-black" : "text-white"} 
                focus:outline-none
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href="/login"
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
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

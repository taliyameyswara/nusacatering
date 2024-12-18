import {
  HistoryIcon,
  LayoutDashboardIcon,
  LogIn,
  LogOut,
  User2Icon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ModalConfirmation from "./ModalConfirmation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, handleLogout } = useAuth();
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

  const confirmLogout = () => {
    setIsModalOpen(false);
    handleLogout();
    navigate("/");
  };

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
        }, 300);
      }
    } else {
      navigate(href);
    }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "#paket", label: "Paket" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <>
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
              src={isScrolled ? "/logo.png" : "/logo2.png"}
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

          {/* Login / User Button */}
          {!user ? (
            <Link
              to="/login"
              className={`
      btn rounded-full px-6 py-2 text-lg font-medium border-2 
      transition duration-300 flex items-center gap-2 
      ${isScrolled ? "border-primary text-primary" : "border-white text-white"}
    `}
            >
              <LogIn className="size-5" />
              Masuk
            </Link>
          ) : (
            <div className="relative group">
              <button
                className={`
        btn rounded-full px-6 py-2 text-lg font-medium border-2 
        transition duration-300 flex items-center gap-2 
        ${
          isScrolled ? "border-primary text-primary" : "border-white text-white"
        }
      `}
              >
                <User2Icon className="size-5" />
                {user.name}
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-full min-w-48 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.role === "admin" && (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <LayoutDashboardIcon className="inline-block mr-2 size-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <LogOut className="inline-block mr-2 size-4" />
                      Logout
                    </button>
                  </>
                )}
                {user.role === "user" && (
                  <>
                    <Link
                      to="/order-history"
                      className="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <HistoryIcon className="inline-block mr-2 size-4" />
                      Riwayat Pesanan
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <LogOut className="inline-block mr-2 size-4" />
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal Logout */}
      <ModalConfirmation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmLogout}
        title="Konfirmasi Logout"
        description="Anda yakin ingin keluar?"
      />
    </>
  );
};

export default Navbar;

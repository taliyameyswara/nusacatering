import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  LogOut,
  NewspaperIcon,
  User2Icon,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = () => {
  const { handleLogout } = useAuth();

  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient text-white fixed h-full flex flex-col">
        <div className="p-6">
          <a
            href="/"
            className={`
              flex items-center text-2xl font-serif text-white
            `}
          >
            <img src="/logo2.png" alt="Logo" className="w-10 h-auto mr-2" />
            <span>NusaCatering</span>
          </a>
        </div>
        <nav className="flex-1 flex flex-col gap-4 p-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl flex items-center ${
                isActive ? "bg-light text-primary font-semibold" : ""
              }`
            }
          >
            <LayoutDashboard size={24} className="mr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl flex items-center ${
                isActive ? "bg-light text-primary font-semibold" : ""
              }`
            }
          >
            <NewspaperIcon size={24} className="mr-2" />
            Pesanan
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl flex items-center ${
                isActive ? "bg-light text-primary font-semibold" : ""
              }`
            }
          >
            <User2Icon size={24} className="mr-2" />
            Pengguna
          </NavLink>
        </nav>
        <button
          className="m-5 px-4 py-2 rounded-xl mt-auto  hover:bg-primary-dark text-white flex items-center"
          onClick={handleLogout}
        >
          <LogOut size={24} className="mr-2" />
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

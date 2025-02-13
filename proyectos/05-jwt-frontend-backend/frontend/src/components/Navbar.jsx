import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAutenticated, login, checkAuth } = useAuth();
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-gray-800 text-xl font-bold p-4">
            mi App
          </Link>
          {/* Menú navegación  */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-800  hover:text-sky-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/login"
              className="text-gray-800  hover:text-sky-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-800  hover:text-sky-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-800  hover:text-sky-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

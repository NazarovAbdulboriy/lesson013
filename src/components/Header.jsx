import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          🌐 React CRUD App
        </h1>
        <nav className="space-x-6">
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              `text-white text-lg font-medium transition duration-200 hover:text-yellow-300 hover:underline underline-offset-4 ${
                isActive ? "text-yellow-300" : ""
              }`
            }
          >
            🎬 Movie
          </NavLink>
          <NavLink
            to="/country"
            className={({ isActive }) =>
              `text-white text-lg font-medium transition duration-200 hover:text-yellow-300 hover:underline underline-offset-4 ${
                isActive ? "text-yellow-300" : ""
              }`
            }
          >
            🌍 Country
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

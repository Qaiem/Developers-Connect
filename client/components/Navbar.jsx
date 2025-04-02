"use client";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../src/assets/frontend_assets/Assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={assets.Logo} alt="Logo" className='w-28 h-20' />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <NavLink to="/explore" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500 transition duration-300"}>Explore</NavLink>
          </li>
          <li>
            <NavLink to="/developers" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500 transition duration-300"}>Developers</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500 transition duration-300"}>About</NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 transition duration-300">
            Login
          </Link>
          <Link to="/signup" className="border border--500 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-500 text-2xl">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 text-lg">
          <NavLink to="/explore" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Explore</NavLink>
          <NavLink to="/developers" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Developers</NavLink>
          <NavLink to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</NavLink>
          <Link to="/login" className="bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 transition duration-300" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/signup" className="border border-blue-500 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/Assets";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={assets.Logo} alt="Logo" className='w-32 h-32 mb-4' />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/explore" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>Explore</NavLink>
          </li>
          <li>
            <NavLink to="/developers" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>Developers</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>About</NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </Link>
          <Link to="/signup" className="border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-orange-500 text-xl">
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

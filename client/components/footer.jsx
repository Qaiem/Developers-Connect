import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../src/assets/frontend_assets/Assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img src={assets.Logo} alt="Logo" className="w-24 h-24" />
          </Link>
          <p className="mt-3 text-sm text-gray-400 text-center md:text-left">
            Connecting developers worldwide. Join us and expand your network.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500 mb-3">Quick Links</h3>
          <Link to="/explore" className="text-gray-400 hover:text-orange-500 transition">Explore</Link>
          <Link to="/developers" className="text-gray-400 hover:text-orange-500 transition">Developers</Link>
          <Link to="/about" className="text-gray-400 hover:text-orange-500 transition">About</Link>
          <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-orange-500 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaFacebookF /></Link>
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaTwitter /></Link>
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaInstagram /></Link>
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

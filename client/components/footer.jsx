// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../src/assets/frontend_assets/Assets";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 mt-10">
//       <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
//         {/* Logo & Description */}
//         <div className="flex flex-col items-center md:items-start">
//           <Link to="/">
//             <img src={assets.Logo} alt="Logo" className="w-24 h-24" />
//           </Link>
//           <p className="mt-3 text-sm text-gray-400 text-center md:text-left">
//             Connecting developers worldwide. Join us and expand your network.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col text-center md:text-left">
//           <h3 className="text-lg font-semibold text-orange-500 mb-3">Quick Links</h3>
//           <Link to="/explore" className="text-gray-400 hover:text-orange-500 transition">Explore</Link>
//           <Link to="/developers" className="text-gray-400 hover:text-orange-500 transition">Developers</Link>
//           <Link to="/about" className="text-gray-400 hover:text-orange-500 transition">About</Link>
//           <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contact</Link>
//         </div>

//         {/* Social Media */}
//         <div className="flex flex-col items-center md:items-end">
//           <h3 className="text-lg font-semibold text-orange-500 mb-3">Follow Us</h3>
//           <div className="flex space-x-4">
//             <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaFacebookF /></Link>
//             <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaTwitter /></Link>
//             <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaInstagram /></Link>
//             <Link to="#" className="text-gray-400 hover:text-orange-500 transition text-xl"><FaLinkedin /></Link>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
//         &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../src/assets/frontend_assets/Assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img src={assets.Logo} alt="Logo" className="w-24 h-24" />
          </Link>
          <p className="mt-3 text-sm text-gray-600 text-center md:text-left">
            Connecting developers worldwide. Join us and expand your network.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-500 mb-3">
            Quick Links
          </h3>
          <Link
            to="/explore"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Explore
          </Link>
          <Link
            to="/developers"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Developers
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-blue-500 mb-3">Join Us</h3>
          <p className="text-gray-600 mb-3">
            Become a part of our growing community of developers.
          </p>
          <Link
            to="/signup"
            className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 relative overflow-hidden group"
          >
            Sign Up Now
            <span className="absolute inset-0 bg-blue-500 opacity-25 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0"></span>
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-blue-500 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-500 transition text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-500 transition text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-500 transition text-xl"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-500 transition text-xl"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-200 pt-4">
        &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

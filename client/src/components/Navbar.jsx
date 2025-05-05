// "use client";
// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { assets } from "../src/assets/frontend_assets/Assets";
// import { Menu, X } from "lucide-react"; // Icon for mobile menu

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center py-1 px-5">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img src={assets.Logo} alt="Logo" className="w-28 h-20" />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6 ml-auto">
//           <NavLink to="/explore" className={({ isActive }) => isActive ? "text-blue-600 font-semibold text-lg" : "hover:text-blue-600 transition text-lg"}>Explore</NavLink>
//           <NavLink to="/developers" className={({ isActive }) => isActive ? "text-blue-600 font-semibold text-lg" : "hover:text-blue-600 transition text-lg"}>Developers</NavLink>
//           <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold text-lg" : "hover:text-blue-600 transition text-lg"}>About</NavLink>
//         </div>

//         {/* Auth Buttons with Magic Effect */}
//         <div className="hidden md:flex items-center space-x-4 ml-6">
//           <Link to="/login" className="px-5 py-1 border border-blue-600 text-blue-600 rounded-lg transition duration-300 relative overflow-hidden group">
//             <span className="absolute inset-0 bg-blue-600 transition-transform translate-y-full group-hover:translate-y-0"></span>
//             <span className="relative z-10 group-hover:text-white">Login</span>
//           </Link>
//           <Link to="/signup" className="px-5 py-1 bg-blue-600 text-white rounded-lg transition duration-300 relative overflow-hidden group">
//             <span className="absolute inset-0 bg-white transition-transform translate-y-full group-hover:translate-y-0"></span>
//             <span className="relative z-10 group-hover:text-blue-600">Sign Up</span>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-600 text-2xl">
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 text-lg">
//           <NavLink to="/explore" className="hover:text-blue-600 focus:text-blue-600" onClick={() => setMenuOpen(false)}>Explore</NavLink>
//           <NavLink to="/developers" className="hover:text-blue-600 focus:text-blue-600" onClick={() => setMenuOpen(false)}>Developers</NavLink>
//           <NavLink to="/about" className="hover:text-blue-600 focus:text-blue-600" onClick={() => setMenuOpen(false)}>About</NavLink>
//           <Link to="/login" className="px-5 py-1 border border-blue-600 text-blue-600 rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
//             Login
//           </Link>
//           <Link to="/signup" className="px-5 py-1 bg-blue-600 text-white rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
//             Sign Up
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/Assets"
import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileAction";


const Navbar = ({ auth, logoutUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = auth;

  const handleLogout = () => {
    logoutUser();
    clearCurrentProfile(); // Clear current profile on logout
    setMenuOpen(false); // Close menu after logout
  };

  const guestLinks = (
    <>
      <Link
        to="/login"
        className="px-5 py-1 border border-blue-600 text-blue-600 rounded-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-blue-600 transition-transform transform translate-y-full group-hover:translate-y-0"></span>
        <span className="relative z-10 group-hover:text-white">Login</span>
      </Link>
      <Link
        to="/signup"
        className="px-5 py-1 bg-blue-600 text-white rounded-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-white transition-transform transform translate-y-full group-hover:translate-y-0"></span>
        <span className="relative z-10 group-hover:text-blue-600">Sign Up</span>
      </Link>
    </>
  );

  const authLinks = (
    <>
      <button
        onClick={handleLogout}
        className="px-5 py-1 border border-red-600 text-red-600 rounded-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-red-600 transition-transform transform translate-y-full group-hover:translate-y-0"></span>
        <span className="relative z-10 group-hover:text-white">Logout</span>
      </button>
      {user && (
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full ml-2"
        />
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-1 px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={assets.Logo} alt="Logo" className="w-28 h-14" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg"
                : "hover:text-blue-600 transition text-lg"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg"
                : "hover:text-blue-600 transition text-lg"
            }
          >
            Developers
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg"
                : "hover:text-blue-600 transition text-lg"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg"
                : "hover:text-blue-600 transition text-lg"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          {auth.isAuthenticated ? authLinks : guestLinks}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600 text-xl p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 text-lg">
          <NavLink
            to="/explore"
            className="hover:text-blue-600 focus:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Explore
          </NavLink>
          <NavLink
            to="/developers"
            className="hover:text-blue-600 focus:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Developers
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-600 focus:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-600 focus:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {auth.isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-5 py-1 border border-red-600 text-red-600 rounded-lg transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-1 border border-blue-600 text-blue-600 rounded-lg transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-1 bg-blue-600 text-white rounded-lg transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

// PropTypes
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);

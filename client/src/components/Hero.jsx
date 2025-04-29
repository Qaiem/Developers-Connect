import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/Assets";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gray-800 text-white py-32 md:py-40 text-center flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${assets.HeroImage})`, opacity: 0.2 }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Connect with Developers
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Create your profile, share your work, and grow your network.
        </p>
        <Link
          to="/signup"
          className="relative mt-8 inline-flex items-center gap-2 bg-blue-500 px-6 py-3 text-lg font-semibold rounded-md text-white overflow-hidden group"
        >
          <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 flex items-center">
            Get Started <FaArrowRight className="ml-2" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

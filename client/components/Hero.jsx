import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from "../src/assets/frontend_assets/Assets";

const Hero = () => {
    return (
      <section className="relative bg-gray-800 text-white py-20 text-center flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${assets.HeroImage})` }}></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500">
            Connect with Developers
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Create your profile, share your work, and grow your network.
          </p>
          <Link to="/signup" className="mt-6 inline-block bg-orange-500 px-6 py-3 text-lg font-semibold rounded-md hover:bg-orange-600 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>
    );
};
  
export default Hero;

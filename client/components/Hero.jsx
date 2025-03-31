import React from 'react';

const Hero = () => {
    return (
      <section className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Connect with Developers
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Create your profile, share your work, and grow your network.
          </p>
          <a href="/signup" className="mt-6 inline-block bg-orange-500 px-6 py-3 text-lg font-semibold rounded-md hover:bg-orange-600">
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
export default Hero ;
  
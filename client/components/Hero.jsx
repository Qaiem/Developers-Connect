// import React from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from "../src/assets/frontend_assets/Assets";

// const Hero = () => {
//     return (
//       <section className="relative bg-gray-800 text-white py-20 text-center flex items-center justify-center">
//         {/* Background Image */}
//         <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${assets.HeroImage})` }}></div>

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-6">
//           <h1 className="text-4xl md:text-6xl font-bold text-blue-500">
//             Connect with Developers
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Create your profile, share your work, and grow your network.
//           </p>
//           <Link to="/signup" className="mt-6 inline-block bg-orange-500 px-6 py-3 text-lg font-semibold rounded-md hover:bg-orange-600 transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </section>
//     );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../src/assets/frontend_assets/Assets";

const Hero = () => {
  return (
    <section className="relative bg-gray-800 text-white py-32 md:py-40 text-center flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${assets.HeroImage})` }}
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
          className="mt-8 inline-block bg-blue-500 px-8 py-4 text-lg font-semibold rounded-md text-white relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out"></span>
          <span className="relative z-10">Get Started</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

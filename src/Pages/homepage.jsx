import React from 'react';
import bgImg from '../assets/bg-image1.png';
import "../utils/hero-section.css";

const Homepage = () => {
  return (
    <div className="h-screen sm:h-[50%]">
      {/* Hero sections */}
      <section className="hero-section h-screen relative">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <img src={bgImg} className="w-full h-full object-cover" alt="Background" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full container mx-auto px-4 sm:px-8">
          <div className="text-center">
            <h1 className="font-bold font-serif text-4xl sm:text-7xl">Explore the world with</h1>
            <h1 className="font-bold font-serif text-4xl sm:text-7xl">exciting people</h1>
            <p className="mt-4 text-lg sm:text-2xl font-thin">
              We help people find co-travellers and structure their travel plans.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full bg-white h-0.5 rounded-full mt-10 sm:mt-16 mb-3"></div>

          {/* Grid Section */}
          <div className="mt-8 grid grid-cols-3 md:grid-cols-3 gap-8 text-white text-center">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col">
                <span className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">0{num}</span>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                  Choose a place, activity, and time
                </h3>
                <p className="text-sm sm:text-base">
                  We help people find co-travellers and also structure their travel plans.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Image */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6befbf50e63365c71e47352a789a1e201bc230fd5b3141079ec2afbbdaaa3316?placeholderIfAbsent=true&apiKey=25ce0e8c4ce54353824bfcfe4962d633"
          alt="Footer Image"
          className="relative lg:bottom-16 bottom-10 object-cover z-10 w-full aspect-[9.09] max-md:max-w-full"
        />
      </section>
      <section className="w-full"></section>
    </div>
  );
}

export default Homepage;

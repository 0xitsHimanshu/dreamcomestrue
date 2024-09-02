import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bgImg from '../assets/bg-image1.png';
import "../utils/hero-section.css";

const Homepage = () => {
  return (
    <div className="h-screen sm:h-[50%]">
      {/* Hero sections */}
      <section className="hero-section h-screen relative">
        {/* Background Image */}
        {/* <div className="absolute top-0 left-0 w-full h-full"> */}
          {/* <img src={bgImg} className="w-full h-full object-cover" alt="Background" /> */}
        {/* </div> */}

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
          <div className="hidden mt-8 sm:grid grid-cols-3 md:grid-cols-3 gap-8 text-white text-center">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col text-left">
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

          {/* Button */}

            {/* Slider for max-sm devices */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            className="sm:hidden"
          >
            {[1, 2, 3].map((num) => (
              <SwiperSlide key={num}>
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">0{num}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                    Choose a place, activity, and time
                  </h3>
                  <p className="text-sm sm:text-base">
                    We help people find co-travellers and also structure their travel plans.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        
        </div>


        {/* Footer Image */}
        <div className="relative w-full">
          {/* Tilted background */}
          <div 
            className="w-full absolute left-0 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-[#141b34] to-[#161d37] transform skew-y-2 origin-top-right z-10">
            {/* Text content */}
            <div className="relative z-10 gap-2 sm:gap-4 md:gap-8 lg:gap-28 flex justify-center items-center h-full text-white overflow-hidden">
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">explore</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">adventure</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">luxury</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">enjoy</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold">explore</span>
            </div>
          </div>
          {/* Neon green div */}
          <div className="absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 bg-[#B8FF00] -skew-y-1 origin-top-right z-5"></div>
        </div>

        <div className='bg-[#1e1e1e] h-52 m-0'>

        </div>
      </section>
      <section className="w-full">

      </section>
    </div>
  );
}

export default Homepage;

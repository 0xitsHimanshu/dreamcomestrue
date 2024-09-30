import React from "react";
import PackageCard from "../components/PackageCard";
import { packages } from "../lib/PackagesDetails";
import HeroSection from "../components/HeroSection";
import background from "../assets/video.mp4";

const TakeTripPage = () => {
  return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center">
        <HeroSection background={background} heading={"All Packages"} height={"h-98"} />
        {/* <FooterImage /> */}

        <div className="relative top-0 w-full min-h-[15vh] max-sm:min-h-[15vh] bg-[#1e1e1e] z-20 flex items-center justify-center">
          <div className="w-full h-auto py-5 px-3 absolute left-0 bg-[#1e1e1e] z-10 flex items-center justify-center">
            <div className="w-[50%] my-1 flex flex-col items-center justify-center text-justify text-white max-md:w-[70%] max-sm:w-[90%] max-sm:px-4 overflow-wrap break-word font-playfair">
              <h1 className="text-4xl pb-2 font-bold max-md:text-3xl max-sm:text-xl line-clamp-1 text-White">
                Select the best package for you! 
              </h1>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container mx-auto px-4 py-44">
          <h1 className="text-4xl font-playfair font-bold text-center text-blueGrey mb-8">
            All Packages
          </h1>
          <div className="relative mb-8 flex items-center justify-center">
            <i className="fi fi-rr-search relative text-xl top-1 left-7 z-20 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search Destination..."
              className="w-96 p-2 border border-gray-300 rounded-md pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-playfair">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeTripPage;

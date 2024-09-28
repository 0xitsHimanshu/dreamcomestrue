import React from "react";
import PackageCard from "../components/PackageCard";
import { packages } from "../lib/PackagesDetails";
import HeroSection from "../components/HeroSection";
import background from "../assets/video.mp4";
import FooterImage from "../components/stripeFooter";

const TakeTripPage = () => {
  return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center">
        <HeroSection background={background} heading={"All Packages"} height={"h-98"} />
        <FooterImage />
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

import React from "react";
import TermAndCondition from "../components/termAndCondition";
import HeroSection from "../components/HeroSection";
import background from "../assets/bg-image1.png";


const TermPages = () => {
    
    const heading = "Our Terms and Conditions!";
    const paragraph = "We help people find co-travellers and structure their travel plans.";


    return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center bg-[#1e1e1e]">
        <HeroSection
          background={background}
          heading={heading}
          paragraph={paragraph}
          height={"h-99"}
        />
        
        <div className="relative top-0 w-full min-h-[15vh] max-sm:min-h-[15vh] bg-[#1e1e1e] z-20 flex items-center justify-center">
          <div className="w-full h-auto py-5 px-3 absolute left-0 bg-[#1e1e1e] z-10 flex items-center justify-center">
            <div className="w-[50%] my-1 flex flex-col items-center justify-center text-justify text-white max-md:w-[70%] max-sm:w-[90%] max-sm:px-4 overflow-wrap break-word font-playfair">
              <h1 className="text-4xl pb-2 font-semibold max-md:text-3xl max-sm:text-xl line-clamp-1">
                Terms & Conditions
              </h1>
            </div>
          </div>
        </div>

      </section>
      <section className="w-full h-full bg-white">
        <TermAndCondition />
      </section>
    </div>
  );
};

export default TermPages;

import React from "react";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import background from "../assets/video.mp4";

const AboutUspage = () => {
  const heading = (
    <>
      We are <span className="text-neonGreen">Dream Comes True Travels</span>{" "}
      world-class travel agency.
    </>
  );
  const paragraph = '"Where travel dreams come alive."';

  return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center">
        <HeroSection
          background={background}
          heading={heading}
          paragraph={paragraph}
          height={"h-101"}
        />

        {/* Responsive Section */}
        <div className="relative w-full min-h-[35vh] max-sm:min-h-[45vh] bg-[#1e1e1e] z-20 flex items-center justify-center">
          <div className="w-full h-auto py-5 px-3 absolute left-0 bg-[#1e1e1e] z-10 flex items-center justify-center">
            <div className="w-[50%] my-1 flex flex-col items-center justify-center text-justify text-white max-md:w-[70%] max-sm:w-[90%] max-sm:px-4 overflow-wrap break-word">
              <h1 className="text-4xl pb-2 font-semibold max-md:text-3xl max-sm:text-xl line-clamp-1">
                Dream comes true travels.
              </h1>
              <p className="text-lg max-md:text-base max-sm:text-xs">
                At Dream Comes True Travels, we believe that travel is the one thing
                you buy that truly enriches your life. We are committed to turning your
                travel dreams into unforgettable experiences that stay with you forever.
                With years of expertise, we specialize in offering customized holiday
                packages, affordable travel deals, and a wide range of essential travel
                services designed to meet every need. Our goal is to inspire you to live
                a life full of extraordinary journeys. Whether you're looking for luxury
                travel experiences, budget-friendly vacations, or adventure-filled
                escapes, we have the perfect package for you. We offer exclusive discounts
                on our top-rated tour packages for loyal customers who choose our services
                time and again. Let Dream Comes True Travels be more than just your travel
                agency—we aim to be your trusted travel partner for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full h-full bg-white">
        <ContactUs />
      </section>
    </div>
  );
};

export default AboutUspage;

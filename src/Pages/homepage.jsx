import React from "react";
import HeroSection from "../components/HeroSection";
import FooterImage from "../components/stripeFooter";
import FooterContent from "../components/FooterContainer";
import PopularDesetinations from "../components/PopularDestinations";
import TakeTrip from "../components/TakeTrip";
import TripGallery from "../components/TripGallery";
import ContactUs from "../components/ContactUs";
import background from "../assets/video.mp4";

const Homepage = () => {
  const heading = "Explore the world with exciting people";
  const paragraph = "We help people find co-travellers and structure their travel plans."
  return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center">
        <HeroSection background={background} heading={heading} paragraph={paragraph} secPara={true} />
        <FooterImage />
        <FooterContent />
      </section>

      <section className="w-full h-full bg-white pt-10">
        <PopularDesetinations />
        <TakeTrip />
        <TripGallery />
        {/* Testimonial div */}
        <ContactUs />
      </section>
    </div>
  );
};

export default Homepage;

import React from "react";
import HeroSection from "../components/HeroSection";
import background from "../assets/bg-Image1.png";
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
    const heading = "Blogs";
    const paragraph = "Read some latest blogs and stay updated with the latest travel trends.";
  return (
    <div className="max-sm:h-[70%]">
      <section className="relative bg-cover bg-center bg-[#1e1e1e]">
        <HeroSection
          background={background}
          heading={heading}
          paragraph={paragraph}
          height={"h-99"}
        />
        <div className="relative top-0 w-full min-h-[25vh] max-sm:min-h-[25vh] bg-[#1e1e1e] z-20 flex items-center justify-center">
          <div className="w-full h-auto py-5 px-3 absolute left-0 bg-[#1e1e1e] z-10 flex items-center justify-center">
            <div className="w-[50%] my-1 flex flex-col items-center justify-center text-justify text-white max-md:w-[70%] max-sm:w-[90%] max-sm:px-4 overflow-wrap break-word">
              <h1 className="text-4xl pb-2 font-semibold max-md:text-3xl max-sm:text-xl line-clamp-1">
                Latest Blogs
              </h1>
            </div>
          </div>
        </div>

      </section>

      {/* Contact Us Section */}
      <section className="w-full h-full bg-white min-h-screen">
        <BlogSection />
      </section>
    </div>
  );
};

export default BlogPage;

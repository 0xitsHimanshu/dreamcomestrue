const FooterImage = () => {
  return (
    <div className="relative w-full z-20">
      {/* Tilted background */}
      <div className="w-full absolute left-0 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-[#141b34] to-[#161d37] transform skew-y-2 origin-top-right z-10">
        {/* Text content */}
        <div className="relative z-10 gap-2 sm:gap-4 md:gap-8 lg:gap-28 flex justify-center items-center h-full text-white overflow-hidden font-playfair">
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">
            Explore
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">
            Adventure
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">
            Luxury
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mr-2 sm:mr-4 md:mr-6 lg:mr-8">
            Enjoy
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold">
            Discover
          </span>
        </div>
      </div>
      {/* Neon green div */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 bg-[#B8FF00] -skew-y-1  z-5"></div>
    </div>
  );
};

export default FooterImage;

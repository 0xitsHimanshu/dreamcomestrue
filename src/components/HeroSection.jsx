const HeroSection = ({
  background,
  heading,
  paragraph,
  secPara = false,
  height,
}) => {

  const isImage = /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(background);
  return (
    <div className={`relative ${height} max-sm:h-[50%] w-full`}>
      {
        isImage ? (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={background}
            alt="Background"
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={background}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        )
      }
      

      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col gap-8 justify-center h-full container max-sm:pt-10 mx-auto px-4 sm:px-8">
        <div className="text-center py-28">
          <h1 className="font-bold font-serif text-4xl max-sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-thin">
            {paragraph}
          </p>
          {secPara ? (
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
              At{" "}
              <span className="text-neonGreen font-playfair font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Dream Comes True
              </span>{" "}
              we make your travelling dream true.
            </p>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

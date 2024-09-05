import React, { useEffect, useRef, useState } from "react";
import bgVideo from "../assets/video.mp4";
import DestinationCard from "../components/destinationCard";
import tajImage from "../assets/taj-mahal.jpg";
import eifleImage from "../assets/eifle-tower.jpg";
import kajuruImage from "../assets/kajuru-castle.jpg";


const destinations = [
  {
    name: "Taj Mahal",
    location: "Uttar Pradesh, India",
    image: tajImage,
    flag: "🇮🇳",
    visitors: "530 wants to travel here",
  },
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    image: eifleImage,
    flag: "🇫🇷",
    visitors: "500 wants to travel here",
  },
  {
    name: "Taj Mahal",
    location: "Uttar Pradesh, India",
    image: tajImage,
    flag: "🇮🇳",
    visitors: "230 wants to travel here",
  },
  {
    name: "Kajuru Castle",
    location: "Kaduna, Nigeria",
    image: kajuruImage,
    flag: "🇳🇬",
    visitors: "450 wants to travel here",
  },
];


const Homepage = () => {
  
  const [LeftArrBtn, SetLeftArrBtn] = useState(false);
  const [RightArrBtn, SetRightArrBtn] = useState(false);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
      const container = scrollRef.current;
      if(container){
        const scrollAmt = 300;
        const newPosition =
          direction === "left"
            ? Math.max(scrollPosition - scrollAmt, 0)
            : Math.min(
                scrollPosition + scrollAmt,
                container.scrollWidth - container.clientWidth
              );

        container.scrollTo({
          left: newPosition,
          behaivor: "smooth",
        });
        
        //setting state on arrow btn click
        if(direction == 'left'){
          SetLeftArrBtn(true);
          SetRightArrBtn(false);
        } else {
          SetRightArrBtn(true);
          SetLeftArrBtn(false);
        }
        
        setScrollPosition(newPosition);
      }
  }

  return (
    <div className="max-sm:h-[50%]">
      {/* Hero section */}
      <section className="relative bg-cover bg-center">
        {/* Video Background */}
        <div className="relative h-screen max-sm:h-[50%] w-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 text-white flex flex-col gap-8 justify-center h-full container max-sm:pt-10 mx-auto px-4 sm:px-8">
            <div className="text-center py-28">
              <h1 className="font-bold font-serif text-4xl max-sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Explore the world with exciting people
              </h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl font-thin">
                We help people find co-travellers and structure their travel plans.
              </p>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
                At <span className="text-neonGreen font-playfair font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dream Comes True</span> we make your travelling dream true.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Image */}
        <div className="relative w-full z-20">
          {/* Tilted background */}
          <div className="w-full absolute left-0 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-[#141b34] to-[#161d37] transform skew-y-2 origin-top-right z-10">
            {/* Text content */}
            <div className="relative z-10 gap-2 sm:gap-4 md:gap-8 lg:gap-28 flex justify-center items-center h-full text-white overflow-hidden">
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

        {/* Footer card */}
        <div className="relative w-full bg-[#1e1e1e] text-white overflow-hidden py-10 z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center max-sm:my-10 max-sm:py-10 px-10 py-28">
            <div className="w-full mt-5 grid grid-cols-1 gap-4 mx-2 px-3 text-center sm:text-left">
              <i className="fi fi-bs-shield-check text-4xl sm:text-6xl text-neonGreen"></i>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Enjoy some flexibility</h2>
              <p className="line-clamp-2 text-sm sm:text-base md:text-xl">
                Stays with flexible cancellation make it easy to re-book if your plans change.
              </p>
            </div>

            <div className="w-full mt-5 grid grid-cols-1 gap-4 mx-2 px-3 text-center sm:text-left">
              <i className="fi fi-rs-plane-alt text-4xl sm:text-6xl text-neonGreen"></i>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Over 2000+ trips</h2>
              <p className="line-clamp-2 text-sm sm:text-base md:text-xl">
                Stays with flexible cancellation make it easy to re-book if your plans change.
              </p>
            </div>

            <div className="w-full mt-5 grid grid-cols-1 gap-4 mx-2 px-3 text-center sm:text-left">
              <i className="fi fi-rr-settings-sliders text-4xl sm:text-6xl text-neonGreen"></i>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Flexible rates</h2>
              <p className="line-clamp-2 text-sm sm:text-base md:text-xl">
                Stays with flexible cancellation make it easy to re-book if your plans change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="w-full h-full bg-gray-100 py-10">

        <div className="my-5 py-4 px-16 flex items-center justify-between max-sm:text-center max-md:px-8 max-sm:grid max-sm:grid-cols-1 ">
          
          {/* heading */}
          <div className="text-blueGrey text-left mb-10">
            <span className="font-bold text-lg">Where do you want to go?</span>
            <h1 className="text-5xl font-bold mt-4 font-playfair">Popular Destinations</h1>
          </div>

          {/* arrow btns */}
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => handleScroll("left")}
              className={"w-24 h-auto border-2 border-blueGrey rounded-full text-blueGrey "+ (LeftArrBtn ? "bg-blueGrey text-white " : "")}
            >
              <i className="fi fi-rr-arrow-left text-5xl "></i>
            </button>

            <button 
              onClick={() => handleScroll("right")}
              className={"w-24 h-auto border-2 border-blueGrey rounded-full text-blueGrey "+ (RightArrBtn ? "bg-blueGrey text-white " : "")} 
            >
              <i className="fi fi-rr-arrow-right text-5xl "></i>
            </button>
          </div>
        </div>
        <div>

          {/* Destination scroll card */}

          <div
            ref={scrollRef}
            className="px-16 gap-6 flex space-x-4 overflow-x-auto scrollbar-hide  max-md:px-8"
            style={{scrollBehavior: "smooth"}}
          >
          { 
            destinations.map((destination, index) => (
              <div key={index} className="flex-none w-80"> 
                <DestinationCard destination={destination} />
              </div>
            ))
            
          }
          </div>

        </div>
      </section>
    </div>
  );
};

export default Homepage;

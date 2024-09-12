import { useRef, useState } from "react";
import DestinationCard from "./destinationCard";
import tajImage from "../assets/taj-mahal.jpg";
import eifleImage from "../assets/eifle-tower.jpg";
import kajuruImage from "../assets/kajuru-castle.jpg";

const PopularDesetinations = () => {
  const [LeftArrBtn, SetLeftArrBtn] = useState(false);
  const [RightArrBtn, SetRightArrBtn] = useState(false);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
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
      if (direction == "left") {
        SetLeftArrBtn(true);
        SetRightArrBtn(false);
      } else {
        SetRightArrBtn(true);
        SetLeftArrBtn(false);
      }

      setScrollPosition(newPosition);
    }
  };

  return (
    <>
      {/* heading for the destination card */}
      <div className="my-5 py-4 px-16 flex items-center justify-between max-sm:text-center max-md:px-8 max-sm:grid max-sm:grid-cols-1 lg:mx-32">
        {/* heading */}
        <div className="text-blueGrey text-left mb-5">
          <span className="font-bold text-lg">Where do you want to go?</span>
          <h1 className="text-5xl font-bold mt-4 font-playfair">
            Popular Destinations
          </h1>
        </div>

        {/* arrow btns */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => handleScroll("left")}
            className={
              "w-24 h-auto border-2 border-blueGrey rounded-full text-blueGrey " +
              (LeftArrBtn ? "bg-blueGrey text-white " : "")
            }
          >
            <i className="fi fi-rr-arrow-left text-5xl "></i>
          </button>

          <button
            onClick={() => handleScroll("right")}
            className={
              "w-24 h-auto border-2 border-blueGrey rounded-full text-blueGrey " +
              (RightArrBtn ? "bg-blueGrey text-white " : "")
            }
          >
            <i className="fi fi-rr-arrow-right text-5xl "></i>
          </button>
        </div>
      </div>

      {/* Destination card */}
      <div className="lg:mx-32 pt-5">
        {/* Destination scroll card */}

        <div
          ref={scrollRef}
          className="px-16 py-5 gap-6 flex space-x-4 overflow-x-auto no-scrollbar scrollbar-hide  max-md:px-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className=" py-5 flex-none w-80 transition-transform duration-500 ease-in-out hover:-translate-y-4  hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)]"
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularDesetinations;

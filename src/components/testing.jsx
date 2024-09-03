import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    name: "Taj Mahal",
    location: "Uttar Pradesh, India",
    image: "/api/placeholder/400/300",
    flag: "🇮🇳",
    visitors: "530 wants to travel here",
  },
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    image: "/api/placeholder/400/300",
    flag: "🇫🇷",
    visitors: "500 wants to travel here",
  },
  {
    name: "Taj Mahal",
    location: "Uttar Pradesh, India",
    image: "/api/placeholder/400/300",
    flag: "🇮🇳",
    visitors: "230 wants to travel here",
  },
  {
    name: "Kajuru Castle",
    location: "Kaduna, Nigeria",
    image: "/api/placeholder/400/300",
    flag: "🇳🇬",
    visitors: "450 wants to travel here",
  },
];

const DestinationCard = ({ destination }) => (
  <div className="relative rounded-lg overflow-hidden">
    <img
      src={destination.image}
      alt={destination.name}
      className="w-full h-64 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <h3 className="text-white text-xl font-bold">{destination.name}</h3>
      <p className="text-white text-sm">
        {destination.flag} {destination.location}
      </p>
      <p className="text-white text-xs mt-1">{destination.visitors}</p>
    </div>
  </div>
);

const PopularDestinations = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(
              scrollPosition + scrollAmount,
              container.scrollWidth - container.clientWidth
            );

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="w-full h-full bg-gray-100 py-10">
      <div className="max-sm:text-center m-5 p-4 flex items-center justify-between max-sm:grid max-sm:grid-cols-1">
        <div className="text-blueGrey text-left">
          <span className="font-bold text-lg">Where do you want to go?</span>
          <h2 className="text-4xl font-bold mt-4 font-playfair">
            Popular Destinations
          </h2>
        </div>
        
        <div className="flex gap-4 max-sm:grid max-sm:grid-cols-1 text-blueGrey">
          <button
            onClick={() => scroll("left")}
            className="w-24 h-auto border-2 border-blueGrey rounded-full"
          >
            <ChevronLeft className="w-12 h-12 mx-auto" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-24 h-auto border-2 border-blueGrey rounded-full"
          >
            <ChevronRight className="w-12 h-12 mx-auto" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide px-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {destinations.map((destination, index) => (
          <div key={index} className="flex-none w-64">
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;

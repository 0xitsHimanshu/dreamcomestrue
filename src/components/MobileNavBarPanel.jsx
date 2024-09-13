import React from "react";
import { Link } from "react-router-dom";

const MobileNavBarPanel = ({ IsOpen, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-white absolute flex flex-col items-center my-2 gap-2 w-full bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-gray-50/10 text-center">
      <Link
        to={"/"}
        onClick={closeMenu}
        className="self-stretch text-2xl font-semibold my-auto border-b border-gray-50/70 pb-3"
      >
        Home
      </Link>
      <Link
        to={"/about"}
        onClick={closeMenu}
        className="self-stretch text-2xl font-semibold my-auto border-b border-gray-50/70 pb-3"
      >
        About
      </Link>
      <Link
        to={"/blog"}
        onClick={closeMenu}
        className="self-stretch text-2xl font-semibold my-auto border-b border-gray-50/70 pb-3"
      >
        Blog
      </Link>
      <Link
        to={"/contact"}
        onClick={closeMenu}
        className="self-stretch text-2xl font-semibold my-auto border-b border-gray-50/70 pb-3"
      >
        Contact Us
      </Link>
      <Link
        to={"/trip"}
        onClick={closeMenu}
        className="text-black gap-2.5 lg:px-10 lg:py-3.5 px-8 py-1.5 border-2 bg-neonGreen border-neonGreen border-solid rounded-full max-md:px-5 line-clamp-1"
      >
        Take a Trip
      </Link>
    </div>
  );
};

export default MobileNavBarPanel;

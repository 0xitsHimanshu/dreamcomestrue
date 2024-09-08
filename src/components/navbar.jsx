import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar = () => {
    const handleClick = () => {
        console.log('clicked');
    }

  return (
    <>
      <nav className="fixed mx-auto lg:px-15 md:px-8 sm:px-6 px-4 py-3 items-center w-full z-50 ">
        <div className="md:gap-1 mx-4 py-3 px-7 my-2 flex bg-black/30 items-center justify-between backdrop-blur-sm rounded-full border border-gray-50/10  ">
          <div className=" flex flex-col max-md:line-clamp-1 self-stretch md:my-auto text-white">
            <Link
              to={"/"}
              className="flex items-center gap-4 lg:text-2xl max-sm:text-base text-xl font-bold"
            >
              <img src={logo} alt="logo" className="w-10 h-10 max-sm:w-5 max-sm:h-5" />
              <span className="drop-shadow-lg">Dream Comes True Travels</span>
            </Link>
          </div>
          <div className="flex lg:gap-10 md:gap-4 items-center my-auto font-medium max-md:hidden max-md:text-sm text-white">
            <Link to={"/"} className="self-stretch my-auto hover:underline">
              Home
            </Link>
            <Link
              to={"/about"}
              className="self-stretch my-auto hover:underline"
            >
              About
            </Link>
            <Link to={"/blog"} className="self-stretch my-auto hover:underline">
              Blog
            </Link>
            <Link
              to={"/contact"}
              className="self-stretch my-auto line-clamp-1 hover:underline"
            >
              Contact Us
            </Link>
            <Link
              to={"/trip"}
              className="gap-2.5 lg:px-10 lg:py-3.5 px-8 py-1.5 border-2 border-white border-solid rounded-full max-md:px-5 line-clamp-1 hover:underline"
            >
              Take a Trip
            </Link>
          </div>

          <div className="lg:hidden md:hidden text-white text-2xl  ">
            <button onClick={handleClick}>
                <i className="fi fi-rr-list"></i>
            </button>           
          </div>
        </div>
      </nav>

      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;

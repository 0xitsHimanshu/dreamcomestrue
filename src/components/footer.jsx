import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white w-full h-full relvative">
      <div className="container mx-auto px-4 py-8">
        {/* Top section with logo and social icons */}

        <div className="px-4 flex justify-between max-md:grid max-md:grid-cols-1 max-md:gap-6">
          {/* Left Section (Logo and Description) */}
          <div className="">
            <Link
              to="/"
              className="flex items-center gap-4 lg:text-4xl text-2xl max-md:text-xl max-sm:text-base font-bold"
            >
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 max-md:w-8 max-md:h-8 max-sm:w-5 max-sm:h-5"
              />
              <span className="drop-shadow-lg font-playfair">Dream Comes True Travels</span>
            </Link>

            {/* Description */}
            <div className="max-w-99 mt-4 grid grid-cols-1 justify-between min-h-40">
              <p className="mx-6 mb-5 max-md:mx-2 text-lg max-sm:text-sm text-gray-300/50">
                Dream comes true travels offering you a wide range of national and international holiday packages to enjoy hassle-free holiday with your family and friends.
              </p>
              <Link to={'/term-conditions'} className="mx-6 max-md:mx-2 hover:underline max-sm:text-xs font-semibold ">
                <span className='hover:text-neonGreen'>*Terms & Conditions with Cancellation Policy</span>
              </Link>
            </div>
          </div>

          {/* Right Section (Contact Info) */}
          <div className="grid gap-6 grid-cols-1 text-lg max-md:text-base max-sm:text-sm">
            <h1 className="text-2xl lg:text-4xl max-md:text-xl font-bold">Contact Info</h1>

            <p className="flex items-center">
              <i className="fi fi-sr-mobile mr-2"></i> +234 803 123 4567
            </p>

            <p className="flex items-center">
              <i className="fi fi-sr-envelope mr-2"></i> info@dreamcomestrue.in
            </p>

            <p className="flex items-center">
              <i className="fi fi-sr-location mr-2"></i> 123, Dreamland, Lagos, Nigeria
            </p>

            <p className="flex items-center">
              <i className="fi fi-sr-alarm-clock mr-2"></i> 
              <span>Monday - Friday: 9:00 AM - 5:00 PM</span> 
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            copyright@ prydetravel 2023
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#c5f82a]">
              Instagram{" "}
            </a>
            <a href="#" className="hover:text-[#c5f82a]">
              LinkedIN
            </a>
            <a href="#" className="hover:text-[#c5f82a]">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
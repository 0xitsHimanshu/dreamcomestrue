import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white w-full h-full relvative">
      <div className="container mx-auto px-4 py-8">
        {/* Top section with logo and social icons */}

        <div className="">
          <div className="">
            <Link
              to={"/"}
              className="flex items-center gap-4 lg:text-2xl max-sm:text-base text-xl font-bold"
            >
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="drop-shadow-lg">Dream Comes True Travels</span>
            </Link>
          </div>
          <div className="">
            <h1>Contact Info</h1>
            <p>
                <i className='fi fi-mobile'></i>
                +234 803 123 4567
            </p>

            <p>
                <i className='fi fi-sr-envelope'></i>
                info@dreamcomestrue.in
            </p>

            <p>
                <i className='fi fi-sr-location'></i>
                123, Dreamland, Lagos, Nigeria
            </p>
            <p>
              <i className='fi fi-sr-alarm-clock'></i> 
                Monday - Friday: 9:00 AM - 5:00 PM 
            </p>
          </div>
          <div className='text-white'>
            <button className='w-4 h-4'>
                <i className='fi fi-rr-facebook'></i>
            </button>

            <button className='w-4 h-4'>
                <i className='fi fi-rr-instagram'></i>
            </button>

            <button className='w-4 h-4'>
                <i className='fi fi-rr-linkedin'></i>
            </button>

            <button className='w-4 h-4'>
                <i className='fi fi-rr-twitter'></i>
            </button>
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
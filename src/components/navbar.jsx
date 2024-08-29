import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {


  return (
    <>
      <nav className="flex mt-6 mb-3 lg:px-28 px-12 gap-5 bg-transparent backdrop-blur-lg items-center justify-between w-full sticky border-b border-gray-200 pb-3 ">
        <div className="flex flex-col self-stretch my-auto">
          <Link to={"/"} className='flex items-center gap-4 lg:text-2xl text-xl font-bold' >
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span>Dream Comes True Travels</span>
          </Link>
        </div>
        <div className="flex lg:gap-10 items-center my-auto font-medium max-md:hidden gap-5 max-md:text-sm ">
          <Link to={'/'} className="self-stretch my-auto">Home</Link>
          <Link to={'/about'} className="self-stretch my-auto">About</Link>
          <Link to={'/blog'} className="self-stretch my-auto">Blog</Link>
          <Link to={'/contact'} className="self-stretch my-auto line-clamp-1">Contact Us</Link>
          <Link to={'/trip'} className="gap-2.5 lg:px-10 lg:py-3.5 px-8 py-1.5 border-2 border-black border-solid rounded-full max-md:px-5 line-clamp-1">
            Take a Trip
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
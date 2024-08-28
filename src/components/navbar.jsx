import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
        <nav className='w-full bg-transparent m-5 px-10 pb-5 flex items-center justify-between border-b border-green-50'>
            <Link to="/" className='flex items-center gap-2'>
                <img src={logo} alt="" /> 
                <span className='text-2xl'>Dream Comes True Travels</span>
            </Link>
            
            <div className='flex gap-6 '>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Blogs</Link>
                <Link to="/contact">Contact</Link>

                <Link to="/trip" >
                    <button>
                        Take a Trip
                    </button>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
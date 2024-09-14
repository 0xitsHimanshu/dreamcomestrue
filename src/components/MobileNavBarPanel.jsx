import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNavBarPanel = ({ IsOpen, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <motion.div 
      initial={{opacity: 0, y: -20}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-white absolute flex flex-col items-center my-2 gap-2 w-full bg-black/30 backdrop-blur-lg p-4 rounded-3xl border border-gray-50/10 text-center"
    >
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
    </motion.div>
  );
};

export default MobileNavBarPanel;

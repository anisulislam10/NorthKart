import React, { useState } from 'react';
import northkartLogo from "./../../assets/logo/logo-color.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-end bg-[#FFE86A] ">
      {/* Burger Menu (Visible on small screens) */}
      <button
        onClick={toggleMenu}
        className="block xsml:hidden w-8 h-8 rounded-full bg-[#E6C744] text-white mt-5 ml-1 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <img src={northkartLogo} alt="" width="7%" className='md:ml-4'/>
      {/* Menu items */}
      <ul className={`ml-4 space-x-4 text-sm font-semibold ${isMenuOpen ? 'block' : 'hidden'}  xsml:flex xsml:space-x-3 xsml:mt-3 
      sm:items-center sm:text-center sm:ml-[100px] sm:font-bold
      md:items-end md:text-end md:ml-[50px] md:font-bold md:flex md:space-x-11 

      `}>

        
        <li className='md:md:hover:md:bg-yellow-500 md:px-4 md:hover:md:text-white md:rounded-sm md:ml-[400px]'>CATALOGUE</li>
        <li className='md:md:hover:md:bg-yellow-500 md:px-4 md:hover:md:text-white md:rounded-sm'>FASHION</li>
        <li className='md:md:hover:md:bg-yellow-500 md:px-4 md:hover:md:text-white md:rounded-sm'>FAVOURITE</li>
        <li className='md:md:hover:md:bg-yellow-500 md:px-4 md:hover:md:text-white md:rounded-sm'>LIFESTYLE</li>
        <li className='bg-black text-white px-2
        md:px-7 md:text-[20px] md:py-1 md:rounded-md md:md:hover:md:bg-yellow-500 md:text-center md:items-center
        '>signup</li>

      </ul>
    </div>
  );
}

export default Navbar;

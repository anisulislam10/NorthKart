import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center">
      {/* Burger Menu (Visible on small screens) */}
      <button
        onClick={toggleMenu}
        className="block xsml:hidden w-8 h-8 rounded-full bg-[#E6C744] text-white mt-5 ml-1"
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

      {/* Menu items */}
      <ul className={`ml-4 space-x-4 text-sm font-semibold ${isMenuOpen ? 'block' : 'hidden'}  xsml:flex xsml:space-x-2 xsml:mt-3`}>
        <li>CATALOGUE</li>
        <li>FASHION</li>
        <li>FAVOURITE</li>
        <li>LIFESTYLE</li>
        <li>signup</li>

      </ul>
    </div>
  );
}

export default Navbar;

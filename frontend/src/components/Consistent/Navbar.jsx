// src/components/Consistent/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-[150px] flex items-center justify-between px-8 bg-white">
      {/* Left spacer for symmetry */}
      <div className="w-1/3" />

      {/* Centered Logo */}
      <div className="w-1/3 flex justify-center h-full">
        <img
          src="/lionhill.png"
          alt="Lion Hill Logo"
          className="h-[150px] max-h-[200px] object-contain"
        />
      </div>

      {/* Right side links + button */}
      <div className="w-1/3 flex justify-end items-center space-x-6">
        <Link to="/faq" className="text-gray-700 hover:text-black transition">
          FAQ
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-black transition">
          Contact
        </Link>
        <Link
          to="/book"
          className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

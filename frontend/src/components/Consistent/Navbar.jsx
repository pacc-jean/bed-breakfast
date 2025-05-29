import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[150px] z-50 flex items-center justify-between px-8 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Left spacer for symmetry */}
      <div className="w-1/3" />

      {/* Centered Logo */}
      <div className="w-1/3 flex justify-center h-full">
        <img
          src="/lionhill.png"
          alt="Lion Hill Logo"
          className="h-[150px] max-h-[150px] object-contain transition-all duration-300"
        />
      </div>

      {/* Right side links + button */}
      <div className="w-1/3 flex justify-end items-center space-x-6 text-sm font-medium">
        <Link to="/faq" className="text-gray-700 hover:text-black transition">
          FAQ
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-black transition">
          Contact
        </Link>

        {/* BOOK NOW — only visible when scrolled */}
        {isScrolled && (
          <Link
            to="/book"
            className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

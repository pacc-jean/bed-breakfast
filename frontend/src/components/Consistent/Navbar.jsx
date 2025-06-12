import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const showBookNow =
    currentPath === '/'
      ? isScrolled
      : currentPath !== '/book';

  return (
    <>
      {/* Mobile Banner Logo */}
      <div className={`flex md:hidden fixed top-0 left-0 w-full h-[150px] z-50 rounded-b-2xl px-4 items-center justify-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <img
          src="/banner-logo.2.1.png"
          alt="Lion Hill Banner Logo"
          className="h-[80px] object-contain"
        />
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full h-[150px] rounded-b-2xl z-50 px-8 transition-all duration-300 transform ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } items-center justify-between`}
      >
        <div className="flex items-center space-x-6 text-sm font-medium ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          {currentPath !== '/' && (
            <Link to="/" className="text-gray-700 hover:text-black hover:underline transition">
              Home
            </Link>
          )}
          {currentPath !== '/faq' && (
            <Link to="/faq" className="text-gray-700 hover:text-black hover:underline transition">
              FAQ
            </Link>
          )}
          {currentPath !== '/contact' && (
            <Link to="/contact" className="text-gray-700 hover:text-black hover:underline transition">
              Contact
            </Link>
          )}
          {showBookNow && (
            <Link
              to="/book"
              className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Book Now
            </Link>
          )}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center justify-center">
          <img
            src="/lionhill.00.png"
            alt="Lion Hill Logo"
            className="h-[150px] max-h-[150px] object-contain transition-all duration-300"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

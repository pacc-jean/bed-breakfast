import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      setIsScrolled(currentScrollY > 20);

      if (window.innerWidth < 768) {
        setIsVisible(!(isScrollingDown && currentScrollY > 50));
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const showBookNow =
    currentPath === '/'
      ? isScrolled // Home: show only when scrolled
      : currentPath !== '/book'; // Other pages: show unless already on /book

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[150px] z-50 px-8 transition-all duration-300 transform ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-between`}
    >
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
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
  );
};

export default Navbar;

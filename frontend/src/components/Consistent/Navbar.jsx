import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      setIsScrolled(currentScrollY > 50);

      // Only hide on mobile (screens < 768px)
      if (window.innerWidth < 768) {
        if (isScrollingDown && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[150px] z-50 px-8 transition-all duration-300 transform ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-between`}
    >
      {/* Right-side links (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
        <Link to="/faq" className="text-gray-700 hover:text-black hover:underline transition">
          FAQ
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-black hover:underline transition">
          Contact
        </Link>

        {isScrolled && (
          <Link
            to="/book"
            className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        )}
      </div>

      {/* Absolutely centered logo */}
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

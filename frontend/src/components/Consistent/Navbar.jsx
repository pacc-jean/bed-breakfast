import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className={`flex md:hidden fixed top-0 left-0 w-full h-[100px] z-50 rounded-b-2xl px-4 items-center justify-center transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <img
          src="/banner-logo.2.1.png"
          alt="Lion Hill Banner Logo"
          className="h-[100px] object-contain"
        />
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full h-[150px] z-50 px-8 items-center justify-between rounded-b-2xl transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center justify-center">
          <img
            src="/banner-logo.2.1.png"
            alt="Lion Hill Logo"
            className="h-[150px] max-h-[150px] object-contain transition-all duration-300"
          />
        </div>

        {/* 
        Uncomment below if you want nav links later
        <div className="flex items-center space-x-6 text-sm font-medium ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Link to="/" className="text-gray-700 hover:text-black hover:underline transition">Home</Link>
          <Link to="/faq" className="text-gray-700 hover:text-black hover:underline transition">FAQ</Link>
          <Link to="/contact" className="text-gray-700 hover:text-black hover:underline transition">Contact</Link>
          <Link to="/book" className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Book Now</Link>
        </div> 
        */}
      </nav>
    </>
  );
};

export default Navbar;

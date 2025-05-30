import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-2 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lionhill.01.png" alt="Lion Hill Logo" className="h-[200px] object-contain" />
          {/*<span className="text-xl font-bold">Lion Hill Place</span>*/}
        </Link>

        {/* Nav links */}
        <div className="flex space-x-12 text-sm uppercase tracking-wide">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/book" className="hover:underline">Book Now</Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/lion_hill_place/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-500 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:contact@lionhillplace.com"
            aria-label="Email"
            className="hover:text-red-500 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Lion Hill Place. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

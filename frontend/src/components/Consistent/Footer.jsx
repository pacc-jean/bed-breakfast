import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 px-4 mt-20"
      style={{ backgroundImage: `url('/banner-logo.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-10 text-center">
        {/* Nav links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/book" className="hover:underline">Book Now</Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/lion_hill_place/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:lionhillplace@gmail.com"
            aria-label="Email"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://wa.me/254722774029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Lion Hill Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        <Link
          to="/"
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/' ? 'text-black' : 'text-gray-500'
          }`}
        >
          <HomeIcon className="h-6 w-6" />
          Home
        </Link>

        <Link
          to="/contact"
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/contact' ? 'text-black' : 'text-gray-500'
          }`}
        >
          <PhoneIcon className="h-6 w-6" />
          Contact
        </Link>

        <Link
          to="/book"
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/book' ? 'text-black' : 'text-gray-500'
          }`}
        >
          <CalendarIcon className="h-6 w-6" />
          Book
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  PhoneIcon,
  CalendarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const DesktopSideNav = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: HomeIcon, label: 'Home' },
    { to: '/faq', icon: QuestionMarkCircleIcon, label: 'FAQ' },
    { to: '/contact', icon: PhoneIcon, label: 'Contact' },
    { to: '/book', icon: CalendarIcon, label: 'Book Now' },
  ];

  return (
    <div className="hidden md:flex fixed top-1/2 left-4 -translate-y-1/2 z-50 flex-col space-y-4">
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;
        const IconComponent = item.icon;

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`relative group flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-300 ${
              isActive
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-600 hover:text-white'
            }`}
          >
            <IconComponent className="h-5 w-5" />

            {/* Hover Drawer Label */}
            <span
              className={`absolute left-full ml-2 px-3 py-1 rounded-md text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${
                isActive ? 'bg-black' : 'bg-gray-600'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopSideNav;

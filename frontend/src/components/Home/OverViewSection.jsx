import React from 'react';
import { Tent, BedDouble, CalendarHeart } from 'lucide-react';

import cozyImage from '../../assets/overview/cozy-bnb.jpg';
import campingImage from '../../assets/overview/scenic-camping.jpg';
import eventsImage from '../../assets/overview/events-space.jpg';

const features = [
  {
    icon: <BedDouble className="h-10 w-10 text-orange-400 mb-3" />,
    image: cozyImage,
    title: 'Cozy B&B',
    description:
      'Unwind in comfortable rooms with delicious breakfast and easy access to nature’s wonders.',
  },
  {
    icon: <Tent className="h-10 w-10 text-green-600 mb-3" />,
    image: campingImage,
    title: 'Scenic Camping',
    description:
      'Experience the great outdoors with well-maintained campgrounds nestled in natural beauty.',
  },
  {
    icon: <CalendarHeart className="h-10 w-10 text-pink-600 mb-3" />,
    image: eventsImage,
    title: 'Events Space',
    description:
      'Perfect for birthdays, reunions, and intimate gatherings with a view of the hills.',
  },
];

const OverviewSection = () => (
  <section className="w-full bg-gray-50 py-16 px-6">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
        What We Offer
      </h2>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map(({ icon, image, title, description }) => (
        <div
          key={title}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-2xl"
        >
          {/* IMAGE */}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          
          {/* ICON */}
          {icon}

          {/* TITLE */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-gray-600">
            {description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default OverviewSection;

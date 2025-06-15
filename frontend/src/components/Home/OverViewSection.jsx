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
  <section className="w-full bg-gray-100 py-16 px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2
        className="text-2xl md:text-4xl font-bold text-black"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        What We Offer
      </h2>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map(({ icon, image, title, description }) => (
        <div
          key={title}
          className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition duration-300 h-[400px] flex flex-col justify-end"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

          {/* Card Content */}
          <div className="relative z-20 p-6 text-center text-white flex flex-col items-center">
            {icon}

            <h3
              className="text-base md:text-lg font-bold mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {title}
            </h3>

            <p
              className="text-xs md:text-sm text-white/90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OverviewSection;

import React from 'react';

const TrailingSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:4xl font-bold mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        Near Lake Nakuru National Park
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
        Adventure meets relaxation just a short distance from one of Kenya's
        premier wildlife destinations. Discover flamingos, rhinos, and majestic
        views — right at your doorstep.
      </p>

      {/* Responsive Map Container */}
      <div className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.759433862466!2d36.12903497331803!3d-0.3112930353342289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829917ce4cbfa03%3A0x98e0b1ddf1d8f571!2sLion%20Hill%20Place!5e0!3m2!1sen!2ske!4v1748590240312!5m2!1sen!2ske"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Lion Hill Place"
        ></iframe>
      </div>
    </section>
  );
};

export default TrailingSection;

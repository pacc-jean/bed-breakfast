import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import img0 from '../../assets/hero/hero-00.jpg';
import img1 from '../../assets/hero/hero-01.jpg';
import img2 from '../../assets/hero/hero-02.jpg';
import img3 from '../../assets/hero/hero-03.jpg';
import img4 from '../../assets/hero/hero-04.jpg';
import img5 from '../../assets/hero/hero-05.jpg';
import img6 from '../../assets/hero/hero-06.jpg';
import img7 from '../../assets/hero/hero-07.jpg';
import img8 from '../../assets/hero/hero-08.jpg';
import img9 from '../../assets/hero/hero-09.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      {...handlers}
      className="relative w-full h-screen max-h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* IMAGE SLIDES WRAPPER */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current
                ? 'opacity-100 visible z-0'
                : 'opacity-0 invisible z-0 pointer-events-none'
            }`}
            style={{ willChange: 'opacity' }}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY, BUTTON & TEXT */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 text-white select-none pointer-events-none flex flex-col justify-end items-center px-6 pb-12 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Welcome To Lion Hill Place
          <br />
          <span
            className="text-sm md:text-base font-semibold mt-4 block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A tranquil escape for B&B stays, camping, and intimate events — right next to Lake Nakuru National Park.
          </span>
        </h1>

        <Link to="/book">
          <button className="mt-6 px-4 py-3 rounded-full text-base font-semibold transition pointer-events-auto glossy-button">
            Book With Us
          </button>
        </Link>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 md:top-[85%] left-2 sm:left-4 transform -translate-y-1/2 text-white text-4xl sm:text-6xl pointer-events-auto select-none z-10"
        aria-label="Previous Slide"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 md:top-[85%] right-2 sm:right-4 transform -translate-y-1/2 text-white text-4xl sm:text-6xl pointer-events-auto select-none z-10"
        aria-label="Next Slide"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        ›
      </button>
    </section>
  );
};

export default HeroSection;

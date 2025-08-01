import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const heroImages = import.meta.glob("../../assets/heros/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const images = Object.values(heroImages) as string[];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance = touchStartX.current - touchEndX.current;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <section
      className="relative h-screen overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Hero ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Left hover zone */}
      <div
        onClick={prevSlide}
        className="absolute top-0 left-0 h-full w-[20%] z-20 group flex items-center justify-start px-4 cursor-pointer"
      >
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 p-2 rounded-full bg-white/30 backdrop-blur-md shadow-lg">
          <TbChevronLeft className="text-white drop-shadow" size={28} />
        </div>
      </div>

      {/* Right hover zone */}
      <div
        onClick={nextSlide}
        className="absolute top-0 right-0 h-full w-[20%] z-20 group flex items-center justify-end px-4 cursor-pointer"
      >
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 p-2 rounded-full bg-white/30 backdrop-blur-md shadow-lg">
          <TbChevronRight className="text-white drop-shadow" size={28} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl text-black md:text-5xl font-serif font-semibold mb-4">
          Welcome to<br className="block md:hidden" /> Lion Hill Place
        </h1>
        <p className="text-xs text-black md:text-lg font-serif max-w-2xl mb-6">
          A tranquil escape for B&amp;B stays, camping, and intimate events
          <br /> right next to Lake Nakuru National Park
        </p>
        <NavLink
          to="/book"
          className="bg-black text-white hover:bg-white hover:text-black font-semibold py-2 px-4 rounded-lg text-lg shadow-md transition"
        >
          Book Now
        </NavLink>
      </div>
    </section>
  );
}

export default HeroSection;

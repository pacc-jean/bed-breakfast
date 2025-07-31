import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../../assets/explore/hero1.jpg";
import hero2 from "../../assets/explore/hero2.jpg";
import hero3 from "../../assets/explore/hero3.jpg";
import hero4 from "../../assets/explore/hero4.jpg";
import hero5 from "../../assets/explore/hero5.jpg";
import hero6 from "../../assets/explore/hero6.jpg";
import hero7 from "../../assets/explore/hero7.jpg";
import hero8 from "../../assets/explore/hero8.jpg";
import hero9 from "../../assets/explore/hero9.jpg";
import hero10 from "../../assets/explore/hero10.jpg";
import hero11 from "../../assets/explore/hero11.jpg";
import hero12 from "../../assets/explore/hero12.jpg";
import hero13 from "../../assets/explore/hero13.jpg";
import hero14 from "../../assets/explore/hero14.jpg";
import hero15 from "../../assets/explore/hero15.jpg";
import hero16 from "../../assets/explore/hero16.jpg";
import hero17 from "../../assets/explore/hero17.jpg";
import hero18 from "../../assets/explore/hero18.jpg";
import hero19 from "../../assets/explore/hero19.jpg";
import hero20 from "../../assets/explore/hero20.jpg";

const ExploreHeroCarousel = () => {
  const slides = [
    { src: hero1, alt: "Luxury Rooms" },
    { src: hero2, alt: "Camping Experience" },
    { src: hero3, alt: "Events & Celebrations" },
    { src: hero4, alt: "Beautiful Exteriors" },
    { src: hero5, alt: "Luxury Rooms" },
    { src: hero6, alt: "Events & Celebrations" },
    { src: hero7, alt: "Events & Celebrations" },
    { src: hero8, alt: "Events & Celebrations" },
    { src: hero9, alt: "Luxury Rooms" },
    { src: hero10, alt: "Lounge & Dining Areas" },
    { src: hero11, alt: "Luxury Rooms" },
    { src: hero12, alt: "The Great Wild" },
    { src: hero13, alt: "Luxury Rooms" },
    { src: hero14, alt: "Luxury Rooms" },
    { src: hero15, alt: "Beautiful Apartments" },
    { src: hero16, alt: "Beautiful Apartments" },
    { src: hero17, alt: "Luxury Rooms" },
    { src: hero18, alt: "Luxury Rooms" },
    { src: hero19, alt: "Luxury Rooms" },
    { src: hero20, alt: "Luxury Rooms" },
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-700 pt-24 pb-12 relative">
      <div className="w-full mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-white">
            Explore Lion Hill Place
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-sans mt-2">
            Discover our spaces — rooms, camping, events, and hidden gems
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop
          spaceBetween={20}
          slidesPerView={1.2}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            640: { slidesPerView: 1.5, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
            768: { slidesPerView: 2, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1024: { slidesPerView: 3, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
          }}
          className="!pb-6"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl shadow-lg overflow-hidden h-[300px] md:h-[340px] group relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h3 className="text-sm text-center">{slide.alt}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Desktop Only) */}
        <div className="hidden md:flex justify-between absolute top-[60%] left-0 right-0 px-4 z-10 pointer-events-none">
          <button className="custom-prev pointer-events-auto bg-white/90 dark:bg-zinc-600/80 hover:bg-white dark:hover:bg-zinc-500 text-black dark:text-white p-2 rounded-full shadow transition">
            <ChevronLeft size={24} />
          </button>
          <button className="custom-next pointer-events-auto bg-white/90 dark:bg-zinc-600/80 hover:bg-white dark:hover:bg-zinc-500 text-black dark:text-white p-2 rounded-full shadow transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreHeroCarousel;

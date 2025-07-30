import { useEffect, useState } from "react";
import { TbTagsFilled } from "react-icons/tb";
import GalleryModal from "./GalleryModal";

function importAllImages() {
  const images = import.meta.glob("/src/assets/event/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  });

  return Object.values(images).map((src) => ({
    original: src as string,
    thumbnail: src as string,
  }));
}

const EventSpaceShowCase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<{ original: string; thumbnail: string }[]>([]);

  useEffect(() => {
    const loaded = importAllImages();
    setGalleryImages(loaded);
  }, []);

  const amenities = [
    "Birthdays",
    "Baby showers",
    "Wellness days",
    "Corporate retreats",
    "Family get-togethers", 
    "Shaded sitting area",
    "Open grounds",
    "Optional meals", 
    "Optional décor",
    "Optional tents & coordination",
    "On-site accommodation",
    "Safe parking"
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-blue-400 to-black/40 rounded-4xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-4xl"></div>
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-medium mb-6 shadow-xl">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Event Grounds
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            Hold Events at 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-300 to-blue-500">
              Lion Hill Place
            </span>
          </h2>
          
          <p className="text-gray-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Private, peaceful venue surrounded by nature.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <TbTagsFilled className="text-black w-6 h-6"/>
              <span className="text-white font-medium">{amenity}</span>
            </div>
          ))}
        </div>

        {/* Image Gallery Preview */}
        {galleryImages.length > 0 && (
          <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.slice(0, 8).map((img, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer border border-white/10"
                  onClick={() => setIsOpen(true)}
                >
                  <img
                    src={img.thumbnail}
                    alt={`Camp scene ${idx + 1}`}
                    className="w-full h-32 md:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30 shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          {galleryImages.length > 0 && (
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full shadow-2xl hover:shadow-blue-500/20 border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View All Photos
            </button>
          )}
          
          <button className="block mx-auto bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 hover:from-slate-700 hover:via-slate-900 hover:to-slate-700 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 border border-white/10">
            <span className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Make a Reservation
            </span>
          </button>
        </div>
      </div>

      <GalleryModal
        images={galleryImages}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default EventSpaceShowCase;

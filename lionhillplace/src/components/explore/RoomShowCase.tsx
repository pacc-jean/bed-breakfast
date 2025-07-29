import { useState } from "react";
import { Bed, Users, Wifi, ParkingCircle } from "lucide-react";
import GalleryModal from "./GalleryModal";
import ImageCarousel from "./ImageCarousel";

// === Image Imports ===
// Double Room
import double1 from "../../assets/explore/DoubleRoom/double-room1.jpg";
import double2 from "../../assets/explore/DoubleRoom/double-room2.jpg";
import double3 from "../../assets/explore/DoubleRoom/double-room3.jpg";
import double4 from "../../assets/explore/DoubleRoom/double-room4.jpg";
import double5 from "../../assets/explore/DoubleRoom/double-room5.jpg";

// Twin Room
import twin1 from "../../assets/explore/TwinRoom/twin-room1.jpg";
import twin2 from "../../assets/explore/TwinRoom/twin-room2.jpg";
import twin3 from "../../assets/explore/TwinRoom/twin-room3.jpg";
import twin4 from "../../assets/explore/TwinRoom/twin-room4.jpg";

// Apartment
import apt1 from "../../assets/explore/Apartment/apartment1.jpg";
import apt2 from "../../assets/explore/Apartment/apartment2.jpg";
import apt3 from "../../assets/explore/Apartment/apartment3.jpg";
import apt4 from "../../assets/explore/Apartment/apartment4.jpg";
import apt5 from "../../assets/explore/Apartment/apartment5.jpg";

const rooms = [
  {
    name: "Double Room",
    location: "Nakuru, Kenya",
    sleeps: 2,
    size: "119 sq ft",
    bedInfo: "1 Double Bed",
    bedCount: 1,
    images: [
      { original: double1, thumbnail: double1 },
      { original: double2, thumbnail: double2 },
      { original: double3, thumbnail: double3 },
      { original: double4, thumbnail: double4 },
      { original: double5, thumbnail: double5 },
    ],
    price: "KES 2,500",
  },
  {
    name: "Twin Room",
    location: "Nakuru, Kenya",
    sleeps: 2,
    size: "151 sq ft",
    bedInfo: "1 Double Bed and 2 Twin Beds",
    bedCount: 3,
    images: [
      { original: twin1, thumbnail: twin1 },
      { original: twin2, thumbnail: twin2 },
      { original: twin3, thumbnail: twin3 },
      { original: twin4, thumbnail: twin4 },
    ],
    price: "KES 3,000",
  },
  {
    name: "Apartment - Ground Floor",
    location: "Nakuru, Kenya",
    sleeps: 2,
    size: "302 sq ft",
    bedInfo: "1 Queen Bed and 1 Double Bed",
    bedCount: 2,
    images: [
      { original: apt1, thumbnail: apt1 },
      { original: apt2, thumbnail: apt2 },
      { original: apt3, thumbnail: apt3 },
      { original: apt4, thumbnail: apt4 },
      { original: apt5, thumbnail: apt5 },
    ],
    price: "KES 4,000",
  },
];

export default function RoomShowCase() {
  const [modal, setModal] = useState({
    isOpen: false,
    images: [] as { original: string; thumbnail: string }[],
    index: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(rooms.map(() => 0));

  const handleSlide = (roomIndex: number, index: number) => {
    setCurrentImageIndex((prev) => {
      const updated = [...prev];
      updated[roomIndex] = index;
      return updated;
    });
  };

  return (
    <section className="p-2 md:p-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold font-serif mb-10">Room Options</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {rooms.map((room, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow overflow-hidden relative flex flex-col"
          >
            {/* Image Count */}
            <div className="absolute top-2 right-2 z-10 flex flex-col items-start gap-2">
              <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-sm px-2 py-1 rounded font-medium">
                {currentImageIndex[i] + 1}/{room.images.length}
              </span>
            </div>

            {/* Image Carousel */}
            <div className="z-0">
              <ImageCarousel
                images={room.images}
                onImageClick={(index) =>
                  setModal({ isOpen: true, images: room.images, index })
                }
                onSlide={(index) => handleSlide(i, index)}
              />
            </div>

            {/* Room Info */}
            <div className="p-6 bg-gray-50 backdrop-blur-lg rounded-t-2xl mt-[-1rem] relative z-10 shadow-inner">
              <h3 className="text-xl font-bold font-serif">{room.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{room.location}</p>

              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-amber-500" /> {room.sleeps} Adults
                </span>
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4 text-purple-500" /> {room.bedCount} Beds
                </span>
                <span className="flex items-center gap-1">
                  <Wifi className="w-4 h-4 text-blue-700" /> Free WiFi
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-2">
                {room.bedInfo} • {room.size}
              </p>

              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium flex items-center gap-1 w-30">
                <ParkingCircle className="w-4 h-4" /> Free Parking
              </span>

              <div className="flex justify-between items-center mt-4">
                <div className="text-lg font-bold text-gray-900">
                  {room.price}
                  <span className="text-sm text-gray-500"> / night</span>
                </div>
                <button className="hidden md:block bg-zinc-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-black transition">
                  Book Room
                </button>
                <button className="block md:hidden bg-black text-white rounded-full px-6 py-2 font-semibold">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <GalleryModal
        images={modal.images}
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        initialIndex={modal.index}
      />
    </section>
  );
}

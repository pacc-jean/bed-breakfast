import { useState } from "react";
import {
  Bed,
  Users,
  Wifi,
  ParkingCircle,
  Clock,
  PawPrint,
  ImagePlus,
} from "lucide-react";
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

// Dynamically load room gallery images from /src/assets/room
const roomGallery = import.meta.glob("../../assets/rooms/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.values(roomGallery).map((src) => ({
  original: src,
  thumbnail: src,
}));

const rooms = [
  {
    name: "Double Room",
    location: "Nakuru, Kenya",
    sleeps: 2,
    size: "119 sq ft",
    bedInfo: "1 Double Bed",
    bedCount: 1,
    roomType: "double",
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
    roomType: "twin",
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
    roomType: "apartment",
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

  const handleBookRoom = (roomType: string) => {
    window.location.href = `/book?bookingType=room&roomType=${roomType}`;
  };

  return (
    <section className="p-2 md:p-12 bg-white dark:bg-zinc-700">
      <h2 className="text-2xl md:text-3xl font-semibold font-serif mb-10 text-gray-900 dark:text-gray-100">
        Room Options
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white dark:bg-zinc-700 rounded-2xl shadow overflow-hidden relative flex flex-col">
            <div className="absolute top-2 right-2 z-10">
              <span className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded font-medium">
                {currentImageIndex[i] + 1}/{room.images.length}
              </span>
            </div>

            <div className="z-0">
              <ImageCarousel
                images={room.images}
                onImageClick={(index) => setModal({ isOpen: true, images: room.images, index })}
                onSlide={(index) => handleSlide(i, index)}
              />
            </div>

            <div className="p-6 bg-gray-50 dark:bg-zinc-800 backdrop-blur-lg rounded-t-2xl mt-[-1rem] relative z-10 shadow-inner">
              <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white">{room.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{room.location}</p>

              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4 space-x-4">
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

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {room.bedInfo} • {room.size}
              </p>

              <span className="bg-green-100 dark:bg-green-800/40 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded font-medium flex items-center gap-1 w-30">
                <ParkingCircle className="w-4 h-4" /> Free Parking
              </span>

              <div className="flex justify-between items-center mt-4">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {room.price}
                  <span className="text-sm text-gray-500 dark:text-gray-400"> / night</span>
                </div>
                <button 
                  onClick={() => handleBookRoom(room.roomType)}
                  className="bg-black text-white md:bg-zinc-600 md:text-white rounded-full px-6 py-2 font-semibold hover:bg-black transition"
                >
                  Book Room
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guest Policies */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold font-serif mb-6 text-gray-800 dark:text-gray-100">
          Guest Policies
        </h2>
        <div className="border-t border-gray-200 dark:border-zinc-600 divide-y divide-gray-200 dark:divide-zinc-600 text-sm text-gray-800 dark:text-gray-200 rounded-xl overflow-hidden shadow-sm">

          <div className="grid grid-cols-2 bg-gray-100 dark:bg-zinc-800 p-4">
            <div className="font-semibold">Check-in</div>
            <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
              <Clock className="w-4 h-4" /> After 03:00 PM
            </div>
          </div>

          <div className="grid grid-cols-2 p-4">
            <div className="font-semibold">Check-out</div>
            <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
              <Clock className="w-4 h-4" /> Before 10:00 AM
            </div>
          </div>

          <div className="grid grid-cols-2 bg-gray-100 dark:bg-zinc-800 p-4">
            <div className="font-semibold">Children & Extra Beds</div>
            <div>Children of all ages are welcome.</div>
          </div>

          <div className="grid grid-cols-2 p-4">
            <div className="font-semibold">Parking</div>
            <div>Free Private parking is available.</div>
          </div>

          <div className="grid grid-cols-2 bg-gray-100 dark:bg-zinc-800 p-4">
            <div className="font-semibold">Pets</div>
            <div>
              <div className="font-semibold flex items-center gap-2 text-blue-800 dark:text-blue-300">
                <PawPrint className="w-4 h-4" /> Pets Allowed
              </div>
              <div>Pets are allowed upon request. Charges may apply.</div>
            </div>
          </div>

          <div className="grid grid-cols-2 p-4">
            <div className="font-semibold">Room Rates</div>
            <div>All rates displayed are for two guests unless otherwise noted.</div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-start border-b border-gray-500 mt-6 mb-4">
        <h2 className="text-2xl font-semibold font-serif mt-6 mb-2 text-gray-800 dark:text-gray-100">
          Disclaimer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          This property does not accommodate bachelor(ette) or similar parties.
        </p>
      </div>

      {/* Room Gallery Thumbnails */}
      {galleryImages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold font-serif mb-4 text-black dark:text-white">More Photos</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {galleryImages.slice(0, 12).map((img, index) => (
              <img
                key={index}
                src={img.thumbnail}
                alt={`Room ${index}`}
                className="w-full h-28 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                onClick={() => setModal({ isOpen: true, images: galleryImages, index })}
              />
            ))}
          </div>
          <div className="mt-4 text-right">
            <button
              onClick={() => setModal({ isOpen: true, images: galleryImages, index: 0 })}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
            >
              <ImagePlus className="w-4 h-4" /> View All Photos
            </button>
          </div>
        </div>
      )}

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
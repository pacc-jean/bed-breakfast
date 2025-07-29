import {
  FaParking,
  FaSmokingBan,
  FaPaw,
  FaShuttleVan,
} from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";

import doubleRoomImg from "../../assets/explore/double-room.jpg";
import oneBedroomImg from "../../assets/explore/one-bedroom-apartment.jpg";
import campImg from "../../assets/explore/camp-site.jpg";
import eventsImg from "../../assets/explore/event-space.jpg";

type OverviewSectionProps = {
  onShowAmenitiesClick: () => void;
  onShowRoomsClick: () => void;
  onShowCampClick: () => void;
  onShowEventsClick: () => void;
};

export default function OverviewSection({
  onShowAmenitiesClick,
  onShowRoomsClick,
  onShowCampClick,
  onShowEventsClick,
}: OverviewSectionProps) {
  const amenities = [
    { icon: <FaUtensils />, label: "Restaurant" },
    { icon: <FaParking />, label: "Free Parking" },
    { icon: <FaShuttleVan />, label: "Airport Shuttle" },
    { icon: <FaPaw />, label: "Pets Allowed" },
    { icon: <FaSmokingBan />, label: "Non Smoking Rooms / Facilities" },
  ];

  return (
    <div className="space-y-12">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 border-b pb-8">
        <div>
          <h3 className="text-xl font-semibold font-serif mb-4">Top Amenities</h3>
          <ul className="space-y-3">
            {amenities.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-xl text-blue-600">{item.icon}</span>
                <span className="text-sm text-gray-700 font-sans">{item.label}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onShowAmenitiesClick}
            className="mt-4 text-sm text-blue-600 font-sans hover:underline"
          >
            Show All Amenities
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold font-serif mb-4">About Lion Hill Place</h3>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            Located in Nakuru, 13 miles from Lake Elementaita, Lion Hill Place provides
            accommodations with a garden, free private parking, a shared lounge and a
            restaurant. The property is located within 14 miles of Lake Nakuru National
            Park. It has a shared kitchen and room service for guests. All guest rooms
            are equipped with a seating area and a flat-screen TV. Every room comes
            with an electric tea pot and a private bathroom with a shower and free
            toiletries, while some rooms have a kitchenette with a fridge. The breakfast
            offers buffet, à la carte or continental options. You can play darts at Lion
            Hill Place. Egerton Castle is 15 miles from the accommodation, while Lake
            Nakuru is 4 miles from the property. Wilson Airport is 96 miles away.
          </p>
        </div>
      </div>

      {/* Double Room */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={doubleRoomImg}
          alt="Double Room"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
        <div>
          <h3 className="text-lg font-semibold mb-2">Double Room with En-suite Toilet</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Looking for a clean, quiet, and affordable place to stay? Our Double Room with a private toilet offers everything you need for a simple and comfortable night’s rest.
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
            <li>Double bed with clean bedding</li>
            <li>Private en-suite toilet and shower</li>
            <li>Wi-Fi and Smart TV</li>
            <li>Tea/coffee making facilities</li>
            <li>Access to garden, chill zone, and dining area</li>
          </ul>
          <p className="text-sm text-zinc-500 italic mt-2">
            Affordable · Private toilet · Internet · Sleeps 2
          </p>
          <button
            onClick={onShowRoomsClick}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            View Rooms
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mb-12 mx-auto" />

      {/* One Bedroom Apartment */}
      <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <div>
          <h3 className="text-lg font-semibold mb-2">One-Bedroom Apartment</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Enjoy more space and privacy in our fully furnished apartment. Ideal for couples, remote workers, or small families.
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
            <li>King-size bed and ensuite bathroom with shower gel and towels</li>
            <li>Fully equipped kitchenette: microwave, stove, kettle, fridge</li>
            <li>Living area with sofa, dining table, and Smart TV</li>
            <li>Access to manicured grounds</li>
          </ul>
          <button
            onClick={onShowRoomsClick}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            View Rooms
          </button>
        </div>
        <img
          src={oneBedroomImg}
          alt="One Bedroom Apartment"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
      </div>

      <hr className="border-gray-300 mb-12 mx-auto" />

      {/* Campsite */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={campImg}
          alt="Camp Site"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
        <div>
          <h3 className="text-lg font-semibold mb-2">Camping at Lion Hill Place</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Sleep under the stars, wake up to birdsong. Our secure, peaceful campsite is perfect for solo travelers, families, and groups.
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
            <li>Hot showers</li>
            <li>Clean restrooms</li>
            <li>Charging stations</li>
            <li>Shared kitchen and fire pit</li>
            <li>Optional meals and breakfast</li>
            <li>Pet-friendly · Safe parking</li>
          </ul>
          <button
            onClick={onShowCampClick}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            View Camp Site
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mb-12 mx-auto" />

      {/* Event Space */}
      <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <div>
          <h3 className="text-lg font-semibold mb-2">Events Space at Lion Hill Place</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Celebrate, connect, and create unforgettable moments in nature. Our events space is perfect for intimate gatherings or team-building.
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
            <li>Birthdays, baby showers, wellness days</li>
            <li>Corporate retreats & family get-togethers</li>
            <li>Shaded sitting areas & open grounds</li>
            <li>Optional meals, décor, tents & coordination</li>
            <li>On-site group accommodation</li>
          </ul>
          <p className="text-sm text-zinc-500 italic mt-2">
            Private, peaceful venue surrounded by nature.
          </p>
          <button
            onClick={onShowEventsClick}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            View Event Space
          </button>
        </div>
        <img
          src={eventsImg}
          alt="Event Space"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
      </div>
    </div>
  );
}

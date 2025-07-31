import { useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import OverviewSection from "./OverviewSection";
import MapModal from "./MapModal";
import ShowAmenities from "./ShowAmenities";
import RoomShowCase from "./RoomShowCase";
import CampSiteShowCase from "./CampSiteShowCase";
import EventSpaceShowCase from "./EventSpaceShowCase";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Amenities", id: "amenities" },
  { label: "Rooms", id: "rooms" },
  { label: "Camp Site", id: "camp" },
  { label: "Event Space", id: "events" },
];

export default function ShowCase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMapOpen, setIsMapOpen] = useState(false);

  const amenitiesRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const campRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  const handleShowAmenitiesClick = () => {
    setActiveTab("amenities");
    setTimeout(() => {
      amenitiesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleShowRoomsClick = () => {
    setActiveTab("rooms");
    setTimeout(() => {
      roomsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleShowCampClick = () => {
    setActiveTab("camp");
    setTimeout(() => {
      campRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleShowEventsClick = () => {
    setActiveTab("events");
    setTimeout(() => {
      eventsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const renderSection = () => {
    switch (activeTab) {
      case "overview":
        return (
          <OverviewSection
            onShowAmenitiesClick={handleShowAmenitiesClick}
            onShowRoomsClick={handleShowRoomsClick}
            onShowCampClick={handleShowCampClick}
            onShowEventsClick={handleShowEventsClick}
          />
        );
      case "amenities":
        return <div ref={amenitiesRef}><ShowAmenities /></div>;
      case "rooms":
        return <div ref={roomsRef}><RoomShowCase /></div>;
      case "camp":
        return <div ref={campRef}><CampSiteShowCase /></div>;
      case "events":
        return <div ref={eventsRef}><EventSpaceShowCase /></div>;
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <h4 className="text-lg md:text-3xl font-bold mb-2 font-serif">
        Checkout All That We Have To Offer
      </h4>

      {/* Address & WhatsApp Button */}
      <div className="flex items-end justify-between mb-6">
        {/* Address */}
        <div>
          <p className="text-xs md:text-sm text-red-500 italic font-sans">
            Make a reservation for free and pay upon arrival
          </p>
          <p className="text-xs md:text-sm text-gray-600 font-serif">
            Caleb Muibu Road Lion Hill Place, Nakuru - Kenya
            <button
              onClick={() => setIsMapOpen(true)}
              className="text-blue-600 hover:underline ml-1"
            >
              View Map
            </button>
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/254722774029"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center bg-green-500 md:bg-zinc-600 hover:bg-green-500 text-white rounded-full h-10 w-10 transition-all duration-300 overflow-hidden hover:w-auto px-3"
        >
          <FaWhatsapp className="text-lg" />
          <span className="text-sm ml-2 hidden group-hover:inline whitespace-nowrap">
            Chat/Inquire on WhatsApp
          </span>
        </a>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium whitespace-nowrap border-b-2 ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">{renderSection()}</div>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </section>
  );
}

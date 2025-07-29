import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

type MapModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-6 shadow-2xl w-[95vw] max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-black rounded-full shadow-md w-8 h-8 flex items-center justify-center text-2xl"
          aria-label="Close Map"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex items-center gap-2 mb-4">
          <FaLocationDot className="text-blue-600 w-5 h-5" />
          <h2 className="text-xl font-semibold">We are located here</h2>
        </div>

        {/* Map Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.759431832814!2d36.1316099!3d-0.31129840000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829917ce4cbfa03%3A0x98e0b1ddf1d8f571!2sLion%20Hill%20Place!5e0!3m2!1sen!2ske!4v1753618574945!5m2!1sen!2ske"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg border"
        ></iframe>
      </div>
    </div>
  );
}

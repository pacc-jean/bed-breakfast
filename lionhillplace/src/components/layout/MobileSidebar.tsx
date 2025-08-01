import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TbSmartHome,
  TbBookmarks,
  TbTent,
  TbCalendarEvent,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import { MdSupportAgent, MdOutlineHotelClass } from "react-icons/md";
import { RiGlassesLine, RiQuestionAnswerLine } from "react-icons/ri";

const navItems = [
  { label: "Home", to: "/", match: "/", icon: TbSmartHome },
  { label: "Contact", to: "/contactfaq#contact", match: "/contactfaq#contact", icon: MdSupportAgent },
  { label: "FAQ", to: "/contactfaq#faq", match: "/contactfaq#faq", icon: RiQuestionAnswerLine },
  { label: "Explore", to: "/explore", match: "/explore", icon: RiGlassesLine },
  { label: "Rooms", to: "/explore#rooms", match: "/explore#rooms", icon: MdOutlineHotelClass },
  { label: "Camping", to: "/explore#camp", match: "/explore#camp", icon: TbTent },
  { label: "Events", to: "/explore#events", match: "/explore#events", icon: TbCalendarEvent },
  { label: "Book", to: "/book", match: "/book", icon: TbBookmarks },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  return (
    <>
      {/* Open button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur border border-white/70 dark:border-white/30 shadow-md text-white dark:text-zinc-200 md:hidden"
        >
          <TbChevronRight size={22} />
        </button>
      )}

      {/* Backdrop Blur Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar */}
      {open && (
        <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 bg-white/80 dark:bg-zinc-800/90 backdrop-blur border-r border-zinc-200 dark:border-zinc-700 px-4 pt-14 pb-6 w-60 rounded-r-2xl shadow-lg md:hidden flex flex-col items-stretch gap-4">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 p-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white"
          >
            <TbChevronLeft size={22} />
          </button>

          {/* Nav Items */}
          {navItems.map(({ label, to, match, icon: Icon }) => {
            const isActive = currentPath === match;

            return (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-600 ring-2 ring-blue-400 dark:bg-blue-900/20 dark:text-blue-300 dark:ring-blue-500"
                    : "text-gray-900 dark:text-gray-200"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

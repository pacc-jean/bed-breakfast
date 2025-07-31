import { Link, useLocation } from "react-router-dom";
import { TbSmartHome, TbBookmarks, TbTent, TbCalendarEvent } from "react-icons/tb";
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

export default function MobileTopNav() {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/70 dark:border-white/30 shadow-md rounded-full px-2 py-2 flex items-center justify-center gap-3 w-[95%] max-w-md overflow-x-auto md:hidden">
      {navItems.map(({ label, to, match, icon: Icon }) => {
        const isActive = currentPath === match;

        return (
          <Link
            key={label}
            to={to}
            className="flex-shrink-0"
          >
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-blue-100 text-blue-600 ring-2 ring-blue-400 dark:bg-blue-900/20 dark:text-blue-300 dark:ring-blue-500"
                  : "text-gray-900 dark:text-gray-200"
              }`}
            >
              <Icon size={8} />
              {isActive && (
                <span className="text-xs font-medium">{label}</span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";
import { TbSmartHome, TbBookmarks } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { RiGlassesLine } from "react-icons/ri";

const navItems = [
  { label: "Home", to: "/", icon: TbSmartHome },
  { label: "Contact", to: "/contactfaq", icon: MdSupportAgent },
  { label: "Explore", to: "/explore", icon: RiGlassesLine },
  { label: "Book", to: "/book", icon: TbBookmarks },
];

export default function MobileTopNav() {
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/70 dark:border-white/30 shadow-md rounded-full px-2 py-2 flex items-center justify-center gap-4 w-[90%] max-w-md md:hidden">
      {navItems.map(({ label, to, icon: Icon }) => {
        const isActive = location.pathname === to.split("#")[0];

        return (
          <Link
            key={label}
            to={to}
            className="flex-shrink-0"
          >
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 ring-2 ring-blue-400 dark:bg-blue-900/20 dark:text-blue-300 dark:ring-blue-500"
                  : "text-gray-900 dark:text-gray-200"
              }`}
            >
              <Icon size={22} />
              {isActive && (
                <span className="text-sm font-medium whitespace-nowrap">{label}</span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

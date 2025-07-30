import { Link, useLocation } from "react-router-dom";
import { TbSmartHome, TbBookmarks } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { RiGlassesLine } from "react-icons/ri";

const navItems = [
  { label: "Home", to: "/", icon: TbSmartHome },
  { label: "Contact & FAQ", to: "/contactfaq", icon: MdSupportAgent },
  { label: "Explore", to: "/explore", icon: RiGlassesLine },
  { label: "Book", to: "/book", icon: TbBookmarks },
];

export default function MobileTopNav() {
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md border border-white/70 shadow-md rounded-full px-4 py-2 flex justify-between items-center w-[90%] max-w-md md:hidden">
      {navItems.map(({ label, to, icon: Icon }) => {
        const isActive = location.pathname === to.split("#")[0];

        return (
          <Link
            key={label}
            to={to}
            className="px-3 relative flex items-center justify-center"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 ring-2 ring-blue-400"
                  : "text-gray-900"
              }`}
            >
              <Icon size={22} />
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

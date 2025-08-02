import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", match: "/" },
  { label: "Contact", to: "/contactfaq#contact", match: "/contactfaq#contact" },
  { label: "FAQ", to: "/contactfaq#faq", match: "/contactfaq#faq" },
  { label: "Explore", to: "/explore", match: "/explore" },
  { label: "Overview", to: "/explore#overview", match: "/explore#overview"},
  { label: "Amenities", to: "/explore#amenities", match: "/explore#amenities"},
  { label: "Rooms", to: "/explore#rooms", match: "/explore#rooms" },
  { label: "Camping", to: "/explore#camp", match: "/explore#camp" },
  { label: "Events", to: "/explore#events", match: "/explore#events" },
];

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  return (
    <header className="hidden md:block fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-zinc-500/60 backdrop-blur border-b border-black dark:border-white rounded-b-xl">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="font-extrabold font-serif text-2xl tracking-tight text-black/70 dark:text-white text-shadow-glow animate-pulse"
          >
            Lion Hill Place
          </NavLink>

          {/* Links */}
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  replace={item.label === "Explore"} // Optional: avoids stacking nav history
                  className={[
                    "text-base font-medium transition-colors hover:text-black/60 dark:hover:text-gray-300",
                    currentPath === item.match
                      ? "text-black dark:text-white"
                      : "text-gray-400 dark:text-black/60",
                  ].join(" ")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <NavLink
            to="/book"
            className="inline-flex items-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-800"
          >
            Book Now
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

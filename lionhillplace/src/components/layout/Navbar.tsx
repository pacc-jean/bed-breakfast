import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Contact & FAQ", to: "/faq" },
  { label: "Explore", to: "/explore" },
];

function Navbar() {
  return (
    <header className="hidden md:block fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="font-extrabold text-2xl tracking-tight text-black"
          >
            Lion Hill Place
          </NavLink>

          {/* Links */}
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "text-sm font-medium transition-colors hover:text-gray-600",
                      isActive ? "text-black" : "text-gray-400",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <NavLink
            to="/book"
            className="inline-flex items-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
          >
            Book Now
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

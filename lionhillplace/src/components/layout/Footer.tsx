import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const footerNavItems = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contactfaq#faq" },
  { label: "Explore", to: "/explore" },
  { label: "Book Now", to: "/book" },
];

function Footer() {
  return (
    <footer className="mt-12 mb-12 px-4 sm:px-6 py-6 text-sm bg-white dark:bg-zinc-700 text-black dark:text-white">
      <hr className="border-gray-400 dark:border-white mb-28 mx-auto" />
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Top: CTA Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl sm:text-5xl font-serif leading-tight max-w-sm">
            Book your <br /> stays with us
          </h2>
          <NavLink
            to="/contactfaq#contact"
            className="mt-6 md:mt-0 inline-flex items-center justify-center rounded-full border border-black dark:border-white px-6 py-2 text-sm font-medium bg-black text-white md:bg-white md:text-black dark:md:bg-black dark:md:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Divider */}
        <hr className="border border-black dark:border-white/30" />

        {/* Middle: Contact Info, Nav Links, Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-sm text-black/90 dark:text-white/90">
          {/* Contact Info - Left */}
          <div className="space-y-1 text-left">
            <p>lionhillplace@gmail.com</p>
            <p>0737774030</p>
            <p>
              Caleb Muibu Road, Next to Lake Nakuru <br />
              National Park, Lanet gate, Nakuru
            </p>
          </div>

          {/* Navigation Links - Center */}
          <ul className="space-y-1 md:text-left md:mx-auto">
            {footerNavItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="hover:underline transition-colors text-black dark:text-white"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Socials - Right */}
          <div className="flex gap-4 mt-6 md:mt-0 md:ml-0 md:justify-end">
            <a
              href="https://wa.me/254737774030"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-emerald-600 transition text-black dark:text-white"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/lion_hill_place"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition text-black dark:text-white"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>


        {/* Bottom: Copyright */}
        <p className="text-sm text-center md:text-right text-black/70 dark:text-white/50">
          © {new Date().getFullYear()} Lion Hill Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

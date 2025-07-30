import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const footerNavItems = [
  { label: "Home", to: "/" },
  { label: "FAQ", to: "/contactfaq#faq" },
  { label: "Contact", to: "/contactfaq#contact" },
  { label: "Book Now", to: "/book" },
];

function Footer() {
  return (
    <footer className="mt-12 mb-12 px-4 sm:px-6 py-6 text-sm text-black">
      <hr className="border-gray-400 mb-28 mx-auto" />
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Top: CTA Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl sm:text-5xl font-serif leading-tight max-w-sm">
            Book your <br /> stays with us
          </h2>
          <NavLink
            to="/contactfaq#contact"
            className="mt-6 md:mt-0 inline-flex items-center justify-center rounded-full border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Divider */}
        <hr className="border border-black" />

        {/* Middle: Info & Links + Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Info + Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-black/90">
            {/* Contact Info */}
            <div className="space-y-1">
              <p>lionhillplace@gmail.com</p>
              <p>0737774030</p>
              <p>
                Caleb Muibu Road, Next to Lake Nakuru <br />
                National Park, Lanet gate, Nakuru
              </p>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-1">
              {footerNavItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="hover:underline transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6 md:mt-0 md:ml-auto">
            <a
              href="https://wa.me/254722774029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-emerald-600 transition"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/lion_hill_place"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <p className="text-sm text-center md:text-right text-black/70">
          © {new Date().getFullYear()} Lion Hill Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

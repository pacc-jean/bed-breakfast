import { NavLink } from "react-router-dom";
import heroImage from "../../assets/hero.jpg";

function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Lake Nakuru with flamingos"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
          Welcome to Lion Hill Place
        </h1>
        <p className="text-sm md:text-base max-w-2xl mb-6">
          A tranquil escape for B&amp;B stays, camping, and intimate events – right next to<br />
          Lake Nakuru National Park
        </p>
        <NavLink
          to="/book"
          className="bg-white text-black font-semibold py-2 px-4 rounded-lg text-lg shadow-md hover:bg-black hover:text-white transition"
        >
          Book Now
        </NavLink>
      </div>
    </section>
  );
}

export default HeroSection;

import { NavLink } from "react-router-dom";
import cozyImg from "../../assets/cozy.jpg";
import campImg from "../../assets/camp.jpg";
import eventImg from "../../assets/event.jpg";

function OverviewSection() {
  return (
    <section className="relative -mt-10 py-24 px-6 bg-gray-100 rounded-t-4xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Text */}
        <div className="flex-1 mt-10 pr-6">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
            Want to book a stay? Checkout what we offer.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From beautiful and cozy rooms, to our spacious camp sites, and lush event grounds.
            We will have you setup according to your needs. Click the button below to checkout the place.
          </p>
          <NavLink
            to="/explore"
            className="inline-block border border-black rounded-full px-6 py-2 text-base font-medium bg-black md:bg-white text-white md:text-black hover:bg-black hover:text-white transition"
          >
            Explore
          </NavLink>
        </div>

        {/* Right Cards */}
        <div className="flex-1 flex flex-col lg:flex-row gap-10">
          {/* Card 1 - Low */}
          <div className="relative w-full md:w-65 h-96 rounded-3xl overflow-hidden shadow-xl md:mt-40">
            <img src={cozyImg} alt="Cozy B&B" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Cozy B&B</h3>
              <p className="text-sm">
                Unwind in comfortable rooms with delicious breakfast and easy access to nature's wonders.
              </p>
            </div>
          </div>

          {/* Card 2 - Higher */}
          <div className="relative w-full md:w-65 h-96 rounded-3xl overflow-hidden shadow-xl md:mt-20">
            <img src={campImg} alt="Scenic Camping" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Scenic Camping</h3>
              <p className="text-sm">
                Experience the great outdoors with well-maintained campgrounds nestled in natural beauty.
              </p>
            </div>
          </div>

          {/* Card 3 - Sky high */}
          <div className="relative w-full md:w-65 h-96 rounded-3xl overflow-hidden shadow-xl md:mt-0">
            <img src={eventImg} alt="Event Space" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Event Space</h3>
              <p className="text-sm">
                Perfect for birthdays, reunions, and intimate gatherings with a view of the hills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;

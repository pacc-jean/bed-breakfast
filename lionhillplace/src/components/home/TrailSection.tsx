function TrailSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left: Map */}
        <div className="w-full lg:w-1/2 h-[900px]">
          <iframe
            title="Lion Hill Place Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.759431832814!2d36.1316099!3d-0.31129840000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829917ce4cbfa03%3A0x98e0b1ddf1d8f571!2sLion%20Hill%20Place!5e0!3m2!1sen!2ske!4v1753618574945!5m2!1sen!2ske"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 px-6 md:px-20 py-14 flex flex-col justify-start">
          <h2 className="text-2xl md:text-4xl font-sans font-semibold mb-8">
            Near Lake Nakuru National Park
          </h2>
          <p className="text-gray-700 text-base mb-8 font-sans leading-relaxed">
            Adventure meets relaxation just a short distance from one of Kenya's
            premier wildlife destinations. Discover flamingos, rhinos, and majestic
            views — right at your doorstep.
          </p>

          {/* Opening Hours */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold font-sans mb-6">Opening Hours</h3>
            <div className="border-t border-b border-black divide-y divide-gray-black text-lg">
              {[
                ["Monday", "9:00am - 5:00pm"],
                ["Tuesday", "9:00am - 5:00pm"],
                ["Wednesday", "9:00am - 5:00pm"],
                ["Thursday", "9:00am - 5:00pm"],
                ["Friday", "9:00am - 5:00pm"],
                ["Saturday", "9:00am - 3:00pm"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between py-4 px-1 font-sans">
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location and Contact */}
          <div className="flex flex-col sm:flex-row text-base gap-10 font-serif sm:gap-44">
            <div className="sm:pr-6">
              <h4 className="font-semibold text-2xl mb-2">Location</h4>
              <hr className="border-black mb-4" />
              <p>
                Caleb Muibu Road, Next to<br />
                Lake Nakuru National Park,<br />
                Lanet gate, Nakuru
              </p>
            </div>
            <div className="sm:pl-6">
              <h4 className="font-semibold text-2xl mb-2">Contact</h4>
              <hr className="border-black mb-4" />
              <p>
                lionhillplace@gmail.com<br />
                0737774030
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrailSection;

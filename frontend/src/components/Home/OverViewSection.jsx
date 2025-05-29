import React from 'react';

const OverviewSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">A Place of Peace & Wonder</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          Tucked beside the iconic Lake Nakuru National Park, Lion Hill offers more than just a bed to sleep in —
          it's an immersion into tranquility. Wake to the calls of flamingos, fall asleep to the rustling trees,
          and spend your days in the embrace of nature's rhythm.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2">🏕️ Camping</h3>
            <p>
              Set up under starlit skies. Our campsites offer both adventure and serenity, whether you’re solo or squad deep.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">🛌 B&B Stays</h3>
            <p>
              Cozy rooms with character, warm hospitality, and views that stop time — perfect for couples, families, or creatives on retreat.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">🎉 Private Events</h3>
            <p>
              Celebrate love, milestones, or community with intimate gatherings by the wild. We host weddings, birthdays, and retreats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

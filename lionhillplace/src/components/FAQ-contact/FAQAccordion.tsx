import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = {
  General: [
    { question: "What is Lion Hill Place?", answer: "Lion Hill Place is a serene B&B, camping site, and event space near Lake Nakuru National Park." },
    { question: "Are pets allowed?", answer: "Yes, friendly pets are welcome!" },
    { question: "Do you allow walk-in bookings?", answer: "Yes, subject to availability. Booking online is recommended." },
    { question: "What are your check-in and check-out times?", answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM." },
    { question: "Do you have Wi-Fi?", answer: "Yes, we offer free high-speed Wi-Fi to all our guests." },
    { question: "Is smoking allowed?", answer: "Smoking is allowed only in designated outdoor areas." },
    { question: "Is there parking available?", answer: "Yes, we offer secure parking for all guests." },
    { question: "Do you provide airport transfers?", answer: "Yes, we can arrange for airport pick-up and drop-off upon request." },
    { question: "Are there nearby attractions?", answer: "Yes, including Lake Nakuru National Park, Menengai Crater, and Hyrax Hill Museum." },
    { question: "Can I bring outside food and drinks?", answer: "Yes, though we offer in-house dining options as well." },
    { question: "Is your place kid-friendly?", answer: "Absolutely, we are family-oriented and have kid-friendly spaces." },
    { question: "Do you have a curfew?", answer: "No curfew, but we do ask guests to be mindful of noise after 10 PM." },
    { question: "Can I cancel or reschedule my booking?", answer: "Yes, as long as it’s done 48 hours before check-in." },
    { question: "Do you offer laundry services?", answer: "Yes, we offer laundry services for a small fee." },
    { question: "Is the area safe?", answer: "Yes, the property is gated and has 24/7 security." }
  ],
  Rooms: [
    { question: "What room types do you offer?", answer: "We offer deluxe, family, and standard double rooms." },
    { question: "Is breakfast included?", answer: "Yes, all room bookings include breakfast." },
    { question: "Are the rooms en-suite?", answer: "Yes, each room comes with its own bathroom." },
    { question: "Do rooms have TVs?", answer: "Yes, all rooms are equipped with flat-screen TVs." },
    { question: "Are towels and toiletries provided?", answer: "Yes, we provide fresh towels and basic toiletries." },
    { question: "Do rooms have air conditioning?", answer: "Some rooms do. Others are well-ventilated with fans." },
    { question: "Can I request an extra bed?", answer: "Yes, extra beds are available upon request for an additional fee." },
    { question: "Do the rooms have private balconies?", answer: "Select rooms feature private balconies with scenic views." },
    { question: "Is daily housekeeping provided?", answer: "Yes, daily housekeeping is available." },
    { question: "Are pets allowed in rooms?", answer: "Only in selected pet-friendly rooms." },
    { question: "Are your rooms wheelchair accessible?", answer: "We have select rooms that are accessible — please inquire in advance." },
    { question: "Can I check in early or check out late?", answer: "Subject to availability — extra charges may apply." },
    { question: "Do you have a honeymoon suite?", answer: "Yes, we offer a beautifully decorated honeymoon suite." },
    { question: "Do rooms have mosquito nets?", answer: "Yes, all rooms are equipped with mosquito nets." },
    { question: "Do the rooms have safes for valuables?", answer: "Yes, all rooms have secure safes for valuables." }
  ],
  Camping: [
    { question: "Do I need to bring my own tent?", answer: "You can bring your own or rent from us." },
    { question: "Are there showers for campers?", answer: "Yes, hot showers are available for campers." },
    { question: "Is it safe to camp there?", answer: "Yes, we have 24/7 security on-site." },
    { question: "Is firewood provided?", answer: "Yes, firewood is available at a small fee." },
    { question: "Can I cook at the campsite?", answer: "Yes, there are designated cooking areas." },
    { question: "Are there toilets at the campsite?", answer: "Yes, clean restrooms are available nearby." },
    { question: "Is there electricity for campers?", answer: "We provide charging stations at common areas." },
    { question: "Can I camp with my pet?", answer: "Yes, pets are welcome if kept on a leash." },
    { question: "Are there group camping options?", answer: "Yes, we accommodate group and family camping." },
    { question: "Is there a curfew for campers?", answer: "Campers must observe quiet hours after 10 PM." },
    { question: "Do you offer camping gear rental?", answer: "Yes, tents, mats, and sleeping bags are available for rent." },
    { question: "Can I reserve a specific camping spot?", answer: "Yes, based on availability." },
    { question: "Do campers have access to the lake?", answer: "Yes, walking trails lead to scenic lake views." },
    { question: "Can I park near my tent?", answer: "Yes, parking is available close to camping areas." },
    { question: "Are campfires allowed?", answer: "Yes, in designated fire pits only." }
  ],
  Events: [
    { question: "Can I host a wedding there?", answer: "Absolutely! We specialize in intimate and outdoor events." },
    { question: "Do you provide event planning?", answer: "Yes, we offer full event planning services." },
    { question: "Is the space available for corporate retreats?", answer: "Yes, our venue is perfect for team building and company events." },
    { question: "Do you provide catering?", answer: "Yes, we offer in-house and outsourced catering options." },
    { question: "What’s the guest capacity?", answer: "We can comfortably host up to 200 guests." },
    { question: "Do you have a sound system?", answer: "Yes, a full sound system is available for rent." },
    { question: "Are decorations included?", answer: "We offer customizable decor packages." },
    { question: "Is there a backup generator?", answer: "Yes, we have a generator for uninterrupted events." },
    { question: "Do you offer photography services?", answer: "Yes, we can connect you with local professionals." },
    { question: "Can I bring my own vendors?", answer: "Yes, we allow third-party vendors with prior approval." },
    { question: "Is overnight stay available for event guests?", answer: "Yes, we can accommodate up to 40 overnight guests." },
    { question: "Do you offer open grounds or indoor space?", answer: "We have both open-air lawns and indoor halls." },
    { question: "Is alcohol allowed at events?", answer: "Yes, with proper licensing." },
    { question: "Do you provide event security?", answer: "Yes, security is part of our event packages." },
    { question: "What’s the booking process?", answer: "Contact us directly for availability, pricing, and deposit details." }
  ]
};

function FAQAccordion() {
  const [selectedType, setSelectedType] = useState<keyof typeof faqData>("General");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-serif text-black text-center font-semibold">Frequently asked questions</h2>

      {/* Filter Dropdown */}
      <div className="relative inline-block">
        <select
            className="border-b border-blue-500 bg-transparent text-blue-600 text-xl text-center py-1 pr-6 pl-2 outline-none appearance-none cursor-pointer"
            value={selectedType}
            onChange={(e) => {
            setSelectedType(e.target.value as keyof typeof faqData);
            setOpenIndex(0);
            }}
        >
            {Object.keys(faqData).map((type) => (
            <option key={type} value={type} className="text-black bg-white">
                {type}
            </option>
            ))}
        </select>

        {/* Chevron Icon */}
        <svg
            className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>



      {/* Accordion */}
      <div className="divide-y divide-black/20">
        {faqData[selectedType].map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div key={index} className="py-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left font-serif font-medium text-xl text-black"
              >
                {item.question}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isOpen && <p className="mt-2 font-sans text-gray-600">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccordion;

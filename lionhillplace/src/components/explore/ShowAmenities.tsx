import { FaCheck } from "react-icons/fa";

const categories = [
  {
    title: "Sanitation Procedures",
    items: [
      "Free face masks",
      "Linens, towels and laundry washed in accordance with local authority guidelines",
      "Staff follow all safety protocols as directed by local authorities",
      "Daily disinfection",
    ],
  },
  {
    title: "Food & Drinks",
    items: [
      "Bar",
      "Restaurant(s)",
      "Restaurant (special diets available)",
    ],
  },
  {
    title: "Transportation",
    items: [
      "On-site parking",
      "Free parking",
      "Airport shuttle (charges may apply)",
    ],
  },
  {
    title: "Services and Conveniences",
    items: [
      "Daily housekeeping",
      "Tour services",
      "Cashless payment available",
      "Picnic area",
      "Invoices",
      "BBQ facilities",
      "Convenience store",
    ],
  },
  {
    title: "Outdoor Recreation",
    items: ["Hiking", "Game drives", "Garden"],
  },
  {
    title: "Room Amenities",
    items: [
      "Ironing amenities",
      "Fire extinguishers",
      "Outdoor fireplace",
      "Room service",
      "Outdoor furniture",
      "Room service available",
      "Shared kitchen",
      "Family rooms",
    ],
  },
  {
    title: "Health Services",
    items: ["First aid kit available"],
  },
  {
    title: "Media & Technology",
    items: ["Shared lounge/TV area"],
  },
  {
    title: "General",
    items: [
      "Pets allowed (charges may apply)",
      "Pets allowed",
      "Non-smoking rooms available",
      "Non-smoking property",
    ],
  },
  {
    title: "Swimming & Soaking",
    items: ["Sun loungers or beach chairs"],
  },
  {
    title: "Activities & Things to do",
    items: ["Darts", "Board games/puzzles"],
  },
];

export default function ShowAmenities() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 text-sm text-gray-800 font-sans leading-relaxed">
      {categories.map((cat, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-[15px] mb-2">{cat.title}</h3>
          <ul className="space-y-[6px]">
            {cat.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-green-500 mt-[2px] mr-2 w-3 h-3 shrink-0" />
                <span className="text-[14px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

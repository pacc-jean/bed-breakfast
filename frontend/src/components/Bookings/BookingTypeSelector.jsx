import React from 'react';

const options = ['B&B Room', 'Camping Site', 'Event Space'];

const BookingTypeSelector = ({ selected, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {options.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-4 py-2 whitespace-nowrap rounded-full transition ${
            selected === type ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default BookingTypeSelector;

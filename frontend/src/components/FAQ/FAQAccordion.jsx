import React, { useState } from 'react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 font-medium flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;

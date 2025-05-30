import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQAccordion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setIsMounted(true), index * 100); // staggered mount
    return () => clearTimeout(delay);
  }, [index]);

  return (
    <div
      className={`border-b border-gray-200 transform transition duration-500 ease-out ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 text-sm text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;

import React from 'react';
import FAQAccordion from '../components/FAQ/FAQAccordion';

const faqList = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is from 2 PM and check-out is by 11 AM.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer:
      'Yes, you can modify or cancel your booking up to 48 hours before your scheduled arrival. For special event weekends, please check our terms.',
  },
  {
    question: 'Is breakfast included in the room price?',
    answer:
      'Yes, a complimentary breakfast is included for all B&B guests.',
  },
  {
    question: 'Do you offer parking on site?',
    answer:
      'Yes, we have secure on-site parking available for all guests at no extra charge.',
  },
  {
    question: 'Is Lion Hill Place family-friendly?',
    answer:
      'Absolutely! We welcome families and offer spacious grounds, kids’ areas, and family-sized rooms.',
  },
  {
    question: 'Do you host events like weddings?',
    answer:
      'Yes, our event space is ideal for weddings, birthdays, and corporate retreats. Reach out to us via the contact page to learn more.',
  },
];

const FAQ = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 pt-[150px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      {faqList.map((item, index) => (
        <FAQAccordion key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;

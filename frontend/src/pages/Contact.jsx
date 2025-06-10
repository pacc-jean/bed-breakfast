import React from 'react';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 pt-[150px]">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
      <p className="text-xs md:text-sm mb-6 text-center text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
        Have a question, booking inquiry, or just want to say hi? Fill out the form below, and we’ll get back to you.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;

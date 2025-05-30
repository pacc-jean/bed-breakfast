import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd handle actual submission here (email, DB, API)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <p className="text-green-600">Thank you for reaching out. We’ll be in touch soon!</p>
      )}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border p-2 rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border p-2 rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full border p-2 rounded"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

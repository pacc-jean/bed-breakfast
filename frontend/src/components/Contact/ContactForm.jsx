import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        'service_jgd8a8z',    // <-- EmailJS service ID
        'template_lf064md',   // <-- EmailJS template ID
        formRef.current,
        'z4z6mhN6x0b6x_VSM'     // <-- EmailJS public key
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6 max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      
      <p className="text-sm text-gray-600 mb-2">
        Fields marked with <span className="text-red-600">*</span> are required.
      </p>

      {/* Name */}
      <label className="block text-sm font-medium mb-1">
        Your Name <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="user_name"
        required
        placeholder="Your full name"
        className="w-full border p-2 rounded"
      />

      {/* Email */}
      <label className="block text-sm font-medium mb-1">
        Email Address <span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        name="user_email"
        required
        placeholder="you@example.com"
        className="w-full border p-2 rounded"
      />

      {/* Message */}
      <label className="block text-sm font-medium mb-1">
        Message <span className="text-red-600">*</span>
      </label>
      <textarea
        name="user_message"
        required
        placeholder="What would you like to tell us?"
        className="w-full border p-2 rounded slick-scroll resize-none"
        style={{ minHeight: '120px', maxHeight: '300px', overflowY: 'auto' }}
      />

      {/* Title */}
      <input
        type="hidden"
        name="title"
        value="General Inquiry"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Send Message
      </button>

      {/* Feedback */}
      {status === 'success' && (
        <p className="text-green-600 mt-2">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
};

export default ContactForm;

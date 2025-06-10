import React, { useState } from 'react';
import BookingForm from '../components/Bookings/BookingForm';
import BookingSummary from '../components/Bookings/BookingSummary';

const bookingOptions = ['B&B Stay', 'Camping Site', 'Event Space'];

const BookingsPage = () => {
  const [bookingType, setBookingType] = useState('');
  const [formData, setFormData] = useState(null);
  const [step, setStep] = useState('form'); // Always either form or summary now

  const handleTypeSelect = (type) => {
    setBookingType(type);
    setFormData(null);
    setStep('form');
  };

  const handleFormSubmit = (data) => {
    setFormData({ ...data, bookingType });
    setStep('summary');
  };

  const handleEdit = () => setStep('form');

  const handleCancel = () => {
    setBookingType('');
    setFormData(null);
    setStep('form');
  };

  return (
    <div className="min-h-screen pt-[150px] px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Book Your Stay</h1>
      <p className="text-xs md:text-sm text-center text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        Choose from our B&B rooms, camping site, or event space.
      </p>

      {/* Booking type buttons ALWAYS visible */}
      <div className="flex flex-wrap justify-center gap-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
        {bookingOptions.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeSelect(type)}
            className={`px-4 py-2 rounded-full transition ${
              bookingType === type
                ? 'bg-black text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-black'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {step === 'form' && bookingType && (
        <BookingForm bookingType={bookingType} onSubmit={handleFormSubmit} />
      )}

      {step === 'summary' && formData && (
        <BookingSummary
          booking={formData}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default BookingsPage;

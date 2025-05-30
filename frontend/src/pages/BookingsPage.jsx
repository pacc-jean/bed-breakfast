import React, { useState } from 'react';
import BookingTypeSelector from '../components/Bookings/BookingTypeSelector';
import BookingForm from '../components/Bookings/BookingForm';

const BookingsPage = () => {
  const [bookingType, setBookingType] = useState('B&B Room');

  return (
    <div className="min-h-screen pt-[150px] px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Book Your Stay</h1>
      <p className="text-center text-gray-600 mb-8">
        Choose from our B&B rooms, camping site, or event space.
      </p>

      <BookingTypeSelector selected={bookingType} onChange={setBookingType} />
      <BookingForm bookingType={bookingType} />
    </div>
  );
};

export default BookingsPage;

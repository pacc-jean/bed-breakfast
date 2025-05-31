import React, { useState } from 'react';

const BookingSummary = ({ booking, onEdit, onCancel }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    // Here you'd actually submit to backend
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="text-center p-6 bg-green-50 border border-green-200 rounded">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Thank you, {booking.name}!</h2>
        <p className="text-gray-700">Your booking for <strong>{booking.bookingType}</strong> has been received. <br/> A receipt of your booking has been sent to your email.<br/> 
            <a href="/contact" className="text-black underline hover:text-red-600 transition">
            Contact us
            </a> for any inquiries.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 border border-gray-300 rounded bg-white shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-center">Review Your Booking</h3>
      <div className="space-y-2 text-sm text-gray-800">
        <p><strong>Booking Type:</strong> {booking.bookingType}</p>
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>

        {booking.bookingType === 'B&B Stay' || booking.bookingType === 'Camping Site' ? (
          <>
            <p><strong>{booking.bookingType === 'B&B Stay' ? 'Check-in' : 'From'}:</strong> {booking.checkIn || booking.fromDate}</p>
            <p><strong>{booking.bookingType === 'B&B Stay' ? 'Check-out' : 'To'}:</strong> {booking.checkOut || booking.toDate}</p>
            <p><strong>Adults:</strong> {booking.adults}</p>
            <p><strong>Children:</strong> {booking.children}</p>
          </>
        ) : (
          <>
            <p><strong>Event Date:</strong> {booking.eventDate}</p>
            <p><strong>Start Time:</strong> {booking.startTime}</p>
            <p><strong>End Time:</strong> {booking.endTime}</p>
            <p><strong>Event Type:</strong> {booking.eventType}</p>
          </>
        )}

        {booking.notes && <p><strong>Notes:</strong> {booking.notes}</p>}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
        <button
          onClick={onCancel}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={onEdit}
          className="w-full sm:w-auto px-4 py-2 border border-blue-400 text-blue-700 rounded hover:bg-blue-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;

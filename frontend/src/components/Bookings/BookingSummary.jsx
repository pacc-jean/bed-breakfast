import React, { useState } from 'react';
import { CheckCircleIcon, CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

const BookingSummary = ({ booking, onEdit, onCancel }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/bookings/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });

    const data = await response.json();

    if (response.ok) {
      setConfirmed(true);
    } else {
      console.error('Booking failed:', data.error);
      alert('Booking confirmation failed. Please try again.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Something went wrong. Please try again later.');
  }
};

  if (confirmed) {
    return (
      <div className="text-center p-8 bg-green-50 border border-green-300 rounded-lg shadow-lg animate-fade-in">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600 mb-3" />
        <h2 className="text-2xl font-extrabold text-green-700 mb-2">
          Thank you, {booking.name}!
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your <strong>{booking.bookingType}</strong> booking has been confirmed.
          <br />
           A confirmation with your booking receipt has been sent to your email.
          <br />
          <a
            href="/contact"
            className="text-black underline hover:text-red-600 transition"
          >
            Contact us
          </a>{' '}
          if you need anything else.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 space-y-6 animate-fade-in">
      <h3 className="text-2xl font-bold text-center text-gray-800">
        Booking Summary
      </h3>

      <div className="space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Name:</strong> {booking.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Email:</strong> {booking.email}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Phone:</strong> {booking.phone}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Booking Type:</strong> {booking.bookingType}
          </span>
        </div>

        {booking.bookingType === 'B&B Stay' || booking.bookingType === 'Camping Site' ? (
          <>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>
                  {booking.bookingType === 'B&B Stay' ? 'Check-in' : 'From'}:
                </strong>{' '}
                {booking.checkIn || booking.fromDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>
                  {booking.bookingType === 'B&B Stay' ? 'Check-out' : 'To'}:
                </strong>{' '}
                {booking.checkOut || booking.toDate}
              </span>
            </div>
            <p>
              <strong>Adults:</strong> {booking.adults}
            </p>
            <p>
              <strong>Children:</strong> {booking.children}
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>Event Date:</strong> {booking.eventDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>Start Time:</strong> {booking.startTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>End Time:</strong> {booking.endTime}
              </span>
            </div>
            <p>
              <strong>Event Type:</strong> {booking.eventType}
            </p>
          </>
        )}

        {booking.notes && (
          <p>
            <strong>Notes:</strong> {booking.notes}
          </p>
        )}
      </div>

      <div className="text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <p className="mb-2">
          Just so you know — the person listed in this form will be our go-to contact for all things related to this booking. Make sure it’s someone who’s ready to receive updates or give us a ring if needed.
        </p>
        <p>
          We treat your info with care and never share it — your privacy is part of our promise.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={onCancel}
          className="w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={onEdit}
          className="w-full sm:w-auto px-6 py-2 border border-blue-400 text-blue-600 rounded hover:bg-blue-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;

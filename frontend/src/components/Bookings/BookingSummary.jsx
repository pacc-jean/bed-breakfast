import React, { useState } from 'react';
import {
  CheckCircleIcon,
  CalendarIcon,
  UserIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const BookingSummary = ({ booking, onEdit, onCancel }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ LOCAL COPY of booking to safely modify
  const [localBooking, setLocalBooking] = useState(booking);

  const handleConfirm = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/confirm`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(localBooking),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // ✅ Update booking with reference from backend
        setLocalBooking(prev => ({ ...prev, reference: data.reference }));
        setConfirmed(true);
      } else {
        console.error('Booking failed:', data.error);
        alert('Booking confirmation failed. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Something went wrong. Please try again later.');
      setIsSubmitting(false);
    }
  };

  if (confirmed) {
    return (
      <div className="text-center p-8 bg-green-50 border border-green-300 rounded-lg shadow-lg animate-fade-in">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600 mb-3" />
        <h2
          className="text-xl md:text-2xl font-extrabold text-green-700 mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Thank you, {localBooking.name}!
        </h2>
        <p
          className="text-gray-700 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Your <strong>{localBooking.bookingType}</strong> booking has been confirmed.
          <br />
          A confirmation with your booking receipt has been sent to your email.
          <br />
          <strong>Reference:</strong> {localBooking.reference}
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
      <h3
        className="text-xl md:text-2xl font-bold text-center text-gray-800"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Booking Summary
      </h3>

      <div
        className="space-y-3 text-gray-700"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Name:</strong> {localBooking.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Email:</strong> {localBooking.email}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Phone:</strong> {localBooking.phone}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <span>
            <strong>Booking Type:</strong> {localBooking.bookingType}
          </span>
        </div>

        {localBooking.bookingType === 'B&B Stay' || localBooking.bookingType === 'Camping Site' ? (
          <>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>
                  {localBooking.bookingType === 'B&B Stay' ? 'Check-in' : 'From'}:
                </strong>{' '}
                {localBooking.checkIn || localBooking.fromDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>
                  {localBooking.bookingType === 'B&B Stay' ? 'Check-out' : 'To'}:
                </strong>{' '}
                {localBooking.checkOut || localBooking.toDate}
              </span>
            </div>
            <p>
              <strong>Adults:</strong> {localBooking.adults}
            </p>
            <p>
              <strong>Children:</strong> {localBooking.children}
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>Event Date:</strong> {localBooking.eventDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>Start Time:</strong> {localBooking.startTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-gray-500" />
              <span>
                <strong>End Time:</strong> {localBooking.endTime}
              </span>
            </div>
            <p>
              <strong>Event Type:</strong> {localBooking.eventType}
            </p>
          </>
        )}

        {localBooking.notes && (
          <p>
            <strong>Notes:</strong> {localBooking.notes}
          </p>
        )}
      </div>

      <div
        className="text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-md p-4"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <p className="mb-2">
          Just so you know — the person listed in this form will be our go-to
          contact for all things related to this booking. Make sure it’s
          someone who’s ready to receive updates or give us a ring if needed.
        </p>
        <p>
          We treat your info with care and never share it — your privacy is part
          of our promise.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between gap-4"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
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
          disabled={isSubmitting}
          className={`w-full sm:w-auto px-6 py-2 rounded transition ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-black hover:bg-gray-900'
          } text-white`}
        >
          {isSubmitting ? 'Processing...' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;

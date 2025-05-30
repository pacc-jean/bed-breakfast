import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (
      !/^\+?[\d\s\-()]{7,}$/i.test(formData.phone)
    ) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (
      formData.checkIn && formData.checkOut <= formData.checkIn
    ) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit logic here (API call or state update)
    alert('Booking submitted! Thanks for choosing Lion Hill.');
  };

  const nights =
    formData.checkIn && formData.checkOut
      ? Math.floor(
          (new Date(formData.checkOut) - new Date(formData.checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-4">
      {/* Asterisk Explainer */}
      <p className="text-sm text-gray-600 mb-4">
        Fields marked with <span className="text-red-600">*</span> are
        required.
      </p>

      {/* Name */}
      <label className="block text-sm font-medium mb-1">
        Your Name <span className="text-red-600">*</span>
      </label>
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.name ? 'border-red-600' : 'border-gray-300'
        }`}
      />
      {errors.name && (
        <p className="text-red-600 text-xs mt-1">{errors.name}</p>
      )}

      {/* Email */}
      <label className="block text-sm font-medium mb-1">
        Email <span className="text-red-600">*</span>
      </label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.email ? 'border-red-600' : 'border-gray-300'
        }`}
      />
      {errors.email && (
        <p className="text-red-600 text-xs mt-1">{errors.email}</p>
      )}

      {/* Phone */}
      <label className="block text-sm font-medium mb-1">
        Phone Number <span className="text-red-600">*</span>
      </label>
      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.phone ? 'border-red-600' : 'border-gray-300'
        }`}
      />
      {errors.phone && (
        <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
      )}

      {/* Dates */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Check-in <span className="text-red-600">*</span>
          </label>
          <input
            name="checkIn"
            type="date"
            value={formData.checkIn}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              errors.checkIn ? 'border-red-600' : 'border-gray-300'
            }`}
          />
          {errors.checkIn && (
            <p className="text-red-600 text-xs mt-1">{errors.checkIn}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Check-out <span className="text-red-600">*</span>
          </label>
          <input
            name="checkOut"
            type="date"
            min={formData.checkIn || ''}
            value={formData.checkOut}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              errors.checkOut ? 'border-red-600' : 'border-gray-300'
            }`}
          />
          {errors.checkOut && (
            <p className="text-red-600 text-xs mt-1">{errors.checkOut}</p>
          )}
        </div>
      </div>

      {/* Nights info */}
      {nights > 0 && (
        <div className="text-sm text-gray-700">
          You’ve selected a {nights}-night stay.
        </div>
      )}

      {/* Guests */}
      <label className="block text-sm font-medium mb-1">Number of Guests</label>
      <input
        name="guests"
        type="number"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        className="w-full border p-2 rounded"
        placeholder="Number of Guests"
      />

      {/* Notes */}
      <label className="block text-sm font-medium mb-1">Additional Notes</label>
      <textarea
        name="notes"
        placeholder="Additional Notes We Should Know"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;

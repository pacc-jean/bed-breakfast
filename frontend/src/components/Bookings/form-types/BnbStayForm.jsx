import React, { useState } from 'react';

const BnbStayForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0,
    notes: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const totalGuests = Number(formData.adults) + Number(formData.children);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number';

    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    else if (formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    if (totalGuests === 0) {
      newErrors.guests = 'At least one guest must be included';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-gray-600 mb-4">
        Fields marked with <span className="text-red-600">*</span> are required.
      </p>

      {/* Name */}
      <label className="block text-sm font-medium">Name
        <span className="text-red-600">*</span>
      </label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.name ? 'border-red-600' : ''}`}
        placeholder="Your Full Name"
      />
      {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}

      {/* Email */}
      <label className="block text-sm font-medium">Email
        <span className="text-red-600">*</span>
      </label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.email ? 'border-red-600' : ''}`}
        placeholder="Your Email Address"
      />
      {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}

      {/* Phone */}
      <label className="block text-sm font-medium">Phone Number
        <span className="text-red-600">*</span>
      </label>
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.phone ? 'border-red-600' : ''}`}
        placeholder="Your Phone Number"
      />
      {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}

      {/* Check-in & Check-out */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Check-in
            <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.checkIn ? 'border-red-600' : ''}`}
          />
          {errors.checkIn && <p className="text-red-600 text-xs">{errors.checkIn}</p>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Check-out
            <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || ''}
            className={`w-full border p-2 rounded ${errors.checkOut ? 'border-red-600' : ''}`}
          />
          {errors.checkOut && <p className="text-red-600 text-xs">{errors.checkOut}</p>}
        </div>
      </div>

      {/* Guests */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Adults</label>
          <input
            type="number"
            name="adults"
            min="0"
            value={formData.adults}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Children</label>
          <input
            type="number"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
      {errors.guests && <p className="text-red-600 text-xs">{errors.guests}</p>}

      {/* Notes */}
      <label className="block text-sm font-medium">Additional Notes</label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Anything we should know?"
        className="w-full border p-2 rounded slick-scroll resize-none"
        style={{ minHeight: '120px', maxHeight: '300px', overflowY: 'auto' }}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Review Booking
      </button>
    </form>
  );
};

export default BnbStayForm;

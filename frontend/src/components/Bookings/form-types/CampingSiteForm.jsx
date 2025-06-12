import React, { useState } from 'react';

const CampingSiteForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    fromDate: '',
    toDate: '',
    adults: 0,
    children: 0,
    notes: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const totalGuests = Number(formData.adults) + Number(formData.children);

  const nights =
    formData.fromDate && formData.toDate
      ? Math.max(
          (new Date(formData.toDate) - new Date(formData.fromDate)) / (1000 * 60 * 60 * 24),
          0
        )
      : 0;

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to midnight

    const startDate = formData.fromDate ? new Date(formData.fromDate) : null;
    const endDate = formData.toDate ? new Date(formData.toDate) : null;

    if (!formData.name.trim()) newErrors.name = 'Name is required !';
    if (!formData.email.trim()) newErrors.email = 'Email is required !';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format !';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required !';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number format !';

    if (!startDate) newErrors.fromDate = 'Start date is required !';
    else if (startDate < today) newErrors.fromDate = 'Start date cannot be in the past !';

    if (!endDate) newErrors.toDate = 'End date is required !';
    else if (endDate < today) newErrors.toDate = 'End date cannot be in the past !';
    else if (startDate && endDate <= startDate) {
      newErrors.toDate = 'End date must be after start date !';
    }

    if (totalGuests === 0) {
      newErrors.guests = 'At least one guest must be included !';
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

  const todayString = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs italic text-gray-600 mb-4 tracking-wide drop-shadow" style={{ fontFamily: 'Inter, sans-serif' }}>
        Fields marked with <span className="text-red-600">*</span> are required.
      </p>

      {/* Name */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Name <span className="text-red-600">*</span>
      </label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.name ? 'border-red-600' : ''}`}
        placeholder="Your Full Name"
        style={{ fontFamily: 'Inter, sans-serif' }}
      />
      {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}

      {/* Email */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Email <span className="text-red-600">*</span>
      </label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.email ? 'border-red-600' : ''}`}
        placeholder="Your Email Address"
        style={{ fontFamily: 'Inter, sans-serif' }}
      />
      {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}

      {/* Phone */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Phone Number <span className="text-red-600">*</span>
      </label>
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.phone ? 'border-red-600' : ''}`}
        placeholder="Your Phone Number"
        style={{ fontFamily: 'Inter, sans-serif' }}
      />
      {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}

      {/* Dates */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            From Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            min={todayString}
            className={`w-full border p-2 rounded ${errors.fromDate ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          {errors.fromDate && <p className="text-red-600 text-xs">{errors.fromDate}</p>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            To Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            min={formData.fromDate || todayString}
            className={`w-full border p-2 rounded ${errors.toDate ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          {errors.toDate && <p className="text-red-600 text-xs">{errors.toDate}</p>}
        </div>
      </div>

      {/* Nights info */}
      {nights > 0 && (
        <div className="text-sm text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          You've selected a {nights}-night camping adventure.
        </div>
      )}

      {/* Guests */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            Adults
          </label>
          <input
            type="number"
            name="adults"
            min="0"
            value={formData.adults}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.guests ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            Children
          </label>
          <input
            type="number"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.guests ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>
      </div>
      {errors.guests && <p className="text-red-600 text-xs">{errors.guests}</p>}

      {/* Notes */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Additional Notes
      </label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Anything we should know?"
        className="w-full border p-2 rounded slick-scroll resize-none"
        style={{
          minHeight: '120px',
          maxHeight: '300px',
          overflowY: 'auto',
          fontFamily: 'Inter, sans-serif',
        }}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Review Booking
      </button>
    </form>
  );
};

export default CampingSiteForm;

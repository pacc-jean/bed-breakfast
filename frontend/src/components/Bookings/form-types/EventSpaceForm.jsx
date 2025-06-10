import React, { useState, useEffect } from 'react';

const EventSpaceForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    eventType: '',
    notes: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (formData.startTime && formData.endTime) {
      const [startHour, startMin] = formData.startTime.split(':').map(Number);
      const [endHour, endMin] = formData.endTime.split(':').map(Number);

      const start = new Date(0, 0, 0, startHour, startMin);
      const end = new Date(0, 0, 0, endHour, endMin);

      if (end <= start) end.setDate(end.getDate() + 1);

      const diff = (end - start) / (1000 * 60 * 60);
      setHours(diff > 0 ? diff : 0);
    } else {
      setHours(0);
    }
  }, [formData.startTime, formData.endTime]);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const isToday = formData.eventDate === todayStr;

    if (!formData.name.trim()) newErrors.name = 'Name is required !';
    if (!formData.email.trim()) newErrors.email = 'Email is required !';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format !';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required !';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number format !';

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required !';
    } else {
      const selectedDate = new Date(formData.eventDate);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = 'Event date cannot be in the past !';
      }
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required !';
    } else if (isToday) {
      const [startHour, startMin] = formData.startTime.split(':').map(Number);
      const start = new Date();
      start.setHours(startHour, startMin + 5, 0, 0);
      if (start < now) {
        newErrors.startTime = 'Start time must be at least 5 minutes from now!';
      }
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required !';
    } else if (formData.startTime && formData.endTime <= formData.startTime) {
      newErrors.endTime = 'End time must be after start time !';
    } else {
      const [startHour, startMin] = formData.startTime.split(':').map(Number);
      const [endHour, endMin] = formData.endTime.split(':').map(Number);

      const start = new Date(0, 0, 0, startHour, startMin);
      const end = new Date(0, 0, 0, endHour, endMin);
      if (end <= start) end.setDate(end.getDate() + 1);

      const diff = (end - start) / (1000 * 60 * 60);
      if (diff <= 0) {
        newErrors.endTime = 'Event duration must be greater than zero!';
      }
    }

    if (!formData.eventType) newErrors.eventType = 'Please select the event type !';

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

      {/* Phone Number */}
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

      {/* Event Date */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Event Date <span className="text-red-600">*</span>
      </label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        min={todayString}
        className={`w-full border p-2 rounded ${errors.eventDate ? 'border-red-600' : ''}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      />
      {errors.eventDate && <p className="text-red-600 text-xs">{errors.eventDate}</p>}

      {/* Time Selection */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Time <span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.startTime ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          {errors.startTime && <p className="text-red-600 text-xs">{errors.startTime}</p>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            End Time <span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.endTime ? 'border-red-600' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          {errors.endTime && <p className="text-red-600 text-xs">{errors.endTime}</p>}
        </div>
      </div>

      {hours > 0 && (
        <div className="text-sm text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          You’ve selected a {hours.toFixed(1)}-hour event duration.
        </div>
      )}

      {/* Event Type */}
      <label className="block text-sm font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
        Event Type <span className="text-red-600">*</span>
      </label>
      <select
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.eventType ? 'border-red-600' : ''}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <option value="">-- Select Type --</option>
        <option value="Intimate">Intimate Event</option>
        <option value="Group">Group Event</option>
      </select>
      {errors.eventType && <p className="text-red-600 text-xs">{errors.eventType}</p>}

      {/* Additional Notes */}
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

export default EventSpaceForm;

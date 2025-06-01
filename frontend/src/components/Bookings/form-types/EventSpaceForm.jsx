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

      const diff = (end - start) / (1000 * 60 * 60); // hours

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
      start.setHours(startHour, startMin, 0, 0);
      if (start < now) {
        newErrors.startTime = 'Start time cannot be in the past !';
      }
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required !';
    } else if (formData.startTime && formData.endTime <= formData.startTime) {
      newErrors.endTime = 'End time must be after start time !';
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
      <p className="text-sm text-gray-600 mb-4">
        Fields marked with <span className="text-red-600">*</span> are required.
      </p>

      {/* Name */}
      <label className="block text-sm font-medium">
        Name <span className="text-red-600">*</span>
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
      <label className="block text-sm font-medium">
        Email <span className="text-red-600">*</span>
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
      <label className="block text-sm font-medium">
        Phone Number <span className="text-red-600">*</span>
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

      {/* Event Date */}
      <label className="block text-sm font-medium">
        Event Date <span className="text-red-600">*</span>
      </label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        min={todayString}
        className={`w-full border p-2 rounded ${errors.eventDate ? 'border-red-600' : ''}`}
      />
      {errors.eventDate && <p className="text-red-600 text-xs">{errors.eventDate}</p>}

      {/* Start and End Times */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            Start Time <span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.startTime ? 'border-red-600' : ''}`}
          />
          {errors.startTime && <p className="text-red-600 text-xs">{errors.startTime}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">
            End Time <span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.endTime ? 'border-red-600' : ''}`}
          />
          {errors.endTime && <p className="text-red-600 text-xs">{errors.endTime}</p>}
        </div>
      </div>

      {/* Hours info */}
      {hours > 0 && (
        <div className="text-sm text-blue-600">
          You’ve selected a {hours.toFixed(1)}-hour event.
        </div>
      )}

      {/* Event Type */}
      <label className="block text-sm font-medium">
        Event Type <span className="text-red-600">*</span>
      </label>
      <select
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${errors.eventType ? 'border-red-600' : ''}`}
      >
        <option value="">-- Select Type --</option>
        <option value="Intimate">Intimate Event</option>
        <option value="Group">Group Event</option>
      </select>
      {errors.eventType && <p className="text-red-600 text-xs">{errors.eventType}</p>}

      {/* Notes */}
      <label className="block text-sm font-medium">Additional Notes</label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Let us know any special requests or details"
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

export default EventSpaceForm;

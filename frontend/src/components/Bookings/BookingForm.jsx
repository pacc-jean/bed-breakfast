import React from 'react';
import BnbStayForm from './form-types/BnbStayForm';
import CampingSiteForm from './form-types/CampingSiteForm';
import EventSpaceForm from './form-types/EventSpaceForm';

const BookingForm = ({ bookingType, onSubmit }) => {
  const renderForm = () => {
    switch (bookingType) {
      case 'B&B Stay':
        return <BnbStayForm onSubmit={onSubmit} />;
      case 'Camping Site':
        return <CampingSiteForm onSubmit={onSubmit} />;
      case 'Event Space':
        return <EventSpaceForm onSubmit={onSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>{bookingType} Booking</h2>
      {renderForm()}

    </div>
  );
};

export default BookingForm;

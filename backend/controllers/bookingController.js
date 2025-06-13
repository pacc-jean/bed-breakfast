import { sendBookingEmails } from '../services/emailService.js';
import { generateBookingRef } from '../utils/generateBookingRef.js';

export const confirmBooking = async (req, res) => {
  const booking = {
    ...req.body,
    reference: generateBookingRef(),
  };

  try {
    console.log('New booking received:', booking);

    await sendBookingEmails(booking);

    res.status(200).json({ message: 'Booking confirmed and emails sent!', reference: booking.reference });
  } catch (err) {
    console.error('Booking confirmation failed:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

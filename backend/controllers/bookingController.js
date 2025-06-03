import { sendBookingEmails } from '../services/emailService.js';

export const confirmBooking = async (req, res) => {
  const booking = req.body;

  try {
    console.log('New booking received:', booking);

    await sendBookingEmails(booking);

    res.status(200).json({ message: 'Booking confirmed successfully and emails sent!' });
  } catch (err) {
    console.error('Booking confirmation failed:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

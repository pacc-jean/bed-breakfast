import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const HOST_EMAIL = process.env.HOST_EMAIL;
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/g8KEbmReoyjcWASTA';

const socialsHTML = `
  <p style="margin-top: 20px;">
    <a href="https://www.instagram.com/lion_hill_place/" style="margin-right: 10px; text-decoration: none;">Instagram</a>
    <a href="https://wa.me/254722774029" style="text-decoration: none;">WhatsApp</a>
  </p>
`;

const generateEmailHTML = (booking, forGuest = true) => {
  const isStay = booking.bookingType === 'B&B Stay' || booking.bookingType === 'Camping Site';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
      <img src="https://lion-hill-place-frontend.onrender.com/banner-logo.2.1.png" alt="Lion Hill Logo" style="max-width: 200px; margin-bottom: 20px;" />
      <h2 style="color: #333;">${forGuest ? `Thanks for your booking, ${booking.name}!` : 'New Booking Received'}</h2>
      <p>Booking Reference: <strong>${booking.reference}</strong></p>
      ${isStay ? `
        <p>${forGuest ? `We've locked in your <strong>${booking.bookingType}</strong> stay.` : ''}</p>
        <ul>
          <li><strong>Check-In:</strong> ${booking.checkIn || booking.fromDate || 'N/A'}</li>
          <li><strong>Check-Out:</strong> ${booking.checkOut || booking.toDate || 'N/A'}</li>
          <li><strong>Adults:</strong> ${booking.adults || 'N/A'}</li>
          <li><strong>Children:</strong> ${booking.children || 'N/A'}</li>
          ${booking.notes ? `<li><strong>Notes:</strong> ${booking.notes}</li>` : ''}
        </ul>
      ` : `
        <p>${forGuest ? `We've secured your event reservation.` : ''}</p>
        <ul>
          <li><strong>Event Date:</strong> ${booking.eventDate || 'N/A'}</li>
          <li><strong>Start Time:</strong> ${booking.startTime || 'N/A'}</li>
          <li><strong>End Time:</strong> ${booking.endTime || 'N/A'}</li>
          <li><strong>Event Type:</strong> ${booking.eventType || 'N/A'}</li>
          ${booking.notes ? `<li><strong>Notes:</strong> ${booking.notes}</li>` : ''}
        </ul>
      `}
      <p><a href="${GOOGLE_MAPS_URL}" target="_blank" style="color: #007BFF;">📍 View Location on Google Maps</a></p>
      ${forGuest ? `<p style="margin-top: 20px;">We can't wait to host you!</p>` : ''}
      ${socialsHTML}
      <hr style="margin-top: 30px;" />
      <p style="font-size: 12px; color: #999;">Lion Hill Place B&B - All rights reserved.</p>
    </div>
  `;
};

export const sendBookingEmails = async (booking) => {
  const guestMailOptions = {
    from: `"Lion Hill Place" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `Booking Confirmation - ${booking.bookingType}`,
    html: generateEmailHTML(booking, true),
  };

  const hostMailOptions = {
    from: `"Website Booking" <${process.env.SMTP_USER}>`,
    to: HOST_EMAIL,
    subject: `New Booking: ${booking.name} (${booking.bookingType})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Booking Type:</strong> ${booking.bookingType}</p>
        ${generateEmailHTML(booking, false)}
      </div>
    `,
  };

  await transporter.sendMail(guestMailOptions);
  await transporter.sendMail(hostMailOptions);
};

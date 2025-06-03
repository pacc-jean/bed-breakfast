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

const generateEmailHTML = (booking, forGuest = true) => {
  const isStay = booking.bookingType === 'B&B Stay' || booking.bookingType === 'Camping Site';

  if (isStay) {
    return `
      <h2>${forGuest ? `Thanks for your booking, ${booking.name}!` : 'New booking received'}</h2>
      <p>${forGuest ? `We've locked in your <strong>${booking.bookingType}</strong> stay.` : ''}</p>
      <ul>
        <li><strong>Check-In:</strong> ${booking.checkIn || booking.fromDate || 'N/A'}</li>
        <li><strong>Check-Out:</strong> ${booking.checkOut || booking.toDate || 'N/A'}</li>
        <li><strong>Adults:</strong> ${booking.adults || 'N/A'}</li>
        <li><strong>Children:</strong> ${booking.children || 'N/A'}</li>
        ${booking.notes ? `<li><strong>Notes:</strong> ${booking.notes}</li>` : ''}
      </ul>
      ${forGuest ? `<p>See you soon!</p>` : ''}
    `;
  } else {
    return `
      <h2>${forGuest ? `Thanks for booking the event space, ${booking.name}!` : 'New event booking received'}</h2>
      <ul>
        <li><strong>Event Date:</strong> ${booking.eventDate || 'N/A'}</li>
        <li><strong>Start Time:</strong> ${booking.startTime || 'N/A'}</li>
        <li><strong>End Time:</strong> ${booking.endTime || 'N/A'}</li>
        <li><strong>Event Type:</strong> ${booking.eventType || 'N/A'}</li>
        ${booking.notes ? `<li><strong>Notes:</strong> ${booking.notes}</li>` : ''}
      </ul>
      ${forGuest ? `<p>We’ll make sure everything’s ready for you.</p>` : ''}
    `;
  }
};

export const sendBookingEmails = async (booking) => {
  const guestMailOptions = {
    from: `"B&B Bookings" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `Booking Confirmation - ${booking.bookingType}`,
    html: generateEmailHTML(booking, true),
  };

  const hostMailOptions = {
    from: `"Booking Bot" <${process.env.SMTP_USER}>`,
    to: HOST_EMAIL,
    subject: `New Booking: ${booking.name} (${booking.bookingType})`,
    html: `
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Booking Type:</strong> ${booking.bookingType}</p>
      ${generateEmailHTML(booking, false)}
    `,
  };

  await transporter.sendMail(guestMailOptions);
  await transporter.sendMail(hostMailOptions);
};

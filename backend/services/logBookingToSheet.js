import { google } from 'googleapis';

// Load credentials from env variable
const keyFileBuffer = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY, 'base64');
const credentials = JSON.parse(keyFileBuffer.toString());

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = '1fGkIAn_mK2AnnFShYhOnbEL5WfqTkuXyZoFhJIMcb9M';
const SHEET_NAME = 'Sheet1';

export const logBookingToSheet = async (booking) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const row = [
    booking.name || '',
    booking.email || '',
    booking.phone || '',
    booking.bookingType || '',
    booking.checkIn ? `"${booking.checkIn}"` : '',
    booking.checkOut ? `"${booking.checkOut}"` : '',
    booking.fromDate ? `"${booking.fromDate}"` : '',
    booking.toDate ? `"${booking.toDate}"` : '',
    booking.eventDate ? `"${booking.eventDate}"` : '',
    booking.startTime || '',
    booking.endTime || '',
    booking.eventType || '',
    booking.adults || '',
    booking.children || '',
    booking.notes || '',
    booking.reference || '',
    new Date().toISOString(), // Timestamp
];


  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!A2`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  });
};

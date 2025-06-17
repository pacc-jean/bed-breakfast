import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Resolve the key file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KEYFILEPATH = path.join(__dirname, '../googleServiceAccountKey.json');

// Load client secrets
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = '1fGkIAn_mK2AnnFShYhOnbEL5WfqTkuXyZoFhJIMcb9M';
const SHEET_NAME = 'Lion-Hill-PLace//Bookings-Log';

export const logBookingToSheet = async (booking) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const row = [
    booking.reference,
    booking.name,
    booking.email,
    booking.phone,
    booking.bookingType,
    booking.checkIn || booking.fromDate || '',
    booking.checkOut || booking.toDate || '',
    booking.adults || '',
    booking.children || '',
    booking.eventDate || '',
    booking.startTime || '',
    booking.endTime || '',
    booking.eventType || '',
    booking.notes || '',
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

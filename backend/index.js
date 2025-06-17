import express from 'express';
import cors from 'cors';
import bookingRoutes from './routes/bookingRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow only frontend origin in production
const allowedOrigin = 'https://lion-hill-place-frontend.onrender.com';

app.use(cors({
  origin: allowedOrigin,
}));

app.use(express.json());
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Bed & Breakfast API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import eventRoutes from "./routes/eventRoutes.js";
import leaderboardRoutes from './routes/leaderboardRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set
const MODE = process.env.MODE || 'development'; // Default to 'development' if MODE is not set

// app.use(cors({
//   origin: process.env.CLIENT_ORIGIN, // Frontend URL
//   credentials: true               // ✅ Allow cookies to be sent with requests
// }));

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Import Routes
app.use('/api/events', eventRoutes);
app.use('/api/leaderboard', leaderboardRoutes); 
app.use('/api/quiz', quizRoutes); 
app.use('/api/auth', authRoutes);

app.use(errorHandler); // Error handler middleware

// Catch-all route for 404 errors
app.get(/.*/, (req, res) => {
  res.status(404).send('Page does not exist');
});

// Server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running in ${MODE} mode on ${PORT}`);
  });
});

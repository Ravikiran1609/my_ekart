import adminRoutes from './routes/admin.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // assuming you have Mongo connection setup

// Routes
import authRoutes from './routes/auth.js';
import otpRoutes from './routes/otp.js';
import googleRoutes from './routes/google.js'; // ✅ ADD THIS

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', googleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/google', googleRoutes); // ✅ ADD THIS
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

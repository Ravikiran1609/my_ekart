import express from 'express';
import User from '../models/User.js';
import sendOtp from '../utils/sendOtp.js';

const router = express.Router();

router.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await User.updateOne({ mobile }, { otp }, { upsert: true });
  await sendOtp(mobile, otp);
  res.json({ message: 'OTP sent' });
});

router.post('/verify-otp', async (req, res) => {
  const { mobile, otp } = req.body;
  const user = await User.findOne({ mobile, otp });
  if (!user) return res.status(400).json({ message: 'Invalid OTP' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  await User.updateOne({ mobile }, { $unset: { otp: 1 }, isVerified: true });
  res.json({ token });
});

export default router;


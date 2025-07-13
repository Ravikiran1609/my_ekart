import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


router.post('/google-login', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email, profilePic: picture });
      await user.save();
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.error('Google login error:', err);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
});


router.post('/login', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // You can store/retrieve the user in MongoDB here

    const userPayload = { email, name, picture };
    const jwtToken = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ token: jwtToken, user: userPayload });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

export default router;


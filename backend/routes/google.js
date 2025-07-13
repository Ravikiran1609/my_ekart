import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({ idToken: token, audience: process.env.GOOGLE_CLIENT_ID });
  const { email, name, sub } = ticket.getPayload();

  let user = await User.findOne({ googleId: sub });
  if (!user) user = await User.create({ email, name, googleId: sub });

  const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token: jwtToken });
});

export default router;


import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const admin = new Admin({ username, password: hashed });
  await admin.save();
  res.json({ msg: 'Admin registered' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin || !(await bcrypt.compare(password, admin.password)))
    return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: admin._id, admin: true }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  res.json({ token });
});

router.get('/profile', adminAuth, async (req, res) => {
  const admin = await Admin.findById(req.admin).select('-password');
  res.json(admin);
});

export default router;


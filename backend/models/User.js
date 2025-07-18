import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  mobile: { type: String, unique: true, sparse: true },
  password: String,
  isVerified: { type: Boolean, default: false },
  otp: String,
  googleId: String
});

export default mongoose.model('User', userSchema);


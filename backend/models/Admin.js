import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true } // plaintext for demo, hash in prod
});

export default mongoose.model('Admin', adminSchema);


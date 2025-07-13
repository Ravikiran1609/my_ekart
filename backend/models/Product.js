import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);


import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSaved }) => {
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '', category: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const token = localStorage.getItem('adminToken');
    await axios.post('/api/products', form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setForm({ name: '', description: '', price: '', image: '', category: '' });
    onSaved();
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-bold mb-2">Add Product</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input mb-2" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input mb-2" />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} className="input mb-2" />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="input mb-2" />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="input mb-2" />
      <button onClick={handleSubmit} className="btn">Save Product</button>
    </div>
  );
};

export default ProductForm;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('adminToken');

  const fetchProducts = async () => {
    const res = await axios.get('/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ProductForm onSaved={fetchProducts} />
      <div className="mt-6">
        <h2 className="text-lg font-semibold">All Products</h2>
        <ul>
          {products.map(p => (
            <li key={p._id} className="flex justify-between items-center border-b py-2">
              <div>
                <strong>{p.name}</strong> - ₹{p.price}
              </div>
              <button onClick={() => handleDelete(p._id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;


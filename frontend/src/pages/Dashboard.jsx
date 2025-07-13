// frontend/src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    axios.get('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(() => {
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, []);

  if (!user) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 shadow">👤 Profile<br />{user.email}</div>
        <div className="border p-4 shadow">📦 Orders<br />(Coming soon)</div>
        <div className="border p-4 shadow">❤️ Wishlist<br />(Coming soon)</div>
      </div>
    </div>
  );
};

export default Dashboard;


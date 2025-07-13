import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUser(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Welcome {user?.name}</h2>
      <p>Email: {user?.email}</p>
      {/* Add Orders, Wishlist, etc here */}
    </div>
  );
};

export default UserDashboard;


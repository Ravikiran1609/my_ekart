import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const userInfo = localStorage.getItem('userInfo');
    if (!token || !userInfo) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name} 👋</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="font-medium">📦 Orders</h3>
          <p>View your order history and track your deliveries.</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="font-medium">❤️ Wishlist</h3>
          <p>See your favorite saved products.</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="font-medium">👤 Profile</h3>
          <p>Update your details or change your password.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;


import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/admin/login', form);
      localStorage.setItem('adminToken', res.data.token);
      onLogin();
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
        <input name="username" placeholder="Username" onChange={handleChange} className="input mb-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input mb-4" />
        <button onClick={handleLogin} className="btn w-full">Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;


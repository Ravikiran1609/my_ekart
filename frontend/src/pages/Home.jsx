import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to My eKart</h1>
      <div className="space-x-4">
        <Link to="/signup" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">User Signup</Link>
        <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">User Login</Link>
        <Link to="/admin/login" className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600">Admin Login</Link>
      </div>
    </div>
  );
};

export default Home;


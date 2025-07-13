import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const userInfo = localStorage.getItem('userInfo');
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">My eKart</Link>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Hi, {user.name}</Link>
            <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


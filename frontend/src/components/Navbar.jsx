import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">ShopKart</Link>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-700 hover:text-blue-700">Cart 🛒</Link>
          <Link to="/checkout" className="text-gray-700 hover:text-blue-700">Checkout</Link>

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-700 focus:outline-none">
              Login/Signup ⯆
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-50">
              <Link to="/login/user" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">User Login</Link>
              <Link to="/login/admin" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">Admin Login</Link>
              <Link to="/login/staff" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">Staff Login</Link>
              <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

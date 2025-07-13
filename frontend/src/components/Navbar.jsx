import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">ShopKart</Link>

        <div className="flex items-center gap-4 relative">
          <Link to="/cart" className="text-gray-700 hover:text-blue-700">Cart 🛒</Link>
          <Link to="/checkout" className="text-gray-700 hover:text-blue-700">Checkout</Link>

          {/* Login/Signup Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              Login/Signup ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
                <Link to="/login/user" className="block px-4 py-2 hover:bg-gray-100 text-sm">User Login</Link>
                <Link to="/login/admin" className="block px-4 py-2 hover:bg-gray-100 text-sm">Admin Login</Link>
                <Link to="/login/staff" className="block px-4 py-2 hover:bg-gray-100 text-sm">Staff Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100 text-sm">Signup</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


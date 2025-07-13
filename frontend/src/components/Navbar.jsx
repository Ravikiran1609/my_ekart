import { Link } from "react-router-dom";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">ShopKart</Link>
        <div className="flex gap-4">
          <Link to="/cart" className="text-gray-600 hover:text-blue-600">Cart 🛒</Link>
          <Link to="/checkout" className="text-gray-600 hover:text-blue-600">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}


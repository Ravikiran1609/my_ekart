import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './admin/AdminLogin';
import Signup from './pages/Signup';
import Login from './pages/Login';
import OtpLogin from './pages/OtpLogin';
import Home from './pages/Home';
import OTPLogin from './components/OTPLogin';
import EmailLogin from './components/EmailLogin';
import LoginOptions from './components/LoginOptions';
import AdminDashboard from './admin/AdminDashboard';
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import UserLogin from './pages/UserLogin';
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
	    <Route path="/admin/login" element={<AdminLogin onLogin={() => window.location.href = '/admin/dashboard'} />} />
	    <Route path="/admin/dashboard" element={<AdminDashboard />} />
	    <Route path="/signup" element={<Signup />} />
	    <Route path="/otp-login" element={<OtpLogin />} />
	    <Route path="/" element={<Login />} />
	    <Route path="/login/user" element={<UserLogin />} />
	    <Route path="/login" element={<Login />} />
	    <Route path="/login" element={<LoginOptions />} />
	    <Route path="/login/otp" element={<OTPLogin />} />
	    <Route path="/login/email" element={<EmailLogin />} />
          </Routes>
        </main>
        <footer className="text-center p-4 bg-gray-100 text-sm text-gray-600">
          © {new Date().getFullYear()} My E-Commerce. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}


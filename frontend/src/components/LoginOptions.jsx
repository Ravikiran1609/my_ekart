import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginBtn from './GoogleLoginBtn';

export default function LoginOptions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Login</h2>
      <Link to="/login/otp" className="mb-2 text-blue-500">Login via Mobile OTP</Link>
      <Link to="/login/email" className="mb-2 text-blue-500">Login via Email</Link>
      <GoogleLoginBtn />
    </div>
  );
}


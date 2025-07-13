import React, { useState } from 'react';
import axios from 'axios';

const OtpLogin = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const sendOtp = async () => {
    try {
      await axios.post('/api/auth/send-otp', { mobile });
      setOtpSent(true);
      alert('OTP sent');
    } catch {
      alert('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('/api/auth/verify-otp', { mobile, otp });
      alert(res.data.message || 'OTP login success');
    } catch {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">OTP Login</h2>
      {!otpSent ? (
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          <button className="bg-blue-500 text-white py-2 rounded" onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button className="bg-green-500 text-white py-2 rounded" onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default OtpLogin;


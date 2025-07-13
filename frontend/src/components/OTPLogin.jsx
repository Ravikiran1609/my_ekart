import React, { useState } from 'react';

export default function OTPLogin() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    // replace with backend URL
    await fetch('/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile })
    });
    setStep(2);
  };

  const verifyOtp = async () => {
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile, otp })
    });
    if (res.ok) alert('Logged in!');
  };

  return (
    <div className="p-6">
      {step === 1 ? (
        <>
          <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile number" />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
}


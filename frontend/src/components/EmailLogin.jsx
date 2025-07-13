import React, { useState } from 'react';

export default function EmailLogin() {
  const [email, setEmail] = useState('');

  const sendLoginLink = async () => {
    await fetch('/api/auth/send-email-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    alert('Check your inbox');
  };

  return (
    <div className="p-6">
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={sendLoginLink}>Send Login Link</button>
    </div>
  );
}


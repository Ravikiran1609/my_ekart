import React from 'react';

export default function GoogleLoginBtn() {
  const handleLogin = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <button onClick={handleLogin} className="text-white bg-red-500 px-4 py-2 rounded">
      Login with Google
    </button>
  );
}


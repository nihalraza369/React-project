import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');

  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score === 0) return { label: 'Too Weak', color: 'bg-red-500', width: 'w-1/4' };
    if (score === 1) return { label: 'Weak', color: 'bg-orange-500', width: 'w-1/3' };
    if (score === 2) return { label: 'Moderate', color: 'bg-yellow-500', width: 'w-1/2' };
    if (score === 3) return { label: 'Strong', color: 'bg-blue-500', width: 'w-3/4' };
    return { label: 'Very Strong', color: 'bg-green-600', width: 'w-full' };
  };

  const strength = getStrength(password);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">🔐 Password Strength Checker</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
        />

        <div className="h-3 bg-gray-300 rounded overflow-hidden mb-2">
          <div className={`h-full ${strength.color} ${strength.width} transition-all duration-300`}></div>
        </div>
        <p className="text-center text-sm text-gray-700">Strength: <strong>{strength.label}</strong></p>
      </div>
    </div>
  );
};

export default App;

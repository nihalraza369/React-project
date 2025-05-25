
import React, { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all p-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <h1 className="text-3xl font-bold">🌗 Tailwind Dark Mode Toggle</h1>
        <p className="mt-4">This is a {darkMode ? 'dark' : 'light'} themed layout.</p>
      </div>
    </div>
  );
};

export default App;

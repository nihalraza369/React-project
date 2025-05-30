import React, { useState } from 'react';

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    alert("📋 Quote copied!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">💬 Random Quote Generator</h1>
      <p className="bg-white text-black p-4 rounded mb-4 shadow-md w-full max-w-lg">{quote}</p>
      <div className="flex gap-3">
        <button onClick={generateQuote} className="bg-blue-600 px-4 py-2 rounded">Generate</button>
        <button onClick={copyToClipboard} className="bg-green-600 px-4 py-2 rounded">Copy</button>
      </div>
    </div>
  );
};

export default App;

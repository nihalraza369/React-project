import React, { useState, useEffect, useRef } from 'react';

const sampleText =
  "Typing fast isn't just a skill — it's a superpower for developers, writers, and techies.";

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (userInput.length === 1) {
      setStartTime(Date.now());
    }

    if (userInput === sampleText) {
      setCompleted(true);
      const timeTaken = (Date.now() - startTime) / 1000 / 60;
      const words = userInput.trim().split(' ').length;
      setWpm(Math.round(words / timeTaken));
    }

    // Mistake Count
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== sampleText[i]) {
        count++;
      }
    }
    setMistakes(count);
  }, [userInput]);

  const handleReset = () => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setMistakes(0);
    setCompleted(false);
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">⌨️ Typing Speed Test</h1>

      <div className="bg-slate-800 p-6 rounded-lg max-w-3xl w-full shadow-xl">
        <p className="mb-4 text-slate-300">{sampleText}</p>
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={completed}
          rows={4}
          className="w-full p-3 text-black rounded bg-white outline-none mb-4"
          placeholder="Start typing..."
        />

        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <p>Mistakes: <span className="text-red-400 font-bold">{mistakes}</span></p>
          <p>WPM: <span className="text-green-400 font-bold">{wpm}</span></p>
        </div>

        {completed && (
          <div className="text-center text-lg font-semibold text-green-500 mb-2">
            ✅ Completed! Great job!
          </div>
        )}

        <button
          onClick={handleReset}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white mt-2"
        >
          {completed ? "Try Again" : "Reset"}
        </button>
      </div>
    </div>
  );
};

export default App;

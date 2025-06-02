import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const sentences = [
    "React is a JavaScript library for building user interfaces.",
    "Typing fast requires consistent practice and accuracy.",
    "Frontend development includes HTML, CSS, and JavaScript.",
    "Tailwind makes designing UIs faster and cleaner.",
    "UseState and UseEffect are core React hooks."
  ];

  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * sentences.length);
    setText(sentences[random]);
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());

    if (val === text) {
      setEndTime(Date.now());
      setIsFinished(true);
    }

    setUserInput(val);
  };

  const calculateWPM = () => {
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const words = text.split(" ").length;
    const wpm = (words / timeTaken) * 60;
    return Math.round(wpm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-4">⌨️ Typing Speed Test</h2>

        <p className="mb-4 text-gray-700 text-center">{text}</p>

        <textarea
          ref={inputRef}
          rows="4"
          value={userInput}
          onChange={handleChange}
          placeholder="Start typing here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={isFinished}
        />

        {isFinished && (
          <div className="mt-4 text-center text-lg text-green-700 font-semibold">
            🎉 Finished! Your speed: {calculateWPM()} WPM
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

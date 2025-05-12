
import { useState } from "react";


export default function App() {
  const [text, setText] = useState(sentences[0]);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setUserInput(val);
    if (val === text) setEndTime(Date.now());
  };

  const getWPM = () => {
    const words = text.split(" ").length;
    const minutes = (endTime - startTime) / 60000;
    return Math.round(words / minutes);
  };

  const getAccuracy = () => {
    let correct = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correct++;
    }
    return Math.round((correct / text.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 space-y-6">
      <h1 className="text-3xl font-bold">Typing Speed Test</h1>
      <p className="max-w-xl text-lg text-center bg-gray-800 p-4 rounded">{text}</p>
      <textarea
        className="w-full max-w-xl p-3 rounded text-black"
        rows={4}
        value={userInput}
        onChange={handleChange}
        disabled={endTime}
      />
      {endTime && (
        <div className="text-center">
          <p className="text-xl">WPM: {getWPM()}</p>
          <p className="text-xl">Accuracy: {getAccuracy()}%</p>
        </div>
      )}
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          const random = sentences[Math.floor(Math.random() * sentences.length)];
          setText(random);
          setUserInput("");
          setStartTime(null);
          setEndTime(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}

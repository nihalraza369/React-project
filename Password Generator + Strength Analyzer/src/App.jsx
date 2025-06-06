import React, { useState } from "react";

const App = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let chars = letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let pwd = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      pwd += chars[index];
    }
    setPassword(pwd);
    setCopied(false);
  };

  const getStrength = () => {
    if (length < 8) return "Weak";
    if (length < 12) return "Moderate";
    return "Strong";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🔐 Password Generator</h1>

        <div className="mb-4">
          <label className="block mb-1">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="24"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold mt-2"
        >
          Generate Password
        </button>

        {password && (
          <>
            <div className="mt-4 bg-gray-700 p-2 rounded flex justify-between items-center">
              <span className="break-all">{password}</span>
              <button
                onClick={copyToClipboard}
                className="ml-4 text-sm bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="mt-2 text-sm">
              Strength:{" "}
              <span
                className={
                  getStrength() === "Weak"
                    ? "text-red-500"
                    : getStrength() === "Moderate"
                    ? "text-yellow-400"
                    : "text-green-500"
                }
              >
                {getStrength()}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("My Brand");
  const [size, setSize] = useState("M");

  const colors = ["white", "black", "red", "blue", "green"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">👕 Product Customizer</h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Controls */}
        <div className="bg-gray-800 p-4 rounded-lg w-full md:w-1/2">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Text on Shirt</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Color</label>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    color === c ? 'border-white' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c }}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 rounded bg-gray-700"
            >
              {sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/2 flex flex-col items-center justify-center">
          <div
            className="w-48 h-60 rounded-lg flex items-center justify-center text-black text-lg font-bold transition-all"
            style={{ backgroundColor: color }}
          >
            {text}
          </div>
          <p className="mt-4 text-white text-sm">Size: {size}</p>
        </div>
      </div>
    </div>
  );
};

export default App;

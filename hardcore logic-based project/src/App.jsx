import { useState } from "react";

export default function App() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 0, 2],
    [0, 0, 0, 0],
  ]);

  return (
    <div className="grid grid-cols-4 gap-2 bg-gray-800 p-4 rounded-lg">
      {board.flat().map((cell, i) => (
        <div
          key={i}
          className="w-20 h-20 flex items-center justify-center bg-gray-700 text-2xl font-bold rounded"
        >
          {cell !== 0 ? cell : ""}
        </div>
      ))}
    </div>
  );
}

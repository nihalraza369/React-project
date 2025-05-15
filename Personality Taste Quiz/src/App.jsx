import { useState } from "react";

const moods = {
  happy: {
    color: "bg-yellow-300",
    emoji: "😄",
    message: "You're feeling happy!"
  },
  sad: {
    color: "bg-blue-300",
    emoji: "😢",
    message: "Feeling a bit down?"
  },
  energetic: {
    color: "bg-red-300",
    emoji: "⚡",
    message: "You're full of energy!"
  },
  calm: {
    color: "bg-green-300",
    emoji: "🌿",
    message: "Peaceful and calm."
  }
};

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500 p-4 ${
        selectedMood ? moods[selectedMood].color : "bg-gray-200"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">What's your mood today?</h1>
      <div className="flex gap-4 mb-8">
        {Object.keys(moods).map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className="px-4 py-2 rounded-xl bg-white shadow-md hover:bg-gray-100 transition-all"
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="text-center">
          <div className="text-6xl mb-4">{moods[selectedMood].emoji}</div>
          <p className="text-xl font-medium">{moods[selectedMood].message}</p>
        </div>
      )}
    </div>
  );
}

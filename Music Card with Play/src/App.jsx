import React, { useRef, useState } from "react";

export default function MusicCard() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">🎵 Music Card</h2>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Album Art"
        className="rounded-lg mb-4"
      />
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {isPlaying ? "Pause Song" : "Play Song"}
      </button>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
    </div>
  );
}

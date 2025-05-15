import React, { useState } from "react";

const quizData = [
  {
    question: "How do you spend your weekends?",
    options: ["Reading books", "Partying", "Hiking", "Coding"],
  },
  {
    question: "What’s your favorite drink?",
    options: ["Coffee", "Tea", "Energy Drink", "Smoothie"],
  },
  {
    question: "How do you solve a problem?",
    options: ["Logically", "Creatively", "Emotionally", "Randomly"],
  },
];

export default function PersonalityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setAnswers([...answers, option]);
    if (step < quizData.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const generateResult = () => {
    const personalityMap = {
      Reading: "The Thinker 🧠",
      Partying: "The Social Butterfly 🦋",
      Hiking: "The Adventurer 🧗",
      Coding: "The Tech Wizard 🧙",
      Coffee: "The Hustler ⚡",
      Tea: "The Calm Mind 🍵",
      "Energy Drink": "The Night Owl 🦉",
      Smoothie: "The Health Guru 💪",
      Logically: "The Analyst 🧮",
      Creatively: "The Artist 🎨",
      Emotionally: "The Empath 💖",
      Randomly: "The Free Spirit 🌈",
    };

    const result = personalityMap[answers[2]] || "Unique Personality ✨";
    return result;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">🎯 Personality Quiz</h1>

        {!showResult ? (
          <>
            <p className="text-lg font-medium mb-6">
              {quizData[step].question}
            </p>
            <div className="space-y-3">
              {quizData[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Personality is:</h2>
            <p className="text-3xl mb-6">{generateResult()}</p>
            <button
              onClick={restartQuiz}
              className="bg-green-500 text-white py-2 px-6 rounded-xl hover:bg-green-600 transition"
            >
              Retake Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}

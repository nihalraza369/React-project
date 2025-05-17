import { useState } from "react";
import axios from "axios";

export default function InputArea({ setRecipe }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    setLoading(true);
    const prompt = `Suggest a recipe using these ingredients: ${input}`;
    
    const res = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          "Authorization": `Bearer YOUR_OPENAI_API_KEY`
        }
      }
    );

    setRecipe(res.data.choices[0].text.trim());
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="p-3 border rounded"
        rows="4"
        placeholder="Enter ingredients like: rice, tomato, onion"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={generateRecipe}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Recipe"}
      </button>
    </div>
  );
}

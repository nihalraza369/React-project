import { useState } from "react";
import InputArea from "./components/InputArea";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipe, setRecipe] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Recipe Generator 🍳</h1>
      <InputArea setRecipe={setRecipe} />
      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}

export default App;

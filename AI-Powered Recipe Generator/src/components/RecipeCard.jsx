export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">🍽️ Recipe:</h2>
      <p className="whitespace-pre-line">{recipe}</p>
    </div>
  );
}

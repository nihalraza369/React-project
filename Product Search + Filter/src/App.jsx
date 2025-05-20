import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15", category: "Mobile" },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobile" },
  { id: 3, name: "MacBook Pro", category: "Laptop" },
  { id: 4, name: "Dell XPS", category: "Laptop" },
  { id: 5, name: "AirPods Pro", category: "Accessories" },
  { id: 6, name: "Apple Watch", category: "Accessories" },
];

const categories = ["All", "Mobile", "Laptop", "Accessories"];

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">🔍 Product Filter App</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded border ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="border rounded p-4 shadow text-center bg-white"
          >
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.category}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-6 text-red-500">No products found.</p>
      )}
    </div>
  );
}


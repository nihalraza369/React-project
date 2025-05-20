import { useState } from "react";

export default function App() {
  const [fields, setFields] = useState([]);
  const [type, setType] = useState("text");
  const [label, setLabel] = useState("");

  const addField = () => {
    if (!label) return;
    setFields([...fields, { type, label }]);
    setLabel("");
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 grid grid-cols-2 gap-8 font-sans">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">🛠️ Create Field</h2>
        <select
          className="mb-2 w-full border px-3 py-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <input
          type="text"
          placeholder="Label"
          className="mb-2 w-full border px-3 py-2 rounded"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button
          onClick={addField}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          ➕ Add Field
        </button>

        <ul className="mt-4">
          {fields.map((f, i) => (
            <li
              key={i}
              className="flex justify-between items-center border-b py-1"
            >
              <span>{f.label} ({f.type})</span>
              <button
                className="text-red-500 text-sm"
                onClick={() => removeField(i)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">📋 Live Preview</h2>
        <form className="space-y-4">
          {fields.map((f, i) => (
            <div key={i}>
              <label className="block text-sm font-semibold mb-1">
                {f.label}
              </label>
              {f.type === "checkbox" ? (
                <input type="checkbox" className="mr-2" />
              ) : (
                <input
                  type={f.type}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

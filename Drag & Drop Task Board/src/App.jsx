import React, { useState } from 'react';

const App = () => {
  const initialData = {
    todo: ["Build UI", "Learn Drag API"],
    inProgress: ["Setup Tailwind"],
    done: ["Create React App"],
  };

  const [tasks, setTasks] = useState(initialData);
  const [dragged, setDragged] = useState(null);

  const handleDragStart = (col, index) => {
    setDragged({ col, index });
  };

  const handleDrop = (col) => {
    if (!dragged) return;
    const item = tasks[dragged.col][dragged.index];

    // Remove from old column
    const newSrcCol = [...tasks[dragged.col]];
    newSrcCol.splice(dragged.index, 1);

    // Add to new column
    const newDestCol = [...tasks[col], item];

    setTasks({
      ...tasks,
      [dragged.col]: newSrcCol,
      [col]: newDestCol,
    });

    setDragged(null);
  };

  const Column = ({ title, items, colKey }) => (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(colKey)}
      className="bg-gray-800 p-4 rounded-lg w-full md:w-1/3 min-h-[300px] mx-2 shadow-lg"
    >
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {items.map((task, i) => (
        <div
          key={i}
          draggable
          onDragStart={() => handleDragStart(colKey, i)}
          className="bg-gray-700 p-3 rounded mb-2 cursor-grab hover:bg-gray-600 text-white"
        >
          {task}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black p-6 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">🗂️ Task Board</h1>
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        <Column title="📝 To Do" items={tasks.todo} colKey="todo" />
        <Column title="🚧 In Progress" items={tasks.inProgress} colKey="inProgress" />
        <Column title="✅ Done" items={tasks.done} colKey="done" />
      </div>
    </div>
  );
};

export default App;

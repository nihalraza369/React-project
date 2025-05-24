import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Learn React", status: "todo" },
  { id: 2, title: "Setup Tailwind", status: "todo" },
  { id: 3, title: "Build Projects", status: "inprogress" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const [dragged, setDragged] = useState(null);

  const statuses = ["todo", "inprogress", "done"];

  const handleDrop = (status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === dragged ? { ...task, status } : task
      )
    );
    setDragged(null);
  };

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    const newObj = {
      id: Date.now(),
      title: newTask,
      status: "todo",
    };
    setTasks([newObj, ...tasks]);
    setNewTask("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🧠 Task Manager</h1>

      <div className="flex gap-4 justify-center mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="p-2 border rounded w-64"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {statuses.map((status) => (
          <div
            key={status}
            className="bg-white rounded shadow p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(status)}
          >
            <h2 className="text-xl font-semibold capitalize mb-3">
              {status.replace("inprogress", "In Progress")}
            </h2>

            <div className="space-y-2 min-h-[150px]">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => setDragged(task.id)}
                    className="p-2 bg-gray-100 border rounded shadow hover:bg-gray-200 cursor-grab"
                  >
                    {task.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

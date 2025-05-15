import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Design UI Mockup", dependsOn: [] },
  { id: 2, title: "Develop Components", dependsOn: [1] },
  { id: 3, title: "Integrate API", dependsOn: [2] },
  { id: 4, title: "Deploy Project", dependsOn: [3] }
];

export default function TaskManager() {
  const [completed, setCompleted] = useState([]);

  const isAvailable = (task) => task.dependsOn.every((d) => completed.includes(d));

  const toggleTask = (task) => {
    if (completed.includes(task.id)) {
      setCompleted((prev) => prev.filter((id) => id !== task.id));
    } else if (isAvailable(task)) {
      setCompleted((prev) => [...prev, task.id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Dependency Manager</h1>
      <div className="max-w-xl mx-auto space-y-4">
        {tasks.map((task) => {
          const done = completed.includes(task.id);
          const available = isAvailable(task);
          return (
            <div
              key={task.id}
              onClick={() => toggleTask(task)}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer shadow-md transition-all border-2 ${
                done
                  ? "bg-green-100 border-green-400"
                  : available
                  ? "bg-white hover:bg-gray-50 border-blue-300"
                  : "bg-gray-200 opacity-50 border-gray-300 cursor-not-allowed"
              }`}
            >
              <div>
                {done ? (
                  <CheckCircle className="text-green-600" />
                ) : (
                  <Clock className="text-gray-500" />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{task.title}</h2>
                {task.dependsOn.length > 0 && (
                  <p className="text-sm text-gray-500">
                    Depends on: {task.dependsOn.join(", ")}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


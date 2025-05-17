import { useReducer, useEffect } from 'react';
import { taskReducer } from './reducers/taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });

  const { toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🗂️ Task Manager Pro</h1>
        <button onClick={toggleTheme} className="text-sm px-3 py-1 bg-gray-200 rounded dark:bg-gray-700">
          Toggle Theme
        </button>
      </div>
      <TaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}


import { useState } from 'react';

const TaskForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: { title } });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="flex-grow px-4 py-2 rounded border"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default TaskForm;

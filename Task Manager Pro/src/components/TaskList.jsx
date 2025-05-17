const TaskList = ({ tasks, dispatch }) => {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <span className={task.completed ? 'line-through opacity-60' : ''}>{task.title}</span>
          <div className="flex gap-2">
            <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })} className="text-green-600">✔</button>
            <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })} className="text-red-600">✖</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

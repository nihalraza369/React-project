import TaskCard from "./TaskCard";

export default function Column({ title, tasks }) {
  return (
    <div className="bg-gray-200 p-4 rounded w-80">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

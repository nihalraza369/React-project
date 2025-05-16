export default function TaskCard({ task }) {
  return (
    <div className="bg-white p-2 rounded shadow my-2">
      <p>{task.title}</p>
    </div>
  );
}

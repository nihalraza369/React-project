import Column from "./Column";

export default function Board() {
  const data = {
    todo: [
      { title: "Design Homepage" },
      { title: "Setup Vite + Tailwind" },
    ],
    inProgress: [{ title: "Writing API Docs" }],
    done: [{ title: "Initial Setup Complete" }],
  };

  return (
    <div className="flex gap-6">
      <Column title="To Do" tasks={data.todo} />
      <Column title="In Progress" tasks={data.inProgress} />
      <Column title="Done" tasks={data.done} />
    </div>
  );
}

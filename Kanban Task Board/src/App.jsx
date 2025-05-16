import Board from "./components/Board";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Kanban Board</h1>
      <Board />
    </div>
  );
}

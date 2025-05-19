import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const dataSet = [
  { name: 'Nihal', score: 95 },
  { name: 'Ali', score: 88 },
  { name: 'Sana', score: 76 },
  { name: 'Ahmed', score: 65 },
  { name: 'Zara', score: 90 },
];

export default function Dashboard() {
  const [search, setSearch] = useState('');

  const filtered = dataSet.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

  const data = {
    labels: filtered.map((d) => d.name),
    datasets: [
      {
        label: 'Scores',
        data: filtered.map((d) => d.score),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded shadow-xl">
      <h2 className="text-2xl font-bold mb-4">📊 Student Score Dashboard</h2>
      <input
        placeholder="Search name..."
        className="w-full mb-4 px-4 py-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Bar data={data} />
    </div>
  );
}

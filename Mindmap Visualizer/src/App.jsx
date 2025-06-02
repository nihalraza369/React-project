import { useState } from "react";
import { Stage, Layer, Circle, Text, Line } from "react-konva";

const initialNode = {
  id: 1,
  x: 150,
  y: 150,
  text: "Main Idea",
};

export default function App() {
  const [nodes, setNodes] = useState([initialNode]);
  const [lines, setLines] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const addNode = () => {
    const newNode = {
      id: Date.now(),
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      text: `Node ${nodes.length + 1}`,
    };
    setNodes([...nodes, newNode]);
  };

  const handleDrag = (e, id) => {
    const updated = nodes.map((node) =>
      node.id === id ? { ...node, x: e.target.x(), y: e.target.y() } : node
    );
    setNodes(updated);
  };

  const handleNodeClick = (id) => {
    if (selectedNodeId && selectedNodeId !== id) {
      const newLine = {
        points: [
          nodes.find((n) => n.id === selectedNodeId).x + 50,
          nodes.find((n) => n.id === selectedNodeId).y + 25,
          nodes.find((n) => n.id === id).x + 50,
          nodes.find((n) => n.id === id).y + 25,
        ],
      };
      setLines([...lines, newLine]);
      setSelectedNodeId(null);
    } else {
      setSelectedNodeId(id);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white">
      <button
        onClick={addNode}
        className="p-2 bg-blue-600 rounded m-4 hover:bg-blue-700"
      >
        + Add Node
      </button>
      <Stage width={window.innerWidth} height={window.innerHeight} className="cursor-pointer">
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="white"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
            />
          ))}
          {nodes.map((node) => (
            <>
              <Circle
                key={node.id}
                x={node.x + 50}
                y={node.y + 25}
                radius={50}
                fill={selectedNodeId === node.id ? "#10b981" : "#3b82f6"}
                draggable
                onDragMove={(e) => handleDrag(e, node.id)}
                onClick={() => handleNodeClick(node.id)}
              />
              <Text
                text={node.text}
                x={node.x}
                y={node.y + 15}
                width={100}
                align="center"
                fill="white"
                fontSize={14}
              />
            </>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { algorithm: "Bubble", complexity: 100 },
  { algorithm: "Selection", complexity: 100 },
  { algorithm: "Insertion", complexity: 100 },
  { algorithm: "Merge", complexity: 40 },
  { algorithm: "Quick", complexity: 40 },
];

function ComplexityChart() {
  return (
    <div
      className="
      w-[90%]
      mx-auto
      mt-14
      bg-white/10
      backdrop-blur-lg
      border border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      "
    >

      <h2 className="text-3xl text-center text-cyan-400 font-bold mb-8">
        Algorithm Complexity Comparison
      </h2>

      <ResponsiveContainer width="100%" height={400}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="algorithm" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="complexity"
            fill="#22d3ee"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ComplexityChart;
function AboutSection() {
  return (
    <div
      className="
      w-[90%]
      mx-auto
      mt-12
      bg-white/10
      backdrop-blur-lg
      border border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      "
    >

      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
        About AlgoViz
      </h2>

      <p className="text-lg text-gray-300 leading-8">
        AlgoViz is an interactive DSA Visualizer and Performance Analyzer
        built to understand sorting algorithms through real-time animations
        and analytics.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div>

          <h3 className="text-2xl text-cyan-400 font-semibold mb-5">
            Features
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>✅ Bubble Sort Visualization</li>
            <li>✅ Selection Sort Visualization</li>
            <li>✅ Insertion Sort Visualization</li>
            <li>✅ Merge Sort Visualization</li>
            <li>✅ Quick Sort Visualization</li>
            <li>✅ Compare Mode</li>
            <li>✅ Complexity Charts</li>
            <li>✅ Performance Analytics</li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl text-cyan-400 font-semibold mb-5">
            Tech Stack
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>⚛ React + TypeScript</li>
            <li>🎨 Tailwind CSS</li>
            <li>📊 Recharts</li>
            <li>⚡ Vite</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AboutSection;
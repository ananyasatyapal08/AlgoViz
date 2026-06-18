function AboutSection() {
  return (
    <div className="w-[90%] mx-auto mt-12 bg-slate-800 rounded-2xl p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
        About AlgoViz
      </h2>

      <p className="text-lg text-gray-300 leading-8">

        AlgoViz is an interactive DSA Visualizer and Performance Analyzer
        built to understand sorting algorithms through real-time animations
        and analytics.

      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div>

          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Features
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>✅ Bubble Sort Visualization</li>
            <li>✅ Selection Sort Visualization</li>
            <li>✅ Insertion Sort Visualization</li>
            <li>✅ Merge Sort Visualization</li>
            <li>✅ Quick Sort Visualization</li>
            <li>✅ Complexity Comparison Chart</li>
            <li>✅ Algorithm Analysis Cards</li>
            <li>✅ Compare Mode</li>
            <li>✅ Performance Metrics</li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Tech Stack
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li> React + TypeScript</li>
            <li>Tailwind CSS</li>
            <li> Recharts</li>
            <li> Vite</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AboutSection;
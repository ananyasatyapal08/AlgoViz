function ComparisonPanel() {
  return (
    <div className="grid md:grid-cols-2 gap-10 w-[90%] mx-auto mt-10">

      {/* Left Panel */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-cyan-400 text-center">
          Bubble Sort
        </h2>

        <div className="mt-8 space-y-4">

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Comparisons
            </h3>

            <p className="text-3xl font-bold mt-2">
              -
            </p>

          </div>

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Swaps
            </h3>

            <p className="text-3xl font-bold mt-2">
              -
            </p>

          </div>

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Time Complexity
            </h3>

            <p className="text-2xl font-bold mt-2">
              O(n²)
            </p>

          </div>

        </div>

      </div>

      {/* Right Panel */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-green-400 text-center">
          Quick Sort
        </h2>

        <div className="mt-8 space-y-4">

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Comparisons
            </h3>

            <p className="text-3xl font-bold mt-2">
              -
            </p>

          </div>

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Swaps
            </h3>

            <p className="text-3xl font-bold mt-2">
              -
            </p>

          </div>

          <div className="bg-slate-700 rounded-xl p-4 text-center">

            <h3 className="text-gray-400">
              Time Complexity
            </h3>

            <p className="text-2xl font-bold mt-2">
              O(n log n)
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ComparisonPanel;
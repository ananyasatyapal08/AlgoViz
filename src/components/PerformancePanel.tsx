interface Props {
  comparisons: number;
  swaps: number;
}

function PerformancePanel({
  comparisons,
  swaps,
}: Props) {
  return (
    <div className="w-[90%] mx-auto mt-10">

      <div className="grid md:grid-cols-3 gap-6">

        {/* Comparisons Card */}
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">

          <h2 className="text-cyan-400 text-xl font-semibold">
            Comparisons
          </h2>

          <p className="text-4xl font-bold mt-4">
            {comparisons}
          </p>

        </div>

        {/* Swaps Card */}
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">

          <h2 className="text-cyan-400 text-xl font-semibold">
            Swaps
          </h2>

          <p className="text-4xl font-bold mt-4">
            {swaps}
          </p>

        </div>

        {/* Complexity Card */}
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">

          <h2 className="text-cyan-400 text-xl font-semibold">
            Time Complexity
          </h2>

          <p className="text-3xl font-bold mt-4">
            O(n²)
          </p>

        </div>

      </div>

    </div>
  );
}

export default PerformancePanel;
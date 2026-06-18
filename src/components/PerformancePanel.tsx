interface Props {
  comparisons: number;
  swaps: number;
  algorithm: string;
  timeTaken: number;
  arraySize: number;
}

function PerformancePanel({
  comparisons,
  swaps,
  algorithm,
  timeTaken,
  arraySize,
}: Props) {

  let complexity = "";

  if (
    algorithm === "Bubble Sort" ||
    algorithm === "Selection Sort" ||
    algorithm === "Insertion Sort"
  ) {
    complexity = "O(n²)";
  }

  else if (
    algorithm === "Merge Sort" ||
    algorithm === "Quick Sort" ||
    algorithm === "Heap Sort"
  ) {
    complexity = "O(n log n)";
  }

  return (
    <div className="grid md:grid-cols-5 gap-6 w-[90%] mx-auto mt-10">

      <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">

        <h2 className="text-cyan-400 font-semibold">
          Comparisons
        </h2>

        <p className="text-3xl mt-3 font-bold">
          {comparisons}
        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">

        <h2 className="text-cyan-400 font-semibold">
          Swaps
        </h2>

        <p className="text-3xl mt-3 font-bold">
          {swaps}
        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">

        <h2 className="text-cyan-400 font-semibold">
          Complexity
        </h2>

        <p className="text-2xl mt-3 font-bold">
          {complexity}
        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">

        <h2 className="text-cyan-400 font-semibold">
          Time
        </h2>

        <p className="text-3xl mt-3 font-bold">
          {timeTaken} ms
        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">

        <h2 className="text-cyan-400 font-semibold">
          Array Size
        </h2>

        <p className="text-3xl mt-3 font-bold">
          {arraySize}
        </p>

      </div>

    </div>
  );
}

export default PerformancePanel;
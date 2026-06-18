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
  arraySize
}: Props) {

  let complexity = "";

  if (
    algorithm === "Bubble Sort" ||
    algorithm === "Selection Sort" ||
    algorithm === "Insertion Sort"
  ) {
    complexity = "O(n²)";
  }

  else {
    complexity = "O(n log n)";
  }

  return (
    <div className="grid md:grid-cols-5 gap-6 w-[90%] mx-auto mt-10">

      {[
        ["Comparisons", comparisons],
        ["Swaps", swaps],
        ["Complexity", complexity],
        ["Time", `${timeTaken} ms`],
        ["Array Size", arraySize]
      ].map(([title, value], index) => (

        <div
          key={index}
          className="
          bg-white/10
          backdrop-blur-lg
          border border-white/10
          rounded-2xl
          p-6
          text-center
          shadow-xl
          hover:scale-105
          transition-all duration-300
          "
        >

          <h2 className="text-cyan-400 font-semibold">
            {title}
          </h2>

          <p className="text-3xl mt-4 font-bold">
            {value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default PerformancePanel;
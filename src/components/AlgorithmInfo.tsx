interface Props {
  algorithm: string;
}

function AlgorithmInfo({ algorithm }: Props) {
  let info = {
    best: "",
    average: "",
    worst: "",
    space: "",
    stable: "",
    inplace: "",
    adaptive: "",
  };

  switch (algorithm) {
    case "Bubble Sort":
      info = {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "Yes",
        inplace: "Yes",
        adaptive: "Yes",
      };
      break;

    case "Selection Sort":
      info = {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "No",
        inplace: "Yes",
        adaptive: "No",
      };
      break;

    case "Insertion Sort":
      info = {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "Yes",
        inplace: "Yes",
        adaptive: "Yes",
      };
      break;

    case "Merge Sort":
      info = {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(n)",
        stable: "Yes",
        inplace: "No",
        adaptive: "No",
      };
      break;

    default:
      info = {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)",
        space: "O(log n)",
        stable: "No",
        inplace: "Yes",
        adaptive: "No",
      };
  }

  return (
    <div className="w-[90%] mx-auto mt-10 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
        {algorithm} Analysis
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {[
          ["Best Case", info.best],
          ["Average Case", info.average],
          ["Worst Case", info.worst],
          ["Space Complexity", info.space],
          ["Stable", info.stable],
          ["In Place", info.inplace],
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

            <h3 className="text-gray-300">
              {title}
            </h3>

            <p className="text-2xl font-bold mt-3">
              {value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AlgorithmInfo;
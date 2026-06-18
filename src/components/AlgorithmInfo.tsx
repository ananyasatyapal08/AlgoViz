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
    adaptive: ""
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
        adaptive: "Yes"
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
        adaptive: "No"
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
        adaptive: "Yes"
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
        adaptive: "No"
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
        adaptive: "No"
      };
  }

  return (
    <div className="w-[90%] mx-auto mt-10 bg-slate-800 rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl text-center text-cyan-400 font-bold mb-8">
        {algorithm} Analysis
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">Best Case</h3>
          <p className="text-2xl font-bold mt-3">{info.best}</p>
        </div>

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">Average Case</h3>
          <p className="text-2xl font-bold mt-3">{info.average}</p>
        </div>

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">Worst Case</h3>
          <p className="text-2xl font-bold mt-3">{info.worst}</p>
        </div>

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">Space Complexity</h3>
          <p className="text-2xl font-bold mt-3">{info.space}</p>
        </div>

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">Stable</h3>
          <p className="text-2xl font-bold mt-3">{info.stable}</p>
        </div>

        <div className="bg-slate-700 rounded-xl p-6 text-center">
          <h3 className="text-gray-300">In Place</h3>
          <p className="text-2xl font-bold mt-3">{info.inplace}</p>
        </div>

      </div>

    </div>
  );
}

export default AlgorithmInfo;
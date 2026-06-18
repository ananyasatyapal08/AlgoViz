import React from "react";

interface Props {
  generateArray: () => void;
  resetVisualizer: () => void;

  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;

  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;

  startSorting: () => void;

  isSorting: boolean;

  algorithm: string;
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}

function Controls({
  generateArray,
  resetVisualizer,

  size,
  setSize,

  speed,
  setSpeed,

  startSorting,

  isSorting,

  algorithm,
  setAlgorithm,
}: Props) {

  return (
    <div className="bg-slate-800 w-[90%] mx-auto rounded-2xl shadow-lg p-8">

      <div className="flex flex-wrap justify-center gap-8 items-center">

        {/* Algorithm */}
        <div>

          <p className="mb-2 text-gray-300">
            Algorithm
          </p>

          <select
            className="bg-slate-700 p-3 rounded-lg"
            value={algorithm}
            disabled={isSorting}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option>Bubble Sort</option>
            <option>Selection Sort</option>
            <option>Insertion Sort</option>
          </select>

        </div>

        {/* Array Size */}
        <div>

          <p className="mb-2 text-gray-300">
            Array Size : {size}
          </p>

          <input
            type="range"
            min="5"
            max="50"
            value={size}
            disabled={isSorting}
            onChange={(e) => setSize(Number(e.target.value))}
          />

        </div>

        {/* Speed */}
        <div>

          <p className="mb-2 text-gray-300">
            Speed : {speed} ms
          </p>

          <input
            type="range"
            min="10"
            max="500"
            value={speed}
            disabled={isSorting}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />

        </div>

        {/* Generate */}
        <button
          className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 disabled:bg-gray-600"
          onClick={generateArray}
          disabled={isSorting}
        >
          Generate Array
        </button>

        {/* Start */}
        <button
          className="bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 disabled:bg-gray-600"
          onClick={startSorting}
          disabled={isSorting}
        >
          Start Sorting
        </button>

        {/* Reset */}
        <button
          className="bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600 disabled:bg-gray-600"
          onClick={resetVisualizer}
          disabled={isSorting}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Controls;
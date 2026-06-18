import React from "react";

interface Props {
  generateArray: () => void;
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
    <div className="flex flex-wrap justify-center gap-6 mt-6">

      <select
        className="bg-slate-800 p-3 rounded-lg"
        value={algorithm}
        disabled={isSorting}
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option>Bubble Sort</option>
        <option>Selection Sort</option>
        <option>Insertion Sort</option>
      </select>

      <div>
        <p className="mb-2">Array Size : {size}</p>

        <input
          type="range"
          min="5"
          max="50"
          value={size}
          disabled={isSorting}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

      <div>
        <p className="mb-2">Speed : {speed} ms</p>

        <input
          type="range"
          min="10"
          max="500"
          value={speed}
          disabled={isSorting}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <button
        className="bg-cyan-500 px-5 py-3 rounded-lg hover:bg-cyan-600 disabled:bg-gray-600"
        onClick={generateArray}
        disabled={isSorting}
      >
        Generate Array
      </button>

      <button
        className="bg-green-500 px-5 py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-600"
        onClick={startSorting}
        disabled={isSorting}
      >
        Start Sorting
      </button>
    </div>
  );
}

export default Controls;
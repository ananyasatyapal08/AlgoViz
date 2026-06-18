import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import ArrayBars from "./components/ArrayBars";
import PerformancePanel from "./components/PerformancePanel";

import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";

function App() {
  // Array state
  const [array, setArray] = useState<number[]>([]);

  // Array size
  const [size, setSize] = useState(20);

  // Metrics
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  // Speed
  const [speed, setSpeed] = useState(100);

  // Disable controls while sorting
  const [isSorting, setIsSorting] = useState(false);

  // Highlight active bars
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  // Selected algorithm
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  // Generate random array
  function generateArray() {
    const temp: number[] = [];

    for (let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * 300) + 20);
    }

    setArray(temp);
  }

  // Generate array when size changes
  useEffect(() => {
    generateArray();
  }, [size]);

  // Start sorting
  async function startSorting() {
    setIsSorting(true);

    setComparisons(0);
    setSwaps(0);

    if (algorithm === "Bubble Sort") {
      await bubbleSort(
        array,
        setArray,
        setComparisons,
        setSwaps,
        setActiveIndices,
        speed
      );
    }

    else if (algorithm === "Selection Sort") {
      await selectionSort(
        array,
        setArray,
        setComparisons,
        setSwaps,
        setActiveIndices,
        speed
      );
    }

    else if (algorithm === "Insertion Sort") {
      await insertionSort();
    }

    setActiveIndices([]);
    setIsSorting(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <Controls
        generateArray={generateArray}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
        startSorting={startSorting}
        isSorting={isSorting}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
      />

      <ArrayBars
        array={array}
        activeIndices={activeIndices}
      />

      <PerformancePanel
        comparisons={comparisons}
        swaps={swaps}
      />

    </div>
  );
}

export default App;
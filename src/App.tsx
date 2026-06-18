import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import ArrayBars from "./components/ArrayBars";
import PerformancePanel from "./components/PerformancePanel";
import ComparisonPanel from "./components/ComparisonPanel";
import ComplexityChart from "./components/ComplexityChart";
import AlgorithmInfo from "./components/AlgorithmInfo";

import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [size, setSize] = useState(20);

  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  const [speed, setSpeed] = useState(100);

  const [isSorting, setIsSorting] = useState(false);

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  const [sorted, setSorted] = useState(false);

  const [timeTaken, setTimeTaken] = useState(0);

  const [compareMode, setCompareMode] = useState(false);

  function generateArray() {
    setSorted(false);

    const temp: number[] = [];

    for (let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * 300) + 20);
    }

    setArray(temp);
  }

  function resetVisualizer() {
    setComparisons(0);
    setSwaps(0);
    setTimeTaken(0);

    setSorted(false);

    setActiveIndices([]);

    generateArray();
  }

  useEffect(() => {
    generateArray();
  }, [size]);

  async function startSorting() {
    setSorted(false);

    setIsSorting(true);

    setComparisons(0);
    setSwaps(0);

    const start = performance.now();

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
      await insertionSort(
        array,
        setArray,
        setComparisons,
        setSwaps,
        setActiveIndices,
        speed
      );
    }

    else if (algorithm === "Merge Sort") {
      await mergeSort(
        array,
        setArray,
        setComparisons,
        setActiveIndices,
        speed
      );
    }

    else if (algorithm === "Quick Sort") {
      await quickSort(
        array,
        setArray,
        setComparisons,
        setSwaps,
        setActiveIndices,
        speed
      );
    }

    const end = performance.now();

    setTimeTaken(Math.floor(end - start));

    setActiveIndices([]);

    setSorted(true);

    setIsSorting(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">

      <Navbar />

      <Controls
        generateArray={generateArray}
        resetVisualizer={resetVisualizer}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
        startSorting={startSorting}
        isSorting={isSorting}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        compareMode={compareMode}
        setCompareMode={setCompareMode}
      />

      {compareMode ? (
        <ComparisonPanel />
      ) : (
        <>
          <ArrayBars
            array={array}
            activeIndices={activeIndices}
            sorted={sorted}
          />

          <PerformancePanel
            comparisons={comparisons}
            swaps={swaps}
            algorithm={algorithm}
            timeTaken={timeTaken}
            arraySize={size}
          />

          <ComplexityChart />

          <AlgorithmInfo
            algorithm={algorithm}
          />
        </>
      )}

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import ArrayBars from "./components/ArrayBars";
import PerformancePanel from "./components/PerformancePanel";
import { bubbleSort } from "./algorithms/bubbleSort";

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [size, setSize] = useState(20);

  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  const [speed, setSpeed] = useState(100);

  // NEW
  const [isSorting, setIsSorting] = useState(false);

  function generateArray() {
    const temp: number[] = [];

    for (let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * 300) + 20);
    }

    setArray(temp);
  }

  useEffect(() => {
    generateArray();
  }, [size]);

  async function startSorting() {
    setIsSorting(true);

    setComparisons(0);
    setSwaps(0);

    await bubbleSort(
      array,
      setArray,
      setComparisons,
      setSwaps,
      speed
    );

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
      />

      <ArrayBars array={array} />

      <PerformancePanel
        comparisons={comparisons}
        swaps={swaps}
      />
    </div>
  );
}

export default App;
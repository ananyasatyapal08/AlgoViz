import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import ArrayBars from "./components/ArrayBars";
import PerformancePanel from "./components/PerformancePanel";

function App() {

  const [array, setArray] = useState<number[]>([]);
  const [size, setSize] = useState(20);

  function generateArray() {

    const temp = [];

    for(let i=0;i<size;i++){
      temp.push(Math.floor(Math.random()*300)+20);
    }

    setArray(temp);
  }

  useEffect(()=>{
    generateArray();
  },[size]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <Controls
        generateArray={generateArray}
        size={size}
        setSize={setSize}
      />

      <ArrayBars array={array}/>

      <PerformancePanel />

    </div>
  );
}

export default App;
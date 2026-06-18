import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import ArrayBars from "./components/ArrayBars";
import PerformancePanel from "./components/PerformancePanel";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <Controls />

      <ArrayBars />

      <PerformancePanel />

    </div>
  );
}

export default App;
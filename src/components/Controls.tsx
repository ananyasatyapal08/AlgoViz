function Controls() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">

      <select className="bg-slate-800 p-3 rounded-lg">
        <option>Bubble Sort</option>
        <option>Selection Sort</option>
        <option>Insertion Sort</option>
      </select>

      <button className="bg-cyan-500 px-5 py-3 rounded-lg">
        Generate Array
      </button>

      <button className="bg-green-500 px-5 py-3 rounded-lg">
        Start Sorting
      </button>

    </div>
  );
}

export default Controls;
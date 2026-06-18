interface Props{
    generateArray:()=>void;
    size:number;
    setSize:React.Dispatch<React.SetStateAction<number>>;
}

function Controls({generateArray,size,setSize}:Props){

  return(

    <div className="flex flex-wrap justify-center gap-6 mt-6">

      <select className="bg-slate-800 p-3 rounded-lg">
        <option>Bubble Sort</option>
        <option>Selection Sort</option>
        <option>Insertion Sort</option>
      </select>

      <div>

        <p>Array Size : {size}</p>

        <input
          type="range"
          min="5"
          max="50"
          value={size}
          onChange={(e)=>setSize(Number(e.target.value))}
        />

      </div>

      <button
      className="bg-cyan-500 px-5 py-3 rounded-lg"
      onClick={generateArray}
      >
        Generate Array
      </button>

      <button className="bg-green-500 px-5 py-3 rounded-lg">
        Start Sorting
      </button>

    </div>
  )
}

export default Controls;
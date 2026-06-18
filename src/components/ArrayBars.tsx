interface Props {
  array:number[];
  activeIndices:number[];
  sorted:boolean;
}

function ArrayBars({
  array,
  activeIndices,
  sorted
}:Props){

  return(

    <div className="flex items-end justify-center gap-1 h-[450px] mt-12 px-4">

      {
        array.map((value,index)=>(

          <div
            key={index}
            className={`
            rounded-t-lg
            shadow-lg
            transition-all duration-150
            ${
              sorted
              ? "bg-green-500"
              : activeIndices.includes(index)
              ? "bg-red-500"
              : "bg-cyan-400"
            }
            `}
            style={{
              height:`${value}px`,
              width:`${Math.max(12,800/array.length)}px`
            }}
          />

        ))
      }

    </div>

  )
}

export default ArrayBars;
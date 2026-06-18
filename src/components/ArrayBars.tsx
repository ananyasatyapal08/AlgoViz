interface Props{
  array:number[];
  activeIndices:number[];
}

function ArrayBars({
  array,
  activeIndices
}:Props){

  return(

    <div className="flex items-end justify-center gap-1 h-96 mt-10">

      {
        array.map((value,index)=>(

          <div
            key={index}
            className={`rounded transition-all duration-100
            ${
              activeIndices.includes(index)
              ? "bg-red-500"
              : "bg-cyan-400"
            }`}
            style={{
              height:`${value}px`,
              width:"20px"
            }}
          />

        ))
      }

    </div>

  )
}

export default ArrayBars;
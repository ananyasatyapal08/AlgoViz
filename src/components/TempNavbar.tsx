interface Props{
  darkMode:boolean;
  setDarkMode:React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({
  darkMode,
  setDarkMode
}:Props){

  return(

    <div className="flex flex-col items-center py-8 relative">

      <button
      className="absolute right-10 top-8 bg-slate-700 px-4 py-2 rounded-xl"
      onClick={()=>setDarkMode(!darkMode)}
      >

        {
          darkMode
          ?
          "☀ Light"
          :
          "🌙 Dark"
        }

      </button>

      <h1
      className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      >

        AlgoViz

      </h1>

      <p className="mt-4 text-gray-400 text-lg md:text-xl">

        DSA Visualizer & Performance Analyzer

      </p>

    </div>

  )

}

export default Navbar;
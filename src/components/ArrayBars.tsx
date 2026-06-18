function ArrayBars() {

  const arr = [100, 50, 200, 80, 160, 120];

  return (
    <div className="flex items-end justify-center gap-2 h-96 mt-12">

      {arr.map((value, index) => (
        <div
          key={index}
          className="bg-cyan-400 w-10 rounded"
          style={{ height: `${value}px` }}
        />
      ))}

    </div>
  );
}

export default ArrayBars;
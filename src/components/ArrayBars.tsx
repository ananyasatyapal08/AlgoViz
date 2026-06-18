interface Props {
  array: number[];
}

function ArrayBars({ array }: Props) {
  return (
    <div className="flex items-end justify-center gap-1 h-96 mt-10">
      {array.map((value, index) => (
        <div
          key={index}
          className="bg-cyan-400 rounded"
          style={{
            height: `${value}px`,
            width: "20px",
          }}
        />
      ))}
    </div>
  );
}

export default ArrayBars;
interface Props {
  comparisons: number;
  swaps: number;
}

function PerformancePanel({
  comparisons,
  swaps,
}: Props) {
  return (
    <div className="flex justify-center gap-10 mt-8 text-lg">

      <div className="bg-slate-800 px-6 py-4 rounded-lg">
        Comparisons : {comparisons}
      </div>

      <div className="bg-slate-800 px-6 py-4 rounded-lg">
        Swaps : {swaps}
      </div>

      <div className="bg-slate-800 px-6 py-4 rounded-lg">
        Time Complexity : O(n²)
      </div>

    </div>
  );
}

export default PerformancePanel;
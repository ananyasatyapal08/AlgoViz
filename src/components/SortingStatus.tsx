interface Props {
  sorted: boolean;
  timeTaken: number;
}

function SortingStatus({
  sorted,
  timeTaken
}: Props) {

  if (!sorted) return null;

  return (
    <div className="w-[90%] mx-auto mt-8">

      <div
        className="
        bg-green-600
        rounded-2xl
        p-6
        shadow-lg
        text-center
        animate-pulse
        "
      >

        <h2 className="text-3xl font-bold">
          Sorting Completed ✅
        </h2>

        <p className="text-lg mt-3">
          Finished in {timeTaken} ms
        </p>

      </div>

    </div>
  );
}

export default SortingStatus;
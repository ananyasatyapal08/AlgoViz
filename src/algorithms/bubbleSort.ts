export async function bubbleSort(
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparisons: React.Dispatch<React.SetStateAction<number>>,
  setSwaps: React.Dispatch<React.SetStateAction<number>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number
) {
  const temp = [...arr];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < temp.length - 1; i++) {
    for (let j = 0; j < temp.length - i - 1; j++) {

      // Highlight current bars
      setActiveIndices([j, j + 1]);

      comparisons++;
      setComparisons(comparisons);

      // Delay so comparison can be visualized
      await new Promise((resolve) =>
        setTimeout(resolve, speed)
      );

      if (temp[j] > temp[j + 1]) {

        swaps++;
        setSwaps(swaps);

        // Swap elements
        [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];

        // Update array for rendering
        setArray([...temp]);

        // Delay after swap
        await new Promise((resolve) =>
          setTimeout(resolve, speed)
        );
      }
    }
  }

  // Remove highlighting after sorting finishes
  setActiveIndices([]);
}
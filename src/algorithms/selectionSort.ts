export async function selectionSort(
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

    let minIndex = i;

    for (let j = i + 1; j < temp.length; j++) {

      setActiveIndices([minIndex, j]);

      comparisons++;
      setComparisons(comparisons);

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      );

      if (temp[j] < temp[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {

      swaps++;
      setSwaps(swaps);

      [temp[i], temp[minIndex]] =
      [temp[minIndex], temp[i]];

      setArray([...temp]);

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      );
    }
  }

  setActiveIndices([]);
}
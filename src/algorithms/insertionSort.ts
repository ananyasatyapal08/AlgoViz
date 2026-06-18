export async function insertionSort(
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

  for (let i = 1; i < temp.length; i++) {

    let key = temp[i];
    let j = i - 1;

    while (j >= 0 && temp[j] > key) {

      setActiveIndices([j, j + 1]);

      comparisons++;
      setComparisons(comparisons);

      temp[j + 1] = temp[j];

      swaps++;
      setSwaps(swaps);

      setArray([...temp]);

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      );

      j--;
    }

    temp[j + 1] = key;

    setArray([...temp]);

    await new Promise(resolve =>
      setTimeout(resolve, speed)
    );
  }

  setActiveIndices([]);
}
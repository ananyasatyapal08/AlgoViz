export async function quickSort(
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparisons: React.Dispatch<React.SetStateAction<number>>,
  setSwaps: React.Dispatch<React.SetStateAction<number>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number
) {

  let temp = [...arr];

  let comparisons = 0;
  let swaps = 0;

  async function partition(low: number, high: number) {

    let pivot = temp[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {

      setActiveIndices([j, high]);

      comparisons++;
      setComparisons(comparisons);

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      );

      if (temp[j] < pivot) {

        i++;

        swaps++;
        setSwaps(swaps);

        [temp[i], temp[j]] = [temp[j], temp[i]];

        setArray([...temp]);

        await new Promise(resolve =>
          setTimeout(resolve, speed)
        );
      }
    }

    swaps++;
    setSwaps(swaps);

    [temp[i + 1], temp[high]] =
      [temp[high], temp[i + 1]];

    setArray([...temp]);

    await new Promise(resolve =>
      setTimeout(resolve, speed)
    );

    return i + 1;
  }

  async function solve(low: number, high: number) {

    if (low < high) {

      let pivotIndex = await partition(low, high);

      await solve(low, pivotIndex - 1);

      await solve(pivotIndex + 1, high);
    }
  }

  await solve(0, temp.length - 1);

  setActiveIndices([]);
}
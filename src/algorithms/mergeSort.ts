export async function mergeSort(
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparisons: React.Dispatch<React.SetStateAction<number>>,
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number
) {

  let comparisons = 0;
  const temp = [...arr];

  async function merge(low: number, mid: number, high: number) {

    let left = low;
    let right = mid + 1;

    let merged: number[] = [];

    while (left <= mid && right <= high) {

      setActiveIndices([left, right]);

      comparisons++;
      setComparisons(comparisons);

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      );

      if (temp[left] <= temp[right]) {
        merged.push(temp[left++]);
      }
      else {
        merged.push(temp[right++]);
      }
    }

    while (left <= mid)
      merged.push(temp[left++]);

    while (right <= high)
      merged.push(temp[right++]);

    for (let i = low; i <= high; i++) {
      temp[i] = merged[i - low];
    }

    setArray([...temp]);

    await new Promise(resolve =>
      setTimeout(resolve, speed)
    );
  }

  async function divide(low: number, high: number) {

    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);

    await divide(low, mid);

    await divide(mid + 1, high);

    await merge(low, mid, high);
  }

  await divide(0, temp.length - 1);

  setActiveIndices([]);
}
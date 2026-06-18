export async function bubbleSort(
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparisons: React.Dispatch<React.SetStateAction<number>>,
  setSwaps: React.Dispatch<React.SetStateAction<number>>,
  speed: number
) {

  let temp = [...arr];

  let comparisons = 0;
  let swaps = 0;

  for(let i=0;i<temp.length-1;i++){

    for(let j=0;j<temp.length-i-1;j++){

      comparisons++;
      setComparisons(comparisons);

      if(temp[j]>temp[j+1]){

        swaps++;
        setSwaps(swaps);

        [temp[j],temp[j+1]]=[temp[j+1],temp[j]];

        setArray([...temp]);

        await new Promise(resolve=>
          setTimeout(resolve,speed)
        );
      }
    }
  }
}
// encontrar o mínimo
// colocá-lo na primeira posição
// encontrar o segundo valor mínimo
// colocá-lo na segunda posição
// repetir o processo até o array estar ordenado
const arr = [5, 3, 4, 1, 2];
const selectionSort = (arr) => { 
  for (let i = 0; i < arr.length; i++){
    let min = Infinity
    let minIndex = -1
    for (let j = i; j < arr.length; j++){
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }  
    }
    [arr[i], arr[minIndex]] = [min, arr[i]]
  }
  return arr
}

const sortedArr = selectionSort(arr)
console.log(sortedArr)
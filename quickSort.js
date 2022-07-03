// Selecionar o valor pivô, no meio do array
// Criar o ponteiro da esquerda no primeiro valor e o da direita no ultimo valor
// Procurar na esquerda um valor maior que o pivô e na direita um valor menor que o pivô
// Trocar esses valores
const arr = [7, 3, 5, 1, 2];

const quickSort = (arr, left=0, right=arr.length - 1) => {
  if(arr.length > 1){
  const pivot = arr[Math.floor(arr.length/2)]
  while (left <= right) {
    if (arr[left] >= pivot && arr[right] <= pivot) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    } else if (arr[left] > pivot) {
      right--
    } else if(arr[right] < pivot){
      left++
    } else {
      left++
      right--
    }
  }
  const leftSide = quickSort(arr.slice(0, left))
  const rightSide = quickSort(arr.slice(left, arr.length))
  return leftSide.concat(rightSide)
  }
  return arr
}

const sortedArr = quickSort(arr)
console.log('final array:' + sortedArr)
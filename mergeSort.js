// Dividir array em arrays até que tenha varios arrays de uma só posição
// ordenar esses arrays
const arr = [4, 3, 5, 1, 2];

const mergeSort = (arr) => {
  if (arr.length > 1) {
    const middle = Math.floor(arr.length/2)
    const leftSide = mergeSort(arr.slice(0, middle))
    const rigthSide = mergeSort(arr.slice(middle, arr.length))
    const result = []
    let i = 0
    let j = 0
    while (i < leftSide.length && j < rigthSide.length) {
      if (leftSide[i] < rigthSide[j]) {
        result.push(leftSide[i])
        i++
      } else {
        result.push(rigthSide[j])
        j++
      }
    }
    if (i < leftSide.length) {
      return result.concat(leftSide.slice(i))
    } else {
      return result.concat(rigthSide.slice(j))
    }
  }
  return arr
}

const sortedArr = mergeSort(arr)
console.log(sortedArr)
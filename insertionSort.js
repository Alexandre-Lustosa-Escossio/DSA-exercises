// Colocar primeiro valor no novo array
// testar se segundo valor é maior ou menor que primeiro valor
// se o segundo valor for maior que o primeiro deixar ele na mesma posição
// se o segundo valor for menor que o primeiro, inserir ele na posição do primeiro e colocar o primeiro uma posição à frente
// fazer isso para os demais
const arr = [4, 3, 5, 1, 2];
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++){
        if (arr[i] < arr[j]) {
          let aux = arr[i]
          arr.splice(i, 1)
          arr.splice(j, 0, aux)
        }
      }
    }
  }
  return arr
}

const sorted = insertionSort(arr)
console.log(sorted)

// Desempenho melhor que selection e bubble sort para arrays pequenos
const testValue = [4, 2, 76, 35, 7, 23, 50, 10, 15, 14, 21]
// let testValue = [4, 2, 3, 1]

function mergeSort(array, h = array.length) {
  if (h === 1) {
    return array
  }
  if (0 < h) {
    let mid = Math.floor(h / 2)
    let leftHalf = array.slice(0, mid)
    let rightHalf = array.slice(mid)
    return merge(mergeSort(leftHalf), mergeSort(rightHalf), leftHalf.length, rightHalf.length)
  }
}

console.log(mergeSort(testValue))

function merge(A, B, m, n) {
  let i = 0
  let j = 0
  let k = 0
  let C = []
  while (i < m && j < n) {
    if (A[i] < B[j]) {
      C[k++] = A[i++]
    } else if (A[i] > B[j]) {
      C[k++] = B[j++]
    }
  }
  for (; i < m; i++) {
    C[k++] = A[i]
  }
  for (; j < n; j++) {
    C[k++] = B[j]
  }
  return C
}
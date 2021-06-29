// find Fibonacci 
const fib = (n) => {
  if (n == 0) {
    return 0
  }
  else if (n == 1) {
    return 1
  }
  else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(7));


const bubbleSort = (arr) => {
  const size = arr.length
  for (let i = size - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }

    }
  }
  return arr
}
console.group("bubbleSort")
console.log(bubbleSort([7, 5, 2, 4, 3, 9]));//[2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9, 7, 5, 4, 3, 1]));//[1, 3, 4, 5, 7, 9]
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));//[1, 2, 3, 4, 5, 6]
console.groupEnd("bubbleSort")

const selectionSort = (arr) => {
  let minIdx,
    size = arr.length;
  for (let i = 0; i < size; i++) {
    minIdx = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
  return arr;
}
console.group("selectionSort")
console.log(selectionSort([7, 5, 2, 4, 3, 9]));//[2, 3, 4, 5, 7, 9]
console.log(selectionSort([9, 7, 5, 4, 3, 1]));//[1, 3, 4, 5, 7, 9]
console.log(selectionSort([1, 2, 3, 4, 5, 6]));//[1, 2, 3, 4, 5, 6]
console.groupEnd("selectionSort")

console.group("mergeSort")

const mergeSort = (arr) => {
  let size = arr.length;
  if (size < 2)
    return arr;
  let mid = Math.floor(size / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  console.log("mergeSort", left, right);
  return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) => {
  console.log("merge", left, right);
  let result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }
  console.log("left.slice(l)", left.slice(l));
  console.log("right.slice(r)", right.slice(r));
  console.log("result", result);
  console.log("l", l);
  console.log("r", r);
  console.log("result concat", result.concat(left.slice(l)).concat(right.slice(r)));
  return result.concat(left.slice(l)).concat(right.slice(r));
}
console.log(mergeSort([5, 4, 3, 2, 1]));//[2, 3, 4, 5, 7, 9]
console.groupEnd("selectionSort")

// https://khan4019.github.io/front-end-Interview-Questions
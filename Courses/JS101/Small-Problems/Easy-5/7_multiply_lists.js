/* JS101 - Small Problems > Easy 5 > 7. Multiply Lists

Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

ALGORITHM */

function multiplyList(numbers1, numbers2) {
  let result = [];

  for (let idx = 0; idx < numbers1.length; idx += 1) {
    result.push(numbers1[idx] * numbers2[idx]);
  }

  return result;
}

// Example:
console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

/* Discussion

Given that both arguments will be of the same `length`, the solution uses a `for` loop to iterate over the values at their respective indices. During each iteration, it computes the product of multiplying the values at the current index of each array, and pushes that product to a `result` array. After the loop has finished, it returns the `result` array. */

// Elaine `map`
// function multiplyList(numArr1, numArr2) {
//   return numArr1.map((_, idx) => numArr1[idx] * numArr2[idx]);
// }

// `reduce`
// function multiplyList(numArr1, numArr2) {
//   return numArr1.reduce((newArr, _, idx) => {
//     newArr.push(numArr1[idx] * numArr2[idx])
//     return newArr;
//   }, []);
// }

// William Baker
// let multiplyList = function (arr1, arr2) {
//   return arr1.map((elem, idx) => elem * arr2[idx]);
// };

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
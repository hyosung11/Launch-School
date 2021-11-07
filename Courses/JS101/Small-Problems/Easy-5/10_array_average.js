/* JS101 - Small Problems > Easy 5. > 10. Array Average

Array Average

Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

ALGORITHM
- add all elements of array together
- average the elements rounded down integer component */

function average(numbers) {
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }

  return Math.floor(sum / numbers.length);
}

// `forEach`
// function average(numbers) {
//   let sum = 0;
//   numbers.forEach(number => sum += number);
//   return Math.floor(sum / numbers.length);
// }

// `reduce`
// function average(numbers) {
//   let sum = numbers.reduce((sum, number) => sum + number);
//   return Math.floor(sum / numbers.length);
// }

// const average = (numbers) => {
//   let sum = numbers.reduce((sum, number) => sum + number);
//   return Math.floor(sum / numbers.length);
// }

// Examples:
console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40

/* Discussion

The solution uses a `for` loop to iterate over the `numbers` array argument. During each iteration, it increments the `sum` variable by the value at the current index. After the loop, the solution returns the floored result of the `sum` divided by the `length` of the `numbers` array.

Further Exploration

Try to solve this problem using `Array.prototype.forEach` method. Did you manage to do it? Was it difficult? Now try to to solve it using `Array.prototype.reduce` method. */
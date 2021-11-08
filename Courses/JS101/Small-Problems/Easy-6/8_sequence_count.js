/* JS101 - Small Problems > Easy 6 > 8. Sequence Count

Sequence Count

Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array. */

function sequence(count, startNumber) {
  let result = [];

  for (let num = 1; num <= count; num += 1) {
    result.push(num * startNumber);
  }

  return result;
}

// Bob Rodes
// const sequence = (size, inc) => Array.from(Array(size), (_, i) => (i +1) * inc);

// Examples:
console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []

/* Discussion

The solution uses a `for` loop to create the sequence and store it in the `result` array. The loop uses the `count` argument to determine the appropriate number of iterations. During each iteration, we push the product of `num` and the sequential multiplier assigned to `startNum` to the `result` array. After the loop, the solution returns `result`. */

// Seaweed
// function sequence(size, multiple) {
//   let array = new Array(size);
//   for (let idx = 0; idx < size;) {
//     array[idx++] = idx * multiple;
//   }
//   return array;
// }

// Eamon
// function sequence(count, num) {
//   return [...Array(count)].map((_, index) => num * (index + 1));
// }

// function sequence(count, num) {
//   return [...Array(count)].reduce((array, _, index) => {
//     array.push(num * (index + 1));
//     return array;
//   }, []);
// }
/* JS101 - Small Problems > Easy 5 > 6. Multiplicative Average

Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

PROBLEM
- input: array of integers
- output: string

Identify rules
- start with an array of integers
- multiply all of the integers together
- divide result by the number of elements in the array
- return result as string rounded to three decimal places

EXAMPLES / TEST CASES
[3, 5] => 1) 3 x 5 = 15, 2) 15 / 2 = '7.500'

Edge Cases?
- []?

DATA STRUCTURE
- input: array
- intermediary: array to string
- output: string

ALGORITHM
- initialize `total` to value of multiplying all elements together
- take total and divide by number of elements in the array
- turn number into string
- return string to three decimal places

CODE
Implementation of Algorithm
- test code while programming */

function multiplicativeAverage(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}

// Examples:
console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

/* Discussion

The solution iterates over all the elements in the array. With each iteration, it multiplies the `product` variable's value by the value at the current index. After looping, it divides the `product` by the `length` of the `numbers` argument. It then calls the `Number.prototype.toFixed` method on the result, which rounds the number to `3` decimal places and converts it to a string. */

// Emma Story
// function multiplicativeAverage(numbers) {
//   return(numbers.reduce((accumulator, number) => accumulator *= number, 1) / numbers.length).toFixed(3);
// }
/* JS101 - Small Problems > Easy 5 > 8. List of Digits

List of Digits

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Input: positive integer
Output: array of numbers of each digit from number */

// function digitList(number) {
//   let numberStringArray = String(number).split('');
//   let numberArray = [];

//   for (let idx = 0; idx < numberStringArray.length; idx += 1) {
//     let digit = parseInt(numberStringArray[idx], 10);
//     numberArray.push(digit);
//   }

//   return numberArray;
// }

// `map`
function digitList(number) {
  let result = String(number).split('');
  return result.map(element => Number(element));
}

// Examples:
console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]

/* Discussion

The solution converts the `number` argument to a string, then uses the `String.prototype.split` method to split the string into an array of single-digit strings. It then iterates over the array, converting each digit string to a number and pushing it to the `numberArray`. Finally, the solution returns the `numberArray`.

Further Exploration

A more concise approach would be to use the `Array.prototype.map` method. Refactor the current solution to make use of this method, if you haven't already. */

/* Aaron Smith

Here's another solution, using the spread operator and using the fact that we can use the Number constructor as a callback instead of explicit converting in the callback invocation. */

// function digitList(number) {
//   return [...number.toString()].map(Number);
// }

// Bob Rodes
// function digitList(number) {
//   return [...String(number)].map((digit) => Number(digit));
// }
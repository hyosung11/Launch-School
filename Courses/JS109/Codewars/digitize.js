/* Digitize

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9] */

// function digitize(number) {
//   let result = [];
//   let digits = String(number).split('')
//   digits.forEach(num => {
//     result.push(Number(num))
//   })
//   return result;
// }

// function digitize(number) {
//   return String(number)
//     .split('')
//     .map(digit => Number(digit))
// }

// function digitize(number) {
//   return number
//     .toString()
//     .split('')
//     // `+` coerces the string into a number
//     .map(digit => +digit)
// }

// function digitize(number) {
//   return number.toString().split('').map(Number);
// }

console.log(digitize(123));
console.log(digitize(1));
console.log(digitize(0));
console.log(digitize(1230));
console.log(digitize(8675309));

// console.log( digitize(123) === [1, 2, 3]);
// console.log( digitize(1) === [1]);
// console.log( digitize(0) === [0]);
// console.log( digitize(1230) === [1, 2, 3, 0]);
// console.log( digitize(8675309) === [8, 6, 7, 5, 3, 0, 9]);

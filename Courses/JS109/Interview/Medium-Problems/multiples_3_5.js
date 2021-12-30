/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

PROBLEM
- input: number
- output: number as sum

Rules
- return the sum of all the multiples of 3 or 5 of input number below the number passed in
- if input number is negative, return 0
- If the number is a multiple of both 3 and 5, only count it once.

EXAMPLES
- input number is 10 and multiples of 3 or 5 below 10 are 3, 5, 6, 9 and the sum of these numbers is 23

DATA STRUCTURE
- input number
- intermediary: array (reduce method)
- output number

ALGORITHM
- input number
- if number is negative, return 0
- initialize `result` array to push numbers that are multiples of 3 or 5
- loop from 0 to input number
  - if number is a multiple of 3 or 5 && it isn't in the `result` array push it into the array
- compute the sum of values of `result` array
- return sum */

// my solution
// function multiples(number) {
//   if (number < 0) return 0;
//   let result = [];

//   for (let idx = 0; idx < number; idx += 1) {
//     if ((idx % 3 === 0 || idx % 5 === 0) && (!result.includes(idx))) {
//       result.push(idx);
//     }
//   }
//   return result.reduce((sum, num) => sum + num, 0);
// }

// refactored
function multiples(number) {
  let result = [];

  for (let idx = 1; idx < number; idx += 1) {
    if (idx % 3 === 0 || idx % 5 === 0) {
      result.push(idx);
    }
  }
  return result.reduce((sum, num) => sum + num, 0);
}

// declarative solution
// function multiples(number) {
//   let sum = 0;

//   for (let index = 1; index < number; index++) {
//     if (index % 3 === 0 || index % 5 === 0) {
//       sum += index;
//     }
//   }

//   return sum;
// }

console.log(multiples(-1)) // 0
console.log(multiples(10)) // 23
console.log(multiples(15)) // [3, 5, 6, 9, 10, 12, ] => 45
console.log(multiples(20)) // 78
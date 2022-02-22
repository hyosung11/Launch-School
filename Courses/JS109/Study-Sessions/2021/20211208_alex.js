/* Three by Three Problem Description

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

PEDAC

PROBLEM
- input: array of strings
- output: boolean

Rules
- return true if at least three elements in the array are comprised of digits whose sum is divisible by 3
- return false if there are less than 3 elements whose sum is divisible by 3
- if length of the array is less than 3 return false

Examples

Edge Cases?
- are all the elements in the input array comprised of strings of digits
- what about negative numbers?
- empty array?

Data Structure
- input: string
- intermediary: strings to numbers to an array
- output: boolean

Algorithm
- input array of strings
- check that length of array is not less than 3
  - if less than 3 return false
- initialize `count` to 0
- loop through input array
  - initialize `sum` to 0
  - for each element, split into an array
  - iterate over each element in the array
    - increment `sum` by each element in the array coerced to a number
    - if the remainder of that sum divided by 3 is 0 increment count by 1
if count >= 3 return true
if count < 3 return false */

function threeByThree(array) {
  if (array.length < 3) return false;

  let count = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    let sum = 0;
    let digits = array[idx];

    for (let jdx = 0; jdx < digits.length; jdx += 1) {
      sum += Number(digits[jdx]);
    }

    if (sum % 3 === 0) count += 1;
  }

  return count >= 3;
}

console.log(threeByThree(['01112', '2043'])); // false
console.log(threeByThree(['01112', '2043', '12043'])); // false
console.log(threeByThree(['93', '9', '1', '25', '1212'])); // true
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043'])); // true


// function threeByThree(array) {
//   if (array.length < 3) return false;

//   let count = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     let sum = 0;
//     let digits = array[idx].split('');

//     for (let jdx = 0; jdx < digits.length; jdx += 1) {
//       sum += Number(digits[jdx]);
//     }

//     if (sum % 3 === 0) count += 1;
//   }

//   return count >= 3;
// }

// With `forEach` and helper function
// function threeByThree(array) {
//   if (array.length < 3) return false;

//   let count = 0;

//   array.forEach((element) => {
//     if (sumDivisibleBy3(element)) count += 1;
//   });

//   return count >= 3;
// }

// function sumDivisibleBy3(string) {
//   return (
//     string.split('').reduce((total, value) => total + Number(value), 0) % 3 ===
//     0
//   );
// }

// // Concise Version
// function threeByThree(array) {
//   let arrayOfThrees = array
//     .map((string) => string.split(''))
//     .map((subArray) => subArray.reduce((acc, nb) => acc + Number(nb), 0))
//     .filter((nb) => nb % 3 === 0);

//   if (arrayOfThrees.length >= 3) return true;
//   return false;
// }
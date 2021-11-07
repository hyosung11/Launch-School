/* JS101 - Small Problems > Easy 5 > 4. Find the Duplicate

Find the Duplicate

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array
- output: value as a number

Identify rules
- start with an unordered array of numbers
- one value occurs twice
- find the value that occurs twice
- return the duplicate value from the array

EXAMPLES / TEST CASES
[1, 5, 3, 1] => 1

DATA STRUCTURE
- input: array
- intermediary: ?
- output: single value as number

ALGORITHM
- sort the array from lowest to highest
  - comp

CODE
Implementation of Algorithm
- test code while programming */

// solution 1
function findDuplicate(array) {
  let seen = {};

  for (let idx =0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}

// solution 2
// function count(array, element) {
//   let count = 0;
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (array[idx] === element) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function findDup(array) {
//   return array.find(element => count(array, element) === 2);
// }

// Examples:
console.log(findDuplicate([1, 5, 3, 1])); // 1
console.log(findDuplicate([1, 2, 3, 4, 4, 5])); // 4
console.log(findDuplicate([18,  9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58])); // 73
console.log(findDuplicate([1, 2, 3, 4]));
/* Discussion

The first solution uses a `seen` object to keep track of the values iterated over. In the `for` loop, any time that the `seen` object evaluates as true, stop looping and return the value at the current iteration.

Note that this solution uses a `return` `undefined` statement at the end of the function; this statement isn't strictly necessary since an implicit return returns `undefined`, as does `return` without a value. However, ESLint will complain about such code since a missing return may be an error. The explicit return satisfies ESLint and also shows that your intent is to return `undefined`.

In the second solution, we use the method Array.prototype.find() to look through each item in our array. If that item meets some condition we return it. In this case, the condition we check is that that item occurs twice. This bit of code will allow us to find the duplicate element regardless of the size of the array. To determine the count of the element we use the helper function count() whose implementation is pretty straightforward. */

// Curtis Sommerlatte
// function findDup(array) {
//   return array.filter((value, index, array) => index !== array.lastIndexOf(value)).pop();
// }

// Alex Stein
// function findDup(arr) {
//   let newArr = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (newArr.includes(arr[index])) {
//       return arr[index];
//     } else {
//       newArr.push(arr[index]);
//     }
//   }
//   return 'no duplicates';
// }
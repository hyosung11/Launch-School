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
function findDup(array) {
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

// Examples:
console.log(findDup([1, 5, 3, 1])); // 1
console.log(findDup([1, 2, 3, 4, 4, 5])); // 4
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58])); // 73

/* Discussion

The first solution uses a `seen` object to keep track of the values iterated over. In the `for` loop, any time that the `seen` object evaluates as true, stop looping and return the value at the current iteration.

Note that this solution uses a `return` `undefined` statement at the end of the function; this statement isn't strictly necessary since an implicit return returns `undefined`, as does `return` without a value. However, ESLint will complain about such code since a missing return may be an error. The explicit return satisfies ESLint and also shows that your intent is to return `undefined`.


*/
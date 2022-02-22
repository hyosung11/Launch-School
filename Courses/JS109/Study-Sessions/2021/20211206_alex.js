/* Read the problem out loud to get yourself talking. Walk through the test cases and map them to the problem description.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM

1. Read the problem description.
2. Identify expected inputs and outputs.
3. Identify rules/requirements.
4. Understand the problem domain (including implicit requirements).
5. Make the requirements explicit (ask clarifying questions).
6. Create mental model of the problem (optional).

EXAMPLES / TEST CASES

1. Validate understanding of the problem.
2. Understand how the input translates to output.
3. Identify edge cases: e.g., 0, "", [], {}.
4. Create test cases and confirm outputs if necessary.

DATA STRUCTURE

1. Determine what kind of data you are dealing with primarily: strings, numbers, arrays, objects, etc.
2. Consider how to represent the data when converting the input to output and what methods to use:

- input
- intermediary
- output

ALGORITHM

1. Manifest steps for converting input to output.
2. Handle edge cases and valid example inputs.
3. Use your algorithm to determine how to code.

CODE

1. Implement the algorithm as you write the code.
2. Use everything you've gathered from PEDA.
3. Test code while programming.
4. Debug
   1. check for errors in output
   2. carefully review algorithm before looking at your code
   3. once you've identified the issue, change the algorithm first, then fix the code
   4. try again
5. Solve the problem.


Progressions

Medium Problem
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

PROBLEM
- input: an array of integers
- output: a number

Rules
- differences between each of three numbers must be same
- each progression must have 3 numbers
- elements are unique and already sorted

Examples
-see above

Data Structures
- input: array
- intermediary: array of arrays
- output: number (length of array of arrays)

Algo
- guard clause - if length of array is less than 3, return 0
- create empty arrayOfArrays to hold progressions
- loop through our input array from index 0 to its length minus 3
  - loop through remaining indices and find difference between current index and original index
    - once we have that difference, loop through remaining indices after second loop current index and see if difference between second loop index and current index equals difference between first loop index and second loop index
    -if initial difference equals current difference, add [first loop index, second loop index, third loop index] to arrayOfArrays
- return length of arrayOfArrays */

function progressions(array) {
  let result = [];

  for (let idx = 0; idx <= array.length - 3; idx += 1) {

    for (let jdx = idx + 1; jdx < array.length; jdx += 1) {
      let difference1 = array[jdx] - array[idx];

      for (let kdx = jdx + 1; kdx < array.length; kdx += 1) {
        let difference2 = array[kdx] - array[jdx];
        if (difference1 === difference2) {
          result.push([array[idx], array[jdx], array[kdx]]);
        }
      }
    }
  }

  return result.length;
}


  console.log(progressions([]));  // 0
  console.log(progressions([1, 2]));  // 0
  console.log(progressions([1, 2, 3]));  // 1
  console.log(progressions([1, 2, 4]));  // 0
  console.log(progressions([1, 20, 21, 22]));  // 1
  console.log(progressions([1, 10000001, 20000001]));  // 1
  console.log(progressions([1, 2, 3, 4, 5])); // 4
  console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
  console.log(progressions([1, 2, 3, 4, 5]));  // 4
  console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

  // function progressions(array) {
//   let arrayOfArrays = [];

//   for (let idx = 0; idx <= array.length - 3; idx += 1) {

//     for (let jdx = idx + 1; jdx < array.length; jdx += 1) {
//       let difference1 = array[jdx] - array[idx];

//       for (let kdx = jdx + 1; kdx < array.length; kdx += 1) {
//         let difference2 = array[kdx] - array[jdx];
//         if (difference1 === difference2) {
//           arrayOfArrays.push([array[idx], array[jdx], array[kdx]])
//         }
//       }
//     }
//   }
  
//   return arrayOfArrays.length;
// }
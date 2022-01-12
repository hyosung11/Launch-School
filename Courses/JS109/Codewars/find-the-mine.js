/* Find the Mine! - 6 kyu

You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.
Examples:

mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

PROBLEM
- input 2D array
- output: array indicating location of mine (the number 1) by its row index and column index => [x, x]

Rules
- return location of the mine (the number 1) in the nested array
- all other areas in the 2D array represented as 0s
- all 2D arrays passed into your function will be square (NxN)
- only one mine in the array

EXAMPLES
- [ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ] => [2, 2]

DATA STRUCTURE
- input nested array
- intermediary: array
- output: array

ALGORITHM
- input nested array
- initialize `result` to empty array
- loop through outer array
  - loop through inner arrays
  - if element at index is 1
  - push index in outer array and index in inner array to `result`
- return array of two elements indicating the row and column */

function mineLocation(array) {
  let result = [];

  for (let idx = 0; idx < array.length; idx ++) {
    for (let jdx = 0; jdx < array[idx].length; jdx++) {
      if (array[idx][jdx] === 1) result.push(idx, jdx)
      }
    }

  return result;
}

console.log(mineLocation([ [1, 0], [0, 0] ])); // [0, 0])
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])); // [0, 0])
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ])); // [2, 2])

/*
Input: nested arrays
Output: array
Rules:
- take the nested array input full of 0's and one 1, and return the location of the single 1
- return the location in an array
- all nested arrays passed into the function will be square and there will be only one 1 in the array

Algorithm
- iterate over the outer array
   - iterate over the inner array, if the value at the current index is 1, return an array with the first loops index, followed
   by the second loops index
*/

// function mineLocation(field){
//   for (let idx = 0; idx < field.length; idx++) {
//     for (let jdx = 0; jdx < field[idx].length; jdx++) {
//       if (field[idx][jdx] === 1) return [idx, jdx];
//     }
//   }
// }

function mineLocation(field) {
  const MINE = 1;
  for (let idx = 0; idx < field.length; idx++) {
    for (let jdx = 0; jdx < field[idx].length; jdx++) {
      if (field[idx][jdx] === MINE) return [idx, jdx];
    }
  }
}

/*
Input: nested array
Output: array
Rules
- take the nested array and located the 1 and returns its index e: [2, 1]
- the first index in the return is the array's index and the second is the index of the `1`'s location within the nested array
- there will always only be one `1`

Algorithm
- create empty result array
- iterate over the input array
  - iterate over the nested array
  - if the element is a 1, push the first loops index and the second loops index into the result array and return it
*/

function mineLocation(field) {
  let result = [];

  field.forEach((nestedArray, idx) => {
    nestedArray.forEach((value, jdx) => {
      if (value === 1) result.push(idx, jdx)
    });
  });

  return result;
}

/*
keep track of the row idx -> loop through each element A in the array
for each A find indexOf num 1 if not -1,
return that index and assign it to column idx
*/

const mineLocation = (mineMap) => {
  let [row, column] = [0, 0];

  for (let rowIdx = 0; rowIdx < mineMap.length; rowIdx++) {
    if (mineMap[rowIdx].indexOf(1) !== -1) {
      [row, column] = [rowIdx, mineMap[rowIdx].indexOf(1)];
    }
  }

  return [row, column];
};
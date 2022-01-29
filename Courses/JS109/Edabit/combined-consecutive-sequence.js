/* Combined Consecutive Sequence by Helen Yu

Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

Examples
- consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true
- consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false
- consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false
- consecutiveCombo([44, 46], [45]) ➞ true

Notes
- The input arrays will have unique values.
- The input arrays can be in any order.

Problem
- input: array1 and array2
- output: boolean

Rules
- return true if two arrays when their integers are combined create a consecutive sequence
- otherwise return false
- input arrays have unique values
- input arrays are not sorted

Examples
- see above

Data Structure
- input: two arrays
- intermediary: array
- output: boolean

ALGORITHM
- input array1 and array2
- concat the arrays
- sort the arrays in ascending order
- iterate through the sorted array
  - if the value at the higher index position minus the value at the lower index position is not 1 return false
- return true
*/


function consecutiveCombo(array1, array2) {
  let comboSort = array1.concat(array2).sort((a, b) => a - b);

  for (let idx = 0; idx < comboSort.length - 1; idx++) {
    if (comboSort[idx + 1] - comboSort[idx] !== 1) return false
  }

  return true;
}

console.log(consecutiveCombo([1, 4, 5, 7], [2, 3, 6]) === true);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 7, 8, 9]) === false);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) === false);
console.log(consecutiveCombo([7, 5, 4, 1], [2, 3, 6, 8]) === true);
console.log(consecutiveCombo([33, 34, 40], [39, 38, 37, 36, 35, 32, 31, 30]) === true);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) === false);
console.log(consecutiveCombo([44, 46], [45]) === true);
console.log(consecutiveCombo([4, 3, 1], [2, 5]) === true);
console.log(consecutiveCombo([4, 3, 1], [2, 5, 7, 6]) === true);
console.log(consecutiveCombo([4, 3, 1], [7, 6, 5]) === false);
console.log(consecutiveCombo([4, 3, 1], [0, 7, 6, 5]) === false);
console.log(consecutiveCombo([44, 46], [45]) === true);
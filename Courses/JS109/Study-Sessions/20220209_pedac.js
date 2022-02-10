/* JS100/101 Study Session - PEDAC: More Advanced Problems

Antonina in EEST so plus 7 hours from EST

Introductions
- Michael, living in Italy, prep for interview, use PEDAC to organize my thoughts, improve my PEDAC to make it more detailed
- Daniel Ebron, NYC, get better at PEDAC, specifically the algorithm
- H, need to reference algorithm during coding
- Gianni Barber, prep for written assessment, too much detail in algorithm, getting the level of abstraction right
- Tyler Wenzel, Columbus OH, JS101 L6, level of granularity for PEDAC

You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10


/*
UNDERSTAND THE PROBLEM

Input: array of integers
Output: number ( non-negative integer), that represents the number of arithmetic progressions
Rules:
  -the differences between the subsequent numbers in each progression must be the same
  -each progression is of length 3
  -one number might belong to more than one progression
  -all numbers in input array are unique
  -the input array will be sorted
  -the differences in each progression don't have to be equal

Questions:

DATA STRUCTURE
nested array of the progressions

ALGORITHM
- input array of integers
- init `count` to 0
- iterate through array from idx 0
  - iterate through array from idx + 1
    - iterate through array from idx + 2
      - if num at idx + 1 - num at idx equals num at idx + 2 - num at idx + 1
        - increment count
- return count
*/

function progressions(array) {
  let count = 0;

  for (let idx = 0; idx < array.length; idx++) {
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      for (let kdx = jdx + 1; kdx < array.length; kdx++) {
        if (array[kdx] - array[jdx] === array[jdx] - array[idx]) {
          count += 1;
        }
      }
    }
  }

  return count;
}
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5])); // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

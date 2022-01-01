/* Common Elements Problem

Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

PEDA
- Input: two lists of numbers sorted in ascending order
- Output: array of numbers that are common to both input arrays

Rules/notes:
- Lists are sorted
- - Try doing this problem with O(n + m) time complexity.
Numbers can be negative
- There can be more than one number of each in each input array
- Returned array shall only have one of each number
- If no common numbers, return empty array

Examples/test cases:
common_elements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

common_elements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

common_elements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

common_elements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Questions
What if one or both input lists are empty? -> return empty array
Need to validate input? -> Assume no

Data Structure:
- Array

Algorithm:
- Given two lists of numbers, list1 and list2
- Create an empty array, results, to hold the common values of list1 and list2.
- Loop through list1 one item at a time.
  - For each item, check if there is a common item in list2.
  - If there is a common item, check if it already exists in the results array
  - If the item does not exist in the results array, add it to the array
When the loop ends, return the results array. */

function commonElements(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx++) {
    let num1 = array1[idx];

    for (let jdx = 0; jdx < array2.length; jdx++) {
      let num2 = array2[jdx];

      if ((num1 === num2) && (!result.includes(num1))) result.push(num1);
    }
  }

  return result;
}

// Examples/test cases:
console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]

console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

/* with Laurent 20211117

PROBLEM
Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

Returned array shall only have one of each number
If no common numbers, return empty array

Input: 2 arrays of numbers
Output:

ALGORITHM
- input two number array
- initialize `result` array to an empty array
- iterate through first array
  - check value of element at index i
    - iterate through the second array
      - check if element at index i is the same as element at index j
        - if it is a match, we add it to the `result` array
- return an array of numbers common to both */

function commonElements(array1, array2) {
  let result = [];
  let lastPushed = null;

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i] === array2[j]) {
        if (array1[i] === lastPushed) continue;
        result.push(array1[i]);
        lastPushed = array1[i];
      }
    }
  }

  return result;
}

// Laurent's version
function commonElements(array1, array2) {
  let lastPushed = null;

  return array1.filter((number) => {
    if (number === lastPushed) return false;
    lastPushed = number;
    return array2.includes(number);
  });
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); //  ➞ [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2])); // ➞ [1, 2]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

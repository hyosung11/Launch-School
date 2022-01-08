/* Codewars - 7 kyu

Find all pairs

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:
- Array can be empty or contain only one value; in this case return 0
- If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
- Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

PROBLEM
- input: array of integers
- output: number representing count of pairs in the input array

Rules
- return count of how many pairs of integers occur in input array
- if array is empty return 0
- if array's length is 1, return 0
- if more than one pair of a number, count each additional pair only once
  - E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)

EXAMPLES
- see below

DATA STRUCTURE
- input: array
- intermediary: subarrays
- output: number

ALGORITHM
- input array of integers
- initialize `count` to 0
- if array's length is 0 or 1, return 0
- sort the array
- iterate through array
  - iterate through integers
    - if number at idx is equal to number at jdx
      - increment count
- return `count` representing amount of pairs in array */

// function duplicates(array) {
//   let count = 0;
//   // if (array.length === 0 || array.length === 1) return 0;
//   let sortedArray = array.slice(0).sort((a, b) => a - b);
//   // [0, 0, 0, 0, 0, 0, 0]
//   for (let idx = 0; idx < sortedArray.length; idx++) {
//     // idx = 0: 0 === 0
//     // idx = 2: 0 === 0
//     // idx = 4: 0 === 0
//     if (sortedArray[idx] === sortedArray[idx + 1]) {
//       count += 1;
//       // this is the key to the solution - increment the index, so it skips an element
//       idx += 1;
//     }
//   }
//   return count;
// }

// function duplicates(array) {
//   let count = 0;
//   let sortedArray = array.slice(0).sort((a, b) => a - b);
//   for (let idx = 0; idx < sortedArray.length; idx++) {
//     if (sortedArray[idx] === sortedArray[idx + 1]) {
//       count += 1;
//       idx += 1;
//     }
//   }
//   return count;
// }

/* Alex's Algo
Create empty obj
Create variable pairs = 0
Iterate through array
  if object already has element coerced to a string as a key, increment its value by 1; if not, add element as a property on the obj and assign value of 1
Filter object keys for those elements for which obj[element] is greater than 1
Iterate through filtered keys
  -for each element, increment pairs by obj[element] / 2
Return pairs */

// function duplicates(array) {
//   let result = {};
//   let count = 0;

//   array.forEach(num => {
//     result[num] ? result[num] += 1 : result[num] = 1;
//   })

//   let pairs = Object.values(result).filter(value => value > 1).reduce((sum, num) => sum + num, 0);

//   count = Math.floor(pairs / 2);

//   return count;
// }

// function duplicates(array) {
//   let obj = {};
//   let count = 0;
//   array.forEach((item) => (obj[item] = (obj[item] || 0) + 1));
//   for (prop in obj) count += Math.floor(obj[prop] / 2);
//   return count;
// }

// console.log(duplicates([]) === 0);
// console.log(duplicates([54]) === 0);
// console.log(duplicates([1000, 1000]) === 1);
// console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
// // console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3);
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);

// function duplicates(array) {
//   let sortArr = array.sort((a, b) => a - b);
//   let count = 0;

//   for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] == sortArr[i + 1]) {
//       count += 1;
//       i += 1;
//     }
//   }
//   return count;
// }

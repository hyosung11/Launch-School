/* 1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:
Input: arr = [1, 2, 2, 1, 1, 3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

-create an object and count occurrences of each num
-return Object.values(obj).every(val => isUnique(val))
IsUnique (value, arr)
-let count = 0
-iterate through Object values
  -if current element===value,
    Count += 1;
Return count < 2
*/

// function uniqueOccurrences(array) {
//   let count = {};

//   array.forEach((num) => {
//     count[num] = count[num] + 1 || 1;
//   });

//   return Object.values(count).every((val) =>
//     isUnique(val, Object.values(count))
//   );
// }

// function isUnique(value, arr) {
//   let count = 0;

//   for (let idx = 0; idx < arr.length; idx++) {
//     if (arr[idx] === value) {
//       count += 1;
//     }
//   }

//   return count < 2;
// }

// console.log(uniqueOccurrences([1, 2]) === false);
// console.log(uniqueOccurrences([1, 2, 3, 4, 2]) === false);
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]) === true);
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) === true);

/* PROBLEM
Triple Double
Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

Algo
- input two numbers
- change num1 to string1
- change num2 to string2
- iterate through string1 to string1.length - 2
  - if string1[idx] === string1[idx + 1] && string1[idx] === string1[idx + 2] 
    -if string2.includes(string1.slice(idx, idx + 2))
      - return true
-return false
*/

// function tripleDouble(num1, num2) {
//   let str1 = String(num1);
//   let str2 = String(num2);

//   for (let idx = 0; idx < str1.length; idx++) {
//     if (str1[idx] === str1[idx + 1] && str1[idx] === str1[idx + 2])
//       if (str2.includes(str1.slice(idx, idx + 2))) {
//         return true;
//       }
//   }

//   return false;
// }

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);

function commonPrefix(arr) {
  let inCommon = '';
  for (let idx = 0; idx < arr[0].length; idx++) {
    if (arr.every((el) => el.slice(0, idx + 1) === arr[0].slice(0, idx + 1))) {
      inCommon = arr[0].slice(0, idx + 1);
    } else {
      return inCommon;
    }
  }
  // console.log(inCommon);
  return inCommon;
}

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true
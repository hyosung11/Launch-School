/* 19. Next Bigger Number

Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

PROBLEM
- input number
- output number

Rules
- return the next bigger number formed by the same digits as the input number
- if no bigger number can be found, return -1
- single digit input number returns -1
- if all digits same, returns -1
- if from left to right digits descend in value, return -1
- what about negative numbers?

EXAMPLES
- 513 => 531 rotates 13 => 31
- 2017 => 2071 => 17 becomes 71

DATA STRUCTURE
- input number
- intermediary: turn number into string to check digits
- output number

ALGORITHM
- input number
- turn number into a string of digits
- initialize `
- return new number
- return -1 because not found
*/

// console.log(nextBiggerNum(9) === -1); // true
// console.log(nextBiggerNum(12) === 21); // true
// console.log(nextBiggerNum(13) === 31); // true
// console.log(nextBiggerNum(513) === 531); // true
// console.log(nextBiggerNum(2017) === 2071); // true
// console.log(nextBiggerNum(111) === -1); // true
// console.log(nextBiggerNum(123456789) === 123456798); // true

/* LeetCode - 9. Palindrome Number */

// function isPalindrome(num) {
//   return num === Number(String(num).split('').reverse().join(''));
// }

// console.log(isPalindrome(10));
// console.log(isPalindrome(121))
// console.log(isPalindrome(123));

/* LeetCode - 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

PROBLEM
- input:
  - an array of integers
  - an integer target
- output: array of indices

Rules
- return an array of indices of the two numbers such that they add up to target
- each input has exactly one solution
- use each element just once
- elements to be added can occur anywhere in the array

EXAMPLES
- see below

DATA STRUCTURE
- input array and number
- intermediary: subarrays
- return array of indices

ALGORITHM
- input `nums` array and `target` number
- initialize `result` to empty array
- iterate through `nums` array
  - iterate through elements
    - if num at index position plus nums at jdx equals target
      - push nums index position and nums jdx position into `result` array
- return `result` array of indices
*/

// function twoSum(nums, target) {
//   let result = [];

//   for (let idx = 0; idx < nums.length; idx++) {
//     for (let jdx = idx + 1; jdx <= nums.length; jdx++) {
//       if (target === nums[idx] + nums[jdx]) result.push(idx, jdx);
//     }
//   }
//   return result;
// }

// function twoSum(numbers, target) {
//   let result = [];

//   for (let idx = 0; idx < numbers.length; idx++) {
//     for (let jdx = idx + 1; jdx <= numbers.length; jdx++) {
//       if (target === numbers[idx] + numbers[jdx]) result.push(idx, jdx)
//     }
//   }
//   return result;
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
// console.log(twoSum([3, 2, 3], 6)); // [0, 2]

/* LeetCode - 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

// function longestCommonPrefix(words) {
//   let prefix = '';
//   words = words.sort((a, b) => a.length - b.length);

//   let substring = '';

//   for (let idx = 0; idx < words[0].length; idx++) {
//     substring += words[0][idx];
//     if (words.every((word) => word.startsWith(substring))) prefix = substring;
//   }

//   return prefix;
// }

/* 20. Paired Number

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

PROBLEM

algo:
- input an array of numbers
- initialize `result` to empty array
- sort the array
- iterate through the array
  - if the array includes the number at the index position + 2 and it is not already in the array (helper function)
  - add the number at the index position and the number + 2 as an array to the result array
- return the result array

isAlreadyThere helper function
- input number and array
- loop through array
  - if number equals second element in the nested array of the array return true
- return false */

// function pairedNums(array) {
//   let result = [];
//   array.sort((a, b) => a - b);

//   for (let idx = 0; idx < array.length; idx++) {
//     let num = array[idx];
//     if (array.includes(num + 2) && !isAlreadyThere(num, result)) {
//       result.push([num, num + 2]);
//     }
//   }

//   return result;
// }

// function isAlreadyThere(num, array) {
//   for (let idx = 0; idx < array.length; idx++) {
//     if (num === array[idx][1]) return true;
//   }
//   return false;
// }

// console.log(pairedNums([2, 3, 25]));
// console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
// console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

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

function duplicates(array) {
  let result = {};
  let count = 0;

  array.forEach(num => {
    result[num] ? result[num] += 1 : result[num] = 1;
  })

  let pairs = Object.values(result).filter(value => value > 1).reduce((sum, num) => sum + num, 0);

  count = Math.floor(pairs / 2);

  return count;
}

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
console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);


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
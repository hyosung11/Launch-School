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
  - if number equals second element in paired numbers of array return true
- return false */

function pairedNums(array) {
  let result = [];
  array.sort((a, b) => a - b);

  for (let idx = 0; idx < array.length; idx++) {
    let num = array[idx];
    if (array.includes(num + 2) && !isAlreadyThere(num, result)) {
      result.push([num, num + 2]);
    }
  }

  return result;
}

function isAlreadyThere(num, array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (num === array[idx][1]) return true;
  }
  return false;
}

console.log(pairedNums([2, 3, 25]));
console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]
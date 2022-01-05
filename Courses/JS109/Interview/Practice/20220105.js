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
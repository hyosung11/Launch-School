/* JS109 Study Group

Introductions
- Antonina,
- H
- Alex
- Manny, studying for the interview
- Travis, Vancouver, written assessment after this study session
- Gianni, prepping for written, take it this weekend
- Adhitiani, Hungary, preparing for the interview

=========== PROBLEMS =========================================================
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

Example:

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) // => abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

PROBLEM
- input:
  - array of strings
  - and an integer k
- output: string

Rules
- return the first longest string consisting of k consecutive strings taken from the array
- if length of string array is 0, return empty string
- if integer k is greater than the length of the array, return empty string
- if integer k is less than or equal to 0, return empty string

EXAMPLES
- see below

DATA STRUCTURE
- input array of strings and an integer
- intermediary: get substrings from the array of strings
- output: longest substring

ALGORITHM
- input array of strings and an integer `count` of how many strings to concatenate
- initialize `longestString` to an empty string
- iterate through array fom 0 to array length - count
  - initialize `testString` to the value of substrings from the array of length `count`
  - join the array elements to make a string
    - if the the length of `testString` is longer than the length of `longestString`
      - reassign `longestString` to `testString`
- return `longestString` of `count` elements from the array */

function longestConsec(array, count) {
  if (array.length === 0 || count > array.length || count <= 0) return '';
  let longestString = '';

  for (let idx = 0; idx < array.length - count; idx++) {
    let testString = array.slice(idx, idx + count).join('');
    if (testString.length > longestString.length) longestString = testString;
  }

  return longestString;
}

// Test Cases
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true

// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

// console.log(longestConsec([], 3) === ""); // true

// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true

// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

/* Three by Three

Problem Description
Given an array of strings, return a boolean indicating whether
at least three of the elements in the array have digits whose sum is
divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples

PROBLEM
- input: array of strings
- output: boolean

Rules
- return boolean indicating whether at least three elements in the array have digits whose sum is divisible by 3
- input is only strings of digits 0-9

EXAMPLES
- ['35', '01110', '126', '57', '13'] => [8, 3, 9, 12, 4] => 3 => true

DATA STRUCTURE
- input: array of strings
- intermediary: array (split, map, reduce, length)
- output: boolean

ALGORITHM
- input array of strings
- initialize `count` to 0 to track occurrences of elements divisible by 3
- iterate through elements of array
  - split the string into digits
  - iterate through digits of each element
    - compute the sum of digits in each element
    - if divisible by 3 increment count
- return count
- return true if count >= 3
- return false otherwise */

// function threeByThree(array) {
//   let count = 0;

//   let scores = array.map(string => {
//     return string.split('').reduce((sum, digit) => sum + Number(digit), 0);
//   })

//   scores.forEach(score => {
//     if (score % 3 === 0) count += 1;
//   })

//   return count >= 3
// }

/* Alex's ALGO:
-input: arr
- transform array into a new arr in which numstring elements are transformed into sum of their digits(helper function)
-filter this new array for those elements divisible by 3
- return whether length of filtered array is greater than or equal to 3 */

// function threeByThree(arr) {
//   return (
//     arr.map((element) => getSum(element)).filter((el) => el % 3 === 0).length >=
//     3
//   );
// }

// function getSum(str) {
//   return str.split('').reduce((sum, num) => sum + Number(num), 0);
// }

// function threeByThree(array) {
//   return array
//     .map(string => {
//       return string.split('').reduce((sum, digit) => sum + Number(digit), 0)
//     })
//     .filter(num => num % 3 === 0)
//     .length >= 3;
// }

function threeByThree(array) {
  return array
    .map(string => getSum(string))
    .filter(num => num % 3 === 0)
    .length >= 3
}

function getSum(string) {
  return string
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

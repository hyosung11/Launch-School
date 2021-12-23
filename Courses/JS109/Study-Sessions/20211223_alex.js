/* Problem Description - Longest Consecutive String

You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"//

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

PROBLEM
- input an array of string and an integer
- output: string

Rules
- for our given array, we need to determine which concatenation of K consecutive elements is longest and return that joined string
- if two of those longest joined strings are the same length, return the one that ocurred earlier in the original array

EXAMPLES
- see below

DATA STRUCTURE
- input: array of strings and a number
- intermediary: arrays and strings
- output: string

ALGORITHM
- input: array and an integer `num`
- if array is empty return empty string
- if array length is less than num return empty string
- if num less than or equal to 0 return an empty string
- create `longestString` variable and initialize to empty string
- loop through array
  - take a slice from index position to index position + num
  - join it into a string
  - if string length is greater than the length of longestString, reassign longestString to the value of string
  -return longestString */

function longestConsecutive(array, number) {
  if (array.length === 0 || array.length < number || number <= 0) return '';

  let longestString = '';

  for (let idx = 0; idx < array.length; idx += 1) {
    let testString = array.slice(idx, idx + number).join('');
    if (testString.length > longestString.length) longestString = testString;
  }
  return longestString;
}

console.log(longestConsecutive([], 3)); // ''
console.log(longestConsecutive(['Omi', 'SungOh'], 3)); // ''
console.log(longestConsecutive(['Christmas', 'Eve'], 0)); // ''
console.log(longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2)); // 'abigailtheta'
console.log(longestConsecutive(['hi', 'tim', 'california', 'howdy', 'not', 'california'], 3)); // 'timcaliforniahowdy'

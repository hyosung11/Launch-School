/* SPOT Study Session with Miles

Introductions
- Laurent
- H
- Jonathan, Kiev
- Miles, North Carolina

Notes for Interview
- instead of talking about what you're doing, talk about what you need to do and why
- e.g., now that I've declared the for loop, let me initialize my variable
- talk about it and then implement in silence

Problem Description - Longest Consecutive String

You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"// n being the length of the string array,

if n = 0 or k > n or k <= 0 return "".

Input: array of strings, integer(k)
Output: string (longest k consecutive strings)

Rules:
- length of the array (n) is 0 => ""
- array is shorter than the given number (k > n) => ""
- given number is negative (k <= 0) => ""

EXAMPLES
longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

longestConsecutive(['hi', 'tim', 'california', 'howdy', 'not', 'california'], 3) -->
"timcaliforniahowdy"

Data Structure
input: array
intermediary:
output: string

ALGORITHM
- input an array of strings and an integer
- if length of array is 0 return an empty string
- if array is shorter than the integer (k) return an empty string
- if integer (k) is less than zero return an empty string
- initialize `longestString` to an empty string
- iterate through the array
  - initialize `testString` to int number of strings
    - start at current index to int number of strings
    - convert array to string
    - compare lengths of `testString` with longestString
    - if testString is longer than longestString
      - make testString the longestString
- return longestString */

function longestConsecutive(array, int) {
  if (array.length === 0 || array.length < int || int <= 0) return '';
  let longestString = '';

  for (let idx = 0; idx < array.length; idx += 1) {
    let testString = array.slice(idx, idx + int).join('');
    if (testString.length > currentLongest.length) {
      currentLongest = testString;
    }
  }

  return longestString;
}

console.log(longestConsecutive([], -1));
console.log(longestConsecutive(["zone"], 2));
console.log(longestConsecutive(["Laurent", "Staub"], 0));

console.log(longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2)); // 'abigailtheta'

console.log(longestConsecutive(['hi', 'tim', 'california', 'howdy', 'not', 'california'], 3)); // 'timcaliforniahowdy'



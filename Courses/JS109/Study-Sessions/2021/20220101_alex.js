/* 06:45 Alex overslept.

Find Even Index was the first problem


*/

 /* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

/*
PROBLEM
input: number
output: number (sum of an array of numbers)

rules:
- if input number is negative, return 0
- add up and return all numbers that are multiples of either 3 or 5 BELOW the input number
-if a number is a multiple of both 3 and 5, only count that number once

DATA STRUCTURES
input: number
intermediary: array (reduce the array to a sum)
output: number (sum of an array of numbers)

ALGO:
input: number
- guard clause: if input number is negative or 0, return 0
- create an empty array results
- create variable count and set to 0
- loop while count is less than number
   -if count % 3 === 0, add count to the arr
   -else if count % 5 === 0, add count to the arr
   -increment count by one
- add up and return results arr */

function multiples(num) {
  if (num <= 0) return 0;
  let result = [];
  let count = 0;

  while (count < num) {
    if (count % 3 === 0) result.push(count);
    else if (count % 5 === 0) result.push(count);
    count += 1;
  }

  return result.reduce((sum, value) => sum + value, 0);
}

console.log(multiples(-1)) // 0
console.log(multiples(10)) // 23
console.log(multiples(15)) // [3, 5, 6, 9, 10, 12, ] => 45
console.log(multiples(20)) // 78

/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

PROBLEM
input: string
output: (index) number

rules:
- return index of earliest character in string that only appears once
- if no char in the string occurs only once, return -1

DATA STRUCTURES
input: string
intermediary: obj
output: (index) number

ALGO
- create obj
-iterate through string
  -if obj has the current char as a property already, increment it by 1
  -otherwise, add that char as a property with a value of 1
-iterate through the string once more
  if the current element's value in the obj is 1, return the current index position of the string
-return -1 */

function firstUniqChar(string) {
  let result = {};

  string.split('').forEach(char => {
    result[char] ? result[char] += 1: result[char] = 1;
  });

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (result[char] === 1) return idx;
  }

  return -1;
}

console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1

/*PROBLEM:

Given a string, write a function `palindromeSubstrings` which returns
all the substrings from a given string which are palindromes. Consider
palindrome words case sensitive.

PROBLEM
input: string
output: array of palindrome substrings

rules:
-substrings consist of at least 2 char
-select all substrings for which substring is the same when reversed
-case matters!

DATA STRUCTURE
input: string
intermediary: array of all substrings
output: array of palindrome substrings

ALGO
-create array substrings and set to reference return value of getSubstrings (helper function)
-create result array
-iterate through substrings array
  -if element isPalindrome(helper function), add to result array
return result array

getSubstrings
-create substrings array
-loop through string from each index position
  -loop through remainder of string from index position + 1 to end
    -add slice from outer loop index position to inner loop index position
-return substrings array

isPalindrome
return element === element reversed
*/

function palindromeSubstrings(string) {
  let substrings = getSubstrings(string);
  let result = [];
  
  for (let idx = 0; idx < substrings.length; idx += 1) {
    if (isPalindrome(substrings[idx])) result.push(substrings[idx]);
  }
  
  return result;
}

function getSubstrings(string) {
  let substrings = [];
  
  for (let idx = 0; idx < string.length; idx += 1) {
    // to get substrings of length greater than 1
    for (let jdx = idx + 2; jdx <= string.length; jdx += 1) {
      let substring = string.slice(idx, jdx);
      substrings.push(substring);
    }
  }
  
  return substrings
}


function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// Test cases:
console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
//should log: []

console.log(palindromeSubstrings(""))
// should log: []
/* Palindrome

Instructions
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num, size). Write a function which returns an array of `size` number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

PROBLEM
in: num, num(length of arr)
out: arr

Rules:
- if size = 0, return an empty arr
- Return "Not valid" if any one of the inputs is not a number or is less than 0.
- Single digit numbers will NOT be considered numerical palindromes.
- num is the starting number - starting with that number, add the next 'size' palindromes to the result arr

DATA STRUCTURES
in: num, num
between : str, arr
out: arr

ALGO
- if size = 0, return an empty arr
- Return "Not valid" if any one of the inputs is not a number or is less than 0.
-if num < 10 num = 11
init result arr = []
-loop while result arr length is less than size
  if isPalindrome(num), push to result arr
  num += 1
return result

isPalindrome(num)
-coerce num to string
- split string into an array of chars
- reverse chars
- join chars
- if it equals itself return true, else false
*/

function palindrome(num, size) {
  if (size === 0) return [];
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  if (typeof size !== 'number' || size < 0) return 'Not valid';

  if (num < 10) num = 11;

  let result = [];

  while (result.length < size) {
    if (isPalindrome(num)) result.push(num);
    num = num + 1;
  }

  return result;
}

function isPalindrome(num) {
  return String(num) === String(num).split('').reverse().join('');
}

// console.log(palindrome(20, 0)); // []
// console.log(palindrome('ACCDDCCA', 3)); // "Not valid"
// console.log(palindrome(773, '1551')); // "Not valid"
// console.log(palindrome(-4505, 15)); // "Not valid"
// console.log(palindrome(4505, -15)); // "Not valid"

console.log(palindrome(6, 4)); // [11, 22, 33,44]
console.log(palindrome(75, 1)); // [77]
console.log(palindrome(101, 2)); // [101, 111]

console.log(palindrome(0, 4)); // [11, 22, 33, 44]

/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

Problem
- input string1 and string2
- output boolean

Rules
- return true if a substring appears in both strings
- return false otherwise
- substring must be two or more chars

- if either input is an empty string return false
- case does not matter
- chars can be numbers

Examples
- checked

Data Structure
- input string1 and string2
- inside: slice
- output boolean

Algorithm
- declare `substringTest()` with `string1` and `string2` parameters
- if either string is empty return false
- convert str1 and str2 to lowercase
- iterate over `string1`
  - slice `string1` from idx, idx + 2
    - if `string2` to includes slice
      - return true
- return false
*/

function substringTest (str1, str2) {
  if (str1.length === 0 || str2.length === 0) return false;

  for (let idx = 0; idx < str1.length - 1; idx++) {
    if (str2.toLowerCase().includes(str1.slice(idx, idx + 2).toLowerCase())) return true;
  }
  return false;
}

console.log(substringTest('', '') === false); // true
console.log(substringTest('test', '111t') === false); // true
console.log(substringTest('', 'Something') === false); // true
console.log(substringTest('Something', '') === false); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('Something', 'Home') === true); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('BANANA', 'banana') === true); // true
console.log(substringTest('1234567', '541265') === true); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === true); // true


/* Given an array of subarrays:
  For every even indexed subarray
    print every even indexed element

ALGO
- iterate through arr
  - if idx % 2 !== 0 continue
  - iterate through subarray
    - if jdx % 2 === 0
      console.log(arr[idx][jdx]);
*/

function printer (arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      for (let jdx = 0; jdx < arr[idx].length; jdx++) {
        if (jdx % 2 === 0) console.log(arr[idx][jdx]);
      }
    }
  }
}

printer([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]);
// 1
// 3
// 7
// 9
/* /* Reverse or Rotate - 6 kyu 

The input is a string `string` of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such that the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
- size is <= 0 or if str is empty return ""
- size is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

PROBLEM
input: number string
output: number string

rules: 
- if size is <= 0 or if string is empty return ""
- if size is greater (>) than the length of string it is impossible to take a chunk of size hence return ""
- take as many slices of original string of size given without using any digits twice
- for slice, if sum of its digits cubed is divisible by 2, reverse the digits
- otherwise rotate one digit to left
-rejoin

Examples:
revrot("123456 987654", 6) --> "234561 876549"

revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".

DATA STRUCTURES
input: number string
inter: array (slice, reduce)
output: string

ALGO
- input 
- [x] if size is <= 0 or if string is empty return ""
- [x] if size is greater (>) than the length of string it is impossible to take a chunk of size hence return ""
- [] take as many slices of original string of size given without using any digits twice(helper function chunks)
- for slice, if sum of its digits cubed is divisible by 2, reverse the digits wih SumOfCubesDivisibleByTwo helper function
- otherwise rotate one digit to left with `rotate` helper function
-rejoin

helper function getChunks:
- input: string, size
- create results array
- split string into array
- loop while the length of array >= size 
  - splice from index to index + size
  - add to results array
- return results array
*/

function revrot(digits, size) {
  if (size <= 0 || digits.length === 0 || size > digits.length ) return '';

  let chunks = getChunks(digits, size);
  
  return chunks.map(chunk => {
    if(sumOfCubesDivisibleByTwo(chunk)) {
      return chunk.split('').reverse().join('');
    } else {
      return rotate(chunk);
    }
  }).join('');
}

function getChunks(string, size) {
  let result = [];
  let array = string.split('');

  while (array.length >= size) {
    result.push(array.splice(0, size).join(''));
  }

  return result;
}

function sumOfCubesDivisibleByTwo(string) {
  let result = string.split('').reduce((sum, num) => sum + ( Math.pow(num, 3)), 0);
  
  return result % 2 === 0;
}

function rotate(string) {
  return string.slice(1) + string[0];
}

// console.log(SumOfCubesDivisibleByTwo('123'))

// console.log(revrot("123456987654", 6)) // === "234561876549");

// console.log(revrot("", 8) === "");
// console.log(revrot("123456779", 0) === "");
// console.log(revrot("1234", 4)); // 3875 => 27 + 512 + 343 + 125 => 8753
// console.log(revrot("66443875", 4) === "44668753");
console.log(revrot("123456987654", 6) === "234561876549");
// console.log(revrot("123456987653", 6) === "234561356789");
// console.log(revrot("66443875", 8) === "64438756");
// console.log(revrot("664438769", 8) === "67834466");
// console.log(revrot("123456779", 8) === "23456771");
// console.log(revrot("563000655734469485", 4) === "0365065073456944");*/

/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

PROBLEM
- input string
- output boolean

Rules
- return true if removing at most one char from string can make a palindrome
  - can be true without removing a char
- lowercase letters input?
- empty string input is false
- what is a palindrome?
  - chars read backward and forwards are the same

EXAMPLES
- 'aba' => true, already a palindrome, no chars need to be removed
- 'abca' => true when you remove the 'c' or remove the 'b'
- 'abc' => false because removing one char doesn't create a palindrome

DATA STRUCTURE
- input: string
- intermediary: array (split, reverse, join)
- output: boolean

ALGORITHM
- input string
- initialize `isPalindrome` helper function
  - if the string split into chars, reversed, and joined back together equals input string return true
- iterate over the string and create substrings with one char removed at a time
  - check if substring is a palindrome
    - return true if it is
- return false otherwise

Laurent's Algorithm
- Define a function that checks if a string is a palindrome
- check if string is a palindrome, if it is, return true
- Iterate over the string and remove character one by one
  if the string is a palindrome, return true
- return false

*/

function validPalindrome(string) {
  if (isPalindrome(string)) return true;

  for (let idx = 0; idx < string.length; idx++) {
    let substring = string.slice(0, idx) + string.slice(idx + 1);
    // '' + bcd, 'a' + cd, 'ab' + 'd', 'abc' + '' 
    // console.log(testString)
    if (isPalindrome(substring)) return true;
  }

  return false;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true => 'aba' or 'aca'
console.log(validPalindrome("abcd")); // false

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true => 'aba' or 'aca'
console.log(validPalindrome("abc")); // false


// function palindrome(string) {
//   for (let idx = 0, jdx = string.length - 1; idx <= jdx; idx += 1, jdx -= 1) {
//     if (string[idx] !== string[jdx]) return false;
//   }
//   return true;
// }

// function validPalindrome(string) {
//   if (palindrome(string) === true) return true;

//   for (let index = 0; index < string.length; index += 1) {
//     let stringSlice = string.slice(0, index) + string.slice(index + 1);
//     let isPalindrome = palindrome(stringSlice);
//     if (isPalindrome === true) return true;
//   }

//   return false;
// }
/*PROBLEM:

Given a string, write a function `palindromeSubstrings` which returns all the substrings from a given string which are palindromes. Consider palindrome words case sensitive.

QUESTIONS
1. What is a substring?
2. What is a palindrome?
3. Will inputs always be strings?
4. What does it mean to treat palindrome words case-sensitively?

PROBLEM
- input: string
- output: array of palindrome substrings

Rules
- Explicit
  - return only substrings which are palindromes
  - palindromes are case sensitive, e.g., 'AbBa' is not a palindrome

- Implicit
  - if input is an empty string return empty array
  - if no palindrome found return empty array

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array
- output: array

ALGORITHM
- declare a result variable and initialize it to an empty array
- create an array named substringArray that contains all of the substrings of the input string that are at least 2 characters long
- loop through the words in the substringArray
- inside the `isPalindrome` function, check whether the string is equal to its reversed value
- if the word is a palindrome, append it to the result array
- return the result array

substrings helper function
`halo`
['ha', 'hal', 'halo', 'al', 'alo', 'lo'] => complex looping

for each starting index from 0 through the next to last index position (no substrings of at least 2 characters after the next to last index position)
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicated index position
  end of inner loop
end of outer loop

Algorithm for substrings helper function
- create an empty array called `result` that will contain all required substrings
- create a `startingIndex` variable (value `0`) for the starting index of a substring
- start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
  - create a `numChars` variable (value `2`) for the length of a substring
  - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
  - append the extracted substring to the `result` array
  - increment the `numChars` variable by 1
- end the inner loop
- return the `result` array

Pseudocode
START

Given a string named `string`

  SET result = []
  SET startingIndex = 0

  WHILE startingIndex <= length of string - 2
    SET numChars = 2
    WHILE numChars <= length of string - startingIndex
      SET substring = numChars characters from string starting at index startingIndex
      append substring to result array
      SET numChars = numChars + 1

    SET startingIndex = startingIndex + 1

  RETURN result

END

Complete Informal Pseudocode
input: a string
output: an array of substrings
rules: palindrome words should be case sensitive, meaning "abBA"
       is not a palindrome

Algorithm:
 substrings function
 =================
   - create an empty array called `result` that will contain all required substrings
   - create a `startingIndex` variable (value `0`) for the starting index of a substring
   - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
     - create a `numChars` variable (value `2`) for the length of a substring
     - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
       - extract a substring of length `numChars` from `string` starting at `startingIndex`
       - append the extracted substring to the `result` array
       - increment the `numChars` variable by `1`
     - end the inner loop
     - increment the `startingIndex` variable by `1`
   - end the outer loop
   - return the `result` array

 isPalindrome function
 =====================
   - Inside the `isPalindrome` function, check whether the string value is equal to its reversed value.

 palindromeSubstrings function
 ============================
   - declare a `result` variable and initialize it to an empty array
   - create an array named `substrArray` that will contain all of the
     substrings of the input string that are at least 2 characters long.
   - loop through the words in the `substrArray` array.
     - if the word is a palindrome, append it to the `result` array
   - return the `result` array */

function palindromeSubstrings(string) {
  let result = [];
  let substringsArray = substrings(string);

  substringsArray.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

function substrings(string) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex < string.length - 2) {
    let numChars = 2;
    while (numChars <= string.length - startingIndex) {
      let substring = string.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }
    startingIndex += 1;
  }

  return result;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// Test cases:
// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// // should return: ["ili"]

// console.log(palindromeSubstrings("abcddcbA"))
// // should return: ["bcddcb", "cddc", "dd"]

// console.log(palindromeSubstrings("palindrome"))
// //should log: []

// console.log(palindromeSubstrings(""))
// should log: []

/* TESTING FREQUENTLY */

// function substrings(string) {
//   let result = [];
//   let startingIdx = 0;
//   let numChars = 2;
//   let endIdx = startingIdx + numChars;
//   console.log(endIdx); // => 2
// }

// substrings('abcdef');

function substrings(string) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;

  while (startingIndex <= string.length - 2) {
    startingIndex += 1;
  }
  console.log(startingIndex);
}

substrings('abcdef')
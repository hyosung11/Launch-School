/*  JS100/JS101 Beginner Study Group | Thursday, August 5th | 4:00 PM Eastern / 1:00 PM Pacific
Mandy Cheang

Participants:
- Lucienne Temple
- H
- Alex Stein
- Edris Atamy
- Mark A

Intros
- Mandy, TA, last course of core curriculum
- Luci, near Sydney, two years in Launch School, JS101 Lesson 2, been through bootcamp and am now teaching a bootcamp
- Alex, started Launch School in March
- Edris, no camera, Eeedris, JS101 Lesson 6, started LS in May, worked as IT technician for pharmaceutical company

Any Questions?
PEDAC Tips
Solving a problem with PEDAC

PEDAC TIPS
- Use PEDAC to develop a plan before writing out code.
- PEDAC - Understand the Problem, Example Test Cases, Data Structures, Algorithm, Code
- Algorithm is a draft, it's OK to revisit previous steps and try multiple times.
- You're going to get stuck, that's normal and part of the process.
- Make mistakes, learn from your mistakes, try again, more practice, repeat.

WHEN TO USE PEDAC

Alphabet Symmetry

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.

Examples:

solve(["abode","ABc","xyzD"]) // [4,3,1]
solve(["abide","ABc","xyz"])  // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6,5,7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]

PROBLEM
=======
- Given an array of Strings
- Return an Array of numbers (positive integers)

Criteria:
- Count every letter of each word in in the array that is in alphabet position
- Input can be upper or lower case alpha-characters
- Input is not special characters, digits, spaces

- Be careful and think if `a` in "abode" is in position 0 or in position 1? In programming we start counting index positions at 0. So `a` is actually in position 0.

Example Test Cases
==================
First Example
- strings are different lengths
- letters are out of alphabetical order

Second Example
- We see an example of a string where no letters meet the criteria "xyz" => 0.

Data Structure
==============
- Input: Array of Strings
- Output: Array of numbers
- Another data structure
  - store the alphabet as a string ==> 'abcdefghijklmnopqrstuvwxyz'
  - ["abode","ABc","xyzD"]) --> [4,3,1] Array transformation

Algorithm
=========
1. Declare a function with one parameter that takes an array of strings as an argument.
2. Initialize a variable and assign it the value of the letters of the alphabet 'abcdefghijklmnopqrstuvwxyz'
3. Initialize a variable and assign it the value of an empty array
4. loop through the array and split it at each word
  - loop through each word
    - check if character at the index position matches the character of the alphabet string
      - if

Edris's Algorithm
- initialize the alphabet string
- return passed array, map()
  - iterate through each string at each element
  - check each index at string and compare to alphabet string
  - initialize count variable to increment
  - return count

Alex's Algorithm
declare function solve that takes an array as an argument
-declare newArr = []
loop through array of strings
-for each word, use helper function that iterates through string and increases count by 1 if the character at the index position of the word equals the character at the same index position of a string of the alphabet
-push what the helper function returns to the newArr
after iterating through the array, return the newArr

-declare a helper function that takes a word as its argument
declare alphabet string
declare count = 0
-iterate through word
-if word[index] === alphabet[index]
  -count += 1
return count

Mark's Algorithm
1. initialize alphabet as a string
2. initialize function that takes in list as parameter
3. iterate over list of strings via map
4. pass callback function for every string
4a.  split string into array of characters
4b.  reduce list of characters to number based on index match
4c.  if character index matches alphabet index, increment accumulator by 1
4d.  else return accumulator as zero when there is no match
4. return characters number for map callback
5. call function with list of strings

Mandy's Algorithm
- Initialize an String that holds the letters of the alphabet
- Initialize a count variable to store how many letters meet the criteria

- Iterate through the Input Array (helper function)
   - On each individual `word`, count the letters that meet the criteria: the letter's position in the String must occupy their positions in the alphabet
   - Compare the index of the character to the index of the letter in the alphabet string
   - Increment `count` if character meets the criteria
   - Once we are finished checking all the characters, store the count in a final Array (either through map or initializing a new Array)

- Return the final Array

*/

// Edris Code
// function solve(arr) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return arr.map(string => {
//     let count = 0;
//     for (let index in string) {
//       if (string[index].toLowerCase() === alphabet[index]) {
//         count += 1;
//       }
//     }
//     return count;
//   });
// }

// Mark's code?
// function solve(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return array.map((string) => {
//     return string.split('').reduce((acc, char, i) => {
//       if (char.toLowerCase() === alphabet[i]) {
//         acc += 1;
//       }
//       return acc;
//     }, 0);
//   });
// }

// Mandy's Code
function countMatchingIndices(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let count = 0;

  str.split('').forEach((char, idx) => {
    if (alphabet.indexOf(char.toLowerCase()) === idx) {
      count += 1;
    }
  });

  return count;
}

function solve(arr) {
  return arr.map((str) => countMatchingIndices(str));
}

console.log(solve(["abode","ABc","xyzD"])) // [4,3,1]
console.log(solve(["abide","ABc","xyz"]))  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])) // [1, 3, 1, 3]
/* Another Study Session with Michael Cremonini to prepare for the JS109 Interview Assessment */

/* Decrypt - problem Michael got from study session with Antonina

You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurrences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurrences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
^    ^   ^  ^  ^         ^^^  ^                   ^
[4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str. */

//algo
//define a function decrypt with parameter string
  //define an empty obj
  //define an alphabet array
//get valid characters
  //count the charcters in the valid string
  //use the alphabet to reference the char in obj;
//sort the letters in the nested array form .entries

// Michael's incomplete solution
function decrypt(string){
  let obj = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let valid = /[a-z]/g

  let validChars = string.match(valid).join('');

  validChars.split('').forEach(ele => {
    obj[ele] ? obj[ele] += 1 : obj[ele] = 1
  })

  for(let i = 0; i < alphabet.length; i++){
    if(!obj[(alphabet[i])]){
      obj[(alphabet[i])] = 0
    }
  }

  return obj
}

// console.log(decrypt('$aaaa#bbb*ccfff!z')) //=== '43200300000000000000000001');
// console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
// console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
// console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
// console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
// console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
// console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
// console.log(decrypt('') === '00000000000000000000000000');

/* 2
Problem Description
Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples.

// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// // true

/* Alphabet Score aka Highest Scoring Word - for Michael */

/* Find Missing Letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get a valid array. And always exactly one letter will be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

/* PROBLEM
- input array of letters in alphabetical order
- output: the letter missing from the sequence

Rules
- return the letter missing from the alphabetical sequence
- exactly one letter is missing
- array has at least two letters
- input array is either all lowercase or all uppercase letters
- just letters no other types of chars

EXAMPLES
- ['a', 'b', 'c', 'd', 'f'] => 'e';

DATA STRUCTURE
- input: array
- intermediary: alphabet lookup
- output: letter that's missing

ALGORITHM
- input array
- initialize `alphabet` to 'a-z';
- if array element at idx is uppercase
  - reassign `alphabet` to uppercase
- initialize `start` to index position in the `alphabet` of the first letter in the input array
- initialize `end` to the `alphabet` position of the last letter in the input array
- initialize `section` to slice of `alphabet` from `start` to `end`
- iterate through `section`
  - if the array does not include the letter at the index of section`
  - return that letter  */

function findMissingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }

  let start = alphabet.indexOf(array[0]);
  let end = alphabet.indexOf(array[array.length - 1]);
  let section = alphabet.slice(start, end + 1);

  for (let idx = 0; idx < section.length; idx++) {
    if (!array.includes(section[idx])) return section[idx];
  }

}

console.log(findMissingLetter(['a','b','c','d','f']));//, 'e')
console.log(findMissingLetter(['O','Q','R','S']));//, 'P');


// const findMissingLetter = (array) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const start = alphabet.indexOf(array[0]);
//   return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };
/* JS100/101 Study Session: Intro to PEDAC | Wed. July 14th | 12:00 PM Eastern / 09:00 AM Pacific

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

PEDAC

Problem

inputs:
- array of strings

outputs:
- array of numbers (with the same number of elements as the input array)

rules:
- a letter corresponds to a number
- to each string corresponds a SamePositionCount
- case doesn't matter
- no spaces in the strings
- no special character => only alphabet letters

what's a same position count?
- for each letter in a word, we need to compare the letter's position in the word and in the alphabet. If they match, the "return count" increases by 1.


E

rules:
- alphabet position: starts at 1 => can we make it start at 0?
- word position: starts at 0


D

input: array of strings
output: array of integers

intermediary steps: array

Array.prototype.map()


Algorithm

Given a collections of strings

Set a var alphabet to the lowercase alphabet
Set a var resultArray to an empty array

loop through the collection of strings one by one

  - set a counter to 0
  -for each string in collection, wel loop through the string
    we check the character in the string at the current index compared with 
    the character in alphabet at the current index 
    if the chars match, increment counter
  after we iterate through a single string, push counter to result array
  -after we iterate through the collection of strings
   return result array
*/

// Version 1

function solve(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let resultArray = [];

  for (let index = 0; index < array.length; index++) {
    let count = 0;
    let word = array[index];
    for (let stringIndex = 0; stringIndex < word.length; stringIndex++) {
      if (word[stringIndex].toLowerCase() === alphabet[stringIndex]) {
        count += 1;
      }
    }
    resultArray.push(count);
  }
  return resultArray;
}

console.log(solve(['abode', 'ABc', 'xyzD'])); // [4,3,1]
console.log(solve(['abide', 'ABc', 'xyz'])); // [4,3,0]
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])); // [6,5,7]
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
console.log(solve([])); // []


// Version 2 with filer and map
function countMatchingIndices(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return str.split('').filter((char, idx) => {
    return alphabet.indexOf(char.toLowerCase()) === idx;
  }).length;
}

function solve(arr) {
  return arr.map((str) => countMatchingIndices(str));
}

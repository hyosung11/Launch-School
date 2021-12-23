/* =========================================================
1. Accum - Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

PROBLEM
- input: string
- output: new string

Rules
- input string is alphabetic characters
- each character in input string appears in the returned string
- repeat character as many times as its index position in original string
- separate sequences of characters with a hyphen
- uppercase first instance of character
- lowercase subsequent instances of the character

EXAMPLES
'abcd' => 'A-Bb-Ccc-Dddd

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- input string
- split string into chars
- iterate over chars
  - repeat char as many times as index position
  - uppercase the first instance of the char
  - lowercase the rest of the instances of char
- join chars with a hyphen between instances of the chars */

// function accum(string) {
//   return string
//     .split('')
//     .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
//     .join('-');
// }
// // Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* =========================================================
2. Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PROBLEM
- input a string of words
- output: string (representing highest scoring word)

Rules
- find the highest scoring word
- word is a group of contiguous characters separated by a space
- each letter of the word scores points according to its position in the alphabet
- if two words score the same, return the word that appears earliest in the original string
- all letters will be lowercase
- all inputs will be valid
- an empty string returns an empty string
- if only one word in the string, return that word
- single letter words are valid

EXAMPLES
'a z' returns 'z' because a = 1 and z = 26

DATA STRUCTURE
- input: string
- intermediary: array
- output: string

ALGORITHM
- input string of words
- initialize `alphabet` to letters a-z as lookup table
- initialize `words` to split string at each space
- initialize `arrayOfScores` and iterate (map(word)) through words
  - split each word into chars
  - iterate (reduce()) through chars of each word
    - compute the value of each char in the word based on its `alphabet` position
    - sum the values of the chars in each word
- initialize `maxIndex` to find the index position (indexOf()) of the word with the highest score (Math.max()) in the `arrayOfScores`
- return word at index position with the highest sum */

// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let words = string.split(' ');
//   let arrayOfScores = words.map(word => {
//     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//   });
//   let maxIndex = arrayOfScores.indexOf(Math.max(...arrayOfScores));
//   return words[maxIndex];
// }

// Examples / Test Cases
// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

/* =========================================================
3. Cap to Front

Create a function that moves all capital letters to the front of a word.

Notes:
Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: new string

Rules
- move all capital letters to the front of a word
- keep the original relative order of the upper and lower case letters the same

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: string / array?
- output: string

ALGORITHM
- input string
- initialize `upperCaseChars` to empty string
- initialize `lowerCaseChars` to empty string
- iterate through input string
  - if char at idx is uppercase
    - add to `upperCaseChars
  - if char at idx is lowercase
    - add to `lowerCaseChars
- concatenate `upperCaseChars` with `lowerCaseChars`
- return new string */

// function capToFront(word) {
//   let upperCaseChars = '';
//   let lowerCaseChars = '';

//   for (let idx = 0; idx < word.length; idx += 1) {
//     let char = word[idx];
//     if (char === char.toUpperCase()) upperCaseChars += char;
//     if (char === char.toLowerCase()) lowerCaseChars += char;
//   }

//   return upperCaseChars + lowerCaseChars;
// }

// const capToFront = (string) => {
//   return (
//     string
//       .split('')
//       .filter((char) => char === char.toUpperCase())
//       .join('') +
//     string
//       .split('')
//       .filter((char) => char === char.toLowerCase())
//       .join('')
//   );
// }

// function capToFront(string) {
//   let letters = string.split('');
//   let uppercase = letters.filter(char => char === char.toUpperCase()).join('');
//   let lowercase = letters.filter(char => char === char.toLowerCase()).join('');
//   return uppercase + lowercase;
// }

// console.log(capToFront("hApPy")); // "APhpy"
// console.log(capToFront("moveMENT")); // "MENTmove"
// console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"

/* =========================================================
4. Change Me

Given a string, write a function `changeMe` which returns the same string but with all the words in it that are palindromes uppercased.

PROBLEM
- input string
- output new string

Rules
- change words in string that are palindromes to all caps
- words are split by space
- assume case-sensitive, so `Abba` is not a palindrome
- empty string input returns an empty string
- words in uppercase are returned in uppercase in new string

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- input string
- split string into words at spaces
- iterate through words
  - check if word is a palindrome with isPalindrome helper function
  - if palindrome
    - change letters to all caps
  - otherwise, return the word
- join the words at the space
- return new string

`isPalindrome` helper function
- input word
- compare word with word when
  - split the word into chars
  - reverse the chars
  - join the chars
- return boolean */

// function changeMe(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (isPalindrome(word)) {
//         word = word.toUpperCase();
//       } return word;
//     })
//     .join(' ');
// }

// function isPalindrome(word) {
//   return word === word.split('').reverse().join('');
// }

// // Test Cases
// console.log(changeMe("We will meet at noon") === "We will meet at NOON");
// console.log(changeMe("No palindromes here") === "No palindromes here");
// console.log(changeMe("") === "");
// console.log(changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally");

/* =========================================================
5. Common Characters

Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

PROBLEM
- input array strings
- output array of string characters

Rules
- find characters in common amongst the input strings
- if characters occur more than once in each input string return as many times as found in strings
- strings are only lowercase letters
- if no common characters return an empty array

EXAMPLES
- see test cases below

DATA STRUCTURE
- input: array
- intermediary: array
- output: array

ALGORITHM
- input array of strings
- initialize `result` array to empty array
- initialize `words` to copy of the array
- iterate through first word of the `words` array
  - check letter by letter if it letter exists in the subsequent words
  - if letter exists in all words, push to `result` array
  - iterate through `words` array
    - replace letters found in first word with empty string in the subsequent words
- return `result` array */

// function commonChars(array) {
//   let result = [];
//   let words = array.slice();

//   for (let idx = 0; idx < words[0].length; idx += 1) {
//     let char = words[0][idx];
//     if (words.every(element => element.includes(char))) {
//       result.push(char);
//     }

//     for (let jdx = 1; jdx < words.length; jdx += 1) {
//       words[jdx] = words[jdx].replace(char, '');
//     }
//   }

//   return result;
// }

// console.log(commonChars(['a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
// console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []

/* =========================================================
6. Common Elements

Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

Returned array shall only have one of each number
If no common numbers, return empty array.

PROBLEM
- input: two arrays
- return new array

Rules
- numbers in each input array are sorted in ascending order
- find numbers that are in both arrays
  - if number occurs more than once in each array, just return it once
- if no common number, return an empty array

EXAMPLES
- see below

DATA STRUCTURE
- input two arrays
- intermediary: arrays
- output: array

ALGORITHM
- input array1 and array2
- initialize `result` array to empty array
- iterate through array1's numbers
  - if number exists in array2 and
  - number doesn't exists in `result` array
  - add it to the `result` array
- return `result` array */

// function commonElements(array1, array2) {
//   let result = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     let number = array1[idx];
//     if (array2.includes(number) && (!result.includes(number))) result.push(number);
//   }

//   return result;
// }

// function commonElements(array1, array2) {
//   let duplicate = null;

//   return array1.filter((number) => {
//     if (number === duplicate) return false;
//     duplicate = number;
//     return array2.includes(number);
//   });
// }

// function commonElements(array1, array2) {
//   let result = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     let number = array1[idx];
//     if (array2.includes(number) && (!result.includes(number))) {
//       result.push(number);
//     }
//   }

//   return result;
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); //  ➞ [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2])); // ➞ [1, 2]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

/* =========================================================
7. Common Prefix

Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note: all given inputs are in lowercase letters a-z.

PROBLEM
- input: array of words
- output: string

Rules
- find the longest common prefix amongst an array of strings
- if there is no common prefix return an empty string
- if prefix is entire string and that repeats, return that string
- if input is [''] return empty string

EXAMPLES
- see below

DATA STRUCTURE
- input: array of strings
- intermediary: string
- output: string

ALGORITHM
- input array of strings
- initialize `prefix` to empty string to collect longest prefix
- sort the words in the array from shortest to longest
- initialize `substring` to empty string as test string
- iterate through the shortest word char by char
  - increment the substring with chars common to all the words
  - reassign prefix to substring
- return prefix of longest common substring */

// function commonPrefix(words) {
//   let prefix = '';
//   words.sort((a, b) => a.length - b.length);
//   let shortest = words[0];
//   let substring = '';

//   for (let idx = 0; idx < shortest.length; idx += 1) {
//     let char = shortest[idx];
//     substring += char;

//     if (words.every(word => word.startsWith(substring))) {
//       prefix = substring;
//     }
//   }

//   return prefix;
// }

// Test Cases
// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
// console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
// console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
// console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
// console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
// console.log(commonPrefix(['']) === ''); // true

/* =========================================================
8. Count Matching Indices

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.
The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

For example:
countMatchingIndices(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

PROBLEM
- input: array of words
- output: array of numbers

Rules
- return an array of the number of letters that occupy their position in the alphabet for each word
- input is only alphabetic characters both upper and lower case
- no spaces
- an empty input array returns an empty array

EXAMPLES
- 'ABc' => 3 because each letter is in its corresponding alphabet position so 3/3

DATA STRUCTURE
- input: array of words
- intermediary: array
- output: array of numbers

ALGORITHM
- input array of words
- initialize `alphabet` to lowercase letters of the alphabet
- initialize `result` to an empty array
- iterate through the array of words
  - set a count to 0
  - iterate through chars in each word
    - check the char toLowerCase in the word with the char in the alphabet string at the current index
    - if chars match increment counter
  - push count value to `result`
- return result */

// function countMatchingIndices(words) {
//   let result = [];
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   for (let idx = 0; idx < words.length; idx += 1) {
//     let count = 0;
//     let word = words[idx];

//     for (let jdx = 0; jdx < word.length; jdx += 1) {
//       let char = word[jdx];
//       if (char.toLowerCase() === alphabet[jdx]) {
//         count += 1;
//       }
//     }
//     result.push(count);
//   }

//   return result;
// }

// function countMatchingIndices(words) {
//   return words.map(word => correctPosition(word));
// }

// function correctPosition(word) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return word
//     .toLowerCase()
//     .split('')
//     .filter((char, idx) => alphabet.indexOf(char) === idx).length;
// }

function countMatchingIndices(words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return words.map(word => {
    return word
      .toLowerCase()
      .split('')
      .filter((char, idx) => alphabet.indexOf(char) === idx).length;
  });
}

console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
console.log(
  countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
); // [6, 5, 7]
console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
console.log(countMatchingIndices([])); // []

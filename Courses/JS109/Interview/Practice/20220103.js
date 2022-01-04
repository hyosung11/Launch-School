/* 1. Accumulate

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

PROBLEM
- input: string
- output: new string

Rules
- input string is limited to letters 'a-z' can be upper or lower case
- each char in input string appears in returned string
- repeat original char as many times as its original index position
  - e.g., "abcd" =>  a-bb-ccc-dddd
- separate different chars by a hyphen
- in repeated sequence of char in the returned string
  - first instance to uppercase
  - subsequent instances to lowercase
- if first char in input string is uppercase, keep it uppercase

EXAMPLES
- "abcd" => "A-Bb-Ccc-Dddd"

DATA STRUCTURE
- input string
- intermediary: array
  - split
  - map
  - join
- output: new string

ALGORITHM
- input string
- split the string at each char
- iterate through chars and track index position
  - uppercase first char
  - lowercase subsequent occurrences of char
    - repeat occurrences of char based on index position
- join chars with hyphen
- return new string */

// function accum(string) {
//   return string
//     .split('')
//     .map((char, idx) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(idx);
//     })
//     .join('-');
// }


// // Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* =================
2. Alphabet Position

Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

PROBLEM
- input: string of letters
- output: new string with letters replaced by their numerical equivalent in the alphabet order

Rules
- replace every letter in the input string with its number position in the alphabet
- 'a' = 1, 'b' = 2, ... 'z' = 26
- if char in input string is not a letter, ignore it and don't return it
- uppercase letter returns same numeric position as its lowercase equivalent

EXAMPLES
- 'abc' => '1 2 3'

DATA STRUCTURE
- input: string
- intermediary: array (split, map, join?)
- output: new string

ALGORITHM
- input string
- initialize `result` array to collect values
- initialize `alphabet` to lowercase letters 'a-z' as lookup for the numbers of the letters in the alphabet
- reassign string to lowercase letters
- split the string at each char
- iterate through the chars
  - if `alphabet` includes the char
    - push the char's index position in the alphabet string into the `result` array
- join the chars at the space
- return new string */

// function alphabetPosition(string) {
//   let result = [];
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   string = string.toLowerCase();

//   string.split('').forEach(char => {
//     if (alphabet.includes(char)) result.push(alphabet.indexOf(char));
//   })

//   return result.join(' ');
// }

// console.log(alphabetPosition('SungOh')) // '19 21 14 7 15 8'
// console.log(alphabetPosition('abc') === '1 2 3'); // true
// console.log(
//   alphabetPosition("The sunset sets at twelve o' clock.") ===
//     '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
// );

/* =================
3. Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PROBLEM
- input: string
- output: word from the input string representing the highest score

Rules
- return the highest scoring word based on the values of the letters in the word according to their position in the alphabet
  - a = 1, b = 2, etc.
- if two words score the same, return the word that occurs first in the input string
- all letters will be lowercase
- all inputs will be valid
- implicit that words are split by space

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array => split, map, reduce
- output: string

ALGORITHM
- input string
- initialize `alphabet` to 'a-z'
- split the string into words by space
- initialize `wordScores` to return value of
  - iterate through the words
    - iterate through the chars of the words
    - compute the sum of the letters of each word by it's index position in `alphabet`
- iterate through the `wordScores` array to find the word with the highest score
- return word with highest score based on index position */

// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let words = string.split(' ');

//   let wordScores = words.map(word => {
//     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//   })

//   let maxIndex = 0;

//   for (let idx = 0; idx < wordScores.length; idx += 1) {
//     if (wordScores[idx] > wordScores[maxIndex]) maxIndex = idx;
//   }

//   return words[maxIndex];
// }

// // Examples / Test Cases
// // console.log(alphabetScore('man i need a taxi up to ubud'));
// // console.log(alphabetScore('aa b')); // [2, 2]
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('') === '');

/* =================
4. Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

Notes:

Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: new string

Rules
- move all capital letters from input string to front of word in the return string
- string contains only letters?
- just one word in each string?
- keep original relative order of the upper and lower case letters the same
  - 'shOrtCAKE' => O is the first capital letter in the input string, so it comes first in the return string

EXAMPLES
- see below

DATA STRUCTURE
- input string
- intermediary: array (iteration method like `map`)
- output new string

ALGORITHM
- input string
- initialize `upperString` to empty string
- initialize `lowerString` to empty string
- split the input string at each char
- iterate through each char of the input string
  - if char is equal to the char to uppercase add to `upperString`
  - if char is equal to char to lowercase add to `lowerString`
- concatenate `upperString` with `lowerString`
- return new string with capital letters first */

// function capToFront(string) {
//   let upperString = '';
//   let lowerString = '';

//   string.split('').map(char => {
//     if (char === char.toUpperCase()) upperString += char;
//     if (char === char.toLowerCase()) lowerString += char;
//   });

//   return upperString + lowerString;
// }

// console.log(capToFront("hApPy")); // "APhpy"
// console.log(capToFront("moveMENT")); // "MENTmove"
// console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"

/* =================
5. Change Me

Given a string, write a function changeMe which returns the same
string but with all the words in it that are palindromes uppercased.

PROBLEM
- input: string
- output: new string

Rules
- return a new string where words in the input string that are palindromes are converted to uppercase
- an empty string return an empty string
- if no palindromes return original string
- what about case?
- words are split at spaces

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: transform words into an array of char to check for palindromes
- output: new string

ALGORITHM
- input string of words
- split the input string into words at each space
- iterate through the words
  - iterate through chars of each word
    - check if word is a palindrome with helper function
- join words at space
- return new string with palindromes all uppercase

isPalindrome helper function
- input word
- split word into chars
- reverse chars
- join chars back into string
- return whether word is equal to reverse of itself */

// function changeMe(string) {
//   // let words = string.split(' ');
//   return string.split(' ').map(word => {
//     if (isPalindrome(word)) {
//       return word.toUpperCase();
//     } else {
//       return word;
//     }
//   })
//   .join(' ');
// }

// function isPalindrome(word) {
//   return word === word.split('').reverse().join('');
// }

// // Test Cases
// console.log(changeMe('We will meet at noon'));
// console.log(changeMe("We will meet at noon") === "We will meet at NOON");
// console.log(changeMe("No palindromes here") === "No palindromes here");
// console.log(changeMe("") === "");
// console.log(changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally");

/* =================
6. Common Chars

Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

PROBLEM
- input array of strings
- output: array of chars common to all strings of the input array

Rules
- return an array of all chars that occur in all strings of the input array
- input is only strings of lowercase letters
- only include a char as many times as it occurs in each string
  - ['bella', 'label', 'roller'] since 'l' occurs twice in each string return it twice in the output array

EXAMPLES
- see below

DATA STRUCTURE
- input: array
- intermediary: array
  - two loops
- output: array

ALGORITHM
- input array of words
- initialize `result` to empty array
- make copy of words array
- iterate through first word of array by char
  - if char exists in every word push char to `result` array
  - iterate through subsequent words in words array
    - replace char with empty string
- return `result` array of letters common to all input words */

// function commonChars(words) {
//   let result = [];
//   words = words.slice(0);

//   for (let idx = 0; idx < words[0].length; idx++) {
//     let letter = words[0][idx];
//     if (words.every(word => word.includes(letter))) result.push(letter);

//     for (let jdx = 1; jdx < words.length; jdx++) {
//       words[jdx] = words[jdx].replace(letter, '');
//     }
//   }

//   return result;
// }

// console.log(commonChars(['a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
// console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) // []
// );

/* =======================
7. Common Elements Problem

Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

algo
- input array1, array2
- iterate through first array
- iterate through second array
- if element common to both return element
- return array with elements common to both input arrays */

// function commonElements(nums1, nums2) {
//   let result = [];

//   nums1.filter(num1 => {
//     nums2.filter(num2 => {
//       if (num1 === num2 && !result.includes(num1)) result.push(num1);
//     })
//   })

//   return result;
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

/* =======================
8. Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

PROBLEM
- input: array of strings
- output: string

Algo
- input array
- initialize `prefix` to empty string
- sort the array from shortest to longest element
- initialize `substring`
- iterate through shortest word
  - check for letters in each element
  - if longer make prefix the substring
- return prefix */

// function commonPrefix(words) {
//   let prefix = '';
//   words = words.sort((a, b) => a.length - b.length);

//   let substring = '';

//   for (let idx = 0; idx < words[0].length; idx++) {
//     substring += words[0][idx];
//     // console.log(substring)
//     if (words.every(word => word.startsWith(substring))) {
//       prefix = substring;
//     }
//   }

//   return prefix;
// }
// // Test Cases
// console.log(commonPrefix(['']) === ''); // true
// console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
// console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
// console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
// console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true

/* =======================
9. Count Matching Indices

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

For example,
countMatchingIndices(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

PROBLEM
- input: array of strings
- output: array of numbers

Rules
- return an array of the number of letters that occupy their positions in the alphabet for each word
- input is letters, upper and lower case, but position is case-insensitive, so A and a both occupy position 1
- no spaces
- the letter a is in position 1 and b is in position 2 and so on
- empty array as input returns an empty array

EXAMPLES
- countMatchingIndices(["abode","ABc","xyzD"]) // [4, 3, 1]
  - ['abode'] => [4] because a in position, b in position, o not in position d in position, e in position, so 4/5 letter in position

DATA STRUCTURE
- input: array of strings
- intermediate: array (map, filter, indexOf)
- output: array of numbers

ALGORITHM
- input array of string/words
- initialize `alphabet` to 'a-z'
- iterate through the words
  - reassign word to lowercase
  - split word by char
  - iterate by char
    - filter chars whose index position matches that of their position in the `alphabet` string
    - compute how many chars in each word match by using the length property
- return array of numbers */

// function countMatchingIndices(words) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return words.map(word => {
//     return word
//       .toLowerCase()
//       .split('')
//       .filter((char, idx) => alphabet.indexOf(char) === idx)
//       .length;
//   });
// }

// console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
// console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
// console.log(
//   countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
// ); // [6, 5, 7]
// console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
// console.log(countMatchingIndices([])); // []

/* ======================
10. Difference of Two

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in the array. The order of the numbers in the input array should not matter.

PROBLEM
- input: array of number
- output: array of arrays of pairs of numbers

Rules
- return all pairs of numbers from a given array of numbers that have a difference of 2
- sort the result array in ascending order of values
- no duplicate numbers in input array
- can have duplicate numbers in output array pairs

EXAMPLES
- see below

DATA STRUCTURE
- input: array
- intermediary: array (sort, slice, )
- output: array of arrays

ALGORITHM
- input array
- initialize `result` array to empty array
- copy the input array
- sort the copied array
- iterate through the array
  - iterate through numbers of array
    - if difference between two adjacent numbers is two
      - push both numbers to result array
- return `result` array */

function differenceOfTwo(numbers) {
  let result = [];

  let sortedNums = numbers.slice(0).sort((a, b) => a - b);

  sortedNums.forEach((num, idx) => {
    sortedNums.slice(idx).forEach(nextNum => {
      if (nextNum - num === 2) result.push([num, nextNum]);
    });
  });

  return result;
}

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []
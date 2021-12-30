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

// function countMatchingIndices(words) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return words.map(word => {
//     return word
//       .toLowerCase()
//       .split('')
//       .filter((char, idx) => alphabet.indexOf(char) === idx).length;
//   });
// }

// console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
// console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
// console.log(
//   countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
// ); // [6, 5, 7]
// console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
// console.log(countMatchingIndices([])); // []

/* =========================================================
9. Duplicate Count

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only letters
(both uppercase and lowercase) and numeric digits.

Algo
- input string
- initialize `result` to an empty object
- iterate through input string by char
  - change char to lowercase
  - check if char in `result`
    - if char in `result` increment char
    - if not in `result` add to `result`
- iterate through the `result` values
  - filter values of chars that occur more than once
- return number */

// function duplicateCount(string) {
//   let result = {};

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx].toLowerCase();
//     result[char] ? result[char] += 1 : result[char] = 1;
//   }

//   return Object.values(result).filter(count => count > 1).length;
// }

// // Test Cases
// console.log(duplicateCount("") === 0);
// console.log(duplicateCount("abcde") === 0);
// console.log(duplicateCount("abcdeaa") === 1);
// console.log(duplicateCount("abcdeaB") === 2);
// console.log(duplicateCount("Indivisibilities") === 2);

/* =========================================================
10. Find Even Index

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal. */

// function findEvenIndex(array) {
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (array.slice(0, idx).reduce((sum, num) => sum + num, 0) === array.slice(idx + 1).reduce((sum, num) => sum + num, 0)) return idx;
//   }
//   return -1;
// }

// //Test Cases
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

/* =========================================================
11. Longest Consecutive String

You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Input: array of strings, integer(k)
Output: string (longest k consecutive strings)
Rules:
- length of the array (n) is 0 => ""
- array is shorter than the given number (k > n) => ""
- given number is negative (k <= 0) => ""

Algo
- input array of strings and number
- initialize `longestString` to empty string
- iterate through the array
  - initialize `testString` to slices of the array as long as number
  - join the string
  - if testString is longer than `longestString
    - reassign `longestString to `testString
- return longestString */

// function longestConsecutive(array, number) {
//   if (array.length === 0 || array.length < number || number <= 0) return '';

//   let longestString = '';

//   for (let idx = 0; idx < array.length; idx += 1) {
//     let testString = array.slice(idx, idx + number).join('')
//     if (testString.length > longestString.length) longestString = testString;
//   }

//   return longestString;
// }

// console.log(longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2)); // 'abigailtheta'

// console.log(longestConsecutive(['hi', 'tim', 'california', 'howdy', 'not', 'california'], 3)); // 'timcaliforniahowdy'

/* =========================================================
12. Max Multiple

Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

input: two numbers
  - divisor
  - bound
iterate through the value of bound
  - if bound divided by divisor is equal to remainder 0
    - return the bound
  - decrement the bound
return number

Another Algo
- input divisor and bound
- initialize `targetNumber` to 0
- iterate through the bound
  - initialize `currentNumber` to start at 0
  - repeat up to and including the bound
  - increment by value of divisor
  - if the currentNumber <= bound
    - reassign targetNumber to the currentNumber
- return targetNumber */

// function maxMultiple(divisor, bound) {
//   let targetNumber = 0;

//   for (let currentNumber = 0; currentNumber <= bound; currentNumber += divisor) {
//     if (currentNumber <= bound) {
//       targetNumber = currentNumber;
//     }
//   }
//   return targetNumber;
// }

// function maxMultiple(divisor, bound) {
//   while (divisor <= bound) {
//     if (bound % divisor === 0) return bound;
//     bound -= 1;
//   }
// }

// // Test Cases
// console.log(maxMultiple(2, 7) === 6);
// console.log(maxMultiple(3, 10) === 9);
// console.log(maxMultiple(7, 17) === 14);
// console.log(maxMultiple(10, 50) === 50);
// console.log(maxMultiple(37, 200) === 185);
// console.log(maxMultiple(7, 100) === 98);

/* =========================================================
13. Max Sequence

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
--> should be 6: [4, -1, 2, 1]

The easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead. Empty array is considered to have zero greatest sum. Note that the empty array is also a valid argument array.

PROBLEM
- input array of integers
- output number

Rules
- find the maximum sum of integers in a contiguous subsequence of an array of integers
- if all numbers are positive sum the whole array
- if all numbers negative return 0
- if array is empty return 0
- an empty array is a valid argument

EXAMPLES
- [-2, 1, -3, 4, -1, 2, 1, -5, 4] --> 6 [4, -1, 2, 1]

DATA STRUCTURE
- input array
- intermediary: subarrays, array
- number

ALGORITHM
- input array
- if array is empty return 0
- if all numbers are positive, sum the array
- if all numbers are negative return 0

- initialize maxSum to 0;
- initialize `subarrays` to return value of getSubarrays(array) helper function

- create getSubarrays helper function
  - initialize `subarrays` to empty array
  - iterate through the array
    - iterate through elements in the array
    - slice array into subarrays
  - return subarrays

- iterate through the subarrays
  - initialize `currentSum` to value of each subarray
  - if `currentSum` is greater than `maxSum` reassign `maxSum` to `currentSum`
- return maxSum */

// function maxSequence(array) {
//   if (array.length === 0) return 0;
//   if (array.every(number => number > 0)) return array.reduce((sum, num) => sum + num, 0);
//   if (array.every(number => number < 0)) return 0;

//   let maxSum = 0;
//   let subarrays = getSubarrays(array);

//   for (let idx = 0; idx < subarrays.length; idx += 1) {
//     let currentSum = subarrays[idx].reduce((sum, num) => sum + num, 0);
//     if (maxSum < currentSum) maxSum = currentSum;
//   }
//   return maxSum;
// }

// function getSubarrays(array) {
//   let subarrays = [];
//   for (let idx = 0; idx < array.length; idx += 1) {
//     for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
//       subarrays.push(array.slice(idx, jdx));
//     }
//   }
//   return subarrays;
// }

// console.log(getSubarrays([1, 2, 3, 4]));

// console.log(maxSequence([-1, 0, 1, 2]))

// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([11, 12]) === 23); // true
// console.log(maxSequence([-32, -30]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/* =========================================================
14. Next Bigger Number

Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

PROBLEM
- input: positive integer
- output: number larger than input number

Rules
- find next biggest number after the input number using the same digits
- if no bigger number can be found, return -1
- if single digit, there is no next bigger number
- if digits are all the same, no next bigger number
- if digits from left to right are in descending order, not next bigger number

EXAMPLES
- 12 => 21
- 513 => 531

DATA STRUCTURE
- input: number
- intermediary: string, array
- output: number

ALGORITHM
- input number
- initialize `targetNumber` to number + 1
- iterate from `targetNumber` to max value of number'
s digits
  - if targetNumber's max value equals number's max value return testNumber
  - increment targetNumber
- if no bigger number found return -1
- return number

- initialize `maxValue` helper function to find the largest number from the digits of the number and `testNumber`
  - convert number to string of digits
  - split number into digits
  - sort the digits from highest to lowest
  - join the digits
  - convert string to number */

// function nextBiggerNum(number) {
//   let targetNumber = number + 1;

//   while (targetNumber <= digitsMaxValue(number)) {
//     if (digitsMaxValue(targetNumber) === digitsMaxValue(number)) return targetNumber;
//     targetNumber += 1;
//   }

//   return -1;
// }

// function digitsMaxValue(digits) {
//   return Number(String(digits)
//     .split('')
//     .sort((a, b) => b - a)
//     .join(''))
// }
// console.log(largest(789));

// console.log(nextBiggerNum(9) === -1); // true
// console.log(nextBiggerNum(12) === 21); // true
// console.log(nextBiggerNum(13) === 31); // true
// console.log(nextBiggerNum(513) === 531); // true
// console.log(nextBiggerNum(2017) === 2071); // true
// console.log(nextBiggerNum(111) === -1); // true
// console.log(nextBiggerNum(123456789) === 123456798); // true

/* =========================================================
15. Paired Numbers

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

PROBLEM
- input array
- output: array of subarrays

Rules
- return all pairs of numbers from an array that have a difference of 2
- sort the result array in ascending order of values
- no duplicate numbers in either the input or output arrays

EXAMPLES
- see below

DATA STRUCTURE
- input array
- intermediary array of subarrays
- output array of subarrays

ALGORITHM
- input array
- initialize `result` to empty array
- sort the input array
- iterate through sorted array
  - iterate through elements of sorted array
    - compare outer loop array element with inner loop array element
    - if difference is 2
    - push both elements to `result` array
- return array of subarrays

Alex's Algorithm
- input array
- initialize `result` array to empty array
- sort array in ascending order
- loop through array
  - if array includes element at array[idx] + 2 and
  - is not already there helper function
    - add element at array[idx] and array[idx] + 2 to `result` array
- return `result` array

- isAlreadyThere helper function
  - input number and array
  - if array's length is 0 return false
  - loop through array
    - if second element of the subarray equals the number return true
  - return false */

  // function pairedNums(array) {
  //   let result = [];
  //   array.sort();

  //   for (let idx = 0; idx < array.length; idx += 1) {
  //     if (array.includes(array[idx] + 2) && !isAlreadyThere(array[idx], result)) {
  //       result.push([array[idx], array[idx] + 2]);
  //     }
  //   }
  //   return result;
  // }

  // function isAlreadyThere(number, array) {
  //   if (array.length === 0) return false;
  //   for (let idx = 0; idx < array.length; idx += 1) {
  //     if (array[idx][1] === number) return true;
  //   }
  //   return false;
  // }

// console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
// console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

/* =========================================================
16. Numerical Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.

Examples of numerical palindromes are:
2332
110011
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

PROBLEM
- input:
  - num: the starting number
  - s: the number of numerical palindromes we want
- output: an array of numbers (numbers are numerical palindromes)

Rules
- What is a palindrome?
  - a number that reads the same backwards as forwards
- single digit numbers are not palindromes
- if input num is a palindrome, include it in the return array
- the returned palindromes are equal to or greater than num
- if num or s is not a number, or if either is less than 0, return "Not valid"
- if s is 0, return an empty array
- first valid palindrome is 11

EXAMPLES
- see below

DATA STRUCTURE
- inputs
  - num which is starting number, must be 0 or greater
  - s, the number of numerical palindromes we want, also must be 0 or greater

- intermediary
  - array of numbers
  - convert numbers to strings for palindrome checks

- output
  - array of numbers (numerical palindromes)

ALGORITHM
- define `isPalindrome` helper function
  - input number
    - convert number to string
    - split the string into chars
    - reverse the chars
    - join the chars
  - compare number to reversed number
  - check if string length is greater than 1

- initialize `result` to empty array
*/

// function isPalindrome(num) {
//   let str = String(num);
//   if (str.length < 2) return false;
//   return str === str.split('').reverse().join('');
// }

// function isValid(num) {
//   return typeof num === 'number' && num >= 0;
// }

// function palindrome(num, size) {
//   let palindromeArray = [];

//   if (!isValid(num) || !isValid(size)) {
//     return 'Not valid';
//   }

//   while (palindromeArray.length < size) {
//     if (isPalindrome(num)) {
//       palindromeArray.push(num)
//     }
//     num += 1;
//   }

//   return palindromeArray;
// }

/* Algo
- input `num` and `count`
- if `num` or `count` are not numbers return 'Not valid'
- if `num` or `count` are less than 0, return `Not valid`
- initialize `result` array to empty array
- iterate through `result` as long as its length is less than count
  - pass `num` through `isPalindrome` helper function
    - if `num` is a palindrome
      - push it to `result`
    - increment `num`
- return `result` array

- initialize `isPalindrome` helper function
  - convert num to String
  - if `num` length less than 2 return false
  - check num against num
    - split
    - reverse
    - join
  - if palindrome return true */

// function palindrome(num, count) {
//   if (typeof num !== 'number' || typeof count !== 'number') return 'Not valid';
//   if (num < 0 || count < 0) return 'Not valid';

//   let result = [];

//   while (result.length < count) {
//     if (isPalindrome(num)) {
//       result.push(num);
//     }
//     num += 1;
//   }

//   return result;
// }

// function isPalindrome(num) {
//   let numString = String(num);
//   if (numString.length < 2) return false;
//   return numString === numString.split('').reverse().join('');
// }

// console.log(palindrome('ACCDDCCA', 3)); // "Not valid"
// console.log(palindrome(773, '1551')); // "Not valid"
// console.log(palindrome(-4505, 15)); // "Not valid"
// console.log(palindrome(4505, -15)); // "Not valid"

// console.log(palindrome(20, 0)); // []
// console.log(palindrome(0, 4)); // [11, 22, 33, 44]
// console.log(palindrome(6, 4)); // [11, 22, 33, 44]
// console.log(palindrome(75, 1)); // [77]
// console.log(palindrome(101, 2)); // [101, 111]

// CodeWars - Jaden Casing Strings
// function capFirstLetter(words) {
//   return words.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// console.log(capFirstLetter("How can mirrors be real if our eyes aren't real"));

// // Input version 1
// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map(function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(' ');
// };

// Input Version 2
// String.prototype.toJadenCase = function () {
//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   return this.split(' ').map(capitalizeFirstLetter).join(' ');
// };

/* ========================================================
17. Palindrome Substrings

Given a string, write a function `palindromeSubstrings` which returns all the substrings from a given string which are palindromes. Consider palindrome words case sensitive.

QUESTIONS
1. What is a palindrome?
2. What is a substring?
3. Will inputs always be strings?
4. What does it mean to treat palindrome words case-sensitively?

PROBLEM
- input: string
- output: array of palindrome substrings

Rules
- return only substrings that are palindromes
- palindromes are case-sensitive, e.g., 'AbBA' is not a palindrome
- if input is an empty string return an empty array
- if no palindromes found return an empty array

EXAMPLES
- see test cases

DATA STRUCTURE
- input: string
- intermediary: array of substrings
- output: array of substrings

ALGORITHM
`substring` function
- initialize `result` to empty array that will contain all required substrings
- initialize `startIdx` to 0 for the starting index of a substring
- start outer loop that uses `startIdx` to iterate over input string from `0` to length of string -2
  - initialize `numChars` to 2 for the length of the substring
  - start an inner loop that uses `numChars` to iterate over input string from `2` to string.length - startIdx
    - extract a substring of length `numChars` from string starting at `startIdx`
    - append the extracted substring to the `result` array
    - increment the `numChars` variable by 1
- end outer loop
- return the `result` array */

/* Algo for substrings helper function using nested for loops
- input string
- initialize `result` to empty array
- iterate through string to length - 1
  - iterate through chars in string
    - start  inner loop at outer loop start + 1
    - initialize `substring` to value of slice of string at idx, jdx + 1
    - push substring into result
- return `result` */

// function palindromeSubstrings(string) {
//   let result = [];
//   let substringsArray = substrings(string);

//   for (let idx = 0; idx < substringsArray.length; idx += 1) {
//     let substring = substringsArray[idx];
//     if (isPalindrome(substring)) {
//       result.push(substring);
//     }
//   }
//   return result;
// }

// function substrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length - 1; idx += 1) {
//     for (let jdx = idx + 1; jdx < string.length; jdx += 1) {
//       let substring = string.slice(idx, jdx + 1);
//       result.push(substring);
//     }
//   }
//   return result;
// }

// substrings('racecar');
// console.log(substrings('racecar'));

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// function substrings(string) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex < string.length - 2) {
//     let numChars = 2;
//     while (numChars <= string.length - startingIndex) {
//       let substring = string.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }
//     startingIndex += 1;
//   }

//   return result;
// }

// function palindromeSubstrings(string) {
//   let result = [];
//   let substringArray = substrings(string);

//   substringArray.forEach(substring => {
//     if (isPalindrome(substring)) result.push(substring);
//   });

//   return result;
// }

// function substrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length - 1; idx += 1) {
//     for (let jdx = idx + 1; jdx < string.length; jdx++) {
//       let substring = string.slice(idx, jdx + 1);
//       result.push(substring);
//     }
//   }

//   return result;
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// // Test cases:
// console.log(palindromeSubstrings("")) // => []
// console.log(palindromeSubstrings("palindrome")) // => []
// console.log(palindromeSubstrings("racecar")) // => ['racecar', 'aceca', 'cec']
// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// // => should return: ["ili"]
// console.log(palindromeSubstrings("abcddcbA")) // => ["bcddcb", "cddc", "dd"]

// Find the unique number
// function findUniq(arr) {
//   console.log(arr.sort((a, b) => a - b)); // [3, 3, 3, 3, 10]
//   return arr[0] === arr[1] ? arr.pop() : arr[0];
//   // if element at index position 0 === element at index position 1, pop and return the last element
//   // if element at index position 0 is not equal to element at index position 1 return the element at index position 0 because it's the unique element
// }

// function findUnique(array) {
//   return array.find(number => array.indexOf(number) === array.lastIndexOf(number));
// }

// function findUnique(array) {
//   // initialize `sortedArray` to value of the sorted array
//   let sortedArray = array.sort((a, b) => a - b);

//   // if the last instance is the first in the array then the number is unique
//   // otherwise return the last item in the array
//   if (sortedArray.lastIndexOf(sortedArray[0] === 0))
//   // means it's the first element at index position 0
//   return sortedArray[0];
//   return sortedArray[sortedArray.length - 1];
// }
// // console.log(findUniq([1, 0, 0]) === 1); // true
// console.log(findUnique([3, 1, 3, 3, 3,]));

/*=======================================================
18. Progressions

You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

PROBLEM
- input: array of integers
- output: number of arithmetic progressions

Rules
- return arithmetic progressions of size 3
- difference between elements in the progression must be the same: e.g., difference of 1, difference of 2, etc.
- all input array elements unique
- array is already sorted
- empty array returns 0
- array length less than three returns 0

EXAMPLES
- see test cases

DATA STRUCTURE
- input: array
- intermediate: subarrays
- output: number

ALGORITHM
- input array
- initialize `count` to 0 to track progressions
- initialize `subarrays` to collect subarrays
- start outer loop to get first element
  - start inner loop to get second element
    - start third loop to get third element
    - push elements at array[idx], array[jdx], array[kdx] as an array into subarrays
- iterate through subarrays
  - if element at index position 1 minus element at index position 0 is equal to element at index position 2 minus element at index position 1
  - increment counter
- return counter */

// function progressions(array) {
//   // let count = 0;
//   let subarrays = [];

//   for (let idx = 0; idx < array.length - 2; idx++) {
//     for (let jdx = idx + 1; jdx < array.length - 1; jdx++) {
//       for (let kdx = jdx + 1; kdx < array.length; kdx++) {
//         subarrays.push([array[idx], array[jdx], array[kdx]]);
//       }
//     }
//   }

//   // filter through the subarrays and increase the count
//   return subarrays.filter(subarray => {
//     return subarray[1] - subarray[0] === subarray[2] - subarray[1]
//   }).length;
// }

// function progressions(array) {
//   let result = [];

//   for (let idx = 0; idx <= array.length - 2; idx += 1) {
//     for (let jdx = idx + 1; jdx < array.length - 1; jdx += 1) {
//       let difference1 = array[jdx] - array[idx];

//       for (let kdx = jdx + 1; kdx < array.length; kdx += 1) {
//         let difference2 = array[kdx] - array[jdx];
//         if (difference1 === difference2) {
//           result.push([array[idx], array[jdx], array[kdx]]);
//         }
//       }
//     }
//   }

//   return result.length;
// }

// function progressions(array) {
//   let count = 0;
//   let subarrays = [];

//   for (let idx = 0; idx < array.length - 2; idx += 1) {
//     for (let jdx = idx + 1; jdx < array.length - 1; jdx += 1) {
//       for (let kdx = jdx + 1; kdx < array.length; kdx += 1) {
//         subarrays.push([array[idx], array[jdx], array[kdx]]);
//       }
//     }
//   }

//   subarrays.forEach(subarray => {
//     if (subarray[1] - subarray[0] === subarray[2] - subarray[1]) count += 1;
//   });

//   return count;
// }

// Test Cases
// console.log(progressions([]));  // 0
// console.log(progressions([1, 2]));  // 0
// console.log(progressions([1, 2, 3]));  // 1
// console.log(progressions([1, 2, 4]));  // 0
// console.log(progressions([1, 20, 21, 22]));  // 1
// console.log(progressions([1, 10000001, 20000001]));  // 1
// console.log(progressions([1, 2, 3, 4, 5])); // 4
// console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
// console.log(progressions([1, 2, 3, 4, 5]));  // 4
// console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

// function progressions(array) {
//   let count = 0;
//   let subarrays = [];

//   for (let idx = 0; idx < array.length - 2; idx += 1) {
//     for (let jdx = idx + 1; jdx < array.length - 1; jdx += 1) {
//       for (let kdx = jdx + 1; kdx < array.length; kdx += 1) {
//         subarrays.push([array[idx], array[jdx], array[kdx]]);
//       }
//     }
//   }

//   for (let idx = 0; idx < subarrays.length; idx += 1) {
//     if (subarrays[idx][1] - subarrays[idx][0] === subarrays[idx][2] - subarrays[idx][1]) count += 1;
//   }

//   return count;
// }

/*=======================================================
19. repeatedSubstringPattern

Given a non-empty string, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.

Example 1:
- input: 'abab'
- output: true
- explanation: It's the substring 'ab' twice.

Example 2:
- input: 'aba'
- output: false

PROBLEM
- input string
- output: boolean

Rules
- find repeated substring of input string
- only lowercase English letters
- substring is two or more characters
- substrings concatenated must equal input string

EXAMPLES
- 'abcabcabcabc' returns 'abc' + 'abc' + abc; + 'abc' which is true

DATA STRUCTURE
- input: string
- intermediary: substrings
- output: boolean

ALGORITHM
- input string
- initialize `substring` to empty string
- initialize `midString` to find the middle of the string
- iterate to `middle` of input string
  - slice string into substrings
  - iterate through length of string
    - increment the substring
  - if substring equals string return true
- return false */

// function repeatedSubstringPattern(string) {
//   let substring = '';
//   let midString = Math.floor(string.length / 2);

//   for (let idx = 0; idx < midString; idx += 1) {
//     substring = string.slice(0, idx + 1);

//     while (substring.length < string.length) {
//       substring += substring;
//       if (substring === string) return true;
//     }
//   }
//   return false;;
// }

// console.log(repeatedSubstringPattern('abab') === true); // true
// console.log(repeatedSubstringPattern('aba') === false); // true
// console.log(repeatedSubstringPattern('aabaaba') === false); // true
// console.log(repeatedSubstringPattern('abaababaab') === true); // true
// console.log(repeatedSubstringPattern('abcabcabcabc') === true); // true

/*=======================================================
20. Scramble

Write function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2; otherwise, return false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.

str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.

str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.

PROBLEM
- input: str1, str2
- output: boolean

Rules
- find letters in str1 that can be rearranged to make the letters of str2
- str1 length has to be equal to or greater than str2 length
- all lowercase letters
- no punctuation or digits

EXAMPLES
- str1 is 'katas', str2 is 'steak' so false because the letters of 'katas' cannot make the letters of 'steak'

DATA STRUCTURE
- input: str1, str2
- intermediary: substrings
- output: boolean

ALGORITHM
- input str1, str2
- initialize `array1` to value of splitting str1 into array of chars
- initialize `array2` to value of splitting str2 into array of chars
- if array1 length < array2 length return false
- iterate through array2
  - if array1 does not include element in array2 (- 1) return false
  - if array1 includes all of chars of array2 return true
- return false */

// function scramble(str1, str2) {
//   let array1 = str1.split('');
//   let array2 = str2.split('');

//   if (array1.length < array2.length) return false;

//   for (let idx = 0; idx < array2.length; idx += 1) {
//     if (array1.indexOf(array2[idx]) === -1) return false;
//     array1.slice(array1.indexOf(array2[idx]));
//   }

//   return true;
// }

// function scramble(str1, str2) {
//   let count = {};

//   str1.split('').forEach((char) => {
//     count[char] ? count[char] += 1 : count[char] = 1;
//   });

//   return str2.split('').every((char) => {
//     return count[char]--;
//   });
// }

// const scramble = (str1, str2) =>
//   [...str2].every((val) => str2.split(val).length <= str1.split(val).length);

// function scramble(str1, str2) {
//   let array1 = str1.split('');
//   let array2 = str2.split('');

//   if (array1.length < array2.length) return false;

//   for (let idx = 0; idx < array2.length; idx += 1) {
//     // if (!array1.includes(array2[idx])) return false;
//     if (array1.indexOf(array2[idx]) === -1) return false;
//     array1.splice(array1.indexOf(array2[idx]), 1);
//   }

//   return true;
// }

// console.log(scramble('ab', 'abc') === false); // true
// console.log(scramble('abd', 'abc') === false); // true
// console.log(scramble('jjvaass', 'jjaasq') === false); // true
// console.log(scramble('katas', 'steak') === false); // true
// console.log(scramble('rkqodlw', 'world') === true); // true
// console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
// console.log(scramble('scriptjava', 'javascript') === true); // true
// console.log(scramble('scriptingjava', 'javascript') === true); // true

/*=======================================================
21. Substring Test

Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

PROBLEM
- input: string1 and string2
- output: boolean

Rules
- find a substring that appears in both input strings
- substring must be 2 or more letters long
- case does not matter
- input can be numbers as well as letters

EXAMPLES
- see below

DATA STRUCTURE
- input string1 and string2
- intermediary: arrays
- output: boolean

ALGORITHM
- get all substrings of string1
- get all substrings of string2

`getAllSubstrings` helper function
- change input string to lowercase
- initialize` substrings` to an empty array
- start outer loop
  - start inner loop
  - slice string at inner and outer indexes
  - push slices into `substrings` array
- filter out substrings that are more than one char and return those substrings

- find shorter substrings array
- iterate through shorter array
  - initialize `char1` to `substrings1[idx]
  - initialize `char2` to `substrings2[idx]
  - if char1 exists in substrings1 or char2 exists in substrings2 return true
- return false */

// function substringTest(string1, string2) {
//   let substrings1 = getAllSubstrings(string1);
//   let substrings2 = getAllSubstrings(string2);

//   let maxIndex = Math.min(substrings1.length, substrings2.length);

//   for (let idx = 0; idx < maxIndex; idx++) {
//     let char1 = substrings1[idx];
//     let char2 = substrings2[idx];

//     if (substrings1.includes(char2) || substrings2.includes(char1)) return true;
//   }

//   return false;
// }

// function getAllSubstrings(string) {
//   string = string.toLowerCase();
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       substrings.push(string.slice(idx, jdx));
//     }
//   }

//   return substrings.filter(substring => substring.length > 1);
// }

// console.log(getAllSubstrings('Omi'));

// console.log(substringTest('', '') === false); // true
// console.log(substringTest('test', '111t') === false); // true
// console.log(substringTest('', 'Something') === false); // true
// console.log(substringTest('Something', '') === false); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('Something', 'Home') === true); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('BANANA', 'banana') === true); // true
// console.log(substringTest('1234567', '541265') === true); // true
// console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === true); // true

/*=======================================================
22. Sum of Numbers

Implement a function that calculates the sum of numbers inside of a string.

Example: "L12aun3ch Sch3oo45l" === 63

You can expect that the string will include only positive numbers.

PROBLEM
- input string
- output number

Rules
- calculate the sum of numbers inside a string
- consecutive digits count as one number
  - 'L 12 aun 3 ch' => 12 + 3 = 15
- string only includes positive numbers

EXAMPLES
- see below

DATA STRUCTURE
- input string
- intermediary: array
- output number

ALGORITHM
- input string
- initialize `chars` split of string into characters
- initialize `NUMBERS` to '0-9'
- initialize `delim` to '-'
- initialize `digits` to `chars` and
  - iterate through chars
    - if char is a number return char
    - if char is not a number return delim
- initialize `numbers` to result of digits
  - join
  - split at delim
  - map string to Number
- compute the value of the numbers
- return result */

// function sumOfNumbers(string) {
//   // let chars = string.split('');
//   const NUMBERS = '0123456789';
//   let delim = '-';

//   let digits = string.split('').map(char => {
//     if (NUMBERS.includes(char)) {
//       return char;
//     } else {
//       return delim;
//     }
//   });

//   let numbers = digits
//     .join('')
//     .split(delim)
//     .map(string => Number(string));
//     console.log(numbers);

//   return numbers.reduce((sum, num) => sum + num);
//   // return result;
// }

/* Algo
- input string
- split the string at each char
- iterate through the chars
  - if char is not a number replace with delim
  - if char is a number return the char
  - join the chars
  - split chars again at the delim
  - compute the sum of the numbers and return the number */

// function sumOfNumbers(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (isNaN(char)) return '-';
//       return char;
//     })
//     .join('')
//     .split('-')
//     .reduce((sum, num) => sum + Number(num), 0);
// }

// Examples:
// console.log(sumOfNumbers('HE2LL3O W1OR5LD')); // 11
// console.log(sumOfNumbers('Omi11 $% SungOh6')); // 17
// console.log(
//   sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog')); // 3635

// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers('Omi11 $% SungOh6') === 17);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

/* ======================================================
23. Three by Three

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4] from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12] so our function would return true. See the below test cases for more examples

Algo
- input array of string digits
- initialize `result` to return value of array:
  - iterate through strings
    - split the string into digits
  - iterate through the digits of strings
    - compute value of digits
    - filter out values that are divisible by 3
- if result of elements in array are 3 or greater return true
- return false */

function threeByThree(array) {
  let result = array
    .map(string => string.split(''))
    .map(digits => digits.reduce((sum, num) => sum + Number(num), 0))
    .filter(num => num % 3 === 0);

  if (result.length >= 3) return true;
  return false;
}

// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']) === true); // true
// console.log(threeByThree(['01112', '2043', '12043']) === false); // true
// console.log(threeByThree(['01112', '2043']) === false); // true
// console.log(threeByThree(['93', '9', '1', '25', '1212']) === true); // true

/* ======================================================
24. Valid Parentheses

 Write a function called validParentheses that takes a string of parentheses and determines if the order of the parentheses is valid. The function should return true if the string is valid and false if it is invalid.

Examples:
"()"                =>  true
 ")(()))"           =>  false
"("                 =>  false
"(())((()())())"    =>  true */

// function validParentheses(parens) {
//   let openParens = 0;

//   for (let idx = 0; idx < parens.length; idx += 1) {
//     parens[idx] === '(' ? openParens += 1 : openParens -=1;
//     if (openParens < 0) return false
//   }
//   return openParens === 0;
// }
// // Test Cases
// console.log(validParentheses( "()" )) // true
// console.log(validParentheses("(())((()())())")) // true
// console.log(validParentheses("((())))(")) // false
// console.log(validParentheses("((())))(()")) // false

/* ======================================================
25. Vowel Count

Given a string of one or more words, return an array that contains the number of vowels in each word of the argument string. The returned array should have the same number of elements as words in the argument string.

Algo
- input string of words
- if words is an empty string return an empty array
- split the string into an array of words
- iterate through each word and return the array of numbers found in each word after placing it through the `vowels` helper function

`vowels` helper function
- input word from the string
- initialize `vowels` to string of lower and upper case vowels
- initialize `count` to track occurrences of vowels in each word
- split the word into chars
- iterate through the chars
  - if char is a vowel increase count
- return count */

// function vowelCount(words) {
//   if (words === '') return [];

//   return words
//     .split(' ')
//     .map(word => vowels(word));
// }

// function vowels(word) {
//   let count = 0;
//   let vowels = 'aeiouAEIOU';

//   word.split('').forEach(char => {
//     if (vowels.includes(char)) count += 1;
//   });

//   return count;
// }

// console.log(vowelCount('')); // []
// console.log(vowelCount('grrr!')); // [0]
// console.log(vowelCount('WhaTs yOur enneagram?')); // [1, 2, 4])
// console.log(vowelCount('Colonel Sanders feeds me well !!')) // [3, 2, 2, 1, 1, 0]
// console.log(vowelCount('ZoInkies!! There are monsters in here.')) // [4, 2, 2, 2, 1, 2]

function substrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
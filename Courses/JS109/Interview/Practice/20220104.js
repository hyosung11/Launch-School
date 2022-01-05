/* Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PROBLEM
- input: string of words
- output: word having highest score in the input string

Rules
- find the highest scoring word based on the sum of the letters in the word according to their position in the alphabet
- if words have the same score, return the word that appeared first in the input string
- all letters lowercase
- if input is an empty string return an empty string
- words split at space
- just letters as input, no other chars

EXAMPLES
- 'aa b' => 'aa' = 2 and 'b' = 2, but 'aa' comes before 'b'

DATA STRUCTURE
- input string of words
- intermediary: array to get value of each word using `reduce`
- output: word

ALGORITHM
- input a string of words
- initialize `highest` to empty string to capture the word with the highest score
- split the string into words
- iterate through words
  - check the value of each word after its passed to the `getWordScore` helper function
  - if the value of word is greater than the value of highest when passed through `getWordScore`
    - reassign highest to word
- return `highest`

- initialize `getWordScore` helper function
- initialize `alphabet` to 'a-z'
- iterate through chars of  word
  - check the char against its position in `alphabet`
  - compute the value of each word
- return value of the word's score */

// function alphabetScore(words) {
//   let highest = '';

//   let wordsArray = words.split(' ');

//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let word = wordsArray[idx];
//     if (getWordScore(word) > getWordScore(highest)) {
//       highest = word;
//     }
//   }

//   return highest;
// }

// function getWordScore(word) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   return word
//     .split('')
//     .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
// }

// function alphabetScore(words) {
//   let highest = '';
//   let wordsArray = words.split(' ');

//   wordsArray.forEach(word => {
//     if (getWordScore(word) > getWordScore(highest)) highest = word;
//   });

//   return highest;
// }

// function getWordScore(word) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   return word
//     .split('')
//     .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
// }

// function alphabetScore(words) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let wordArray = words.split(' ');

//   let wordScores = wordArray
//     .map(word => {
//       return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//     })

//   let maxIndex = wordScores.indexOf(Math.max(...wordScores));
//   return wordArray[maxIndex];
// }

// function alphabetScore(words) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let wordArray = words.split(' ');

//   let wordScores = wordArray
//     .map(word => {
//       return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//     })

//   let maxIndex = 0;

//   for (let idx = 0; idx < wordScores.length; idx++) {
//     if (wordScores[idx] > wordScores[maxIndex]) {
//       maxIndex = idx;
//     }
//   }

//   return wordArray[maxIndex];
// }

// Examples / Test Cases

// console.log(alphabetScore('')); // ''
// console.log(alphabetScore('aa b')); // 'aa'
// console.log(alphabetScore('aa')); // aa
// console.log(alphabetScore('a z')); // z
// console.log(alphabetScore('y z')); // z
// console.log(alphabetScore('take me to semynak')); // semynak
// console.log(alphabetScore('man i need a taxi up to ubud')); // taxi
// console.log(alphabetScore('what time are we climbing up the volcano')); // volcano

// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('take me to semynak') === 'semynak');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(
//   alphabetScore('what time are we climbing up the volcano') === 'volcano'
// );

/* ================
11. Duplicate Count

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only letters
(both uppercase and lowercase) and numeric digits.

PROBLEM
- input: string
- output: number

Rules
- return count of distinct case-insensitive letters and digits that occur more than once in the input string
- input string contains only letters and numeric digits
- case does not matter
- empty string returns 0
- if no char repeats, return 0
- if char appears more two or more times, it counts just 1 time

EXAMPLES
- 'abcde' => 0 because no char repeats
- 'abcdeaa' => 1 because 'a' repeats even though it occurs 3 times
- 'abcdeaB' => 2 because a repeats, and b repeats as 'b' and 'B'

DATA STRUCTURE
- input: string
- intermediary: object to collect occurrences of each char
- output: number

ALGORITHM
- input string
- initialize `result` to empty object
- iterate through string by char
  - check each char in `result` object
    - convert char to lowercase
    - if char exists in `result` increment value by 1
    - if char doesn't exist, set value of char in`result` to 1
- iterate through the values of `result` object
  - filter out values greater than 1
- return number as the length*/

// function duplicateCount(string) {
//   let result = {};

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx].toLowerCase();
//     result[char] ? result[char] += 1 : result[char] = 1;
//   }

//   return Object.values(result).filter(count => count > 1).length;
// }

// function duplicateCount(string) {
//   let count = 0;
//   let result = {};
//   let lowerCaseString = string.toLowerCase();

//   for (let idx = 0; idx < lowerCaseString.length; idx++) {
//     let char = lowerCaseString[idx];
//     if (!result[char]) {
//       result[char] = 0;
//     }
//     result[char] += 1;
//   }
//   // returns an array of the values from the object
//   let letterCount = Object.values(result);

//   // iterate through the letterCount values and increment count if the value of a particular element is greater than 1
//   for (let idx = 0; idx < letterCount.length; idx++) {
//     if (letterCount[idx] > 1) count += 1;
//   }

//   return count;
// }

// Test Cases
// console.log(duplicateCount("") === 0);
// console.log(duplicateCount("abcde") === 0);
// console.log(duplicateCount("abcdeaa") === 1);
// console.log(duplicateCount("abcdeaB") === 2);
// console.log(duplicateCount("Indivisibilities") === 2);

// function duplicateCount(string) {
//   let counter = 0;
//   let result = {};
//   let lowerCaseString = string.toLowerCase();

//   for (let i = 0; i < lowerCaseString.length; i++) {
//     if (!result[lowerCaseString[i]]) {
//       result[lowerCaseString[i]] = 0;
//     }
//     result[lowerCaseString[i]]++;
//   }

  // let arrayOfValues = Object.values(result);
  // for (let i = 0; i < arrayOfValues.length; i++) {
  //   if (arrayOfValues[i] > 1) {
  //     counter += 1;
  //   }
  // }

//   return counter;
// }

// function duplicateCount(string) {
//   let result = {};
//   let charsArray = string.toLowerCase().split('');

//   charsArray.forEach(char => {
//     result[char] ? result[char] += 1 : result[char] = 1;
//   })

//   return Object.values(result).filter(count => count > 1).length;
// }

/* ================
12. LS Medium Problems - Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

PROBLEM
- input number
- output: number

Rules
- return the next number greater than the input number that is
  - an odd number
  - a multiple of 7
  - has no duplicate digits
- if no next featured number return an error message
- the largest possible featured number is 9876543201
- assume no negative numbers or 0 because not a multiple of 7

EXAMPLES
- 12 => 21 because it's odd, a multiple of 7, and contains two digits that don't repeat

DATA STRUCTURE
- input: number
- intermediary: split number into string of digits to check for repeating digits
- output: number

ALGORITHM
- input number
- while number is less than 9876543201
- increment number + 1
- if number is odd continue
- if number is not a multiple of 7 continue
- initialize `result` to an empty object to track occurrences of digits from the number
- convert the number to a string
- split the string at each digit
  - iterate through digits
    - check for digit in `result`
    - if digit exists increment it
    - if digit doesn't exist add it
iterate through values of `result`
  - if every value is 1
  - return number
return "There is no possible number that fulfills those requirements." */

// function featured(number) {
//   while (number < 9876543201) {
//     number += 1;

//     if (number % 2 === 0) continue;
//     if (number % 7 !== 0) continue;

//     let result = {};

//     let digits = String(number).split('');

//     digits.forEach(digit => {
//       result[digit] ? result[digit] += 1 : result[digit];
//     });

//     if (Object.values(result).every(value => value === 1)) return number;
//   }

//   return 'There is no possible number that fulfills those requirements.';
// }

// console.log(featured(12)); // 21
// console.log(featured(20)); // 21
// console.log(featured(21)); // 35
// console.log(featured(997)); // 1029
// console.log(featured(1029)); // 1043
// console.log(featured(999999)); // 1023547
// console.log(featured(999999987)); // 1023456987
// console.log(featured(9876543186)); // 9876543201
// console.log(featured(9876543200)); // 9876543201
// console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

/* ================
13. Find Even Index

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)

Index 0 is the place where the left side and right side are equal.

PROBLEM
- input: array of integers
- output: number representing index position

Rules
- find the index N where the sum of integers on either side of N are equal
- if this index position doesn't exist, return -1
- negative numbers are okay
- N is not included in calculation

EXAMPLES
- [1, 2, 3, 4, 5, 6] => -1 because no index position where sum on one side equals the sum on the other side

DATA STRUCTURE
- input: array
- intermediary: array (slice, reduce)
- output: number as index position

ALGORITHM
- input array of integers
- iterate through array
  - initialize `leftSide` to slice of input array from 0 to idx
  - initialize `rightSide` to slice of input array from idx + 1
  - sum the leftSide
  - sum the rightSide
  - if sums are equal
    - return index position
- return -1 if not found */

// function findEvenIndex(numbers) {
//   for (let idx = 0; idx < numbers.length; idx++) {
//     let leftSideSum = numbers.slice(0, idx).reduce((sum, num) => sum + num, 0);
//     let rightSideSum = numbers.slice(idx + 1).reduce((sum, num) => sum + num, 0);
//     if (leftSideSum === rightSideSum) return idx;
//   }

//   return -1;
// }

// //Test Cases
// // console.log(findEvenIndex([1, 2, 3, 4, 5, 8, 4, 2, 1])); // true
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

/* ================
14.GrabScrab

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as an array, and output a list of words that the pirate might have meant.

Return matches in the same order as in the array. Return an empty array if there are no matches.

PROBLEM
- input string and and array of words
- return array of words

Rules
- if the letters in the input string can be unscrambled to form a word or words that match words in the array, an array with those words
- return matches in same order as in the input array
- return an empty array if there are no matches
- what about capitalization?
- empty strings?

EXAMPLES
- see below

DATA STRUCTURE
- input string and array of words
- intermediary: array
- output: array

ALGORITHM
- input string and array of words
- initialize `result` to empty array to collect matches
- initialize `sortedString` to split string into chars, sort the char, and join
- iterate through array
  - initialize sortedElement to split the element, sort the char, and join
    - if sortedElement equals sortedString
      - push word to result
- return `result` array of words that match the input string
*/

// function grabscrab(string, array) {
//   let result = [];
//   let sortedString = string.split('').sort().join('');

//   for (let idx = 0; idx < array.length; idx++) {
//     let word = array[idx];
//     let sortedWord = word.split('').sort().join('');
//     if (sortedString === sortedWord) result.push(word);
//   }

//   return result;
// }

// function grabscrab(string, array) {
//   return array.filter(word => {
//     return word.split('').sort().join('') === string.split('').sort().join('')
//   });
// }

// console.log(grabscrab('oob', ['bob', 'baobab'])); // []);
// console.log(grabscrab('ourf', ['one', 'two', 'three'])); // []);
// console.log(grabscrab('trisf', ['first'])); // ["first"]);
// console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); //["sport", "ports"].
// console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])); // ["mountains"]);
// console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])); // ["pool", "loop"]));

/* ================
15. Longest Consecutive String

You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"// n being the length of the string array,

if n = 0 or k > n or k <= 0 return "".

PROBLEM
- input:
  - array of strings
  - number representing count of string elements to concatenate

Rules
- two inputs: an array of strings and an integer k
- return the first longest string consisting of k consecutive strings
- if length of string array is 0, return empty string
- if k greater than length of string array return empty string
- if k is less than or equal to 0 return empty string

EXAMPLES
- see below

DATA STRUCTURE
- input: array of strings and a number representing amount of strings to concatenate
- intermediary: array
- output: string

ALGORITHM
- input the array of strings
- input integer as `count` of strings to concatenate
- initialize `longestString` to empty string
- iterate through array
  - initialize `testString` to slice of array from index to index plus count and join to make a string
  - if testString is longer than longestString
    - reassign longestString to testString
- return `longestString` */

// function longestConsecutive(array, count) {
//   if (array.length === 0 || count > array.length || count <= 0) return '';

//   let longestString = '';

//   for (let idx = 0; idx < array.length; idx++) {
//     let testString = array.slice(idx, idx + count).join('');
//     if (testString.length > longestString.length) longestString = testString;
//   }

//   return longestString;
// }

// console.log(longestConsecutive([], -1));
// console.log(longestConsecutive(["zone"], 2));
// console.log(longestConsecutive(["Laurent", "Staub"], 0));
// console.log(longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2)); // 'abigailtheta'
// console.log(longestConsecutive(['hi', 'tim', 'california', 'howdy', 'not', 'california'], 3)); // 'timcaliforniahowdy'

/* ================
16. Max Multiple

Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

PROBLEM
- input: two numbers: divisor and bound
- output: number

Rules
- return largest number that is divisible by the divisor that is less than equal to the bound
- number is greater than 0

EXAMPLES
- 2, 7 => 6 because it is the highest multiple of 2 less than equal to bound which is 7

DATA STRUCTURE
- input two numbers
- output: number

ALGORITHM
- input two numbers
- while divisor is less than bound
  - start at bound and divide by divisor to remainder of 0
  - if remainder equals 0, return the bound
  - decrement bound by 1 */

// function maxMultiple(divisor, bound) {
//   while (divisor <= bound) {
//     if (bound % divisor === 0) return bound;
//     bound -= 1;
//   }
// }

/* Alternative Algorithm
- input divisor and bound
- initialize result to 0
- iterate from divisor to bound by increment of divisor
  - initialize `current` to divisor
  - if current > result
    - reassign result to current
- return result */

// function maxMultiple(divisor, bound) {
//   let result = 0;

//   for (let current = divisor; current <= bound; current += divisor) {
//     if (current > result) result = current;
//   }

//   return result;
// }

// function maxMultiple(divisor, bound) {
//   let result = 0;
//   let current = 0;

//   // 0 <= 7, 2, 4, 6, 8
//   while (current <= bound) {
//     // 2 > 0 => result is now 6
//     if (current > result) result = current
//     // 0 + 2
//     current += divisor
//   }

//   return result; // 6
// }


// function maxMultiple(increment, bound) {
//   let result = 0;

//   for (let currentNumber = 0; currentNumber <= bound; currentNumber += increment) {
//     if (currentNumber <= bound) result = currentNumber;
//   }

//   return result;
// }

// Test Cases
// console.log(maxMultiple(2, 7) === 6);
// console.log(maxMultiple(3, 10) === 9);
// console.log(maxMultiple(7, 17) === 14);
// console.log(maxMultiple(10, 50) === 50);
// console.log(maxMultiple(37, 200) === 185);
// console.log(maxMultiple(7, 100) === 98);

/* ================
17. Max Sequence

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

The easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

ALGORITHM
- input array of integers
- if all numbers are positive, sum the array
- if all numbers are negative, return 0
- if array is empty, return 0
- initialize `maxSum` to 0
- initialize `subarrays` to callback from `getSubarrays` helper function
- iterate through subarrays
  - initialize `currentSum` to value of subarray at index
  - compute sum of values of subarrays at the index
    - if currentSum is greater than maxSum
      - reassign maxSum to currentSum
- return maxSum

getSubarrays helper function
- input array
- initialize subarrays to empty array
- iterate through array
  - iterate through elements
    - slice array at idx and jdx
- return subarrays */

// function maxSequence(array) {
//   if (array.every(num => num > 0)) return array.reduce((sum, num) => sum + num, 0);
//   if (array.every(num => num < 0)) return 0;
//   if (array.length === 0) return 0;

//   let maxSum = 0;
//   let subarrays = getSubarrays(array);

//   for (let idx = 0; idx < subarrays.length; idx++) {
//     let currentSum = subarrays[idx].reduce((sum, num) => sum + num, 0);
//     if (currentSum > maxSum) maxSum = currentSum;
//   }

//   return maxSum;
// }

// function getSubarrays(array) {
//   let subarrays = [];

//   for (let idx = 0; idx < array.length; idx++) {
//     for (let jdx = idx + 1; jdx <= array.length; jdx++) {
//       subarrays.push(array.slice(idx, jdx));
//     }
//   }

//   return subarrays;
// }

// Alternative Solution with `slice`
// function maxSequence(array) {
//   let maxSum = 0;
//   // if (array.length === 0) return 0;

//   for (let start = 0; start < array.length; start += 1) {
//     for (let end = start; end < array.length; end += 1) {
//       let subarray = array.slice(start, end + 1);
//       let sum = subarray.reduce((total, value) => total + value, 0);
//       if (sum > maxSum) maxSum = sum;
//     }
//   }

//   return maxSum;
// }
// console.log(getSubarrays([1, 2, 3]))

// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([5, 11, 5, 12]) === 33); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-1, -32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/* ======================
18. /* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

PROBLEM
- input number
- output number

Rules
- return sum of all the multiples of 3 or 5 below input number
- only count number once if multiple of both 3 and 5
- if number is negative, return 0

EXAMPLES
- -1 => 0
- 10 => 23 [3, 6, 9, 5]

DATA STRUCTURE
- input number
- intermediary number
- output number

ALGORITHM
- input number
- initialize `result` to 0
- iterate up to input number
  - if number at index divided by 3 is 0, or
  - if number at index divided by 5 is 0
    - increment result by number
- return number summing multiples */

// function multiples(number) {
//   let result = 0;

//   for (let idx = 0; idx < number; idx ++) {
//     if (idx % 3 === 0 || idx % 5 === 0) result += idx;
//   }

//   return result;
// }

// console.log(multiples(-1)) // 0
// console.log(multiples(10)) // 23
// console.log(multiples(15)) // [3, 5, 6, 9, 10, 12, ] => 45
// console.log(multiples(20)) // 78
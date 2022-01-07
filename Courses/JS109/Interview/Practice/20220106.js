/* Codewars 7 kyu
Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

PROBLEM
- input string
- return number representing the length of the longest vowel string in the input string

Rules
- return number representing longest vowel string from input string
- input is lowercase letters only, no spaces
- vowels are 'aeiou'

EXAMPLES
- 'suoidea' => 3 because 'uoi' is three chars

DATA STRUCTURE
- input: string
- intermediary: substrings
- output: number

ALGORITHM
- input string
- initialize `vowels` to 'aeiou'
- initialize `longestChain` to 0 to track longest vowel chain length
- initialize `currentChain` to 0 track temporary vowel chain length
- iterate through string
  - initialize `char` to current index position in loop
    - if `char` is a vowel because it's in the `vowels` string
      - increment currentChain
      - if currentChain is greater than longestChain
        - reassign longestChain to currentChain
      - else reassign currentChain to 0
- return longestChain */

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let longestChain = 0;
//   let currentChain = 0;

//   string.split('').forEach(char => {
//     if (vowels.includes(char)) {
//       currentChain += 1;
//       if (currentChain > longestChain) {
//         longestChain = currentChain;
//       }
//     } else {
//       currentChain = 0;
//     }
//   });

//   return longestChain;
// }

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let longestCount = 0;
//   let currentCount = 0;

//   string.split('').forEach(char => {
//     if (vowels.includes(char)) currentCount += 1;
//     else currentCount = 0;

//     if (currentCount > longestCount) longestCount = currentCount;
//   })

//   return longestCount;
// }

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let vowelStringArray = [];
//   let vowelString = '';

//   string.split('').forEach(letter => {
//     if (vowels.includes(letter)) {
//       vowelString += letter;
//     } else if (vowelString.length > 0) {
//       vowelStringArray.push(vowelString);
//       vowelString = '';
//     }
//   });

//   return vowelStringArray.sort((a, b) => b.length - a.length)[0].length;
// }

// function longestVowelChain(string) {
//   // declare empty array to hold count values
//   let counts = [];
//   // declare vowels array
//   let vowels = 'aeiou'.split('');
//   // declare a counter
//   let counter = 0;
//   // iterate over the argument string
//   for (let idx = 0; idx < string.length; idx++) {
//     // if the current value is a vowel, increment counter
//     if (vowels.includes(string[idx])) counter++;
//     // if not, set counter to 0
//     else counter = 0;
//     // push the value of counter to the counts array
//     counts.push(counter);
//   }
//   // return the highest number in the counts array
//   return Math.max(...counts);
// }

// console.log(longestVowelChain('codewarriors'));
// console.log(longestVowelChain('codewarriors') === 2);
// console.log(longestVowelChain('suoidea') === 3);
// console.log(longestVowelChain('ultrarevolutionariees') === 3);
// console.log(longestVowelChain('strengthlessnesses') === 1);
// console.log(longestVowelChain('cuboideonavicuare') === 2);
// console.log(longestVowelChain('chrononhotonthuooaos') ===5);
// console.log(longestVowelChain('iiihoovaeaaaoougjyaw') === 8);

/* Letter Changes

Have the method letter_changes(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string
with the 3rd letter following it in the alphabet (ie. c becomes f, Z becomes C).
Then return this modified string.

PROBLEM
- input: string
- output: new string

Rules
- return new string where each of the letters of the input string are replaced with the 3rd letter following it in the alphabet
- ignore non-letters
- keep capitalization if the 3rd letter after the input letter is also capitalize

EXAMPLES
- 'xyz' => 'abc'
- 'XYZ' => 'ABC'

DATA STRUCTURE
- input: string
- intermediary: could convert to an array
- output: new string

ALGORITHM
- input string
- initialize `alphabet` to 'a-zabcA-ZABC'
- initialize `result` to empty string
- iterate through the string
  - initialize `char` to the string element at the index
  - initialize `targetIndex` to the index position of char in alphabet plus 3
  - if char is in the alphabet, add the char that is 3 positions after it in the `alphabet` to `result`
  - otherwise add the char to result string
- return `result` */

// function letterChanges(string) {
//   let result = '';
//   let alphabet = 'abcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZ'

//   string.split('').forEach(char => {
//     let targetIndex = alphabet.indexOf(char) + 3;
//     if (alphabet.includes(char)) result += alphabet[targetIndex];
//     else result += char;
//   });
//   return result;
// }

// console.log(letterChanges('xy 3z'));
// console.log(letterChanges('xy 3z') === 'ab 3c');
// console.log(letterChanges('xyz') === ('abc'))
// console.log(letterChanges("this long cake@&") === "wklv orqj fdnh@&")
// console.log(letterChanges("Road trip9") === "Urdg wuls9")
// console.log(letterChanges("EMAILZ@gmail.com") === "HPDLOC@jpdlo.frp")

/* JS101 - Small Problems > List Processing >Sum Of Digits

Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum. */

// function sum(integer) {
//   return String(integer)
//     .split('')
//     .reduce((sum, num) => sum + Number(num), 0);
// }
// // Examples
// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

/* JS101 - Small Problems > List Processing > Alphabetical Numbers

Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

    zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

PROBLEM
- input: array of integers
- output: array of integers

Rules
- return an array of integers sorted based on the English word for each number:
  [8, 18] because eight, eighteen come first in the alphabet
  [0] comes last
- numbers range from 0 to 19

EXAMPLE
- see below

DATA STRUCTURE
- input: array
- intermediary: array or object
- output: array of integers

ALGORITHM
- input an array of integers in ascending numerical order
- initialize `NUMBER_WORDS` to ['zero', 'one', ...] (array of words mapped to their index)
- sort the numbers in the array using `wordSort` helper function
- return an array of integers in ascending alphabetical order

wordSort helper function
- input number1 and number2 from array
- if number1 in NUMBER_WORDS  > number2 in NUMBER_WORDS return 1 (sort  them)
    */

// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
//                       'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                       'twelve', 'thirteen', 'fourteen', 'fifteen',
//                       'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function wordSort(num1, num2) {
//   console.log(num1, num2) //


//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     // console.log(`num1: ${NUMBER_WORDS[num1]} && num2: ${NUMBER_WORDS[num2]}`);

//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//         console.log(
//           `num1: ${NUMBER_WORDS[num1]} && num2: ${NUMBER_WORDS[num2]}`
//         );
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) { // [0, 1, 2, 3]
//   // this sorts the numbers
//   return [...array].sort(wordSort); // [0, 1, 2, 3]
// }

// // Example:
// console.log(alphabeticNumberSort([1, 0]));

// console.log(alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/* Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Algo
- input array1, array2
- initialize `result` to empty array
- iterate through array1
  - iterate through array2
    - multiply elements in array1 by elements in array2 and push to `result`
- sort the returned array in ascending numerical order
- return new array*/

// function multiplyAllPairs(array1, array2) {
//   let result = [];

//   array1.forEach(num1 => {
//     array2.forEach(num2 => {
//       result.push(num1 * num2);
//     })
//   })

//   return result.sort((a, b) => a - b);
// }

// // Example:
// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/* Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest. */

// function leadingSubstrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     result.push(string.slice(0, idx + 1));
//   }

//   return result;
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map(((char, idx) => {
//       return string.slice(0, idx + 1)
//     }))
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise: */

// Example:

// function leadingSubstrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     result.push(string.slice(0, idx + 1));
//   }

//   return result;
// }

// function substrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     let substring = string.slice(idx);
//     result.push(leadingSubstrings(substring));
//   }

//   return result;
// }

// function allSubstrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       result.push(string.slice(idx, jdx))
//     }
//   }

//   return result;
// }

// console.log(allSubstrings('abcde'));

// console.log(substrings('abcde'));
// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

/* Palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes. */


// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }


// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// function isPalindrome(word) {
//   // console.log(word)
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function palindromes(string) {
//   let test = substrings(string).filter(isPalindrome);
//   console.log(test);
//   return test;
// }

// function leadingSubstrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     result.push(string.slice(0, idx + 1));
//   }

//   return result;
// }

// function substrings(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     let substring = string.slice(idx);
//     result.push(leadingSubstrings(substring));
//   }
//   // console.log(result);
//   return result;
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// console.log(palindromes('abcd')); // []
// console.log(palindromes('madam')); // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/* Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

Algo
- input array of numbers
- initialize `sum` to zero
- iterate through array
  - add value at index 0 to sum
  - add values at index 0 and index + 1 to sum
  - ...
- return `sum`*/

function sumOfSums(numbers) {
  let sumTotal = 0;

  for (let idx = 0; idx < numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx + 1).reduce((sum, num) => sum + num, 0);
  }

  return sumTotal;
}
// Examples:
console.log(sumOfSums([3, 5, 2]));  // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
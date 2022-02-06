/* Common Prefix

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

Problem
- input array
- output string

Rules
- return the longest common prefix from an array of words
- all given inputs in lowercase letters 'a-z'
- if no common prefix, return an empty string

Algorithm
- input array of words
- initialize `prefix` to empty string
- sort the array of words by length from shortest to longest
- initialize `substring` to empty string
- iterate through shortest word
  - increment `substring` by letters of shortest word
  - if every word starts with substring
    - reassign prefix to substring
- return prefix */

// function commonPrefix(words) {
//   let prefix = '';
//   let shortest = words.sort((a, b) => a.length - b.length)[0];

//   // console.log(shortest);
//   let substring = '';

//   for (let idx = 0; idx < shortest.length; idx++) {
//     substring += shortest[idx];
//     if (words.every(word => word.startsWith(substring)))
//       prefix = substring;
//   }

//   return prefix;
// }
// // Test Cases
// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
// console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
// console.log(
//   commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
// ); // true
// console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
// console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
// console.log(commonPrefix(['']) === ''); // true

/* 2. Problem Description

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples

Problem
- input array
- output boolean

Rules
- return boolean true if 3 or more elements of the input array's string digits can be summed and divided by 3 with a remainder of 0
- only string digits 0-9

Algorithm
- declare `threeByThree` function with `array` parameter
- transform each array element
  - split each element into its individual digits
  - compute sum of digits
- filter and return numbers divided by 3 with no remainder
- if 3 or more elements in the array have a remainder 0 return true
- return false */

// function threeByThree(array) {
//   return array
//     .map(string => {
//       return string
//         .split('')
//         .reduce((sum, num) => sum + Number(num), 0)
//     })
//     .filter(num => num % 3 === 0)
//     .length > 2;
// };

// // Test Cases
// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// // true
// console.log(threeByThree(['01112', '2043', '12043']));
// // false
// console.log(threeByThree(['01112', '2043']));
// // false
// console.log(threeByThree(['93', '9', '1', '25', '1212']));
// // true

/* Accumulate 1. Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

PROBLEM
- input string
- output string

Rules
- return new string
  - each char from input string appears in new string
  - repeat char as many times as its original idx position
  - separate different chars with a hyphen
  - capitalize first instance of char
  - lowercase subsequent instances of char

EXAMPLES
- 'abcd' => 'A-Bb-Ccc-Dddd'

DATA STRUCTURE
- input string
- middle: array (map)
- output: string

ALGORITHM
- input string
- split string into an array of chars
- transform each char
  - uppercase first occurrence of char
  - lowercase subsequent occurrences of char
  - repeat char based on original index position
- join chars with hyphen
- return new string */

// function accum(string) {
//   return string
//     .split('')
//     .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
//     .join('-');
// }

// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* Paired Numbers

1. The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

PROBLEM
- input array of numbers
- output nested array of paired numbers with a difference of two

Rules
- return an array of nested arrays of pairs of numbers whose difference is 2
- sort the result array in ascending order of value
- no duplicate number in return array

EXAMPLES
- [1, 3, 2, 6, 8, 5, 9, 7] => [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]

DATA STRUCTURE
- input array
- array
- output nested array

ALGORITHM
- input array of numbers
- initialize `result` to empty array
- sort the input array
- iterate through sorted array
  - check for pairs of numbers with difference of two
  - pass number and array to alreadyThere helper function
  - if numbers are not in the result array
    - push both numbers as an array to `result` array
- return `result` array

alreadyThere helper function
- input number and array
- if array is empty return false
- iterate through array
  - if number is equal to the second element in the nested array, return false
- return true */

// function pairedNums(array) {
//   let result = [];
//   array.sort();

//   for (let idx = 0; idx < array.length; idx++) {
//     if (array.includes(array[idx] + 2) && !seen(array[idx], result)) {
//       result.push([array[idx], array[idx] + 2]);
//     }
//   }

//   return result;
// }

// function seen(num, array) {
//   if (array.length === 0) return false;
//   for (let idx = 0; idx < array.length; idx++) {
//     if (array[idx][1] === num) return true;
//   }

//   return false;
// }

// console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7]));  // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
// console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27]));  // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

/* Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" === 63

You can expect that the string will include only positive numbers. 

Problem
- input string
- output number

Rules
- return number that sums the values of the numbers in the string
- only positive numbers

Algorithm
- input string
- split string into chars
- transform chars
  - if digit return digit
  - if not a number change to '-'
- join the string
- split again by delim
- compute the sum of the digits
- return number */

// function sumOfNumbers(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char.match(/[0-9]/)) return char;
//       return '-';
//     })
//     .join('')
//     .split('-')
//     .reduce((sum, num) => sum + Number(num), 0);
// }

// console.log(sumOfNumbers("HE2LL3O W1OR5LD"))// === 11);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")) // === 3635);

// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

/* Progressions

Medium Problem
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted. 

P:
- input array
- output number

Rules
- return number of arithmetic progressions of size 3
- differences between elements must be the same
- all array elements unique and sorted

Examples
- see above

D:
- input array
- intermediary
- output number

A
- input array
- initialize `count` to 0
- iterate through array
  - iterate through array from idx + 1
    - iterater through array from idx + 2
    - if element at idx + 2 minus element at idx + 1 equals element at idx + 1 minus element at idx
    - increment count
- return `count`*/

function progressions(array) {
  let count = 0;

  for (let idx = 0; idx < array.length; idx++) {
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      for (let kdx = jdx + 1; kdx < array.length; kdx++) {
        if (array[kdx] - array[jdx] === array[jdx] - array[idx]) {
          count += 1;
        }
      }
    }
  }

  return count;
}

console.log(progressions([]));  // 0
console.log(progressions([1, 2]));  // 0
console.log(progressions([1, 2, 3]));  // 1
console.log(progressions([1, 2, 4]));  // 0
console.log(progressions([1, 20, 21, 22]));  // 1
console.log(progressions([1, 10000001, 20000001]));  // 1
console.log(progressions([1, 2, 3, 4, 5])); // 4
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));  // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10
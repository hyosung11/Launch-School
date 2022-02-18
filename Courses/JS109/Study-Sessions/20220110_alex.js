/* Find All Pairs

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples

[1, 2, 5, 6, 5, 2]  -->  2

...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

...because there are 4 pairs: 2, 20, 6 and 2 (again)

=======
PROBLEM
- input: array of numbers
- output: number of pairs in the input array

Rules
- count all pairs in input array and return that count as a number
- if array is empty or contains only one value, return 0
-  If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)

EXAMPLES
- see below

DATA STRUCTURE
- input: array
- intermediary: object
- output: number

ALGORITHM
- input an array of numbers
- if array is empty or contains only one value, return 0
- initialize `result` object to collect the key-value pairs from the array
- iterate through the array
  - check for number in `result` object
    - if number in `result` increment the number
    - otherwise set value of number in result to 1
- iterate through the values of the `result` object
  - divide by 2 and round down via Math.floor
  - add  it up 
- return number as count of pairs */

// function duplicates(array) {
//   if (array.length <= 1) return 0;

//   let result = {};

//   array.forEach(number => {
//     result[number] ? result[number] += 1 : result[number] = 1;
//   })

//   return Object.values(result).map(num => {
//     return Math.floor(num / 2)
//   }).reduce((sum, num) => sum + num, 0);
// }


// function duplicates(array) {
//   let result = {};

//   array.forEach((num) => {
//     result[num] ? (result[num] += 1) : (result[num] = 1);
//   });

//   let pairs = Object.values(result).reduce(
//     (sum, num) => sum + Math.floor(num / 2),
//     0
//   );

//   return pairs;
// }


// function duplicates(array) {
//   let result = {};

//   array.forEach((num) => {
//     result[num] ? (result[num] += 1) : (result[num] = 1);
//   });

//   return Object.values(result).reduce(
//     (sum, num) => sum + Math.floor(num / 2),
//     0
//   );
// }

// console.log(duplicates([1, 2, 5, 6, 5, 2]));

// console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3 );
// console.log(duplicates([1000, 1000])  === 1 );
// console.log(duplicates([]) === 0);
// console.log(duplicates([54]) === 0);

// console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3 );
// console.log(duplicates([1000, 1000])  ===1 );
// console.log(duplicates([]) === 0);
// console.log(duplicates([54]) === 0);

/* Return substring instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

PROBLEM
input: string, substring
output: number (of times substring occurs in string)

rules:
- return number of times substring occurs
- substrings can be as small as 1 character
question: do non-alphabetic char count?

DATA STRUCTURES
input: string, substring
in between: array of substrings
output: number (of times substring occurs in string)

ALGO
input: string, substring
create variable count = 0
iterate through getSubstrings helper function
  - if element === substring increment count by 1
return count

*/

// function solution(fullText, searchText) {
//   let count = 0;

//   for (let idx = 0; idx < fullText.length; idx++) {
//     let substring = fullText.slice(idx, idx + searchText.length);
//     if (substring === searchText) count += 1;
//   }

//   return count;
// }

// function solution(fullText, searchText) {
//   return fullText.split(searchText).length - 1;
// }

function solution(fullText, searchText) {
  let regex = new RegExp(searchText, 'gi');
  let matches = fullText.match(regex);

  return matches ? matches.length : 0;
}

console.log(solution('abcdeb', 'b') === 2);
console.log(solution('abc', 'b') === 1);
console.log(solution('abbc', 'bb') === 1);
console.log(solution('aa_bb_cc_dd_bb_e', 'bb') === 2);
console.log(solution('aaabbbcccc', 'bbb') === 1);
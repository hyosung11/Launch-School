/* file already made */

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

Problem
- input array of numbers
- output number

Rules
- return number of pairs found in the input array
- numbers can be paired only once
- if no pairs, return 0

Examples
- [1, 2, 5, 6, 5, 2] => [2. 2], [5, 5] =>  2
- [0, 0, 0, 0, 0, 0, 0] = [0, 0], [0, 0], [0, 0] and [0]= 3.5 => 3

Data Structure
- input array
- in-between: object
- output number

Algorithm
- declare function `duplicates`
- create `count` object and set to empty object
- iterate through the arr, if obj[element] already exists, increment by 1; otherwise add property to array with value of 1

- compute the sum of Math.floor(value / 2) of each value of `count`


*/
function duplicates (arr) {
  let count = {};

  for (let idx = 0; idx < arr.length; idx++) {
    count[arr[idx]]? count[arr[idx]] += 1: count[arr[idx]] = 1;
  }

  return Object.values(count).reduce((sum, num) => sum + Math.floor(num / 2), 0)
}

console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3 );
console.log(duplicates([1000, 1000])  === 1 );
console.log(duplicates([]) === 0);
console.log(duplicates([54]) === 0);

/* Return substring instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1 
*/
// function solution (str1, str2) {
//   let count = 0
  
//   while (true) {
//     if(str1.includes(str2)) {
//       count += 1;
//       str1 = str1.replace(str2, ''); 
//     } else {
//       return count;
//     }
//   }
// }


function solution(string, substring) {
  return string.split(substring).length - 1;
}

console.log(solution('abcdeb', 'b') === 2);
console.log(solution('abc', 'b') === 1);
console.log(solution('abbc', 'bb') === 1);
console.log(solution('aa_bb_cc_dd_bb_e', 'bb') === 2);
console.log(solution('aaabbbcccc', 'bbb') === 1);
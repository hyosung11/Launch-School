/* Codewars - Return substrings instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

PROBLEM
- inputs
  - fullText string
  - searchText string
- output number

Rules
- return the number of times the searchText is found within the fullText
- looks like just lowercase letters as inputs
- searchText can be on char

EXAMPLES
- 'abc' and 'b' => 1 because 'b' appears once in 'abc'

DATA STRUCTURE
- input two strings
- intermediary: substrings
- output: number

ALGORITHM
- input fullText and searchText
- create new RegExp for searchText
- look for matches in fullText
- return matches as a number based on length
  */

// function solution(fullText, searchText) {
//   const regex = new RegExp(searchText, 'gi');
//   const matches = fullText.match(regex);

//   return matches ? matches.length : 0;
// }

// function solution(fullText, searchText) {
//   return fullText.split(searchText).length - 1;
// }

// function solution(fullText, searchText) {
//   let count = 0;
//   for (let idx = 0; idx < fullText.length; idx += 1) {
//     let substring = fullText.slice(idx, idx + searchText.length);
//     if (substring === searchText) {
//       count += 1;
//       idx += searchText.length - 1;
//     }
//   }
//   return count;
// }

// function solution(fullText, searchText) {
//   let count = 0;
//   let idx = 0;
//   while (idx < fullText.length) {
//     let substring = fullText.slice(idx, idx + searchText.length);
//     if (substring === searchText) {
//       count += 1;
//       idx += searchText.length;
//     } else {
//       idx += 1;
//     }
//   }
//   return count;
// }

// function solution(fullText, searchText) {
//   let count = 0;
//   for (let idx = 0; idx < fullText.length; idx++) {
//     if (fullText.slice(idx, idx + searchText.length) === searchText) count++;
//   }
//   return count;
// }

// console.log(solution('abc', 'b') === 1);
// console.log(solution('abbc', 'bb') === 1);
// console.log(solution('abcdeb', 'b') === 2);

/* JS100/101 PEDAC

Introductions
- Ankit, India
- Daniel Ebron, started core curriculum yesterday, have tried to solve problems without PEDAC before, 2 year coding background
- Philip Villasurda (philip@fda.hss.gov), project manager
- Alex
- HyoSung
- Antonina, Greece

PEDAC
Understand the Problem
- input and output
- rules, boundaries
- ask the interviewer clarifying questions

Examples/Test Cases
- verify understanding of the problem
- implicit requirements that weren't covered by the problem description
- edge cases
  - e.g., empty string as an input
  - casing of letters
  - empty array
  - order of elements in the array
- examine every test case

Data Structures
- how to transform the input to the output

Algorithm
- write out high-level steps (language-agnostic)
- focus on the logic of solving the problem

Problem Description:
- Given two strings, return the characters that are not common in the two strings.

Inputs: two strings
Output: string

Rules:
  -the characters in the output string are returned in the order of the
  input strings
  -no matter how many times a letter appears in one string, if it appears in the other string, do not include it in the returned string.
  -if there are no not-common characters in the two strings, return an empty string
  -case-insensitive

Data structures:
  -array of characters
  -includes
  -empty string to add the characters to return

Algorithm
- input string1 and string2
- initialize `result` to empty string
- iterate through string1 by char
  - if char is not in string2
    - add char to `result`
- iterate through string2 by char
  - if char is not in  string1
    - add char to result
- return `result` string of unique chars */

// Alex's Version
function uniqueStringCharacters(str1, str2) {
  let result = '';

  for (let idx = 0; idx < str1.length; idx++) {
    if (!str2.includes(str1[idx])) result += str1[idx];
  }

  for (let idx = 0; idx < str2.length; idx++) {
    if (!str1.includes(str2[idx])) result += str2[idx];
  }

  return result;
}

// Philip's Version
// function uniqueStringCharacters (str1, str2) {
//   let uniqueChars = "";
//   let str1Array = str1.split("");
//   let str2Array = str2.split("");

//   str1Array.forEach((element)=> {
//     if (!str2Array.includes(element)) {
//       uniqueChars += element;
//     }
//   })

//   str2Array.forEach((element)=> {
//     if (!str1Array.includes(element)) {
//       uniqueChars += element;
//     }
//   })

//   return uniqueChars;
// }

// // Antonina's Solution
// const getUncommonChars = (str1, str2) => [...str1].filter(char => !str2.includes(char));

// function uniqueStringCharacters(str1, str2) {
//   let str1Uniques = getUncommonChars(str1, str2);
//   let str2Uniques = getUncommonChars(str2, str1);
//   return str1Uniques.concat(str2Uniques).join("");
// }

console.log(uniqueStringCharacters('xxz', 'zyl'));// 'xxyl')
console.log(uniqueStringCharacters("xyab","xzca")); // "ybzc"

console.log(uniqueStringCharacters("a","z") === "az");
console.log(uniqueStringCharacters("abcd","de") === "abce");
console.log(uniqueStringCharacters("abc","abba") === "c");
console.log(uniqueStringCharacters("xyz","zxy") === "");
console.log(uniqueStringCharacters("xxz","zyl") === "xxyl");



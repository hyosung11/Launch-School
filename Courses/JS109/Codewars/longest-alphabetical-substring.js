/* Longest alphabetical substring - 6 kyu

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first. */


// function longest(string) {
//   if (string.length === 1) return string;

//   let longest = '';
//   let current = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx]; // abc => a
//     if (char >= current[current.length - 1]) {
//       current += char; // a
//     } else {
//       if (current.length > longest.length) {
//         longest = current; // abc
//       }

//       current = ''; // ''
//       current += char; // a
//     }
//   }

//   if (current.length > longest.length) longest = current;

//   return longest;
// }

// console.log(getSubstrings('abc'))


// function longest(str) {
//   let longestSubstring = '';
//   let currentSubstring = '';

//   for (let idx = 0; idx < str.length; idx += 1) {
//     if (str[idx] <= str[idx + 1]) {
//       currentSubstring += str[idx];
//       console.log(currentSubstring) // a
//     } else {
//       currentSubstring += str[idx];
//       // console.log(currentSubstring) // abc ab
//       if (currentSubstring.length > longestSubstring.length) {
//         longestSubstring = currentSubstring;
//       }
//       currentSubstring = '';
//     }
//   }
//   return longestSubstring;
// }


/* Algo
- input string
- initialize `result` to empty string
- initialize `substring` to char at string index position 0
- iterate through string
  - if char at string index position plus 1 is greater than or equal to char at string index position
    - add the char at string index position plus 1 to substring
  - otherwise
    - if the substring length is greater than the length of `result` string
      - reassign result to substring
    - make substring equal to the string at the current index position plus 1
- return `result` substring */

function longest(string) {
  let result = '';
  let substring = string[0]

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx + 1] >= string[idx]) {
      substring += string[idx + 1];
    } else {
      if (substring.length > result.length) {
        result = substring;
      }
      substring = string[idx + 1];
    }
  }

  return result;
}


console.log(longest('abcbabcdbabcdeb'));
console.log(longest('abcab') === 'abc');
// console.log(longest('abcd') === 'abcd');
// console.log(longest('abca') === 'abc')
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');


// function longest(str) {
//   let result = '';
//   let substring = str[0] // a

//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx + 1] >= str[idx]) {
//       substring += str[idx + 1]; // abc
//     } else {
//       if (substring.length > result.length) {
//         result = substring; // abc
//       }
//       substring = str[idx + 1]; // idx = 3
//       console.log(substring) // b
//     }
//   }

//   return result;
// }

// function longest(str) {
//   // declare alphabet constant to check index order
//   const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
//   // declare holding array with an empty string
//   let holdingArr = [''];
//   // declare a way to keep track of the current array index
//   let currentIndex = 0;
//   // iterate over the string
//   for (let idx = 0; idx < str.length; idx++) {
//     // if the current character index is greater than or equal to the previous one,
//     if (ALPHA.indexOf(str[idx]) >= ALPHA.indexOf(str[idx - 1])) {
//       // concatenate the current character to the current element in holdingArr
//       holdingArr[currentIndex] = holdingArr[currentIndex] + str[idx];
//     } else {
//       // otherwise, push a new element to the holdingArr (this means the current character is
//       //  not in alphabetical order, so we're starting to track a new one)
//       holdingArr.push(str[idx]);
//       // we also increment our current index since we're now working on the next character
//       currentIndex++;
//     }
//   }
//   // sort holdingArr by their lengths in descending order
//   holdingArr.sort((a, b) => b.length - a.length);
//   // return the first element, which would be the longest
//   return holdingArr[0];
// }
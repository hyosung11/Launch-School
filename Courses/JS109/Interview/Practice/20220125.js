/* Common Characters

Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

PROBLEM
- input array of strings
- return array of chars in common among the strings

Rules
- return an array of string chars that are common to the strings from the input array
- input is only lowercase letters
- return chars as many times as they appear in the strings
  - e.g., if a char appears 3 times in all strings but not 4 times, you need to include that char 3 times in the final answer

EXAMPLES
- ['bella', 'label', 'roller'] => ['e', 'l', 'l']

DATA STRUCTURE
- input: array of strings
- intermediary: array
- output: array

ALGORITHM
- initialize `result` to empty array
- iterate through first word of input array
  - for each letter in first word
  - if every word of input array includes letter
    - add letter to `result`
  - iterate through input array of words
    - replace letter in subsequent word with empty string
- return `result` array */

// function commonChars(words) {
//   let result = [];

//   for (let idx = 0; idx < words[0].length; idx++) {
//     let letter = words[0][idx];
//     if (words.every(word => word.includes(letter)))
//       result.push(letter);

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
// console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []

// function commonChars(words) {
//   let result = [];

//   for (let idx = 0; idx < words[0].length; idx += 1) {
//     let char = words[0][idx]; // 'c', 'o', 'o'
//     if (words.every((word) => word.includes(char))) {
//       result.push(char); // ['c'], ['c', 'o']
//     }

//     for (let jdx = 1; jdx < words.length; jdx += 1) {
//       // let word = words[jdx]
//       console.log(words[jdx]);
//       // console.log(word)
//       // 'lock', 'lok', 'lk'
//       // 'cook', 'ook', 'ok'

//       words[jdx] = words[jdx].replace(char, '');
//       // replace 'c' in 'lock' with '' -> 'lok
//       // replace 'c' in 'cook' with '' -> 'ook'
//       // replace 'o' in 'lok' with '' -> 'lk'
//       // replace 'o' in 'cok' with '' -> 'ok'
//       // replace 'k' in 'lk' with '' -> 'lk'
//       // replace 'k' in 'ook' with '' -> 'ok'
//     }
//   }

//   return result;
// }


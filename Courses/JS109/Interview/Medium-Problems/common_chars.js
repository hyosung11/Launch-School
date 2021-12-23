/* Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer. */

// function commonChars(strings) {
//   let commonChars = strings[0];

//   for (let idx = 1; idx < strings.length; idx += 1) {
//     commonChars = commonBetweenTwo(commonChars, strings[idx].split(''))
//   }

//   return commonChars;
// }

// function commonBetweenTwo(word1, word2) {
//   let commonChars = [];
//   let word2Clone = word2.slice(0);

//   for (let idx = 0; idx < word1.length; idx += 1) {
//     let char1 = word1[idx];

//     for (let jdx = 0; jdx < word2.length; jdx += 1) {
//       let char2 = word2[jdx];

//       if (char1 === char2) {
//         let charIndexInClone = word2Clone.indexOf(char2);

//         if (charIndexInClone !== -1) {
//           commonChars.push(char1);
//           word2Clone.splice(charIndexInClone, 1);
//           break;
//         }
//       }
//     }
//   }

//   return commonChars;
// }

// Laurent's Version
// function commonChars(array) {
//   const getCount = (string) => {
//     let counter = {};

//     string.split('').forEach((char) => {
//       if (!counter[char]) counter[char] = 1;
//       else counter[char] += 1;
//     });

//     return counter;
//   };

//   let commonCount = getCount(array[0]);

//   for (let index = 1; index < array.length; index += 1) {
//     let tempCount = {};
//     let lettersCount = getCount(array[index]);

//     for (letter in lettersCount) {
//       if (!commonCount[letter]) continue;
//       else
//         tempCount[letter] = Math.min(lettersCount[letter], commonCount[letter]);
//     }

//     commonCount = tempCount;
//   }

//   let result = [];

//   for (letter in commonCount) {
//     while (commonCount[letter] > 0) {
//       result.push(letter);
//       commonCount[letter] -= 1;
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

/* Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer. 

PROBLEM
- input: array of strings
- output: array of string characters

Rules
- find all characters that appear in all strings of the input array
- return found strings as many times as they appear in each input string (includes duplicates)
- input is only lowercase letters

EXAMPLES
- see below

DATA STRUCTURE
- input: array of strings
- intermediary: array
- output: array

ALGORITHM
- initialize `result` to an empty array
- make copy of input array
- iterate through first element
  - if character at index position is included in every element:
    - add character to empty array
    - iterate through input array of words
      - replace char in subsequent elements with empty string
- return `result` array */

function commonChars(array) {
  let result = [];
  let words = array.slice();

  for (let idx = 0; idx < words[0].length; idx += 1) {
    let char = words[0][idx];
    if (words.every(element => element.includes(char))) {
      result.push(char);
    }

    for (let jdx = 1; jdx < words.length; jdx += 1) {
      words[jdx] = words[jdx].replace(char, '');
    }
  }

  return result;
}

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []

// Alex's Solution
// function commonChars(words) {
//   let result = [];

//   for (let idx = 0; idx < words[0].length; idx += 1) {
//     if (words.every(element => element.includes(words[0][idx]))) {
//       result.push(words[0][idx]);

//       for (let jdx = 1; jdx < words.length; jdx += 1) {
//         words[jdx] = words[jdx].replace(words[0][idx], '')
//       };
//     }
//   }

//   return result;
// }
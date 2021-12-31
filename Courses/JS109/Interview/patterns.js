/* Problems Have Patterns */

/* Accum */
function accum(string) {
  return (
    string
      // transform the string into an array of chars by splitting it at each of the string's elements
      .split('')
      // iterate through each char
      // track the index position of each char
      .map((char, idx) => {
        // for each char transform the first instance of the char to uppercase
        // concatenate the next instances of the char to lowercase for as many times as the value of its index position
        return char.toUpperCase() + char.toLowerCase().repeat(idx);
      })
      // don't forget to turn the array back into a string by joining the elements but this time with a delimeter
      .join('-')
  );
}

// Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* Alphabet Position */
function alphabetPosition(string) {
  // reassign to lowercase to simplify dealing with input
  string = string.toLowerCase();

  // same pattern of creating a lookup string
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  // very common pattern to have a `result` variable assigned to an empty array
  let result = [];

  // for loop
  for (let idx = 0; idx < string.length; idx += 1) {
    // initialize `char` to specific element of the string for easier readability
    let char = string[idx];

    // here's the key to this problem
    // check if the char is in the lookup string
    if (alphabet.includes(char)) {
      // push the char's number based on its index position in `alphabet` into the `result` array
      result.push(alphabet.indexOf(char));
    }
  }

  // remember to join the array elements to return a string
  // usually either by char or space
  return result.join(' ');
}

// console.log(alphabetPosition('abc') === '1 2 3'); // true
// console.log(
//   alphabetPosition("The sunset sets at twelve o' clock.") ===
//     '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
// );

/* =======================================================
Alphabet Score */

function alphabetScore(string) {
  // initialize `alphabet` to string of letters of the alphabet to find the value of a letter based on its position in the string: a = 1, b = 2, ... z = 26
  let alphabet = '_abcdefghijklmnopqrstuvwxyz'; // a = 1, b = 2,

  // initialize `words` to an array of words created by splitting the string at each space
  let words = string.split(' '); // [ 'take', 'me', 'to', 'semynak' ]

  // initialize `wordScores` to return value of iterating over each word in the `words` array and splitting each word at its char and computing the sum of getting the value of each letter in each word
  let wordScores = words.map((word) => {
    return word
      .split('')
      .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
    // [ 37, 18, 35, 88 ]
  });

  // find the index of the word with the highest score
  let maxIndex = 0;

  // loop over the `wordScores` array
  // if the element at the idx has a higher value than the element at maxIndex
  // reassign maxIndex to that idx
  for (let idx = 0; idx < wordScores.length; idx++) {
    // console.log(wordScores[idx], wordScores[maxIndex]);
    // 37 37
    // 18 37
    // 35 37
    // 88 37
    if (wordScores[idx] > wordScores[maxIndex]) {
      maxIndex = idx;
    }
  }
  // console.log(maxIndex); // 3
  return words[maxIndex]; // [ 'take', 'me', 'to', 'semynak' ][3] => 'semynak'
}

// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(
//   alphabetScore('what time are we climbing up the volcano') === 'volcano'
// );
// console.log(alphabetScore('take me to semynak') === 'semynak');

/* =======================================================
Running Totals */

// function runningTotal(array) {
//   let sum = 0;
//   return array.map(number => sum += number);
//   // 0 + 2 = 2, 2 + 5 = 7, 7 + 13 = 20
// }

// console.log(runningTotal([2, 5, 13]));  // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []
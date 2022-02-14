/* 1. =====================================================

Scramblies - 5 kyu

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z).
No punctuation or digits will be included.

Input strings s1 and s2 are null terminated.

14:31 start
14:36 algo done
14:46 I had to peek at an answer. Ugh.


problem
- input str1 and str2
- output boolean

algo
- declare `scramble` function with `str1` and str2` parameters
- init `count` to empty object

- iterate over str1
  - add letter to count
  - increment count

- iterate over str2 split into an array of chars
  - check every char of str2 in count
    - decrement value of char in count
      - if every char can be decremented in count return true
- return false
*/

function scramble(str1, str2) {
  let count = {};

  for (let idx = 0; idx < str1.length; idx += 1) {
    count[str1[idx]] = count[str1[idx]] + 1 || 1;
  }

  return str2.split('').every((char) => {
    return count[char]--;
  });
}

// console.log(scramble('rkqodlw', 'world') === true);
// console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
// console.log(scramble('katas', 'steak') === false);
// console.log(scramble('scriptjava', 'javascript') === true);
// console.log(scramble('scriptingjava', 'javascript') === true);
// console.log(scramble('scriptsjava', 'javascripts') === true);
// console.log(scramble('jscripts', 'javascript') === false);
// console.log(scramble('aabbcamaomsccdd', 'commas') === true);

/* 2. =====================================================

GrabScrab

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as an array, and output a list of words that the pirate might have meant.

Return matches in the same order as in the array. Return an empty array if there are no matches.

14:58 start
15:05 algo
15:10 solved without peeking and seemed pretty easy this time

Problem
- input string and array of words
- output array of words from input array that when unscrambled make the input string/word

Rules
- seems like all lowercase letters as input
- return an empty array if no matches

Algo
- declare `grabscrab` function with `string` and `array` parameters
- init `result` to empty array
- init `word` to string split into an array sorted and joined together
- iterate over array
  - if word equals unscramble(word) helper function
  - push element at array of idx to `result` array
- return `result`

`unscramble`
- input word
- split into an array of chars
- sort the chars
- join chars
- return
*/

function grabscrab (string, array) {
  let result = [];
  let word = string.split('').sort().join('');

  for (let idx = 0; idx < array.length; idx += 1) {
    if (word === unscramble(array[idx])) {
      result.push(array[idx]);
    }
  }

  return result;
}

function unscramble(word) {
  return word
    .split('')
    .sort()
    .join('');
}

console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // Should return ["sport", "ports"].
console.log(grabscrab('trisf', ['first'])); // ["first"]);
console.log(grabscrab('oob', ['bob', 'baobab'])); // []);
console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])); // ["mountains"]);
console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])); // ["pool", "loop"]));
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // ["sport", "ports"]);
console.log(grabscrab('ourf', ['one', 'two', 'three'])); // []);

/* 3. =====================================================

Reverse or Rotate - 6 kyu

The input is a string `string` of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size `size` (ignore the last chunk if its size is less than `size`).

If a chunk represents an integer such that the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
- size is <= 0 or if str is empty return ""
- size is greater (>) than the length of str it is impossible to take a chunk of size `size` hence return "".


15:27 start
15:44 this problem gets me with so many steps. My brain doesn't like it.
16:04 even after copying the code and algorithm, it took me this long to get a working solution together

Problem
- input string of digits, number representing size of chunks
- output new string number

Rules
- if string is empty return empty string
- if size is less than or equal to 0 return empty string
- if size is greater than string length return empty string

Algorithm
- declare function `revrot` with parameters `string` and `size`
- if string is empty return empty string
- if size is less than or equal to 0 return empty string
- if size is greater than string length return empty string

- init chunks to getChunks of string and size helper function

- iterate over and transform `chunks`
  - pass chunk through sumOfCubesDivisibleByTwo helper function
    - reverse chunk and return
    - else rotate chunk and return
  - join

- getChunks helper function
- input string and size
- init `result` to empty array
- init `array` to string split into an array by char
- while array length is greater than or equal to size
  - push splice of array from 0 to size joined to result
- return result

`sumOfCubesDivisibleByTwo
- input string
- split string
- conpute sum of its digits cubed
- divided by 2 remainder 0

`reverse` helper function
- input string
- split string into an array by char
- reverse
- join

`rotate` helper function
- input string
- slice string at idx 1 and concatenate with string at idx 0

*/

function revrot (string, size) {
  if (!string || size <= 0 || size > string.length) return '';

  let chunks = getChunks(string, size);

  return chunks
    .map(chunk => {
      if (sumOfCubesDivisibleByTwo(chunk)) {
        return reverse(chunk);
      } else {
        return rotate(chunk)
      }
  }).join('')
}

function getChunks (string, size) {
  let result = [];
  let array = string.split('');

  while (array.length >= size) {
    result.push(array.splice(0, size).join(''));
  }

  return result;
}

function sumOfCubesDivisibleByTwo (digits) {
  return digits
    .split('')
    .reduce((sum, num) => sum + Math.pow(num, 3), 0) % 2 === 0;
}

function reverse (string) {
  return string.split('').reverse().join('')
}

function rotate (string) {
  return string.slice(1) + string[0];
}

// console.log(sumOfCubesDivisibleByTwo('1234'))
// console.log(revrot('', 8) === '');
// console.log(revrot('123456779', 0) === '');
// console.log(revrot('123456987654', 6) === '234561876549');
// console.log(revrot('123456987653', 6) === '234561356789');
// console.log(revrot('66443875', 4) === '44668753');
// console.log(revrot('66443875', 8) === '64438756');
// console.log(revrot('664438769', 8) === '67834466');
// console.log(revrot('123456779', 8) === '23456771');
// console.log(revrot('563000655734469485', 4) === '0365065073456944');

/* 4. =====================================================

Non-even substrings codewars - 6 kyu

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples. 

16:37 start
16:40 algo done but I did peek at the problem before starting it
16:44 solved with a correction of a missing brace

Problem
- input string of integers
- output number

Algo
- declare `solve` function with `string` parameter
- init `result` to empty array
- iterate over string outer loop
  - iterate over string inner loop
    - slice string from idx to jdx
    - if substring coerced to a Number divided by two has a remainder of 1
      - push substring to `result`
- return length of `result`

*/

// function solve (string) {

//   let result = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
//       let substring = string.slice(idx, jdx);
//       if (substring % 2 === 1) result.push(substring);
//     }
//   }

//   return result.length;
// }

// Using `getSubstring` helper function and `filter`
function oddSubstrings (string) {
  let substrings = getSubstrings(string);

  return substrings.filter(substring => {
    return +substring % 2 === 1
  }).length;
}

function getSubstrings (string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      result.push(string.slice(idx, jdx));
    }
  }

  return result;
}

// console.log(oddSubstrings('1341') === 7);
// console.log(oddSubstrings('1357') === 10);
// console.log(oddSubstrings('13471') === 12);
// console.log(oddSubstrings('134721') === 13);
// console.log(oddSubstrings('1347231') === 20);
// console.log(oddSubstrings('13472315') === 28);

/* 5. =====================================================

Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same,return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

17:30 start
17:36 complete algo, I had a memory of this problem
TEST TEST TEST
17:41 solved pretty easily

Problem
- input string of words
- output word with the highest score based on its letters in the alphabet

Algorithm
- declare `alphabetScore` function with `string` parameter

- init `highest` to empty string

- init `words` to array of words by splitting string at spaces
- iterate through words
  - init `current` to first word in the array
  - get score of current and highest with `getScore` helper function
    - if current is greater than highest
      - reassign highest to current
- return highest

getScore helper function
- init `alphabet` to '_a'-z'
- input word
- split word into array of chars
- compute sum of value of each char in alphabet string
- return score

*/

function alphabetScore (string) {

  let highest = '';
  let words = string.split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    let current = words[idx];
    if (getScore(current) > getScore(highest)) {
      highest = current;
    }
  }

  return highest;
}

function getScore(word) {

  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  return word
    .split('')
    .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
}

console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('') === '');

/* 6. =====================================================

Consider the word "abode".

The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

20:14 start
20:23 problem still confuses me
20:57 had to review a solution and then practiced a concise solution

Problem
- input array of words
- output array of numbers

Algorithm
- declare function `countMatchingIndices` with parameter `array`
- init `alphabet` to 'a-z'
- iterate over array
  - iterate by word
    - split each word by char
    - filter char at idx
      - compare to alphabet's index of char to lowercase
    - return length

*/

function countMatchingIndices ( array ) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return array.map(word => {
    return word.split('').filter((char, idx) => {
      return idx === alphabet.indexOf(char.toLowerCase())
    }).length;
  })
}

console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
console.log(countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])); // [6, 5, 7]
console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
console.log(countMatchingIndices([])); // []
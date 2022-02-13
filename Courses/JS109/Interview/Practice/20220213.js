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


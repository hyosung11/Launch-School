/* Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

desc - give a numeric value to each word in a string return the first string with the highest value

rules
all words are lowercase
a word is a group of chars separated by spaces
strings can contain 1 or more words
if two words have the same value, return the word that
occurred first in the string.
if the string is empty return '';
T1 - split the string into an array of words;
T2 - assign a numeric value to each char **
T3 - add the values together for each word**
  each word with have a numeric value
  set a variable to hold the highest value
  loop through the numbers array, with the variable set to contain the index of the highest valued element


The array of values will have the same indices as the split string array
If two words have the same value,
add them to a results array, and then return the first result


*/

// Jonathan's Version
function alphabetScore(str) {
  if (str === '') return '';
  let test = str.split(' ').map((e) =>
    e
      .split('')
      .map((char) => char.charCodeAt() - 96)
      .reduce((a, b) => a + b, 0)
  );
  let result = [0, test[0]];

  for (let ii = 1; ii < str.split(' ').length; ii++) {
    if (test[ii] > result[1]) {
      result[0] = ii;
      result[1] = test[ii];
    }
  }
  return str.split(' ')[result[0]];
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

/* Second to Last Capitalized

Given a string of words or a single word
return the string with the second to last occurrence of each letter capitalized.

Examples:
'hownowbrncow' => howNOWbrncow
'chickenbiscuits' => chiCkenbIScuits
'aabab' => 'aABab' 
aa // Aa
aaa // aAa

PROBLEM
- input: string
- output: a new string

Rules
- return string with the second to last occurrence of each letter capitalized
- all inputs lowercase
- just alphabet letters
- no other chars

EXAMPLES
aaa => aBa

a a a a => aaAa

DATA STRUCTURE
- input: string
- intermediary: object and an array (split, reverse, join)
- output: new string

ALGORITHM
- input a string
- initialize `result` to empty string
- initialize `charCount` to an empty object
- iterate through the string
  - split string into an array
  - reverse the chars
  - check for each char in object
    - add if not there
    - increment if there
  - if charCount is 2, uppercase the char and add to result
  - otherwise add char to result
  - split `result` into char, reverse the char, and join back together
- return `result` as new string */

// from Jonathan
function secondToLastCap(string) {
  let result = '';
  let charCount = {};

  string
    .split('')
    .reverse()
    .forEach((char) => {
      charCount[char] ? (charCount[char] += 1) : (charCount[char] = 1);
      if (charCount[char] === 2) {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    });

  return result.split('').reverse().join('');
}

console.log(secondToLastCap('aaa')); // aAa
console.log(secondToLastCap('aabaa')); // aabAa
console.log(secondToLastCap('hownowbrncow'));  // howNOWbrncow

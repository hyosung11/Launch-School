/*
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

PEDAC
- input: string
- output: an array of numbers

Requirements
- return an array that contains the number of vowels in each word of the argument string

Rules
-

Examples
- an empty string returns an empty array

DATA STRUCTURE
- input: string
- intermediary: an array of strings
- output: an array of numbers

ALGORITHM
1. Declare a function with a single parameter that takes a string argument of one or more words.
2. If the argument is an empty string return an empty array
3. Convert the string into an array of words split at each blank space
4. For each array element create another array that returns the number of vowels in each element
5. Declare helper function that counts the number of vowels in the string argument

*/
function vowelCount (string) {
  if (string === '') return [];
  let words = string.split(' ');
  return words.map(word => vowels(word));
}

function vowels (string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if ('aeiouAEIOU'.includes(string[index])) {
      count += 1;
    }
  }
  return count;
}

// Examples
console.log(vowelCount('WhaTs yOur enneagram?')); // [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!')); // [3, 2, 2, 1, 1, 0]
console.log(vowelCount('')); // []
console.log(vowelCount('ZoInkies!! There are monsters in here.')); // [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!')); // [0]

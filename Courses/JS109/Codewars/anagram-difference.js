/* Anagram Difference - 6 kyu

Given two words, how many letters do you have to remove from them to make them anagrams?

Example
- First word : c od e w ar s (4 letters removed)
- Second word : ha c k er r a nk (6 letters removed)
- Result : 10

Hints

- A word is an anagram of another word if they have the same letters (usually in a different order).
- Do not worry about case. All inputs will be lowercase.

PROBLEM
- input two strings
- output number

Rules
- return number representing how many letters were removed in total from both words before an anagram could be made
- all letters lowercase
- if no anagram return 0

EXAMPLES
- 'ab', 'a' => 1 because once you remove 'b' from 'ab' you get the anagram 'a' in both strings
- 'ab', 'cd' => 4 because you get an anagram when you remove all the letters to get empty strings in both input strings

DATA STRUCTURE
- input: two strings
- intermediary: array to split and sort the string
- output: number

ALGORITHM
- input two strings
- initialize `count` to 0
- split string2 into an array of chars
- iterate through string1
- initialize `jdx` to index of the char at the current iteration in array2
  - if char not found increment count
  - else splice that char out of array2
- increment count by length of array2 (elements left after iterating)
- return `count` */

// function anagramDifference(str1, str2) {
//   let count = 0;
//   let array2 = str2.split('');

//   for (let idx = 0; idx < str1.length; idx++) {
//     let char = str1[idx];
//     let jdx = array2.indexOf(char);
//     if (jdx === -1) count += 1;
//     else array2.splice(jdx, 1);
//   }

//   count += array2.length;
//   return count;
// }

function anagramDifference(string1, string2) {
  let word1 = string1.slice().split('');
  // console.log(word1); // ['a', 'a', 'b'] => ['a', 'b']
  let word2 = string2.slice().split(''); // ['a'] => ['']

  string1.split('').forEach((char) => { // ['a']
    if (word2.includes(char)) word2.splice(word2.indexOf(char), 1);
  });

  string2.split('').forEach((char) => { // ['a']
    if (word1.includes(char)) word1.splice(word1.indexOf(char), 1);
  });

  return word1.length + word2.length; // 2 + 0
}

console.log(anagramDifference('aab', 'a'));
// console.log(anagramDifference('a', 'aab'));

// console.log(anagramDifference('ab', 'cd'));
// console.log(anagramDifference('a', 'aab'));
// console.log(anagramDifference('ab', 'cd'));

// console.log(anagramDifference('aab', 'a'));

// console.log(anagramDifference('', '') === 0);
// console.log(anagramDifference('a', '') === 1);
// console.log(anagramDifference('', 'a') === 1);
// console.log(anagramDifference('ab', 'a') === 1);
// console.log(anagramDifference('ab', 'cd') === 4);
// console.log(anagramDifference('aab', 'a') === 2);
// console.log(anagramDifference('a', 'aab') === 2);
// console.log(anagramDifference('codewars', 'hackerrank') === 10);

// function anagramDifference(string1, string2) {
//   let count = 0;
//   let array2 = string2.split('');
//   // console.log(array2) // ['c', 'd']

//   for (let idx = 0; idx < string1.length; idx++) {
//     let jdx = array2.indexOf(string1[idx]);
//     console.log(jdx); // 0
//     if (jdx === -1) count += 1;
//     // 1 , 2
//     else array2.splice(jdx, 1); //
//     console.log(array2); // []
//   }

//   count += array2.length; // 2 + 2
//   return count; // 4
// }
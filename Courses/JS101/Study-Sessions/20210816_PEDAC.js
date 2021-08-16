/* JS101 Study Session: PEDAC: More Advanced Problems | Mon. August 16th | 12:30 PM Eastern / 09:30 AM Pacific
Juliette Sinibardy

Participants:
- Juliette, TA
- H
- Jeff Lovell: hacking and slashing
- Mark A: getting up to LS standards
- Alex

PEDAC
- logical breakdown
- coding implementation

=================
ANAGRAM EXERCISE:

Two words are anagrams of each other if they both contain the same letters.

Write a method that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

Understanding the Problem

- input: string
- output: array of strings

- rules
  - if no anagram is found, return an []
  - anagram definition
    - two words that are anagrams have the same length
    - exact same letters, in the same count
  - What happens if you have an empty string as input?
  - What about case?
    - case-insensitive
  - the same word can be considered an anagram

- assumptions:
> we assume that inputs will always be strings, those strings will always be 'words'
> only letters (no numbers / special chars)

Examples & Test Cases
- see below

Data Structure
- inputs: string and array of strings
- intermediary steps: strings and arrays
- output: array of strings

Algorithm
- declare a function
- initialize an empty array for the output
- loop through the input array and check the lengths of each element against the length of the input string
  - if length of element does not equal the length of the input string, skip the element
  - second function?
  - check chars of string against chars of each element
    - if chars of string match by count chars of element
      - add word to array
  - return array

// Jeff's Algo
Given 2 inputs: Word (string) and Words (array of strings)
  - Initialize a Results array
  - convert Word to lowercase  //respects case-insensitivity
  - loop over Words and for each Element in Words
    - convert Element to lowercase
    - If (Element length is equal Word length)
      //continue
       -Add the Element to the Results array

// Alex's Algo
-declare newArr = []

-iterate through arr
  -if element isAnagram(helper function)
    -add element to newArr
-return newArr

-function isAnagram (str1, str2)
  -sort strings by character
  -return whether sorted strings === eachother

Coding with Intent
- test code often

 */

function anagrams(word, array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (isAnagram(word, array[index])) {
      result.push(array[index]);
    }
  }
  return result;
}

function isAnagram (str1, str2) {
  return sortedString(str1) === sortedString(str2);
}

function sortedString(str) {
  return str.toLowerCase().split('').sort().join('')
}

console.log(isAnagram('aAbb', 'abba')); // true
console.log(isAnagram('aabb', 'babe')); // false

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(anagrams('abba', ['aabb', 'abcd', 'bbAa', 'dada']));
// ['aabb', 'bbAa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []


/* 06:05

[Kata Stats: Count and Group Character Occurrences in a String \| Codewars](https://www.codewars.com/kata/543e8390386034b63b001f31)
6 kyu
Write a method that takes a string as an argument and groups the number of time each character appears in the string as a hash sorted by the highest number of occurrences.

The characters should be sorted alphabetically e.g:

get_char_count("cba")// => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as lowercase ones

Mississippi
{m:1, i: 4, s: 4, p: 2}

- iterate through entries
  -
*/
/* [Kata Stats: Count and Group Character Occurrences in a String \| Codewars](https://www.codewars.com/kata/543e8390386034b63b001f31)
6 kyu

Write a method that takes a string as an argument and groups the number of times each character appears in the string as a hash sorted by the highest number of occurrences.

The characters should be sorted alphabetically e.g.:

get_char_count("cba")// => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as lowercase ones.

Mississippi
firstObj = {m:1, i: 4, s: 4, p: 2}
[[m, 1], [i, 4], [s, 4], [p, 2]]
init finalObj = {1: []} 
- iterate through entries
  - finalObj[entries[idx][1]]? finalObj[entries[idx][1]].push(entries[idx][0]) : finalObj[entries[idx][1]] = [[entries[idx][0]]];

*/

function getCharCount (string) {

  let firstObject = {};

  string.toLowerCase().split('').forEach(char => {
    if (char.match(/[a-z]/gi)) {
      firstObject[char] = firstObject[char] + 1 || 1;
    }
  });

  let finalObject = {};

  let entries = Object.entries(firstObject);

  entries.forEach(entry => {
    finalObject[entry[1]] ? finalObject[entry[1]].push(entry[0]) : finalObject[entry[1]] = [entry[0]];
  });

  let finalEntries = Object.entries(finalObject);

  finalEntries.forEach(entry => {
    entry[1].sort();
  });

  finalEntries.sort((a, b) => Number(b[0]) - Number(a[0]));

  return finalEntries;
}

console.log(getCharCount("Mississippi")); // === {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(getCharCount("Hello. Hello? HELLO!!")); // === {6=>["l"], 3=>["e", "h", "]}
console.log(getCharCount("aaa...bb...c!")); // === {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(getCharCount("aaabbbccc")); // === {3=>["a", "b", "c"]}
console.log(getCharCount("abc123")); // === {1=>["1", "2", "3", "a", "b", "c"]}

console.log(getCharCount("Mississippi")); // == {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(getCharCount("Hello. Hello? HELLO!!")); // == {6=>["l"], 3=>["e", "h", "]}
console.log(getCharCount("aaa...bb...c!")); // == {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(getCharCount("aaabbbccc")); // == {3=>["a", "b", "c"]}
console.log(getCharCount("abc123")); // == {1=>["1", "2", "3", "a", "b", "c"]}


/* Gave this to Alex to solve

Sort Strings by Vowels - 6 kyu

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in descending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

Algorithm
- declare `sortStringsByVowels` function with `array` parameter

- init `result` to array sorted by passing string elements through `longestVowels` helper function

- return `result`

`longestVowel` helper function
- input string
- init `vowels` to match vowels in string or an empty array
- sort `vowels` by longest to shortest in length
- return the length of first element in `vowels`
*/

function sortStringsByVowels (array) {

  return array.sort((a, b) => longestVowels(b) - longestVowels(a));
}

function longestVowels (string) {

  let vowels = string.match(/[aeiou]+/gi) || ['']
  vowels.sort((a, b) => b.length - a.length);
  // console.log(vowels)
  return vowels[0].length;
}

// console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))//,["iiii","eee","aa","oo"]);
// console.log(sortStringsByVowels(["a","e","ii","ooo","u"]))//,["ooo","ii","a","e","u"]);
// console.log(sortStringsByVowels( ["ioue","ee","uoiea"]))// , ["uoiea", "ioue","ee"]);
// console.log(sortStringsByVowels( ["high","day","boot"]))// , ["boot","high","day"]);
// console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]))// , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]))// , ["a beautiful trio of","how about now"]);

/* ==========================

Combine Arrays from Alex

Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.
If any array contains fewer items than necessary, supplement the missing item with "*".

Problem
- input arr1, arr2 arr3
- output one array of nested arrays

Rules
- return an array of nested arrays where the element at that index from each of the input arrays is combined into a nested array of the return array
- if an array contains fewere than necessary items, insert "*" 

Examples
- [false, 'false'], ['true', true, 'bool'], ['null', 'undefined'] => [[fales, 'true', 'null], ['false', true, 'undefined'], ['*', 'bool', '*']]

Data Structure
- input arr1, arr2, arr3
- inside nested arrays
- output nested arrays

Algorithm
- declare `combineArrays` function with `arr1`, `arr2`, and `arr3` parameters
- init `result` to empty array
- push arr1 at idx, arr2 at idx, arr3 at idx to `result`
  - if arr1 at idx equals undefined push '*'

- return `result`

*/

function combineArrays(arr1, arr2, arr3) {
  let result = [];
  
  result.push([arr1[0], arr2[0], arr3[0]], [arr1[1], arr2[1], arr3[1]], [arr1[2], arr2[2], arr3[2]])
  // console.log(result)
  
  for (let idx = 0; idx < result.length; idx += 1) {
    
    for (let jdx = 0; jdx < result.length; jdx += 1) {
      console.log(result[jdx])
    }
    // result[idx] = result[idx].replace(undefined, '*')
  }
  
  return result;
}

console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"])); // ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) // ➞ [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) // ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

/* Sort Me

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

 */

// input: names - unsorted strings
// output: case-agnostic sort
function sortme ( names ) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}

console.log(sortme(["Hello","there","I'm","fine"])); // => ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])) // => ["a", "B", "C", "d"]
console.log(sortme(["CodeWars"])) // => ["CodeWars"]
console.log(sortme([])) // => []

/*
Problem
input: String
Output: A new string of case insensitive alphabetically ordered strings

Explicit requirements
1. Write a function that accepts a string as argument
2. Return a new string that has the characters in a case insensitive alphabeticalorder
3. Whitespaces and punctuation should be removed 


Constraints
1. Input restricted to no numerals and only words containing english alphabet letters

Examples 
1. alphabetized("The Holy Bible") // "BbeehHilloTy"

Data Structures 
1. Strings 
2. Arrays.

Algorithm 

High level
1. Clean string of spaces and punctuation
2. Sort the string into case insensitve alphabetical order 

Specifics
1. Use regex to replace all spaces with empty strings
2. Use regex to replace all non alphabetic characters 
3. Convert string to array using split method invocation with empty string seperator.
3. Use the sort method
4. Use join method to return new string.
returning a.localecompare(b) as the callback 

Test algorithm 

input: 'The Holy Bible'
output: BbeehHilloTy

regex: TheHolyBible
sort: 'BbeehHilloTy'

My Algorithm
- declare `alphabetized` function with `string` parameter
- use regex to replace all non-alphabetic chars
- split string by char into an array
- sort if uppercase is equal to uppercase
  - then by indexOf a - indexOf a or
  - a localeCompare b
- join and return
*/

function alphabetized (string) {
  string = string.replace(/[^a-z]/gi, '');
  return string.split('').sort((a, b) => a.toUpperCase() === b.toUpperCase() ?
             string.indexOf(a) - string.indexOf(b) : a.localeCompare(b))
  .join('');
}

console.log(alphabetized('The Holy Bible') === 'BbeehHilloTy');

// function alphabetized(s) {
//   return s
//     .replace(/[^a-zA-Z]/g, '')
//   .split('')
//   .sort((x, y) => (x.toUpperCase() === y.toUpperCase()) ? (s.indexOf(x) - s.indexOf(y)) : x.localeCompare(y))
//   .join('')
// }
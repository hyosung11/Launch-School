/* Which are in? - 6 kyu

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
-Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
- Beware: r must be without duplicates.

PROBLEM
- input array1 of words and array2 of words
- output array of a subset of words or an empty array

Rules
- return a sorted array in lexicographical order of the strings of array1 which are substrings of strings of array2
- the return array does not have any duplicates

EXAMPLES
- array1 = ['arp', 'live', 'strong]
- array2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
- returns ['arp', 'live', 'strong']
- => 'arp' is a substring of 'harp' and 'sharp'
- => 'live' is a substring of 'alive'
- => 'strong' is a substring of 'armstrong'

DATA STRUCTURE
- input:
  - array1 of words
  - array2 of words
- intermediary: substrings
- output: new array

ALGORITHM
- input array1 of words and array2 of words
- initialize `result` to empty array
- get substrings of array2
- iterate through array1
  - if substrings includes the word at idx
    - append word to result array
- sort `result` array lexicographically from a-z
- return `result` array

Alternative Algorithm
- input two arrays
- iterate through first array
  - for each substring in first array
    - check (filter) if that substring exists in each word of second array
- sort the array
- return new array
*/

// Example 1:
let array1 = ["arp", "live", "strong"]
let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1, array2) {
  return array1.filter(substring => array2.some(word => word.includes(substring))).sort();
}

console.log(inArray(array1, array2));

// returns ["arp", "live", "strong"]

// Example 2:
// array1 = ["tarp", "mice", "bull"]
// array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// problem
//   input: two arrays - a1, and a2
//   output: a sorted array of common substrings between a1 and a2.
//   rules:
//     - the array must be without duplicates;
//     - if there are no common substrings, return an empty array
//     - a substring must be at least two letters (implicit rule);_
// examples:
//   Example 1:
//   a1 = ["arp", "live", "strong"]

//   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//   returns ["arp", "live", "strong"]

//   Example 2:
//   a1 = ["tarp", "mice", "bull"]

//   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//   returns []
// data structure: sorted array of common substrings
// algorithm:
//   [x] initialize an empty array to hold common substrings between a1 and a2
//   [x] iterate over all elements of a2 and get all substring combinations;
//   [x] iterate through each string a1
//     [x] if it is included in a2 then push it onto our common substrings array
//   [x] sort the common substrings array
//   [x] return it


// Get substrings helper function
// I: array
// O: array of substrings
// DS: array
// Algorithm:
// [x] create an empty array to hold substrings
// [x] iterate over each element in the array
//  [x] iterate over each letter in the word
//    [x] generate substrings for that letter and push it to the substrings array
// [x] return array of substrings


function getSubstrings(arr) {
  let substrings = [];

  arr.forEach((el) => {
    let chars = el.split('');

    for (let i = 0; i < chars.length; i++) {
      for (let nextIdx = i + 1; nextIdx < chars.length; nextIdx++) {
        let substring = el.slice(i, nextIdx + 1);
        substrings.push(substring);
      }
    }
  })
  
  return substrings;
}



function inArray(array1, array2) {
  let common = [];
  
  let substrings2 = getSubstrings(array2);

  array1.forEach((string) => {
    if (substrings2.includes(string)) {
       common.push(string);
    }
  })
  
  return common.sort();
}

/*
Input:
Output:
Rules
- take 2 input arrays, array1 and array2. Return all the substrings of the words in array2 that are in array1
- make sure the sorted array is returned in lexicographical order
- if there are not matching substrings, return an empty array
- make sure the returned array does not have any duplicates
- dont mutate the inputs

Algorithm
- create 'substrings' helper function
- iterate over the words in array2 and obtain the substrings for each word
- create an empty result array
- iterate over the substrings array and if the current word is in array1 and not in the result array - push it to the result array
- after the loop has terminated, return the result array sorted in lexicographical order
*/

function substring(string) {

  let substrings = [];

  for (let idx = 0; idx <= string.length; idx++) {

    for (let jdx = idx + 1; jdx <= string.length; jdx++) {

      let sub = string.slice(idx, jdx);

      substrings.push(sub);
    }
  }

  return substrings;
}

function inArray(array1, array2) {
  let substrings = [];

  array2.forEach(word => substrings.push(...substring(word)));

  let result = [];

  for (let idx = 0; idx < substrings.length; idx++) {

    if (array1.includes(substrings[idx]) && !result.includes(substrings[idx])) {

      result.push(substrings[idx]);
    }
  }

  return result.sort();
}
/* 1662. Check If Two String Arrays are Equivalent
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.


Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false - letters are out of order


Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true


09:11 start

Problem
- input array1 of strings and array2 of strings
- output boolean

Rules
- return true if the strings in array1 concatenated equal the strings in array2 concatenated
- otherwise return false
- just lower case letters as inputs for each string

Examples
- reviewed

Data Structure
- input array1 and array2
- inside concatenate elements of each array
- output boolean

Algorithm
- declare function `arrayStringsAreEqual` with array1 and array2 parameters
- iterate over array1
  - concatenate elements of array1
  
- concatenate elements of array2
- if concatenated array1 elements === concatenated array2 elements return true
- return false

function arrayStringsAreEqual (array1, array2) {
  
  let joined1 = '';
  let joined2 = '';
  
  for (let idx = 0; idx < array1.length; idx += 1) {
    joined1 = joined1 + array1[idx];
  }

  for (let idx = 0; idx < array2.length; idx += 1) {
    joined2 = joined2 + array2[idx];
    console.log(joined2)
  }

  return joined1 === joined2;
}
*/

function arrayStringsAreEqual(array1, array2) {
  return array1.join('') === array2.join('');
}

// console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])); // true
// console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])); // false
// console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg'])); // true

/* 1408. String Matching in an Array
Given an array of string words. Return all strings in words which is substring of another word in any order.

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.


Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".


Example 3:

Input: words = ["blue","green","bu"]
Output: []

9:33 start
09:44 code

Problem
- input array of words
- output array of substrings that can be found from word of the input array

Rules
- return an array of substrings found from words of the input string
- assume all letters are lowercase
- just letters as inputs
- return order of substrings does not matter

Examples
- reviewed

Data Structure
- input array of words
- inside find matching substrings
- output array of substrings

Algorithm
- declare function `stringMatching` with array parameter
- init `result` to empty array

- return `result`

*/

function stringMatching (array) {
  let result = [];
  
  for (let idx = 0; idx < array.length; idx += 1) { // 'mass' | 'as' | 'hero' 
    // "mass"
    // ["mass","as","hero","superhero"]
    // ["as","hero","superhero"]
    // "mass" is in "as", in "hero", in "superhero"
    
    // "as" idx = 1  words[idx]
    // ["mass","as","hero","superhero"]   otherWords
    // ["mass","hero","superhero"]   otherWords
    // "as" is in "mass" => push to result
    
    for (let jdx = 0; jdx < array.length; jdx += 1) { // 'as' | 'hero' | 'superhero'
      if (array[idx] === array[jdx]) continue;
      if (array[jdx].includes(array[idx]) && !result.includes(array[idx])) {
        // console.log(array[jdx])
        result.push(array[idx]);
      }
    }
  }

  return result // ['as']
}

console.log(stringMatching(["blue","green","bu"])); //  []
console.log(stringMatching(["mass","as","hero","superhero"])); // ["as","hero"]
console.log(stringMatching(["leetcode","et","code"])); // ["et","code"]


var stringMatching = function (words) {
  let result = [];

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    let otherWords = words.slice();
    otherWords.splice(index, 1);

    for (jndex = 0; jndex < otherWords.length; jndex += 1) {
      if (otherWords[jndex].includes(word)) {
        result.push(word);
        break;
      }
    }
  }
  return result;
};

function stringMatching(array) {
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    // 'mass' | 'as' | 'hero'
    // "mass"
    // ["mass","as","hero","superhero"]
    // ["as","hero","superhero"]
    // "mass" is in "as", in "hero", in "superhero"

    // "as" idx = 1  words[idx]
    // ["mass","as","hero","superhero"]   otherWords
    // ["mass","hero","superhero"]   otherWords
    // "as" is in "mass" => push to result

    for (let jdx = 0; jdx < array.length; jdx += 1) {
      // 'as' | 'hero' | 'superhero'
      if (idx === jdx) continue;
      if (array[jdx].includes(array[idx]) && !result.includes(array[idx])) {
        // console.log(array[jdx])
        result.push(array[idx]);
      }
    }
  }

  return result; // ['as']
}

/* JS109 Study Session

Introductions
- Antonina, TA
- Wendy, OR, studying for written assessment
- Gianni, JS109 written assessment
- Deepak, New Brunswick, Canada, interview
- H
- Daniel, PHX, written
- Michael, Rome, Italy, interview

1. Top Three Words

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top 3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
or an empty array if a text contains no words.

PROBLEM
- input string of text
- output: array of words

Rules
- return an array of the top 3 most occurring words in descending order from the input text
- word is a string of letters that can contain one or more apostrophes
- matches are case-insensitive
- return words in lowercase
- break ties arbitrarily
- if text has fewer than three unique words, return either the top-2 or top-1 word
- if text contains no words, return an empty array

EXAMPLES
- see below

DATA STRUCTURE
- input string of text
- intermediary: object?
- output: array

ALGORITHM
- input `text`, a string of space-separated words
- split `text` into an array of words at the space
- iterate by word
  - remove non-letters except apostrophes from word using `lettersOnly` helper function
  - filter out any word with length 0
- if array of words length is 0, return empty array
- initialize `count` to empty object
- iterate through array of words
  - add word to `count`
  - or increment value of word in `result`
- iterate through `count` object
  - sort key-value pairs from highest to lowest
- return top 3 elements from `result`

`cleanWord` helper function
- input word
- change word to lowercase
- split word into array of chars
- filter out letters and apostrophes
- join letters
- return word */

function topThreeWords(text) {
  let wordsArray = text
    .split(' ')
    .map((word) => lettersOnly(word))
    .filter((word) => word.length > 0 && /[a-z]/i.test(word));

  if (wordsArray.length === 0) return [];

  let count = {};

  wordsArray.forEach((word) => {
    count[word] = count[word] + 1 || 1;
  });

  let result = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return result.slice(0, 3);
}

function lettersOnly(word) {
  return word
    .toLowerCase()
    .split('')
    .filter(char => char >= 'a' && char <= 'z' || char === "'")
    .join('');
}

// Examples:
console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // => ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't won't")); // => ["won't", "wont"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []



// function topThreeWords(string) {
//   let wordsArray = string
//     .split(' ')
//     .map((word) => cleanWord(word))
//     .filter((word) => word.length > 0);

//   if (wordsArray.length === 0) return [];

//   let result = {};

//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let word = wordsArray[idx];
//     if (word === "'") continue;
//     result[word] = result[word] + 1 || 1;
//   }

//   let resultArray = Object.keys(result).sort((a, b) => result[b] - result[a]);

//   return resultArray.slice(0, 3);
// }

// function cleanWord(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .filter((char) => (char >= 'a' && char <= 'z') || char === "'")
//     .join('');
// }

/* 2. Non-Repeating Substring

Get the longest substring in a string that does not contain any repeating characters.

// console.log(nonRepeatingSubstring("abcdefabdhh")); // 'abcdef'
// console.log(nonRepeatingSubstring("fgrjnr9e7g")); // 'jnr9e7g'
// console.log(nonRepeatingSubstring("aAa")); // 'aA'
// console.log(nonRepeatingSubstring("aa")); // 'a'

Problem:
  Input: string
  Output: string

Algorithm:
  define `nonRepeatingSubstring()` with the parameter `string`
    declare `substrings` and initialize it to findSubstrings(string)
    filter `substrings` for strings that don't have any repeating characters
    sort `filteredArray` by length
    return longest string

  define `findSubstrings` with the parameter `strings`. It will return an array of substrings

  define `doesNotHaveRepeatingCharacters`. Returns true or false
    iterate through each letter in string
    if letter in the string matches more than once
      return false

    return true


*/

function nonRepeatingSubstring(string) {
  let substrings = findSubstrings(string);

  substrings = substrings.filter(word => doesNotHaveRepeating(word));

  substrings.sort((a, b) => b.length - a.length);

  return substrings[0];
}


function findSubstrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j <= string.length; j += 1) {
      substrings.push(string.slice(i, j));
    }
  }

  return substrings;

  // return substrings.filter(word => word.length < string.length);
}


function doesNotHaveRepeating(string) {
  for (let i = 0; i < string.length; i += 1) {
    let pattern = new RegExp(string[i], 'g');
    if (string.match(pattern).length > 1) return false;
  }

  return true;
}

console.log(nonRepeatingSubstring("abcdefabdhh") === 'abcdef');
console.log(nonRepeatingSubstring("fgrjnr9e7g") === 'jnr9e7g');
console.log(nonRepeatingSubstring("aAa") === 'aA');
console.log(nonRepeatingSubstring("aa") === 'a');

function nonRepeatingSubstring(str) {
  let longestSubstring = '';
  let currSubstring = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (!currSubstring.includes(str[idx])) currSubstring += str[idx];
    else {
      let repeatedCharIdx = currSubstring.indexOf(str[idx]);
      currSubstring = currSubstring.slice(repeatedCharIdx + 1) + str[idx];
    }

    if (currSubstring.length > longestSubstring.length) {
      longestSubstring = currSubstring;
    }
  }

  return longestSubstring;
}
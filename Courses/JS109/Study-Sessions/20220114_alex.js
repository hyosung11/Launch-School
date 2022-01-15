/* Title Case - 6 kyu

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

First argument (required): the original string to be converted.

Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

PROBLEM
- input string of words and string of minor words
- output new string in title case

Rules
- return new string in title case
  - first letter in first word of string is always capitalized and the rest of the letters in the word are lowercase
  - every first letter of each subsequent word is capitalized unless it's a minor word (e.g., 'a', 'an', 'the' and the rest of the letters in the word are lowercase
  - words are separated by spaces
  - of course check capitalization, input words can be ALL CAPS
  - if no second argument, assume no minor words

  EXAMPLES
  - see below

  DATA STRUCTURE
  - input two strings
    - string of words to be changed to title case
    - string of minor words that are not to be capitalized
  - intermediary: array
  - output: new string

  ALGORITHM
  - input two strings
  - if empty string return empty string
  - create array `words` that splits and lowercases string
  - iterate through `words`
    -if index is 0, uppercase first letter
    -if word isMinor() then leave it lowercase
    -otherwise, uppercase first letter of each word
  - join that array into a string and return it

  helper function isMinor:
  - inputs:  word, string of minor words
  - split minor words into an array by spaces
  - if input word === any of the words in the minor array, return true; otherwise return false. */

function titleCase(string, minorWords) {
  if (string.length === 0) return '';
  let words = string.toLowerCase().split(' ');

  for (let idx = 0; idx < words.length; idx++) {
    if (idx === 0) {
      words[idx] = words[idx][0].toUpperCase() + words[idx].slice(1);
    } else if (isMinor(words[idx], minorWords)) {
      continue;
    } else {
      words[idx] = words[idx][0].toUpperCase() + words[idx].slice(1);
    }
  }
  return words.join(' ');
}

function isMinor(str, strings) {
  if (strings === undefined) return false;
  return strings.toLowerCase().split(' ').includes(str);
}

console.log(titleCase('') === '');
console.log(
  titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings'
);
console.log(
  titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows'
);
console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox');

// console.log(titleCase('a clash of KINGS', 'a an the of'));

// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
// console.log(titleCase('the quick brown fox'));

/*
input: 2 strings
output: string
Rules / Requirements
- a string is considered to be in title case if each word in the string is either:
  - (a) capitalized (that is, only the first letter of the word is upper case) or
  - (b) considered to be an exception and put entire into lowercase unless it is the first word, which is always capitalized
- write a function that will convert a string into title case, given an optional list of exceptiosn (minor words)
- the list of minor words will be given as a string with each word separated by a space
- your function should ignore the case of the minor words string -- it should behave the same way even if the case of the 
minor words strings changed
- first argument: the original string to be converted 
- second argument: space-delimited list of minor words that must always be lowercase except for the first word in the
 string 
Examples / Test Cases
- titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
- titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
- titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
Questions / Implicit Reqs
- will both inputs always be provided? no, the second argument may not always be provided
- will both inputs always be strings? -- yes
- will the strings only consist of letters? -- yes
- will either input string ever be an empty string? -- yes
- will the input strings only contain letter characters? -- yes
- if the word is an empty string with multiple spaces, should the returned empty string be the same (spaces)? -- yes
Data Structure
- array -- iteration methods, HOF
Algorithm
- create minorWords and init to an empty array
- if the secondArg is not undefined, reassign minor words to the second input, lowercased and split into an array of words
- create wordsArr and init it to the first input str, set to lowercase and split into an array of words
- map over wordsArr and on each round of iteration:
  - if the current index is 0
    - return the word with the first letter capitalized and the rest of the word appended
  - otherwise if the word is included in minorWords
    - return the word
  - otherwise
    - return the word with the first letter capitalized and the rest of the word appended to it 
- return the mapped array join with a single space
*/

function titleCase(title, minorWords) {
  let mWords = [];
  if (minorWords !== undefined) {
    mWords = minorWords.toLowerCase().split(' ');
  }

  if (title.split('').filter((char) => char !== ' ').length === 0) return title;

  return title
    .toLowerCase()
    .split(' ')
    .map((word, idx) => {
      if (idx === 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else if (mWords.includes(word)) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(' ');
}

// Another Version
function titleCase(str1, str2 = '') {
  let wordsArr = str1.toLowerCase().split(' ');
  let minorArr = str2.toLowerCase().split(' ');

  if (str1.length <= 0) return '';

  wordsArr = wordsArr.map((word, idx) => {
    if (minorArr.includes(word) && idx !== 0) {
      return word;
    }

    return word[0].toUpperCase() + word.slice(1);
  });

  return wordsArr.join(' ');
}

// Antonina's Version
function titleCase(str, minorWords) {
  if (!str) return '';
  minorWords = (minorWords || '').toLowerCase().split(' ');
  let words = str.toLowerCase().split(' ');

  return words
    .map((word, idx) => {
      if (minorWords && minorWords.includes(word) && idx) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(' ');
}

/*
Inputs:
  -string to change to title case
  -(optional) string of minor words delimited by single spaces
Rules:
  -every word in input string should be capitalised except for the minor words,
   if provided, and if any
  -if a minor word is the first word in the input string, it must still be capitalised
  -casing doesn't matter in the minor words string
Algorithm:
  -provide default value of an empty string to minor words string
  -change both input strings into all lowercase chars
  -coerce both input string into arrays
  -for each word of input string, starting at index 1,
    -if that word is included in minor words, skip it
    -else, capitalise it
*/

function titleCase(title, minorWords = "") {
  if (!title) return "";

  [title, minorWords] = [title.toLowerCase().split(" "), minorWords.toLowerCase().split(" ")];

  return title.map((word, idx) => {
    return (!idx || !minorWords.includes(word) ?
      word[0].toUpperCase() + word.slice(1) : word);
    }).join(" ");
}

// Juan Juy
function titleCase(title, minorWords) {
  // split title into array
  let titleArr = title.toLowerCase().split(' ');
  let minorArr = [];

  // check if minorWords argument is provided. if so, split it too. otherwise leave it blank
  if (minorWords) {
    minorArr = minorWords.toLowerCase().split(' ');
  }

  // return a mapping of the joined title array
  return titleArr
    .map((word, idx) => {
      // if it's not the first element (index 0) and the element exists in minorArr
      if (idx !== 0 && minorArr.includes(word)) {
        // map the element as is
        return word;
      } else {
        // otherwise, map the element with the first letter uppercased
        return word.slice(0, 1).toUpperCase().concat(word.slice(1));
      }
    })
    .join(' ');
}
/* 1. Top Three Words

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top 3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
or an empty array if a text contains no words.

PROBLEM
- input string
- output an array

Rules
- return an array of the top 3 most occurring wors in descending order
- word is a string of letters, case-insensitive, but can include an apostrophe
- return words in lowercase
- ties may be broken arbitrarily
- if less than three words return top-2 or top word or an empty array

EXAMPLES
- reviewed

DATA STRUCTURES
- IN: str
  between: arr and obj
- out: arr

ALGO
- input: str
- initialize empty obj
- split string into words by spaces
- iterate through words array
  - filter word
  -if clean() version of word is in obj, increment by 1, otherwise if clean(word) is not create a property with the name of the word and set value to 1
sort Object.keys by descending order of their values
return slice from 0 to 3 of sorted Object.keys

helper function clean():
- input word
- lowercase word
- split into characters
- filter array to return char if it is a letter or an apostrophe
- join
*/

function topThreeWords(string) {
  let count = {};
  let words = string.toLowerCase().split(' ');

  words = words.filter((word) => !['', "'"].includes(clean(word)));

  words.forEach((word) => {
    count[clean(word)] ? (count[clean(word)] += 1) : (count[clean(word)] = 1);
  });

  // words.forEach(word => {
  //   count[word] = count[word] + 1 || 1;
  // });

  let result = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return result.slice(0, 3);
}

function clean(word) {
  return word
    .split('')
    .filter((char) => (char >= 'a' && char <= 'z') || char === "'")
    .join('');
}

// console.log(clean("  //wont won't won't"));
// Examples:

console.log(topThreeWords("  '  ")); // []
console.log(topThreeWords('  ...  ')); // []
console.log(topThreeWords("  //wont won't won't")); // => ["won't", "wont"]
console.log(
  topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')
); // => ["e", "ddd", "aa"]
console.log(
  topThreeWords(
    'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'
  )
); //=> ["a", "of", "on"]

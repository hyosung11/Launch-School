/* Most frequently used words in a text - 4 kyu

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

- A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
- Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
- Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):
- Avoid creating an array whose memory footprint is roughly as big as the input text.
- Avoid sorting the entire array of unique words. 

PROBLEM:
- input: string 
- output: array of strings

- rules: 
 - return the top 3 most frequently occurring words in the input string
 - empty string? return empty array
 - if the string has fewer than 3 unique words, return an array of however many unique words it does have, in order of most frequent to less frequent
  - in words, letters, either upper or lower case are permissible. apostrophes are also permissible at start, middle, or end of word(not  by itself), but all other char and num are not allowed and should be cleaned out of existing words
  - return results lowercased
  - words are separated by spaces
  - if there is a tie in terms of number of times a word occurrs, order is arbitrary

EXAMPLES:
-What does linebreak entail?
-Apostrophe not allowed if it occurs on its own

DATA STRUCTURES:
- input: string 
- in between: array(split words), object (count occurrences)
- output: array of strings

ALGO:
- input: string
- use cleanWords helper function to remove non-letters or apostrophes
- filter out elements with length 0
- if arr length === 0 return empty array

- create empty obj `results`

- iterate through arr 
  - if word is in obj, increment value by 1; if not, add it with a value of 1
  
-sort obj keys by descending numerical value of their values
-return a slice from 0 to 2 of that array */

function topThreeWords(string) {
  let arr = string.split(' ');
  arr = arr.map((word) => cleanWord(word)).filter((word) => word.length > 0);
  
  if (arr.length === 0) return [];

  let result = {};

  for (let idx = 0; idx < arr.length; idx++) {
    let word = arr[idx];
    if (word === "'") continue;
    result[word] = result[word] + 1 || 1;
  }

  let finalArr = Object.keys(result).sort((a, b) => result[b] - result[a]);

  return finalArr.slice(0, 3);
}

function cleanWord(word) {
  return word
    .toLowerCase()
    .split('')
    .filter((char) => {
      return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        char === "'"
      );
    })
    .join('');
}

console.log(topThreeWords('')); // []);
console.log(topThreeWords('a a a  b  c c  d d d d  e e e e e')); // ['e', 'd', 'a']
console.log(topThreeWords('a a c b b')); // ['a', 'b', 'c'];
console.log(
  topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')
); //['e','ddd','aa']

console.log(topThreeWords("  //wont won't won't ")); //["won't", "wont"]

console.log(topThreeWords('  , e   .. ')); // ["e"])
console.log(topThreeWords('  ...  ')); // [])
console.log(topThreeWords("  '  ")); // [])
console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`)
); // ['a','of','on'])

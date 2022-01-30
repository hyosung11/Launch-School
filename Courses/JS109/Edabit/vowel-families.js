/* Vowel Families

Published by Helen Yu in JavaScript

Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

Examples
- sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
- sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
- sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

Notes
- Words will contain only lowercase letters, and may contain whitespaces.
- Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

PROBLEM
- input an array of words
- output array

Rules
- return an array of words in which every word contains only the same vowel or vowels of the first word
- always return the first word
- all lowercase letters
- can contain whitespaces
- vowels can repeat in subsequent words but cannot be different vowels from any vowels in the first word

EXAMPLES
- see above and below

DATA STRUCTURE
- input array
- intermediary: array
- output: array

ALGORITHM
- input an array of words
- initialize `result` to empty array
- initialize `vowels` to 'aeiou';
- initialize `firstWordVowels` to empty object
- iterate through array
  - append word at first index to result
  - split word at idx into chars
      if vowels.includes char && firstWordVowels[char] greater than or equal to 1
      - append word to result
- return `result` array*/

function sameVowelGroup(words) {
  let result = [];
  let vowels = 'aeiou';
  let firstWordVowels = {};

  words[0].split('').forEach(char => {
    if (vowels.includes(char)) {
      firstWordVowels[char] = firstWordVowels[char] + 1 || 1;
    }
  });

  // console.log(firstWordVowels); { o: 1 }
  result.push(words[0]);

  for (let idx = 1; idx < words.length; idx++) {
    let word = words[idx];
    if (word.includes(firstWordVowels))
    // console.log(words[idx]);
    // words[idx].split('').forEach(char => {
    //   if (char >= firstWordVowels[char] && !result.includes(words[idx])) {
        result.push(words[idx]);
    //   }
    // })
  }

  // console.log(firstWordVowels);
  return result;
}

// console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));
// ["hoops", "bot", "bottom"])

console.log(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]));
// // ["crop", "nomnom", "bolo"])

// console.log(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]));
// // // ["semantic", "aimless", "meatless icecream"])

// console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));
// // // ["many"])

// console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
// // ["toe", "ocelot"])

// console.log(sameVowelGroup(["a", "apple", "flat", "map", "shark"]));
// // ["a", "flat", "map", "shark"])

// console.log(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]));
// // ["a", "aa", "ab", "abc", "aaac"])

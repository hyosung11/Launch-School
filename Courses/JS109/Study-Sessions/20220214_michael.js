/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each word are scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically.

Requirement
return a string where:
-the first and last characters remain in their original place for each word
- characters between the first and last characters must be sorted alphabetically
- punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions
- words are separated by single spaces
- only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
- special characters do not take the position of the non special characters, for example: -dcba -> -dbca
- for this kata punctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalization 

*/

function scrambleWords (string) {
  return string.split(' ').map(word => scrambleWord(word)).join(' ');
}

function scrambleWord(word) {

  let result = '';

  let punctuation = "-,.'";
  let letters = [];

  for (let idx = 0; idx < word.length; idx++) {
    if (!punctuation.includes(word[idx])) letters.push(word[idx]);
  }

  let sortedLetters = letters.slice(1, letters.length - 1).sort()

  sortedLetters.unshift(letters[0]);
  sortedLetters.push(letters[letters.length - 1]);

  for (let idx = 0; idx < word.length; idx++) {
    if (punctuation.includes(word[idx])) {
      result += word[idx];
    } else {
      result += sortedLetters[0];
      sortedLetters.shift();
    }
  }

  return result;
};

/* Laurent */

function scrambleWords(string) {
  const putWordInOrder = (word) => {
    let sortedInBetweenLetters = word
      .split('')
      .filter((char) => char.match(/[a-z]/));

    sortedInBetweenLetters.shift();
    sortedInBetweenLetters.pop();
    sortedInBetweenLetters.sort();

    let metFirstLetter = false;

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx].match(/[^a-z]/)) continue;
      if (sortedInBetweenLetters.length === 0) continue;
      if (metFirstLetter === false && word[idx].match(/[a-z]/)) {
        metFirstLetter = true;
        continue;
      }

      if (metFirstLetter === true && word[idx].match(/[a-z]/)) {
        word =
          word.slice(0, idx) +
          sortedInBetweenLetters.shift() +
          word.slice(idx + 1);
      }
    }

    return word;
  };

  return string
    .split(' ')
    .map((word) => putWordInOrder(word))
    .join(' ');
}

/* Deepak's Solution */
function scrambleWords(string) {
  return string.split(' ').map(word => wordTransformer(word)).join(' ');
}

function wordTransformer(word) {
  let bareWord = word.replace(/[-',.]/g, '');
  let flippedWord = bareWord[0] + bareWord.slice(1, -1).split('').sort().join('') + bareWord.at(-1)

  let resultWord = '';

  let flippedWordCounter = 0;

  for (let wordCounter = 0; wordCounter < word.length; wordCounter += 1) {
    if (/[-',.]/.test(word[wordCounter])) {
      resultWord += word[wordCounter];
    } else {
      resultWord += flippedWord[flippedWordCounter];
      flippedWordCounter += 1;

  }

  return resultWord;
}

console.log(scrambleWords('') === '');
console.log(scrambleWords('ab') === 'ab');
console.log(scrambleWords('abc') === 'abc');
console.log(scrambleWords('acbb'));
console.log(scrambleWords('-ab-') === '-ab-');
console.log(scrambleWords('-acbb-') === '-abcb-');
console.log(scrambleWords('professionals') === 'paefilnoorsss');
console.log(scrambleWords("shan't") === "sahn't");
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords('-dcba') === '-dbca');
console.log(scrambleWords('dcba.') === 'dbca.');

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);

/* ===================================

Non-repeating Substring

*/
function nonRepeatingSubstring(string){
  let result = []

  for(let i = 0; i <= string.length; i++){
    for(let j = i + 1; j <= string.length; j++){
      result.push(string.slice(i,j))
    }
  }

  let splitChars = result.map(ele => ele.split(''));

  return splitChars.filter(array => array
  .every((item, i, ar) => ar
  .indexOf(item) === i))
  .sort((a,b) => b.length - a.length)[0]
  .join('')
}


function nonRepeatingSubstring(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    let result = string[idx];

    for (let jdx = idx + 1; jdx <= string.length; jdx++) {

      if (result.includes(string[jdx])) {
        substrings.push(result);
        break;
      }

      if (jdx === string.length) {
        substrings.push(result);
        break;
      }
      
      result += string[jdx];
    }
  }

  substrings.sort((a, b) => b.length - a.length);
  return substrings[0];
}

/* Deepak's Solution */
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

/** Laurent's Solution */
function nonRepeatingSubstring(string) {
  let longest = '';
  let current = '';
  let seen = {};
  let idx = 0;

  while (idx < string.length) {

    if (Object.keys(seen).includes(string[idx])) {
      current = '';
      idx = seen[string[idx]] + 1;
      seen = {};
    }

    current += string[idx];
    seen[string[idx]] = idx;

    if (current.length > longest.length) longest = current;

    idx += 1;
  }

  return longest;
}

console.log(nonRepeatingSubstring('aa')); // 'a'
console.log(nonRepeatingSubstring('aAa')); // 'aA'
console.log(nonRepeatingSubstring('abcdefabdhh')); // 'abcdef'
console.log(nonRepeatingSubstring('fgrjnr9e7g')); // 'jnr9e7g'

/* Michael's problem
11:34 start

11:33 start
11:38 algo
11:40 code
11:42 testing while writing code
11:45 going back to test code
11:47 debugging well, seemed in control of writing the code
11:48 `forEach` vs `filter`
11:50 close to solution
11:50 go back to your algorithm
11:52 look at your algorithm again
11:55 intervene
11:57
12:03 solved
*/

function countMatchingIndices(words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return words.map(word => {
    return word
      .toLowerCase()
      .split('')
      .filter((char, idx) => alphabet.indexOf(char) === idx).length;
  });
}

console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
console.log(
  countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
); // [6, 5, 7]
console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
console.log(countMatchingIndices([])); // []

/* Sort the given array of strings in alphabetical order, case insensitive. 

For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"] 

12:08 start
12:10 algo
12:12 code
12:17 got stuck
12:22 still stuck
12:26 ugh

Problem
- array of words
- output array of words in alphabetical order

Rules
- return array of words/letters in alphabetical order
- case does not matter
- assume all words/letters start with different chars

Algorithm
- declare `sortMe` function with `array` parameter
- iterate over array
  - transform by sorting by the first char of each element
- return array sorted
*/

function sortme(array) {
  return array.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() < b.toLowerCase()) return -1;
  })
}

function sortme(array) {
  return array.sort((a, b) => a.localeCompare(b))
}

console.log(sortme(["Hello","there","I'm","fine"]))//, ["fine", "Hello", "I'm", "there"])
console.log(sortme(["C", "d", "a", "B"]))//, ["a", "B", "C", "d"])
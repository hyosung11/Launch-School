/* 1180. Count Substrings with Only One Distinct Letter

Given a string s, return the number of substrings that have only one distinct letter.

Constraints:
  1 <= s.length <= 1000
  s[i] consists of only lowercase English letters.

EXAMPLES
- 'aaaba' => 8

Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8

PROBLEM:
  input: string
  output: number

  rules:
  alphabetical characters
  the substring must contain only the same character
  empty spaces are not considered letters
  return the amount of substrings?

  EXAMPLE TESTS:
    console.log(countLetters('a')); // 1
    console.log(countLetters('ab')); // 2 'a' + 'b'
    console.log(countLetters('aa')); // 3 'a' + 'a' + 'aa' = 3
    console.log(countLetters('aaaa')); // 10 a + a + aa + aa + aaa + aaa + aaaa + aaaa +


  DATA STRUCTURE:
  object = count; occurrences of each character
  input: string
  output: number of total substrings
  use an array to push the charcaters that are are the same character;

  ALGORITHM:
    define a helper function substring --- that gets all the substrings;
      define countLetters with para string
        define an object
          iterate through each string
            let total = substring => filter !includes('ab');
              return the length total;
*/

// function countLetters(string) {
//   return substring(string).filter((ele) =>
//     ele.split('').every((char, _, array) => char === array[0])
//   ).length;
// }

// function substring(string) {
//   let substrings = [];
//   for (let i = 0; i <= string.length; i++) {
//     for (let j = i + 1; j <= string.length; j++) {
//       substrings.push(string.slice(i, j));
//     }
//   }
//   return substrings;
// }

function countLetters(string) {
  // let substrings = getSubstrings(string);
  return getSubstrings(string)
    .filter(substring => {
      return substring.split('').every((char, _, array) => char === array[0])
  }).length;
}

function getSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx + 1; jdx <= string.length; jdx++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

console.log(countLetters('cdaba')); // 5 => c, d, a, b, a
// console.log(countLetters('')); // 0
// console.log(countLetters('a')); // 1
// console.log(countLetters('ab')); // 2
// console.log(countLetters('aa')); // 3
// console.log(countLetters('aaa')); // 6
// console.log(countLetters('aaaa')); // 10
// console.log(countLetters('aaaba')); // 8
//console.log(countLetters('aaaaaaaaaa')); // 55

/* Background

There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
ignore capitalisation */

/* PROBLEM
- input string
- return new string

Rules
- return new string which is a word or words separated by spaces where the first and last letter remain in place, but the middle letters are sorted alphabetically
- keep punctuation in the same place as in the input string
- punctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalization

EXAMPLES
- 'professionals' => p aefilnoorss s
- 'card-carrying' => 'c aa-dinrrry g

DATA STRUCTURE
- input string
- intermediary: array to sort
- output string

ALGORITHM
- input string
- initialize `result` empty string
- initialize `punctuation` to array of punctuation
- split the string into an array of chars
  - iterate through array
  - filter the letters only
  - join
- initialize first to first letter in the array
- initialize last to last letter in the array
- initialize middle to middle letters
  - sort those letters
- join
- iterate through input string
  - increment the result string
  - check each char against input string
- return `result` string
*/

function scrambleWords(string) {
  let result = '';
  let punctuation = ['-', "'", ',', '.'];
  
  let letters = string
    .split('')
    .filter(char => char >= 'a' && char <= 'z');
  
  let first = letters[0];
  let last = letters[letters.length - 1];
  let middle = letters.slice(1, -1).sort().join('');
  let combined = first + middle + last;
      // console.log(combined)
  
  for (let idx = 0; idx < string.length; idx++) { // 'card-carrying'
    let char = string[idx]; // 'c'
    if (punctuation.includes(char)) {
      result = combined.slice(0, idx) + char + combined.slice(idx);
    } else
      result = combined;
  }
  
  return result;  
}


console.log(scrambleWords('professionals')) // 'paefilnoorsss'
// console.log(scrambleWords('i')) //'i'
// ScrambleWords('me')//, 'me'
// console.log(scrambleWords('you'))//, 'you'
console.log(scrambleWords('card-carrying')) // 'caac-dinrrryg'
console.log(scrambleWords("shan't")), "sahn't"
console.log(scrambleWords('-dcba')), '-dbca'
console.log(scrambleWords('dcba.'))//, 'dbca.'
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.")) // "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
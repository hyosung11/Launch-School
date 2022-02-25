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
    ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia

==========

Algorithm
- declare `scrambleWords()` with `string` parameter

- split string into words and map each word using helper function
  - join at spaces and return

helper function
- input word
- init `result` to empty string
- init `punctuation` to "-',."

- init `letters` to clean word of nonletters
- init `sortedLetters` to first letter, sorted middle letters, and last letter

- iterate through string
  - if char is punctuation
    - increment result with char
  - else
    - increment result with char from sortedLetters
    - remove char from sortedLetters

- return result;

*/

function scrambleWords(string) {
  return string
    .split(' ')
    .map((word) => scrambleWord(word))
    .join(' ');
}

function scrambleWord(word) {
  let result = '';
  let punctuation = "-',.";

  let letters = word.match(/[a-z]/gi);
  let middleLetters = letters.slice(1, letters.length - 1).sort();
  let combined =
    letters.slice(0, 1) +
    middleLetters.join('') +
    letters.slice(letters.length - 1);

  let array = combined.split('');
  // console.log(array)

  for (let idx = 0; idx < word.length; idx += 1) {
    if (punctuation.includes(word[idx])) {
      result = result + word[idx];
    } else {
      result = result + array[0];
      array.shift();
    }
  }

  return result;
}

// console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')

// console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

// console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

// console.log(scrambleWords('-dcba') === '-dbca'); // 'Must handle special character at the start')

// console.log(scrambleWords('dcba.') === 'dbca.'); // 'Must handle special character at the end')

// console.log(
//   scrambleWords(
//     "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
//   ) ===
//     "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
// );
// 'Must handle a full sentence')

/* 1957. Delete Characters to Make Fancy String
A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.

Example 1:
Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".


Example 2:
Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".


Example 3:
Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab".

09:36 start

Problem
- input string
- output new string

Rules
- return a new string in which no three consecutive characters are the same
- delete the minimum possible number of characters to make this true

Examples
- 'aab' => 'aab' no 3 chars are the same
- 'leeetcode' => remove one e to get result
- 'aaabaaaa' => remove one a from beginning of string 'aab' + remove one 'a' from end of string to get 'baa' and return 'aabaa'

Data Structure
- input string
- inside
- output new strings

Algorithm
- declare `makeFancyString()` with `string` parameter
- init `result` to empty string

- iterate over string
  - if char at string idx is equal to char at string idx + 1 && char at string idx is equal to char at string idx + 2
    - continue
  - else
    - increment result with char at string idx

- return `result`
*/

function makeFancyString(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === string[idx + 1] && string[idx] === string[idx + 2]) {
      continue;
    } else {
      result = result + string[idx];
    }
  }

  return result;
}

console.log(makeFancyString("aab") === 'aab');
console.log(makeFancyString("leeetcode") === 'leetcode');
console.log(makeFancyString("aaabaaaa") === 'aabaa');

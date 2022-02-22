/* Scramblies - 5 kyu

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z).
No punctuation or digits will be included.

6:04 start

*/
/* Alex's Version */
function scramble(str1, str2) {
  let arr2 = str2.split('');
  let arr1 = str1.split('');

  for (let idx = 0; idx < arr2.length; idx++) {
    if (!arr1.includes(arr2[idx])) return false;
    arr1.splice(arr1.indexOf(arr2[idx]), 1);
  }

  return true;
}

console.log(scramble('rkqodlw', 'wworld') === false);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
console.log(scramble('scriptsjava', 'javascripts') === true);
console.log(scramble('jscripts', 'javascript') === false);
console.log(scramble('aabbcamaomsccdd', 'commas') === true);

// function scramble(str1, str2) {
//   let count = {};

//   for (let idx = 0; idx < str1.length; idx += 1) {
//     count[str1[idx]] = count[str1[idx]] + 1 || 1;
//   }

//   return str2.split('').every((char) => {
//     console.log(str2);
//     return count[char]--;
//   });
// }

/* Typoglycemia - scrambleWords */
/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

-the first and last characters remain in original place for each word
- characters between the first and last characters must be sorted alphabetically
- punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

    words are separated by single spaces
    only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    ignore capitalisation

Algo
- input string
- split string into an array of words separated at the space
- transform each word with `scrambleWord` helper function
- join words together at space
- return new string

scrambleWord helper function
- input word
- init `punctuation` to "-,.'"
- init `result` to empty string
- init `letters` to empty array

- iterate over word
  - if punctuation does not include the char
    - push the char to letters

- init `sortedLetters` to slice of `letters` from 1 to end and sorted

- reassign sortedLetters to unshift letters[0]
- reassign sortedLetters to push letters[letters.length - 1]

- iterate over string again
  - if char is punctuation
    - increment result with char
  - else
    - increment result with first element of sortedLetters
    - shift sortedLetters

- return `result` string

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


console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')

console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

console.log(scrambleWords('-dcba') === '-dbca'); // 'Must handle special character at the start')

console.log(scrambleWords('dcba.') === 'dbca.'); // 'Must handle special character at the end')

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);
// 'Must handle a full sentence')
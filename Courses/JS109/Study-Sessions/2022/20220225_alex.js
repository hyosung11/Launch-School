/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

    the first and last characters remain in original place for each word
    characters between the first and last characters must be sorted alphabetically
    punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

    words are separated by single spaces
    only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia 


Problem
- input string
- output new string

Rules
- return string
  - with first and last letters in place
  - middle letters sorted alphabetically
  - punctuation in the same place
- words separated by a space
- punctuation is hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalilzation

Examples
- 'professionals' => 'paefilnoorsss'
- 'shan't' => 'sahn't'

Data Structure
- input string
- inside manipulate a string
- output new string

Algorithm
- declare `scrambleWords()` with `string` parameter
- init `result` to empty string
- init `puncutation` to string of punctuation

- init alphabeticChar = ''
- iterate over string
  - if alphabetic char (not punctuation), alphabeticChar += char

- init toBeSorted = slice of alphabeticChar from 1 up to last char

- init sorted = split toBeSorted into array and sort alphabetically and join
  

sorted = alphabeticChar[0] + sorted + alphabeticChar[alphabeticChar.length - 1]

sorted = sorted.split('')

- iterate through original string
  - if punctuation
    - increment result with char
  - else
    -increment result with sorted[0]
    -shift() off sorted[0]


- return `result` string

*/

// function scrambleWords (string) {
//   return string.split(' ').map(word => scrambleWord(word)).join(' ');
// }

// function scrambleWord (string) {
//   let result = '';
//   let punctuation = "-',.";

//   let letters = string.match(/[a-z]/gi).join('');
//   // console.log(letters)

//   let sortedLetters = letters[0] + letters.slice(1, letters.length - 1).split('').sort().join('') + letters[letters.length - 1];

//   sortedLetters = sortedLetters.split('');

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (punctuation.includes(string[idx])) {
//       result += string[idx];
//     } else {
//        result += sortedLetters[0];
//        sortedLetters.shift();
//     }
//   }
//   // console.log(result)
//   return result;
// }

console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')

console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

console.log(scrambleWords('-dcba') === '-dbca'); // 'Must handle special character at the start')

console.log(scrambleWords('dcba.') === 'dbca.'); // 'Must handle special character at the end')

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  )
); // ===
/*"you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);
// 'Must handle a full sentence')
*/

function scrambleWords(words) {
  return words
    .split(' ')
    .map((word) => scrambleWord(word))
    .join(' ');
}

function scrambleWord(word) {
  let punctuation = "-',.'";
  let result = '';
  let letters = [];

  for (let idx = 0; idx < word.length; idx++) {
    let char = word[idx];
    if (!punctuation.includes(char)) letters.push(char);
  }

  let sortedLetters = letters.slice(1, letters.length - 1).sort();

  sortedLetters.unshift(letters[0]);
  sortedLetters.push(letters[letters.length - 1]);
  // console.log(sortedNoSpecials);

  for (let idx = 0; idx < word.length; idx++) {
    let char = word[idx];
    if (punctuation.includes(char)) {
      result += char;
    } else {
      result += sortedLetters[0];
      sortedLetters.shift();
    }
  }

  return result;
}

/*
Staggered Caps (Part 2)

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

 Algorithm
 - declare `staggeredCase()` with `string` parameter
 - init `result` to empty string
 - init `counter` to 0
 - init `letters` to 'a-z'

 - convert string to lowercase

 - iterate over string
  - if alphabet does not includes string at idx
    - increment result with string at idx
  - else if counter equals 0
    - increment result with string at idx to uppercase
    - increment counter
  - else
    - increment result with string at idx
    - decrement counter

- return result

*/

function staggeredCase (string) {

  let result = '';
  let counter = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  string = string.toLowerCase();

  for (let idx = 0; idx < string.length; idx += 1) {
    if (!alphabet.includes(string[idx])) {
      result = result + string[idx];
    } else if (counter === 0) {
      result = result + string[idx].toUpperCase();
      counter = counter + 1;
    } else {
      result = result + string[idx];
      counter = counter - 1;
    }
  }

  return result;
}

// function staggeredCase (str) {
//   str = str.toLowerCase();
//   let counter = 0;
//   let result = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     if (!'abcdefghijklmnopqrstuvwxyz'.includes(str[idx])) {
//       result += str[idx];
//     } else if (counter === 0) {
//       result += str[idx].toUpperCase();
//       counter += 1;
//     } else {
//       result+= str[idx];
//       counter -= 1;
//     }
//   }
//     return result;
//   }

console.log(staggeredCase("I Love Launch School!")) // === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")) // === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers")) // === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );
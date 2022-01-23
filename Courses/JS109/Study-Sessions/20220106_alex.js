/* Non-even substrings  codewars - 6 kyu

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

If you like substring Katas, please try 

PROBLEM
input: number string
output: number (length of an array of odd numbers)

rules: 
- count number of possible substrings that are odd
- if number occurs twice, it counts twice

DATA STRUCTURES
-input: number string
-in between: array
-output: number (length of an array of odd numbers)

ALGO
-input: number string
-create variable `odds` = []
-loop through numberstring
  -loop through rest of string + 1 index posiiton
    -create variable substring and assign it to slice from first loop character to second character
    - if substring coerced to a number is odd, add it to odd array
return length of odds
 */

// function solve(string) {
//   let odds = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       let substring = string.slice(idx, jdx);
//       if (Number(substring) % 2 === 1) odds.push(substring);
//     }
//   }

//   return odds.length;
// }

// console.log(solve('1341') === 7);
// console.log(solve('1357') === 10);
// console.log(solve('13471') === 12);
// console.log(solve('134721') === 13);
// console.log(solve('1347231') === 20);
// console.log(solve('13472315') === 28);

// 5 kyu
// Typoglycemia Generator

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

ALGORITHM
- input string
- intialize `punctuation` to "-',.";
- initialize `result` to empty string
- initialize `noSpecials` string`
- iterate through string
  - if char is included in punctuation string, continue
  - else result += char
- initialize sortedNoSpecials to noSpecials[0] + noSpecials.slice(1, noSpecials.length - 1).sort() + noSpecials[noSpecials.length]

- return new string
*/

// console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')
// console.log(scrambleWords('i') === 'i') // 'Must handle single character words')
// console.log(scrambleWords('me') === 'me'); // 'Must handle 2 character words'
// console.log(scrambleWords('you') === 'you'); // 'Must handle 3 character words')
// console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started'

// console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')
// console.log(scrambleWords('i') === 'i') // 'Must handle single character words')
// console.log(scrambleWords('me') === 'me'); // 'Must handle 2 character words'
// console.log(scrambleWords('you') === 'you'); // 'Must handle 3 character words')


// console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

// console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

// scrambleWords('-dcba'), '-dbca', 'Must handle special character at the start')
// scrambleWords('dcba.'), 'dbca.', 'Must handle special character at the end')
// scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')


/* Find the missing letter - 6 kyu

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

(Use the English alphabet with 26 letters!) */

function findMissingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }

  let start = alphabet.indexOf(array[0]);
  let end = alphabet.indexOf(array[array.length - 1]) + 1;
  let sequence = alphabet.slice(start, end);

  for (let idx = 0; idx < sequence.length; idx++) {
    if (!array.includes(sequence[idx])) return sequence[idx];
  }
}

 console.log(findMissingLetter(['a','b','c','d','f']) === 'e');

console.log(findMissingLetter(['O','Q','R','S']) === 'P');
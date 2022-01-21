/* WeIrD StRiNg CaSe - 6 kyu

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" ); //=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

PROBLEM
- input string
- output: new string with every other letter capitalized based on its index position being odd or even

Rules
- return a new string with staggered capitalization
  - even indexed chars uppercased
  - odd indexed chars lowercased
- each word is separately cased
- only letters and spaces

DATA STRUCTURE
- input string
- intermediary: array to map
- output: new string

ALGORITHM
- input string
- split string into an array of words by spaces
- iterate through each word
  - split each word by char
    - if idx of char is even uppercase the char
    - if idx of char is odd lowercase the char
  - join the chars
- join the words
- return new string
*/

function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word => {
      return word
        .split('')
        .map((char, idx) => {
          if (idx % 2 === 0) return char.toUpperCase();
          else return char.toLowerCase();
        }).join('');
    }).join(' ');
}

console.log(toWeirdCase('This')) // === 'ThIs');
console.log(toWeirdCase('is')) // === 'Is');
console.log(toWeirdCase('This is a test')) // === 'ThIs Is A TeSt');

console.log(toWeirdCase('This') === 'ThIs');
console.log(toWeirdCase('is') === 'Is');
console.log(toWeirdCase('This is a test') === 'ThIs Is A TeSt');
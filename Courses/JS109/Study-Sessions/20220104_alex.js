/* 06:13 and Alex is late again.

Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. */

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
PROBLEM
input: integer
output: integer

rules:
- int % 2 !== 0
- int % 7 === 0
- digits of number have no duplicates
- int must be less than 9876543201
- must be greater than int

DATA STRUCTURES
input: integer
intermediary: string, object, object values(array - use every())
output: integer

ALGO
- input a number
- while number is less than 9876543201
  - num += 1
  - if number divided by 2 has a remainder 0, continue
  - if number divided by 7 has a remainder !0, continue
  - initialize `result` to an empty object
  - convert number to string of digits
  - split digits by char
  - iterate through digits
    - check if digit in `result`
      - if not add with value of 1
      - if in `result` increment
  iterate through `result` object's values
    - if every value equal 1, return number
- return "There is no possible number that fulfills those requirements."
*/

function featured(number) {
  while (number < 9876543201) {
    number += 1;
    if (number % 2 === 0) continue;
    if (number % 7 !== 0) continue;

    let result = {};

    let numberString = String(number)
      .split('')
      .forEach(digit => {
        result[digit] ? result[digit] += 1 : result[digit] = 1;
      });

    if (Object.values(result).every(val => val === 1)) {
      return number;
    }
  }

  return "There is no possible number that fulfills those requirements."
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/* ===========
Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. 

PROBLEM
input: string of words
output: string (highest scoring word)

rules:
- all input are lowercase
- empty string returns empty string
- no spaces returns original string
- each letter gets number value based on its position in alphabet
- get sum of these values for each word in input string
- return word with highest value

DATA STRUCTURES
input: string of words
in between: string, array
output: string (highest scoring word)

ALGO
-input: string of words
- empty string returns empty string
- no spaces returns original string
- create alphabet string
- split string by spaces into arr of words
- set highest = ''
- set highestScore = 0
- iterate through words
  - if getWordScore(word) is > highestScore, assign word as highest
- return highest

helper function getWordScore
  split word into array of letters
  map each letter to become its index
  sum up all of the values
  return sum
*/

function alphabetScore(words) {
  let highest = '';
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let word = wordsArray[idx];
    if (getWordScore(word) > getWordScore(highest)) highest = word;
    // console.log(word) // take, me, to, semynak
    console.log(highest); // take, take, take, semnyak
  }

  return highest;
}

function getWordScore(word) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
}

console.log(alphabetScore('') === '');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z'));
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');

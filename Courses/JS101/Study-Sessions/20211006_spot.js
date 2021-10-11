/* SPOT Study Session with Kris Ingva (JS216)

Introductions
- Kris, southern NJ, Ruby track, finished first JS course a few weeks ago
- Emma, Brooklyn, JS109 preparing for the interview
- Missy Lovegren, northern VA, Ruby track, started first JS course
- H
- Marcos, Libra
- Laurent, Paris, JS109 preparing for the written assessment
- Hugo, Berkeley from France, JS101 preparing for the written assessment

// =============================================================
// Interview problems
// =============================================================
// 1.
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet:
// a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the
// original string.

// All letters will be lowercase and all inputs will be valid.

// =============================================================

// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('') === '');

// =============================================================
// 2.
// Write a method that takes in a number and returns a string, placing
// a dash in between odd digits.

// console.log(dasherizer(2112) === '21-12');
// console.log(dasherizer(201105742) === '201-105-742');
// console.log(dasherizer(123456789) === '123456789');
// console.log(dasherizer(21121) === '21-121');
*/

// 1.
// =============================================================
// List 3 ways to find out if fruitCount has a `bananas` property:

// let fruitCount = { apples: 5, oranges: 7, bananas: 2 };

// 1.
// console.log(fruitCount.hasOwnProperty('bananas')); // => true

// 2.
// for (let key in fruitCount) {
//   if (key === 'bananas') {
//     console.log(true);
//   }
// }

// 3.
// console.log(Object.keys(fruitCount).includes('bananas'));

// 4.
// let fruits = Object.keys(fruitCount).forEach((val) => {
//   if (val === 'bananas') {
//     console.log(true);
//   }
// });

// 5.
// console.log(fruitCount['bananas'] !== undefined);

// 2.
// =============================================================
// What does the following code log and why?

// const arr = ['abc', , [1, 2, 3], false, 5, undefined];
// arr[-1] = 'bar';

// console.log(arr);
// console.log(arr.length);

// const arr = ['abc', , [1, 2, 3], false, 5, undefined];
// arr[-1] = 'bar';

// console.log(arr); // it will show all the elements and properties?
// // ['abc', , [1, 2, 3], false, 5, undefined, '-1': 'bar']
// console.log(arr.length); // 6


// [  'abc',  <1 empty item>,  [ 1, 2, 3 ],  false,  5,  undefined,  '-1': 'bar']

// 3.
// =============================================================
// What does the following code log and why?

// let age = 7 == '7' ? 7 : NaN;

// function multiplyByFive(a) {
//   return a * 5;
// }

// console.log(multiplyByFive(age));

/*
loose equality operator implicitly coerces the string to a number
ternary operator
declaration
initializer
evaluating the ternary expression and assigning to the variable `age`
When dealing with a string and a number, `==` coerces the string value into a number.
*/

// 4.
// =============================================================
// What does the following code log and why?

// let name = 'Jane';

// function greetPerson(name) {
//   name += '!';
//   name = 'Anna';
//   greeting = 'Hello ';
//   console.log(greeting + name.toUpperCase()); // => 'Hello ANNA'
//   return name;
// }

// console.log(greetPerson(name)); // => Anna
// console.log(greeting + name); // => 'Hello Jane'

/*
global variable `name` is declared and initialized to the value of 'Jane'
variable shadowing
strings are immutable
`name` is not reassigned
`greeting` is declared but not assigned
*/

// 5.
// =============================================================
// What does the following code log and why?

var a = myFunc("World");

function myFunc(a) {
  if (a.length >= 7) {
    var greeting = "Hello " + a;
  } else {
    let greeting = "Hi" + a;
  }

  return greeting;
}

console.log(a); // => undefined

/* This code logs `undefined` and illustrates variable scoping rules and variable shadowing in JavaScript. The global variable `a` is declared with the keyword `var` and initialized to the value of `myFunc("World")`. The `myFunc` function is declared with the parameter `a` which shadows the global variable `a` making the global variable `a` inaccessible within `myFunc`.

function with the parameter

let has block scope so not accessible outside the `else` statement
var gets hoisted to function scope and gets assigned to undefined
if clause never gets executed because of the length of the string
return of greeting is undefined

*/


// My notes:

// input: string of words, all lowercase
// output: string, one word that scorest the highest
// rules:
// - each word receives a score based on the word char's position in alphabet
// - 'a' scores 1 etc
// - if more then one word has the same highest score, choose the word that
//   appears the earliest in input
// data structure: string, array of words
// algo:
// - split string into word array on spaces
// - transform word array to wordPoints array:
//   - for current word, transform to word points (helper method)
// - get the position of the max value of wordPoints array
// - return the word with that position in word array

// getPoints helper method:
// - pass in the current word
// - have a lowercase alphabet array
// - split word into char array and reduce
//   - sum up the index of char in alphabet array + 1
// - return the sum of the word

// =============================================================
// My solution:

// function alphabetScore(text) {
//   let words = text.split(' ');
//   let wordPoints = words.map(word => getPoints(word));
//   let max = wordPoints.slice().sort((a, b) => b - a)[0];
//   // can also use:
//   // let max = Math.max(...wordPoints);
//   return words[wordPoints.indexOf(max)];
// }

// function getPoints(word) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return word.split('').reduce((sum, char) => {
//     return sum + alphabet.indexOf(char) + 1
//   }, 0);
// }

// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('') === '');



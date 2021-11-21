/* JS109 Study Group | Mon. Aug. 30th | 12:15 PM Eastern

Introductions
- Juliette
- H
- Mat Boyle, Pittman NJ, JS109 getting ready for the interview
- Javi, Canary Islands, preparing for the interview with medium exercises
- Mark, getting ready for written assessment, doing easy and medium problems
- Shane, Minneapolis, JS101 Lesson 6
- Alex, NJ, JS101 Lesson 5

Assessment Format

Written
- 3 hours, no clock
- code snippets about ten lines long
  - what and why
  - underlying concepts
- JS109 Study Guide
- precise with language
- 20 questions is 9 minutes per question
- memorize the phrases and practice writing out the explanations
- time management is very important
- technical score
- non-technical score
  - organized
  - clear and concise
- getting two grades
  - technical
  - non-technical

Interview
- code challenge of two problems
- one hour time limit
- articulate your answer
- CoderPad and Zoom
- TA is mostly a silent observer
- medium level problem in about 20 minutes
- practice live coding with someone else
- expect a full algorithm at the minimum

// What does this code do and why?
// let animal = 'dog';

// const speak = (animal) => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak(); // =>  'Bark'

/* Variable shadowing
function declared without an argument */

// no parameter
// let animal = 'dog';

// const speak = () => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak();

// Example 3
//
// let greeting = 'Hello';

// const test = (str) => {
//   str = str.concat(' World!');
//   return str;
// };

// test(greeting);
// console.log(greeting);

/*
function declaration
function invocation
concat returns a new string
reassign the parameter string to that new value
string now holds the value 'Hello World'

*/

// let greeting = ['Hello'];

// const test = (arr) => {
//   arr = arr.concat('World!');
//   return arr;
// };

// test(greeting);
// console.log(greeting);

/*
pass-by-reference
concat returns a new array and doesn't mutate the original array
arr.concat returns a new array and reassign
two different arrays in memory
- arr

line 8: two element array
line 9: one element array
*/

let greeting = ['Hello'];

const test = (arr) => {
  arr = arr.push('World!');
  return arr;
};

test(greeting);
console.log(greeting);

/*
push mutates the array

*/

// function test(str) {
//   str + '!!!';
// }

// let word = test('Hello');

// if (word) {
//   console.log('Hi');
// } else {
//   console.log('Goodbye');
// }

/*
if branch
else branch
*/

// const test = (str) => str + '!!!';

// let word = test('Hello');

// if (word) {
//   console.log('Hi');
// } else {
//   console.log('Goodbye');
// }

/* `Array.prototype.map`
- called on an array
- takes a callback function as an argument
- returns a new array in which each element is equal to the return value of the callback function for the element in the original array

callback is executed
stored in the returned array

*/

/* `Array.prototype.filter()`
- higher order function that takes in a callback function as an argument
- parameters
returns a new array
*/

/*


Falsy:
- 0
- false
- undefined
- null
- NaN
- ""

Array.prototype.map
- called on an array
- takes a callback function as an argument
- returns a new array in which each element is equal to the return value of the callback function for the element in the original array

Array.prototype.filter

- higher order function that takes in a callback function as an argument
- parameters of the callback: the element, the index and the original array
- calls the callback function for each element, passing that element as an argument to the callback
- returns that particular element into a new array if the callback returns a truthy value
- returns a new array
*/

/* =============================

1. Progressions

Medium Problem
You're given an array of integers.  You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

/* Mat Boyle's Code
assumptions
  array will always be positive
  array will always be 3 or more elements


  request breakdown
  create a function
    given an array of integers return num of arithmetic progressions' of size 3 from the list
      arithmetic progressions is number in sequence increasing by the same amount (1,2,3)(1,3,5)(2,4,6)
    count each time one is found
    return the total number found


pseudocode

function progressions(array)
  set arithmeticProgressionsFound variable to 0

  outer loop - loop through the array for the first element end array at 3rd to last item in array
    middle loop - sets the second element in the array to check start with 2nd item in the loop and ends with 2nd to last item in array
    inner loop - runs through the last item in teh array, starting with the third element until the last element
      if array[middleLoop] - array[outerLoop] equals array[innerLoop] - array[middleLoop]
        increase arithmeticProgressionsFound by 1

======================
2. Problem Description
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.


Test Cases
console.log(duplicateCount("")) == 0
console.log(duplicateCount("abcde")) == 0
console.log(duplicateCount("abcdeaa")) == 1
console.log(duplicateCount("abcdeaB")) == 2
console.log(duplicateCount("Indivisibilities")) == 2
*/

// Javi
/*
input: string
output: number

Must return the number of character that repeat more than once

algorithm

- split the string to an array
- create an empty object
- iterate over the array
  -If there isn't a key with the character name on the object create it an assign the value 1
  -If there is a key with the character name, add one to the value
- Look how many keys has values grater than 1
- Return that value
*/

function duplicateCount(str) {
  let splitString = str.split('');
  let obj = {};
  splitString.forEach(char => {
    if (Object.keys(obj).includes(char.toLowerCase())) {
      obj[char.toLowerCase()] += 1;
    } else {
      obj[char.toLowerCase()] = 1;
    }
  });
  let result = Object.entries(obj);
  let count = 0;
  result.forEach(arr => {
    if (arr[1] > 1) count += 1;
  });
  return count;
}

/*
function does too much
create a helper function
use toLowerCase just once
*/
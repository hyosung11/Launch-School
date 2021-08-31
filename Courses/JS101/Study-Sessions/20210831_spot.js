/* SPOT Study Session with Antonina

Introductions
- Antonina Kallinteri, Greece, LS170
- H
- Jeff, Long Island, JS101 Lesson 4
- Ainaa Sakinah, Japan, JS210
- Kris Ingva, southern NJ, JS211

Scope
Shadowing
Pass by Reference vs Pass by Value

JS109 Study Guide
declarations, initialization, assignment, and re-assignment
variable scope, especially how variables interact with function definitions and blocks
primitive values, objects, and type coercions
object properties
mutability vs. immutability vs. const
loose and strict equality
passing arguments into and return values out of functions
working with Strings
working with Arrays, especially the iteration methods (forEach, map, filter, and find)
working with Objects; accessing keys and values of an Object as arrays
arrays are objects
understand the concepts of pass-by-reference and pass-by-value
variables as pointers
console.log vs. return
truthiness vs. boolean
function definition and invocation
function declarations, function expressions, and arrow functions
implicit return value of function invocations
first-class functions
side-effects
naming conventions (legal vs idiomatic)
be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.
*/

// Q15 - Kris
let family = {
  john: 54,
  mary: 50,
  zoe: 12,
};

function incrementAge(people) {
  return Object.values(people).map((age) => (age += 1));
}

console.log(incrementAge(family)); // => [ 55, 51, 13 ]
console.log(family); // => { john: 54, mary: 50, zoe: 12 }

// ==================
// Q1 - H
// output and concept
let name = ['Jane'];

function test(arr) {
  arr = arr.concat('Doe');
  return arr;
}

// test(name);
// console.log(name);

/* Discussion
- concat doesn't mutate the array
- reassigning arr to point to a new array so doesn't; pass by reference */

// Q3 - Ainaa
// [1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2]
array.length; // What will this line return and why?

// Q7 -Jeff
// What is the output and what concept is demonstrated?
// let animal = 'dog';

// const speak = (animal) => {
//   if (animal) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak();

/* Discussion
- variable shadowing
- undefined because no argument passed to the function invocation
*/

/* Q9 - Kris */
['ant', 'bear'].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

/* Discussion
implicit return value for the callback will be undefined
map gives you an array that is the same length as the array that called it
map transforms the calling array
how map works in general
- takes a callback
- passes each element as a callback
*/

/* Q11 - H

*/
let name = 'nina';

function outer() {
  let name = 'jill';

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return inner();
}

outer();
console.log(name);

/* outer shadows the globally scoped name variable */

/* Q16 - Ainaa */
//What is the difference between the terms `identifier` and `variable name`?
// - name, element
// - tamara is an undeclared variable
//How many variable names are there in this code snippet? --> 5
let character = "Tamara";
const elements = ["earth", "water", "fire", "air"];

function associateCharElement(char, el) {
  return {name: char, element: el};
}

tamara = associateCharElement(character, elements[1]);

/* Q5 - Jeff */
function test(str) {
  str + '!!!';
}

let word = test('Hello');

if (word) {
  console.log('Hi');
} else {
  console.log('Goodbye');
}

/* Discussion
no explicit return value for function test
evaluates as falsy
logs Goodbye
*/
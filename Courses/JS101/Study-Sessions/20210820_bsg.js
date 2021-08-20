/* JS100/JS101 Beginner Study Group | 20210820 금요일 11 시 00 분

AGENDA
- General Study Info, Study Tips

- Pass-by-reference & Pass-by-value (show example animation)
- Variables as pointers
- Talk about code with precision and detail

- Variable Shadowing

- PEDAC

Introductions
- Mandy: last course of LS, Toronto
- Emma: Brooklyn, web developer, front-end, but wants to learn back-end
- H
- Laurent: Paris, JS101 Lesson 3
- Alex: Summit, NJ
- Scott: Chattanooga, TN, in finance, four years studying programming, likes web development more, Udemy courses, RB101 in Launch School

JS109 Study Sessions review questions for the assessment

Example Question
*/
// let hello = "Hello, world!";

// function myFunc() {
//   console.log(hello);
// }

// myFunc(); // => Hello, world!

// EXPLANATION
// EXPLANATION
/*
Line 14, initialize a global variable `hello` to the String "hello world!"

Line 20, we invoke `myFunc()`

Line `6` we define `myFunc()`

Within `myFunc`, log the variable `hello`, which we have access to because local scope has access to global variable  `hello`. So, `myFunc` logs "hello, World!", returns `undefined`

THis is showing Variable Scoping rules in JS.
*/

// let hello = 'Hello, world!';

// function myFunc(hello) {
//   console.log(hello);
// }

// myFunc('goodbye');

// let hello = "Hello, world!"; // GLOBAL VARIABLE

// // VARIABLE SHADOWING
// function myFunc(n) { // LOCAL VARIABLE
//   n = 'abc'; // LOCAL VARIABLE
//   console.log(hello);
// }

// myFunc('goodbye');

/////////////////////
// let hello = "Hello, world!";


// function myFunc(n) { // LOCAL VARIABLE
//   console.log(n);
// }

// myFunc(hello);

// [1, 2, 3].forEach((number) => {
//   console.log(number);
//   return 'abc';
// });

/*
- arguments
- side effects
- return values

- forEach is method, is called on the array `[1,2,3]`
- callback function <-- passed into `forEach` as an argument

EXPLANATION
- `forEach` iterates over each element of the Array
- The callback function logs each number, and return `abc`
- forEach does not use the return value of the callback

- For each number, the callback function logs each number
- Since forEach does not require a return value, the `return abc` has no impact
- `forEach` always returns undefined
*/

let a = ['Hello'];

function changeValue(a) {
  a[0] = 'Goodbye';
}

changeValue(a);
console.log(a);

// what will happen when we run this code? Why?

/*
- log `Goodbye`
- Because changeValue mutated the argument that was passed
- Pass by Reference
- Array is an oject and it's NOT a primitive type
- When we passed `a` to changevalue, we passed a reference to ['Hello']
*/

// Variables as Pointers
let arr = [1, 2, 3];

let a = arr;

let b = arr;

console.log(a);
console.log(b);

b[0] = '99';

console.log(a);
console.log(b);
console.log(arr);

// Variables as Pointers - https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers


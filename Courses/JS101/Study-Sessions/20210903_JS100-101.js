/* JS100/101 Study Group

Agenda
- Introductions
- Study Tips
- Variable Scope
- Variable Shadowing
- Pass-by-value, Pass-by-reference
- Pseudo-code

Introductions
- Mandy, TA and student, Toronto
- Adhitiani Suzanthi, Indonesia - Budapest Hungary, JS101 Lesson 5, started again after taking a break
- Michael Cremonini, just graduated from University and wasn't able to get a job, started LS two weeks ago, from Italy living in CA, going back to Italy
- Jason Aricheta, joined LS a month ago, two years out of university, first study group, New Zealand
- Jeff, found LS through coworker, ten years in tech
- H

Mandy
- started in October 2019
- focus on the process and celebrating the time put into studying
- ability to program accelerates

Variable Scope
- determines where the variable is available in a program
- where you declare a variable
- let a = 10
- Outer blocks cannot access variables from inner scopes
- Inner blocks can access variables from outer scopes.
- Variables defined in an inner block can shadow variables from outer scopes.
*/

// let a = 10;

// function funct() {
//   // inner
//   // access 'a'
// }

// while (true) {
//   // inner
//   // access 'a'
//   break;
// }

// what will happen when we run this code?
// let a = 'Hello';

// if (true) {
//   console.log(a); // => Hello
// }

/* identifier
declare global variable a
doesn't find a in inner scope
goes to outer scope and finds
*/

// what will happen when we run this code?
// if (true) {
//   let a = 'Hello';
// }

// console.log(a);

/*
can't find a in the outer scope because has not been declared in the outer scope
a declared in inner scope but can't access variable in the inner scope
raises ReferenceError: a is not defined
*/

// what will happen when we run this code?
let a = 'Hello';

// true evaluates to true Or true is truthy
if (true) {
  // inner scope
  a = 'Goodbye'; // reassignment
  // let a = 'Goodbye'; // initialized a new local variable
}

console.log(a);

/*
Logs Goodbye
declare a global variable a for the string hello
if block runs because evaluates as true
and in line 23 a is reassigned to goodbye
console.log(a) reassigned to goodbye

truthiness values - everything in JavaScript is truthy except for 0funN is ''
*/

// what will happen when we run this code?
let a = 'Hello';

if (true) {
  let a = 'Goodbye';

  // cannot access global 'a'
}

console.log(a);

/*
logs 'Hello'
global variable
a and a are not the same variable
- local inside the if block
- global a
variable shadowing
- if intention to reassign drop the let keyword
- or use unique variable names
*/

/*
Pass-by-value
- Passing an argument into a function
- That argument is a *primitive* type
- The parameter in the function points to a new copy of the value

Pass-by-reference
- Passing an argument into a function
- That argument is an *object* type -->  {} object, Array, and Arrays are also objects
- The function can *change/modify/mutate* the argument that is passed because we have a *reference* to that original argument
*/
function func(number) {
  console.log(number)
}

let test = 5;

func(test);

///////
function func(arr) {
  console.log(arr)
}

let test = ['hello'];

func(test);

// `test` and `arr` point to the SAME array in memory

// =======================================

// what will happen when we run this code?
let a = 'Hello';

function changeValue(a) {
  // `a` local variable to changeValue
  a = 'Goodbye';
}

changeValue(a);
console.log(a);

/*
pass-by-value
*/

// what will happen when we run this code?
let a = ['Hello'];

function changeValue(a) {
  a[0] = 'Goodbye';
}

changeValue(a);
console.log(a);

/*
it logged an array with one element goodbye
invoked changeValue and passed in array
passed by reference
modified the array in memory
logs a with goodbye instead of hello
*/

// PASS BY REFERENCE
let a = ['Hello'];

function changeValue(a) {
  console.log(a)
  console.log(a[0])
  a[0] = 'Goodbye';
}

changeValue(a);
console.log(a);

// what will happen when we run this code?
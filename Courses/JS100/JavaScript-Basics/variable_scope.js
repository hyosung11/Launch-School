// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//   }
// }

// myFunction();
// 1

// =======================

// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }

// console.log(myFunction());
// ReferenceError: Cannot access 'a' before initialization

// What will the following code log to the console and why?
// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }

// console.log(b); // false

/* JS100 - JavaScript Basics Variable Scope > What's my value? (Part 8)

What's my value? (Part 8)

What will the following code log to the console and why?
*/

// let a = 1;

// function myFunction(a) {
//   console.log(a);
// }

// let b = 2;

// myFunction(b); // 2

// What will the following code log to the console and why?
// const a = 1;

// function myFunction() {
//   a = 2;
// }

// console.log(myFunction(a));
// TypeError: Assignment to constant variable.

// What will the following code log to the console and why?
const a = {
  firstName: 'John',
  lastName: 'Doe',
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // { firstName: 'Jane', lastName: 'Doe' }
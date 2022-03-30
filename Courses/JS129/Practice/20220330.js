/* Lesson 2 Quiz 1 Question 1

Examine the following code: */

// let foo = {
//   bar: 42,
//   qux() {
//     console.log('Pudding');
//   },
// };

// let baz = Object.create(foo);
// baz.qux(); // line 9

/* Which of the following statements about the invocation on line 9 are true? Choose all that apply:

Your Answer: C

A. The baz object calls a copy of qux that the baz object owns.

B. The foo object delegates the invocation of qux to the baz object.

C. The baz object delegates the invocation of qux to the foo object.

D. JavaScript raises a TypeError exception.

Discussion

The `baz` object delegates the invocation of `qux` to the `foo` object. `Object.create` doesn't create a copy of the object it gets passed as an argument. Instead, it creates a new object whose [[Prototype]] property references the argument. Prototypal inheritance means that `baz` doesn't need a separate copy of the method. Instead, it can use the prototype chain to find the method and delegate the call. */

/* Lesson 2 Quiz 1 Question 2

Consider the following code: */

// let abc = { foo: 1, bar: 2 };
// let pqr = Object.create(abc);
// pqr.qux = 3;
// pqr.bar = 4;

/* Without running the code, which of the following code snippets will return true? Select all that apply. 

Your Answer: 

A. abc.hasOwnProperty('foo'); // true

B. abc.hasOwnProperty('bar'); // true

C. abc.hasOwnProperty('qux'); // false

D. pqr.hasOwnProperty('foo'); // false

E. pqr.hasOwnProperty('bar'); // true

F. pqr.hasOwnProperty('qux'); // true

Discussion

Incorrect:

C and D. When the example code runs, it creates two objects with the following "own" properties:

    abc: foo, bar
    pqr: qux, bar

Thus, these two choices return false, and the others all return true.

*/

/* Lesson 2 Quiz 1 Question 3

Given the object `xyz`, how can you view the value of its `[[Prototype]]` property? Without running the code, choose all of the answers that will work.

Your Answer: E

A. xyz.[[Prototype]];

B. xyz["[[Prototype]]"];

C. xyz.getPrototypeOf();

D. xyz[[Prototype]];

E. Object.getPrototypeOf(xyz); */

// let xyz = {};

// console.log(xyz.[[Prototype]]); // SyntaxError: Unexpected token '['

// console.log(xyz["[[Prototype]]"]); // undefined

// console.log(xyz.getPrototypeOf()); // TypeError: xyz.getPrototypeOf is not a function

// console.log(xyz[[Prototype]]); // ReferenceError: Prototype is not defined

// console.log(Object.getPrototypeOf(xyz)); // [Object: null prototype] {}

/* Discussion

Incorrect:

A, B, D: The [[Prototype]] property is a hidden internal property that you cannot access directly, no matter how you try to use it as a property name.

C: `getPrototypeOf` is a static method of the `Object` type, so you can't use `xyz.getPrototypeOf()` to call it. Instead you must use `Object.getPrototypeOf(xyz). */

/* Lesson 2 Quiz 1 Question 4

Without running the code, what value does Object.getPrototypeOf({}) return?

Your Answer: B, C, D

A. A reference to the same {} object passed to Object.getPrototypeOf as an argument. `

B. A reference to the object returned by Object.getPrototypeOf({ a: 1, b: 2 }).

C. A reference to the object returned by Object.prototype.

D. A reference to the default prototype object.

Discussion

Incorrect:

A: If you run `Object.getPrototypeOf({})` from Node, it displays `{}`; however, that's merely Node's rendering of the returned object. The object is, in fact, not empty, but has a variety of methods like `hasOwnProperty` and `toString()`.

Passing an empty object to `Object.getPrototypeOf()` returns a default prototype object. That object is the prototype for all objects created by using the object literal syntax (e.g., `{ a: 2 }`). The default prototype is the prototype object of the `Object` constructor, `Object.prototype`. `Object.prototype` provides the default prototype.
*/

/* Lesson 2 Quiz 1 Question 5 */

// let foo = { bar: 1, xyz: 3 };
// let baz = Object.create(foo);
// baz.qux = "Why not?";
// console.log(Object.getPrototypeOf(baz))

/* Which of the following code snippets will log just one entry: `qux`? Choose all of the snippets that apply. */

// A
// console.log(Object.keys(baz).toString()); // ['qux'].toString(); => 'qux'. OK

// B
// for (let prop in baz) {
//   console.log(prop);   // console logs every entries, including the ones on the prototype. Not OK
// }

// C
// for (let prop in baz) {
//   if (baz.hasOwnProperty(prop)) {
//     console.log(prop);   // OK
//   }
// }

// D
// Object.keys(baz).forEach(prop => console.log(prop));  // OK

// // E
// Object.keys(baz).forEach(prop => {
//   if (baz.hasOwnProperty(prop)) {
//     console.log(prop);  // OK
//   }
// });

//  Question 6 0 / 1 Points
// Incorrect

// Do all objects in JavaScript have an object prototype?
// Your Answer
// A

// Yes
// B

// No
// C

// There's not enough information.
// Discussion

// Correct:

// B: Most objects in JavaScript have an object prototype, but you can use Object.create(null) to create an object that doesn't have a prototype. Creating such bare objects is usually not recommended

/*  Question 7

Which of the following code snippets creates a function that computes and returns the sum of its arguments? You may assume that each function takes two arguments, both of which are numbers. Try to answer without running the code. Select all that apply. */

// A
// function sum(number1, number2) {
//   return number1 + number2;
// }

// B
// const sum = function(number1, number2) {
//   return number1 + number2;
// };

// C
// let sum = (number1, number2) => {
//   number1 + number2;
// };

// D
// const sum = (number1, number2) => number1 + number2;

// // E
// let sum = (number1, number2) => {
//   return number1 + number2;
// };

/* Question 14

Consider the following code: */

// const OPERATIONS = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => num1 / num2,
// };

// let getOperation = signString => OPERATIONS[signString];

// let compute = function(operation, num1, num2) {
//   return operation(num1, num2);
// };

// Without running this code, determine which of the following expressions will return true:

// A
// console.log(compute(getOperation('/', 18, 6) === 3);

// // B
// compute('*', 2, 8) === 16;

// // C
// console.log(compute(getOperation('*'), 5, 9) === 45);

// // D
// compute(getOperation('%'), 9, 4) === 5;

/* Consider the following short program intended for execution by Node.js: */

// global.foo = 5;
// if (isFinite(foo)) {
//   let bar = 3;
//   xyz = 5;
//   console.log(bar);
// }

/* Which of the following names are properties or methods of the global object? Choose all that apply. */

// console.log(global.hasOwnProperty('global'));   // A: true
// console.log(global.hasOwnProperty('foo'));      // B: true
// console.log(global.hasOwnProperty('isFinite')); // C: true
// console.log(global.hasOwnProperty('bar'));      // D: false
// console.log(global.hasOwnProperty('xyz'));      // E: true
// console.log(global.hasOwnProperty('console'));  // F: true
// console.log(global.hasOwnProperty('log'));      // G: false

/* What will the foo function return when we invoke it from line 5 in the code shown below? */

// function foo() {
//   return this;
// }

// console.log(foo()); // undefined

/* What will the obj.foo method return when we invoke it from line 7? */

// let obj = {
//   foo() {
//     return this;
//   },
// };

// console.log(obj.foo()); // => { foo: [Function: foo] }


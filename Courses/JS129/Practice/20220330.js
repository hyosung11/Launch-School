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

/* Question 7 0 / 1 Points
Incorrect

When does JavaScript bind an object to this? Select all answers that apply.


Your Answer
A

It binds the execution context when the function is executed using method-call syntax, e.g., foo.bar().
B

It binds the execution context based on where the function is defined.
C

It binds the execution context when the function is executed by either apply or call.
D

It binds the execution context based on when the function gets invoked.
E

It binds the execution context when the function is executed using function-call syntax, e.g., bar().
Discussion

Incorrect:

B, D: The execution context is determined by how a function is called, not by where it is defined or when it gets invoked.

Correct:

A A function that is invoked using method-call syntax receives the calling object as its execution context.

C Both call and apply set the execution context for a function invocation.

E A function that is invoked using function-call syntax receives the global object as its execution context. */

/*  Question 8

What will the code below log to the console when using Node.js? Assume that the code is in a separate file, and that you would use the node command to run it. However, try to answer without running the code. */

// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };

// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log('wake up');
//   },

//   foo() {
//     this.inner.bar(); // line 
//     inner.bar();
//     bar();
//   },
// };

// obj.foo();

// good night
// good afternoon
// good morning


/* Discussion

Correct:

C: Line 33 uses method invocation to invoke obj.foo on line 26, which sets the context (this) for obj.foo to the obj object. Thus, line 27 invokes obj.inner.bar on line 13, which logs good night. The calls on lines 28 and 29 don't use this, so both calls look elsewhere; namely, in the global object. Thus, line 28 invokes global.inner.bar on line 6, which logs good afternoon, and line 29 invokes bar on line 1, which logs good morning. */

function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

let foo = function () {
  console.log('go to sleep');
};

function go(foo) {
  foo();
}

go(obj.foo);

// good afternoon
// good afternoon
// good morning

/* Discussion

Correct:

D: Line 41 passes obj.foo to the go function on line 37 which strips the method of its context (obj). Thus, when we call foo on 38, it invokes obj.foo; however, it sets the context (this) to the global object. Thus, line 27 calls global.inner.bar on line 6, which logs good afternoon. From there, the behavior is identical to that from the previous problem.

*/

/*  Question 12

Examine the following code and its expected output: */

let cats = {
  names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(`${number}: ${this.names[number - 1]}`);
    }, this);
  },
};

cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy

/* The code, as written, does not work. In each of the following code snippets, we show a replacement for the foo method that may or may not fix the problem. Which replacements will produce the correct output? Select all that apply, but try to answer without running any of this code. However, you may run the code shown above. */

// self
// arrow function
// bind
// thisArg
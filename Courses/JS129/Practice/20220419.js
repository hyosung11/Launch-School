/* Lesson 2 Quiz 2 Question 8

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
//     bar() { // line 13
//       console.log('good night');
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log('wake up');
//   },

//   foo() { // line 26
//     this.inner.bar(); // `this` -> refers to 'obj'
//     inner.bar(); // line 28
//     bar(); // line 29
//   },
// };

// obj.foo(); // line 33

// 'good night
// good afternoon
// good morning

/* Line 33 uses method invocation to call `obj.foo` on line 26, which sets the execution context (`this`) for `obj.foo` to the `obj` object. Thus, line 27 invokes `obj.inner.bar` on line 13 which logs `good night`. The calls on line 28 and 29 don't use `this`, so both calls look elsewhere, namely, in the global object. So, line 28 invokes `global.inner.bar` on line 6, which logs `good afternoon`, and line 29 invokes `bar` on line 1, which logs `good morning`. */

/* L2 Q2 Q9

The code below is similar to the code from the previous problem, differing only with the highlighted code. Without running the code, identify the answer that shows the console output that would result if you were to run this code with Node.js?

Assume that the code is in a separate file and that you used the node command to run the file. */

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
//     bar() { // line 6
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
//     this.inner.bar(); // line 27
//     inner.bar();
//     bar();
//   },
// };

// let foo = function () {
//   console.log('go to sleep');
// };

// function go(foo) { // line 37
//   foo(); // line 38
// }

// go(obj.foo); // line 41

/*
good afternoon
good afternoon
good morning

Line 41 passes `obj.foo` to `go` function on line 37 which strips the method of its context (`obj`). So, when we call `foo` on line 38, it invokes `obj.foo`; however, it sets the context (`this`) to the global object. Thus, line 27 calls `global.inner.bar` on line 6 which logs `good afternoon`.

The calls on line 28 and 29 don't use `this`, so both calls look elsewhere, namely, in the global object. So, line 28 invokes `global.inner.bar` on line 6, which logs `good afternoon`, and line 29 invokes `bar` on line 1, which logs `good morning`. */

/* L2 Q2 Q10

Examine the following code and its expected output:

The code, as written, does not work. In each of the following code snippets, we show a replacement for the identify method that may or may not fix the problem. Which replacements will produce the correct output? Select all that apply, but try to answer without running any of this code. However, you may run the code shown above.

Note: each answer uses highlighting to show the modified code.
*/

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let report = function() {
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     };
//     report(); // function invocation which sets the implicit execution context to the global object
//   },
// };

// cat.identify();
// Expected output: Pudding is black and white.

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let report = function () {
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     }.bind(cat); // use `bind`
//     report();
//   },
// };

// cat.identify();

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let report = function() {
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     };
//     report.apply(this); // use `call` or `apply`
//   },
// };

// cat.identify();

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let self = this; // use variable in outer scope
//     let report = function() {
//       console.log(`${self.name} is a ${self.colors} cat.`);
//     };
//     report();
//   },
// };

// cat.identify();

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let report = () => { // use an arrow function
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     };
//     report();
//   },
// };

// cat.identify();

/* The original code doesn't work since `this` inside the `report` function refers to the global object, even though `report` is defined inside the `cat` object. That's because we invoked `report` as a function whose implicit execution context is the global object. The output of the original code is `undefined is a undefined cat.`

Correct Answers

A. This code works because we bind the function definition for `report` to the `cat` object. When we invoke `result`, it runs with the intended context.

B. This code works since `apply` sets the context for `report` to `cat`.

C. This code works since it uses an arrow function to define `report`. Arrow functions pick up their context from their surrounding context, so `report` uses the `cat` object as the value for `this`.

D. This code works since we saved the context in the local variable `that` before defining the `report` function. Thus, `report` can (and does) use `that` to obtain the desired context when accessing its properties. */
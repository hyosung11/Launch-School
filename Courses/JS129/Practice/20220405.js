/* What will the value of `foo.a` be after this code runs? */

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment(); // <--
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

/* The value of `foo.a` will be 0.

Since `increment` gets invoked as a function, `this.a` references a property on the global object rather than a property on `foo`. Thus, `foo.a` isn't modified by the `increment` and its value remains 0.
*/

/* Use one of the methods we learned in this lesson to invoke `increment` with an explicit context such that `foo.a` gets incremented with each invocation of `incrementA`. */

// 1. Preserve context with a variable in outer scope
// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this; // preserve context with variable in outer scope
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a); // this is what I need to log to get the result I want!

// 2. Call inner function with explicit context using `call` or `apply`
// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

/* We can use `call` to invoke `increment` on line 10 with explicit context. We pass `this` as the context argument since inside `incrementA` but outside of `increment`, `this` references the containing object, namely `foo`. */

// 3. Use `bind`
// let foo = {
//   a: 0,
//   incrementA: function () {
//     let increment = function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

// 4. Use an arrow function
// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = () => {
//       this.a += 1;
//     };

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);
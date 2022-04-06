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

/* JS120 - OOJS > Easy > 9. Moving

- Declare a walkMixin variable and assign it to an object
- define `walk` method with a return value with `this.name` and `this.gait()`
- assign prototype to walkMixin */

// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward` // invoke gait()
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, walkMixin);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// Object.assign(Cheetah.prototype, walkMixin);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// "Flash runs forward"

/* Discussion

We can use the `walkMixin` with any class that defines properties `name` and `gait`. You can also define a parent class and make the other classes inherit from that class.

Mixins are more appropriate in a "has-a" relationship where we want some additional functionality. Here, we need the functionality of walking, we don't need to extend the abilities of class `Person` since that coincides with an "is-a" relationship.

*/

/* What is the execution context for `baz` and why? */

// let foo = {
//   bar: function() {
//     console.log(this);
//   }
// };

// let baz = foo.bar;
// baz();

/* The global object because `baz` is invoked as a function. Here, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object. But because we call `baz` as a standalone function, its execution context is the global object, not the `foo` object. */

/* JS120 - OOJS > Easy > 11. Banner Class

Behold this incomplete class for constructing boxed banners. */

// class Banner {
//   constructor(message) {
//     this.message = message;
//   }

//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//   }

//   horizontalRule() {
//     return `+-${'-'.repeat(this.message.length)}-+`
//   }

//   emptyLine() {
//     return `| ${' '.repeat(this.message.length)} |`
//   }

//   messageLine() {
//     return `| ${this.message} |`
//   }
// }

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// let banner2 = new Banner('');
// banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

/* ### 1. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code. */

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/* The code will log `2`. 

`qux.foo` returns `1` since `qux` has a `foo` property with that value. However, `baz` doesn't have its "own" copy of the `foo` property. So JavaScript searches the prototype chain for a `foo` property and finds it in `qux`. Thus, `baz.foo` is also `1`, and the sum of the two values is `2`. */

/* What will the following code log to the console? Explain why it logs that value. Try to answer without running the code. */

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2; // line 3

console.log(baz.foo + qux.foo);

/* The code will log `3`. Here, we assign `baz.foo` to a value of `2`. Property assignment doesn't use the prototype chain; instead, it creates a new property in the `baz` object named `foo`. 

When we add `baz.foo` and `qux.foo` together, `baz.foo` returns the value of its "own" `foo` property, while `qux.foo` returns the value of its "own" `foo` property. Thus, the result is `3`.*/

/* ### 3. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code. */

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/* The code will log `4`. Here, we assign the value `2` to `qux.foo`. Since `baz` doesn't have its "own" copy of the `foo` property, JavaScript uses the prototype chain to look up `baz.foo` and it finds the `foo` property in `qux`. The result is equivalent to `2 + 2`, or `4`. When dealing with prototypes, objects hold a reference to their prototype objects, so if the object's prototype changes in some way, the changes are observable in the inheriting object as well. */
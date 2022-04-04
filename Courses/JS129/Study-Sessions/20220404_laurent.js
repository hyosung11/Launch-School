// message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// // deliverMessage(); // line 7

// let foo = {
//   message: 'Hello from the function scope!',
// };

// foo.deliverMessage = deliverMessage;

// console.log(foo.deliverMessage()); // line 15

/* 9.3 What will the code output? 

The code will output 

"Hello from the global scope"
"Hello from the function scope!"

On line 7, `deliverMessage()` is called as a function invocation, so its implied execution context is the global object. Since `message` is defined without the `let` or `const` or `var` keyword, it's placed as a property on the global object that is what is referenced.

On line 15, the `deliverMessage()` method is called on the `foo` object and the implicit execution context is the `foo` object. Thus, when we call the `deliverMessage` function on line 3, `this.message` resolves to `foo.message`. 
*/

/* ### 9.5 Take a look at the following code snippet. Use `call` to invoke the `add` method but with `foo` as execution context. What will this return? */

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };

// console.log(bar['add'].call(foo))

let father = {};
let son = {};

Object.setPrototypeOf(son, father);
console.log(Object.getPrototypeOf(son));
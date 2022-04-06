/* ### 4. As we saw in problem 2, the following code creates a new property in the `baz` object instead of assigning the property in the prototype object */

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

/* Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown:

Input: obj, property, value

Algorithm
- declare `assignProperty()` with parameters `obj`, `property` and `value`

-while (object !== null)
   if obj does not have property as own property
     obj = Object.getPrototypeOf(object)
   else
     object[property] = value
     break
*/

// function assignProperty(obj, property, value) {
//   while (obj !== null) {
//     if (!obj.hasOwnProperty(property)) {
//       obj = Object.getPrototypeOf(obj);
//     } else {
//       obj[property] = value;
//       break;
//     }
//   }
// }

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// assignProperty(fooC, 'bar', 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, 'qux', 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty('qux')); // false
// console.log(fooC.hasOwnProperty('qux')); // false

/* ### 5. Consider the following two loops */

// let fuz = {wom: 2, bat: 4}
// let muz = Object.create(fuz);
// muz.baz = 32;

// for (let property in muz) {
//   console.log(`${property}: ${muz[property]}`)
// }

// console.log(``)

// Object.keys(muz).forEach(property => {
//   console.log(`${property}: ${muz[property]}`);
// });

/* If `foo` is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ. */

/* 9.3 What will the following code output and why? */

// message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage(); // line 7

// let foo = {
//   message: 'Hello from the function scope!',
// };

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage(); // line 15

/* The code will log

"Hello from the global scope!" and then "Hello from the function scope" 

On line 7, `deliverMessage` is a function invocation so the implicit execution context is the global object. Since `message` is defined without a keyword on line 3, `message` becomes a property on the global object. Therefore, `this.message` on line 6 references the variable `message` on line 3. 

On the other hand, 'foo.deliverMessage()' is a method invocation, and so `foo` is the implicit execution context, and the message accesssed will be the property on the `foo` object, logging 'Hello from the function scope!'

*/

/* 11.3 What will the following code output and why? */

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj); // line 10

// console.log(foo());
// console.log(bar());

/* The code will log

`NaN` and `5` 

On line 14, `foo` is invoked as a function whose implicit execution context becomes the global object and binds the `this` keyword to the global object. Since the properties `a` and `b` do not exist on the global object `this.a` and `this.b` return as `undefined` and when added together resolve to `NaN`.

On the other hand, when `bar` is declared on line 12 it is assigned the value of the function foo bound to obj as its execution context (by calling bind on foo and passing obj as an argument). WHen bar is invoked on line 15, its execution context has been set to obj, and so this.a + this.b becomes 2 + 3 in the context of obj and returns 5.

*/

/* ### 11.4 What will the code below log to the console and why? */

let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity); // line 13

negativity.logMessage = bar;
negativity.logMessage();

/* The code will log "JavaScript makes sense".

Since `bar` is bound to `positivity` as the return value of the `bind` invocation on line 13, `positivity`s property `message` is logged by the function call on the last line even though the function is invoked as a method on the `negativity` object.

*/
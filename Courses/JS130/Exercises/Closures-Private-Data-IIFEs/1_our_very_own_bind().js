/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > Our very own bind()

Our very own bind()

Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

Hint
- Use `Function.prototype.apply` in your solution */

// function myBind(func, context) {
//   return function() {
//     return func.apply(context, arguments);
//   }
// }

/* Discussion

The above solutions leverages `Function.prototype.apply `and the concept of closures to return a bound function. `myBind` receives a function and a context object as arguments. Then it returns a new function, which, when called, will call the original function using `apply` while passing in the `arguments` array in case the function has any arguments.

One way to solve the problem is to return an arrow function. However, it is important to note that arrow function doesn't have an `arguments` array, but instead uses a rest parameter. */

// function myBind(func, context) {
//   return (...args) => {
//     return func.apply(context, args);
//   }
// }

// Using `call` instead of `apply
function myBind(func, context) {
  return function() {
    return func.call(context, ...arguments);
  }
}

function myBind(func, context) {
  return (...args) => {
    func.call(context, ...args);
  }
}
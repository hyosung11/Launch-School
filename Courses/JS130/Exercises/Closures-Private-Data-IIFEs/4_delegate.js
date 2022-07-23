/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > Delegate

Delegate

Write a `delegate` function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.
*/

// Solution 1
// const delegate = (context, methodName, ...args) => {
//   return function() {
//     return context[methodName].apply(context, args);
//   }
// }

// Solution 2
// function delegate(context, methodName) {
//   let args = Array.prototype.slice.call(arguments, 2);
//   return function() {
//     return context[methodName].apply(context, args);
//   }
// }

/*  Laurence Cua
5 days ago

The following calls the function method directly with arguments stored in the args array object. The args array is first created with rest syntax ... then spread out using ... when called. */

// function delegate() {
//   let [func, meth, ...args] = arguments;
//   return function () {
//     func[meth](...args);
//   };
// }

// function delegate(object, methodName, ...args) {
//   return () => {
//     object[methodName](...args);
//   };
// }

// A solution that takes advantage of both the rest and spread syntax to avoid the use of call or apply:
function delegate(context, methodName, ...args) {
  return () => {
    context[methodName](...args);
  };
}

// Here's a sample run;
let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux(); // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux(); // logs 'changed'

/* Discussion

The main challenge of this exercise is maintaining the reference to the function and its context. In Solution 1, we define delegate as an arrow function with a rest parameter, ...args, then use apply to invoke the method with the appropriate context and arguments.

Solution 2 uses a more traditional idiom that predates the rest parameter syntax. In this code, the arguments are obtained from the built-in name arguments. Unfortunately, arguments is not an array - it is an array-like object. That means we can't pass it directly to apply, but must first create an array that has the same values as arguments. We do that with the somewhat odd-looking code:

let args = Array.prototype.slice.call(arguments, 2)

This code uses Array.prototype.slice to create a copy of arguments. However, since arguments isn't an array, we can't call it with arguments.splice(2). Instead, we have to use the call method to invoke slice while using the arguments object as the execution context. While the arguments object is not an array, it is sufficiently similar to an actual array that slice is able to work when given arguments as the context.

While rest parameters mostly negate the need for using call as we do in Solution 2, this is still a useful technique to know. Code that predates rest syntax will often use this approach to use Array.prototype methods on array-like objects. */
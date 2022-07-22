/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > myBind() Improved

myBind() Improved

Our earlier implementation of Function.prototype.bind as myBind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this lesson’s section on Partial Function Application and the MDN documentation to learn more.

Alter the `myBind` function written in the previous exercise to support partial function application. */

// LS Solution
function myBind(func, context) {
  let partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(context, fullArgs);
  }
}

// Now to see the new `myBind` in action:

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

addFive(10); // 15

/* Discussion

The key here is visualizing what happens to the arguments when `myBind` is called and when the bound function is eventually called. The first thing to visualize is when `myBind` is executed, it creates the `partialArgs` array. This array contains the pre-specified initial arguments -- the argument `[2]` tells `slice` to extract all the elements of the `arguments` array, starting with index 2. (It has to be an array since we are using `apply`.) Thus, `partialArgs` will contain an array of arguments from the `myBind` call, but ignoring the function and context arguments.

Next, when the bound function is called, the remaining arguments are then concatenated with the `partialArgs`. Notice that the key here is to cache the initial set of arguments and have it accessible via the closure formed by the return value of `myBind`.

With the complete args, the solution again leverages `Function.prototype.apply` to execute the function passed to `myBind` with its `this` set to `ctx`.

As in the previous problem, we will show you the solution with arrow functions below. */

// const myBind = (func, context, ...args) => {
//   let partialArgs = args;

//   return (...restArgs) => {
//     let remainingArgs = restArgs;
//     let fullArgs = partialArgs.concat(remainingArgs);

//     return func.apply(context, fullArgs);
//   };
// };

// Laurent's Version

function myBind(func, context, ...firstArgs) {
  return function (...args) {
    return func.apply(context, firstArgs.concat(args));
  };
}
/* JS120 - Object Oriented JavaScript > Function Context > 4. myFilter()

myFilter()

In this exercise, we'll update an implementation of `myFilter` by adding the functionality of accepting an optional `thisArg` just like the original `Array.prototype.filter`.

Here's an implementation. We also show an example of how we want to call our modified function: the 3rd argument, filter, supplies the desired context (thisArg). */

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// }

// myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter); // returns [5, 6, 9]

/* Modify the implementation such that the expected result is returned. Don't use the `thisArg` argument of `Array.prototype.forEach`. */

// Solution
// function myFilter(array, func, thisArg) {
//   let result = [];

//   array.forEach(function (value) {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// }

// console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter)); // returns [5, 6, 9]

/* Discussion

The solution is straightforward. Since there is always only one argument at a time passed to the callback function of `myFilter`, the solution uses `Function.prototype.call` on it and passes it the `thisArg` and value arguments. */

/*  Stefano Schmidt
about a year ago

Slightly different (recursive) solution that checks whether we passed an explicit execution context or not: */

function myFilter(array, func, context) {
  if (context !== undefined) {
    return myFilter(array, func.bind(context));
  }

  let result = [];

  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]
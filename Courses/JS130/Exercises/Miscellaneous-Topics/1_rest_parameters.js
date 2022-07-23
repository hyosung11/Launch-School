/* JS130 - JavaScript Exercises > Miscellaneous Topics > 1.Rest Parameters

Rest Parameters

How can we refactor the function definition below (without changing the function invocation) so that we don't need to use the arguments object? */

// function sum() {
//   values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

// Solution
function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

/* Discussion

The rest parameter syntax allows us to capture an indefinite number of arguments in an array. For more details, read about rest parameters on MDN. */
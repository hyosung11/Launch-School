/* JS120 - Object Oriented JavaScript > Function Context > 2. The Franchise

The Franchise

The method `franchise.allMovies` is supposed to return the following array: */

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3',
// ];

/* Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules. */

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     return [1, 2, 3].map(function (number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// console.log(franchise.allMovies());
// => [ 'undefined 1', 'undefined 2', 'undefined 3' ]

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    let self = this; // outer scope variable available to an inner scope
    return [1, 2, 3].map(function (number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3',
// ];

/* Solution

The current implementation will not work because `this` will be bound to the wrong object (`window`) when the anonymous function passed to `map` is invoked. We want to access the object `franchise` from within that anonymous function.

There are multiple ways to solve this problem, but here we'll solve it by employing the lexical scoping of JavaScript to our advantage; specifically, the rule that a variable defined in an outer scope is available to an inner scope:
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     return [1, 2, 3].map(function (number) {
//       return this.name + ' ' + number;
//     }, this); // the simplest solution is explicit context-setting
//   },
// };

/* Another way to keep the execution context of 'this.name' is to use an arrow function for the callback passed to map: */
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     return [1, 2, 3].map((number) => this.name + ' ' + number);
//   },
// };
/* JS120 - Object Oriented JavaScript > Function Context > 3. The Franchise - Solution 2

The Franchise - Solution 2

In the previous exercise, we had a situation where an anonymous method passed to `map` had an undesirable execution context. We solved the problem by taking advantage of lexical scoping and introducing a new variable self. Solve the same problem again by passing a hard-bound anonymous function to `map`. */

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     return [1, 2, 3].map(function (number) {
//       return this.name + ' ' + number;
//     }.bind(this));
//   },
// };

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies () {
    return [1, 2, 3].map(number => {
      return `${this.name} ${number}`
    })
  }
}

console.log(franchise.allMovies());

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3',
// ];

/* Discussion

The two solutions provided for the same problem are both valid, usable solutions. Another solution is to use an arrow function as a callback to the `map` method call, as with arrow functions `this` is lexically bound: */

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    return [1, 2, 3].map((number) => {
      return `${this.name} ${number}`;
    });
  },
};
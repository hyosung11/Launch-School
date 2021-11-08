
/* JS101 - Small Problems > Easy 6 > 7. Name Swapping

Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name. */

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// Examples:
console.log(swapName('Joe Roberts')); // "Roberts, Joe"
console.log(swapName('SungOh Bidol-Lee')); // "Bidol-Lee, SungOh"

/* Discussion

Given a full name as a string and a space as a separator, the solution uses the `String.prototype.split` method to get an array of words (e.g., `['Joe', 'Roberts']`). The solution then uses `Array.prototype.reverse` to get `['Roberts', 'Joe']`, and finally, uses `Array.prototype.join`, with a separator string containing a comma and a space (`', '`), to return the desired result.

Further Exploration

What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name: */

// function swapName(name) {
//   let splitName = name.split(' ');
//   return `${splitName.slice(-1)}, ${splitName.slice(0, -1).join(' ')}`;
// }

// function swapName(name) {
//   let splitName = name.split(' ');
//   return `${splitName.pop()}, ${splitName.join(' ')}`;
// }

// console.log(swapName('Karl Oskar Henriksson Ragvals')); // "Ragvals, Karl Oskar Henriksson"
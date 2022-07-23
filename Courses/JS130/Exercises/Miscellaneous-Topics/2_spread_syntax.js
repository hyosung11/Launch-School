/* JS130 - JavaScript Exercises > Miscellaneous Topics > 2. Spread Syntax

Spread Syntax

How can we refactor the invocation of the function `formatName` (without changing the function definition) so that we don't need to grab each element of the array `fullName` by index?  */

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(fullName[0], fullName[1], fullName[2]));
// logs: Kirk, James T.

// Solution
"use strict";

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));

/* Discussion

The spread operator has the same syntax as the rest operator, three dots (...), but it has the opposite behavior: Instead of capturing a number of arguments in an array, it can be used for expanding an array into a number of arguments. For more details, read about spread syntax on MDN. */
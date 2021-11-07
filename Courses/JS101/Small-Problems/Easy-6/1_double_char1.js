/* JS101 - Small Problems > Easy 6 > 1. Double Char (Part 1)

Double Char (Part 1)

Write a function that takes a string, doubles every character in the string, and returns the result as a new string. */

// for loop
// function repeater(string) {
//   let stringArray = [];

//   for (let index = 0; index < string.length; index++) {
//     stringArray.push(string[index], string[index])
//   }

//   return stringArray.join('');
// }

function repeater(string) {
  return string.split('').map(char => char + char).join('');
}

// Examples:
console.log(repeater('Hello')); // "HHeelllloo"
console.log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
console.log(repeater('')); // ""

/* Discussion

The first solution initializes a `stringArray`, then iterates through the string argument, each time appending two of the current characters to `stringArray`. Finally, the solution returns the result of joining together the elements of `stringArray`.

In the second solution, we split the string into an array of characters and transform that array using `map` to an array where each character repeats twice. For repeating the character, we simply concatenate each character with itself. Finally, we join the array back into the string. */

// Kowshik Islam
// function repeater(string) {
//   // go through each char and use the repeat function to add it to a new string
//   let doublesString = '';
//   for (let index = 0; index < string.length; index++) {
//     doublesString += string[index].repeat(2);
//   }

//   return doublesString;
// }
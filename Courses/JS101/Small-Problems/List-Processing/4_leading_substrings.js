/* JS101 - Small Problems > List Processing > 4. Leading Substrings

Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

input: string
output: array of substrings of the string

ALGORITHM
- initialize `substrings` to an empty array
  - loop through string
    - push strings to `substring`
- return `substrings` array */

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }
  return substrings;
}

// function leadingSubstrings(string) {
//   return string.split('').map((letter, index) => {
//     return string.slice(0, index + 1)
//   })
// }

// function leadingSubstrings(string) {
//   return string.split('').map((letter, idx) => string.slice(0, idx + 1));
// }

// Examples:
console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')); // ["a"]
console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* Discussion

This problem can be solved using the list processing functions. However, doing so is needlessly complex. This is one of those situations where a `for` loop may be the most elegant solution. Given that approach, all we have to do is iterate through the input string and extract a list of the substrings of length 1, 2, 3, and so on starting at the beginning of the string.

Further Exploration

Rewrite `leadingSubstrings` using list processing functions. That is, convert the string into an array of some sort and use functions like `map`, `filter`, or `reduce` to get the desired substrings. (You will also need to use `join`.) Try not to use `forEach` as that is too similar to the `for` loop approach. */
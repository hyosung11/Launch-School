/* JS101 - Small Problems > Medium 2 > 1. Lettercase Percentage Ratio

Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: string
- output: object

Identify rules
- put each character in the string into one of three properties
  - chars that are lowercase
  - chars that are  uppercase
  - chars that are neither
- string has at lease one char

EXAMPLES / TEST CASES
'abCdef 123' => { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
- 10 total characters
- get % to two decimal points

DATA STRUCTURE
- input: string
- intermediary: array or object?
- output: object

ALGORITHM
- initialize `percents` object to hold properties
- split string at each char
- iterate through each char
  - if char is lowercase
    - increase lowercase count
  - if char is uppercase
    - increase uppercase count
  - if char is neither
    - increase neither count
- calculate percentage
  - check value of each property
  - divide string length by value
  - multiply by 100 to get percentage
  - round to two decimal places
- return object

CODE
Implementation of Algorithm
- test code while programming */

// my declarative solution
// function letterPercentages(string) {
//   let percents = { lowercase: 0, uppercase: 0, neither: 0 }

//   string.split('').forEach(char => {
//     if (char >= 'a' && char <= 'z') {
//       percents.lowercase += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       percents.uppercase += 1;
//     } else {
//       percents.neither += 1;
//     }
//   });

//   return calculatePercent(percents, string);
// }

// function calculatePercent(object, string) {
//   for (let key in object) {
//     object[key] = (object[key] / string.length * 100).toFixed(2);
//   }
//   return object;
// }

/* LS Solution 1
- declare count variable and initialize to string length
- create object with three properties
  - lowercase regex match or empty array length, divided by count, to two decimal places
  - uppercase regex match or [] length divided by count to two decimal places
  - neither regex match or empty array length divided by count to two decimal places
- return object */

// function letterPercentages(string) {
//   let count = string.length;
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2)
//   }
// }

/* LS Solution 2
- declare count variable and initialize to length of string
- declare percentage helper function to convert number of occurrences of each property in the object to percents
- return the object properties with percentages */

// function letterPercentages(string) {
//   let count = string.length;

//   function percentage(regex) {
//     let matchingChars = string.match(regex) || [];
//     return ((matchingChars.length / count) * 100).toFixed(2);
//   }

//   return {
//     lowercase: percentage(/[a-z]/g),
//     uppercase: percentage(/[A-Z]/g),
//     neither: percentage(/[^a-z]/gi)
//   }
// }

// Examples:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Hint: Algorithm

This exercise is a string processing problem. You can either convert the string into an array and use list processing (iteration perhaps?) to gather and tally the characters, or use regex to get the characters that match a particular pattern. Once you have the characters, you can simply get the quantity for each category, divide the quantity by the `length` of the string, and format the result as needed.

Discussion

Solution 1 may be concise, but there are many things happening on each line of the object literal. Let's break down the first of these three similar lines. In particular, we will look at the expression that makes up the value of the lowercase property:

- `(string.match(/[a-z]/g) || [])` : Returns either an array of the matches for lowercase letters, or an empty array `[]`. `String.prototype.match` returns `null` if no matches are found, so the logical OR operator (`||`) is used to ensure that the overall expression will always return an array, which allows the length property to be accessed without raising an error.
- `((string.match(/[a-z]/g) || []).length / count) * 100` : Returns the letter percentage as a number.
- `(((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2)` : Formats the percentage as a number string rounded to two decimal places.

Solution 2 operates nearly identically to solution 1, but it uses a nested function, `percentage` to count the characters that match the regex argument and compute the percentage. It also breaks up some of the more complex code to make it easier to understand.

Note that the inner function, `percentage`, has access to values assigned to variables `string` and `count`. Whenever you see a function within another function, the inner function has access to the scope in the outer function. This feature is called Lexical Scope. In other words, the scope of variables is defined by their position in the source code. To resolve variables, JavaScript starts at the innermost scope and searches outwards until it finds the variable it was looking for. */

// Spencer Haka
// function letterPercentages(string) {
//   let percent = { lower: 0, upper: 0, neither: 0 };
//   string.split('').forEach((char) => {
//     if (char >= 'a' && char <= 'z') {
//       percent['lower'] += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       percent['upper'] += 1;
//     } else {
//       percent['neither'] += 1;
//     }
//   });
//   return calculatePercent(percent, string);
// }

// function calculatePercent(object, string) {
//   for (let key in object) {
//     object[key] = ((object[key] / string.length) * 100).toFixed(2).toString();
//   }
//   return object;
// }

// Bob Rodes
function letterPercentages(str) {
  const fmtPct = (num) => ((num / str.length) * 100).toFixed(2);

  return {
    lowercase: fmtPct(str.replace(/[^a-z]/g, '').length),
    uppercase: fmtPct(str.replace(/[^A-Z]/g, '').length),
    neither: fmtPct(str.replace(/[a-z]/gi, '').length),
  };
}
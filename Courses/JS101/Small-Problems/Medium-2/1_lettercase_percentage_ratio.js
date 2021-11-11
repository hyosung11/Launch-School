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
  divide count by total length of string to get percentage
- return object

CODE
Implementation of Algorithm
- test code while programming */

function letterPercentages(string) {
  let percents = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percents.lowercase += 1;
    } else if (char >= 'A' && char <='Z') {
      percents.uppercase += 1;
    } else {
      percents.neither += 1;
    }
  });
  return calculatePercentages(percents, string);
}

function calculatePercentages(object, string) {
  for (let key in object) {
    object[key] = (object[key] / string.length * 100).toFixed(2);
  }
  return object;
}

// Examples:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

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
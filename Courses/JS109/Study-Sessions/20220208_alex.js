/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty

Problem
- input string
- output string

Rules:
- sort by sum of digits in number
-if there is a tie it should be broken alphabetically


DATA
- in: str
- between: arr, num
- out: str

ALGO
- in: str
- split by spaces  into arr
- sort by alpha
- sort by sum of digits (helper)
- join by spaces and return

helper
-split into array
-reduce to sum and return
*/

// doesn't work on all codewars test cases
// function orderWeight(string) {
//   let array = string.split(' ').sort();
//   // console.log(array)
//   array.sort((a, b) => sumOf(a) - sumOf(b));
//   return array.join(' ');
// }

// function sumOf(digits) {
//   return digits.split('').reduce((sum, num) => sum + Number(num), 0);
// }

const orderWeight = (string) => {
  return string
    .split(' ')
    .sort((a, b) => weight(a) - weight(b) || a.localeCompare(b))
    .join(' ');
};

const weight = (string) => string.split('').reduce((acc, el) => acc + +el, 0);

// Test cases:
console.log(orderWeight('103 123 4444 99 2000') === '2000 103 123 4444 99');
console.log(
  orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123') ===
    '11 11 2000 10003 22 123 1234000 44444444 9999'
);

/* 1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist. 

let alphabet = '_abcdefghijklmnopqrstuvwxyz' 

alphabet[1] = 'a' 

ALGO
- in: str
- init alphabet str
- init results arr
- iterate through str
  - if str[idx + 2] === '#'
    -push a slice(idx, idx + 2) to results arr 
    -idx += 3
  - else, push str[idx] to results
-return results mapped to indices in alphabet and then joined 

*/

function freqAlphabets (str) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  let results = [];
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx + 2] === '#') {
      results.push(str.slice(idx, idx + 2));
      idx += 2;
    } else {
      results.push(str[idx]);
      }
  }
  return results.map(char => alphabet[Number(char)]).join('');
}

console.log(freqAlphabets("10#11#12"));  // "jkab"
console.log(freqAlphabets("1326#"));  // "acz"
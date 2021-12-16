/* Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" === 63


You can expect that the string will include only positive numbers.

PROBLEM
input: string
output: number (sum)

rules: 
-add up all of the digits in a string
-non-digits should be ignored
-consecutive digits within the string should be concatenated into a larger number

data structures:
input: string
in-beween: array, string, array
output: number (sum)

ALGORITHM
- input string
- split the string at each char
- iterate through the chars
  - if char is not a number return 0 
  - else return number
-join array into string
split new string into array by zeros
-coerce elements in arrray to number and add up their sum
- return sum*/

function sumOfNumbers(string) {
  let result = string.split('');
  return result
    .map((char) => {
      if (isNaN(char) || char === ' ') return '-';
      return char;
    })
    .join('')
    .split('-')
    .reduce((sum, value) => sum + Number(value), 0);
}

console.log(Number(''));
console.log('----12----3------4'.split('-'));
console.log(sumOfNumbers('L12aun3ch Sch3oo45l'));
// console.log(sumOfNumbers("HE2LL3O W1OR5LD"));
console.log(sumOfNumbers('HE2LL3O W1OR5LD') === 11);
console.log(
  sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
    3635
);

// Two words are anagrams of each other if they both contain the same letters.

// Write a method that will find all the anagrams of a word from a list.
// You will be given two inputs, a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none.

ALGO
input: string, array of strings
-return an array that selects those elements from input array for which:
  -the input string alphabetized equals the element alphabetized
*/

CODE
function anagrams(string, arr) {
  return arr.filter ((element) => {
    return string.split('').sort().join('') ===  element.split('').sort().join('')
  });
}
/* PEDAC with Antonina

Introductions
- Antonina, Greece, JS185, wouldn't be able to survive Launch School with PEDAC
- Jonathan, preparing for the interview with the small problems, writing algorithms
- H
- Daniel, JS101 L3, working on medium problems, want to learn PEDAC
- Grace, Toronto, JS101 L6, PEDAC is helpful, finished tic-tac-toe
- Travis, Vancouver, want to learn best practices

PEDAC

P - Understanding the Problem
Goal: understanding what you're asked to do. Understand the rules, the boundaries, etc.

E - Examples and Test Cases
Goal: understand more about the problem. Test assumptions, consider edge cases, identify implicit requirements
- lowercase or uppercase
- empty arrays, empty strings
- 0, negative numbers

D - Data Structure
Goal: begin to think logically and solution-based about the problem. Consider what data structures we can leverage. Remember you're not married to any of your thoughts at this stage. Take notes here.

A - Algorithm
Goal: write out high-level steps to solve the given problem. Keep your algorithm high-level. Not code-specific. Your algorithm should be applicable to any programming language. Don't skip over steps in your algorithm. Your algorithm should walk through how to solve the problem in a way that even someone who is not a programmer would understand. The algorithm step requires the most practice to get comfortable with writing it at a high-level that is language-agnostic, yet not skipping over any steps on the path to solving the problem. Practice this even with easier problems so that you will feel comfortable when you are challenged with more complex problems.

C - Code with intent

Problem Instructions

Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" === 63

You can expect that the string will include only positive numbers.

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

P:
- input: string
- output: number

Rules:
- string will only include positive numbers
- calculate sum of numbers inside the string
- consecutive digits are added as a single number
- if input string doesn't include any numbers, return 0

E:

D:
- input: string
- output: number

A:
- input string
- initialize `total` number variable to 0
- split string into array of chars
- iterate over array of chars
  - filter out numbers
  - how to return digits that are consecutive?
  - sum the numbers
- return number */

// console.log(sumOfNumbers('HE2LL3O W1OR5LD') === 11);
// console.log(
//   sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
//     3635
// );

// coderpad - Instructions

// Implement a function that calculates the sum of numbers inside of a string.
// Example: "L12aun3ch Sch3oo45l" === 63

// You can expect that the string will include only positive numbers.

/*
P:
- input: string
- output: number

Rules:
- string will only include positive numbers
- calculate sum of numbers inside the string
-consecutive numbers are added as a single number
- if input string doesn't include any numbers, return 0

Data structures:
  - input: string
  - intermediary: array of digits
  - output: number

  iterate over string using a "filter" that determines whether the char is a number

Jonathan
split the string into individual characters, from "" space.
create an empty array that will hold the verified numeric characters.
start a loop that uses the initial 0 count as the 0th element of the array
When a character tests positive as numeric, the character is added to that
element of the array. When a character tests as non-numeric, the first loop
will increment to the next element of the result array, and the second loop will
start from the last index of a numeric character and continue from there.
When the iteration has reached the end of the input string, the result array
will then be iterated through, each element will be converted to it's numeric
equivalent, and reduced with addition to a single number, which will be output
to the console.

Travis' Algorithm:
1. Iterate over the elements of the string.
2. Determine if the element being tested is a letter or a number.
  2a. if the current element is a letter, move onto the next element in the string.
  2b. if the current element is a number, store the number in an output array. Move to the next element.
    2bi. If the next element is also a number, store this number in the same element of the output array.
3. When the last element of the string has been tested, return the output array.

HyoSung aka H
- input string
- initialize `total` number variable to 0
- split string into array of chars
- iterate over array of chars
  - filter out numbers
  - how to return digits that are consecutive?
  - sum the numbers
- return number

Grace
-Iterate through the string,
-SUBPROCESS: Find the consecutive integers within the string
  -Set digits = []
  -Set stringIntegerToPush = ""
  -Set currentChar
  -Set previousChar
  -Iterate through the string,
    -If the previousChar and the currentChar are both numbers,
    OR if the previousChar is not a number and currentChar is a number
      -Add currentChar to `stringIntegerToPush`
    -If the currentChar is not a number and previousChar is a number
      -Add stringIntegerToPush to digits
      -Set stringIntegerToPush to ""
  -Return digits
-Coerce the string integers into numbers
-Add the numbers together */

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function sumOfNumbers(string) {
  let numbersArray = [];
  let numbersString = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    if (NUMBERS.includes(string[idx])) { // T, h, e, 3, 0
      numbersString += string[idx]; // 3, 30, ...20
    } else {
      numbersArray.push(numbersString); // "", "", "", 30, 20, 10, 1203, 914, 3, 1349, 102, 4
      numbersString = "";
    }
  }

  if (numbersString.length > 0) numbersArray.push(numbersString);

  return numbersArray.reduce((total, num) => total + Number(num), 0);
}


// let str = " 12 hi 34";
// sumOfNumbers(str);

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// Jonathan's Version
// let str = 'shigfh23asfa 10 asdfa$&$ 20';
// let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// function sumString(str) {
//   let resultsArr = '';
//   for (let ii = 0; ii < str.length; ii++) {
//     if (nums.includes(str[ii])) {
//       resultsArr += str[ii];
//     } else {
//       resultsArr += '.';
//     }
//   }
//   resultsArr = resultsArr
//     .split('.')
//     .filter((ele) => ele !== '.')
//     .map((ele) => Number(ele))
//     .reduce((accum, next) => accum + +next);
//   console.log(resultsArr);
// }

// sumString(str);
// sumString(' 12 hi 34');
// sumString('L12aun3ch Sch3oo45l');
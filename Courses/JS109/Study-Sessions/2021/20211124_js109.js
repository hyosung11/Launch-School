/*  JS109 Interview Assessment Study Group | Wed. Nov 24th | 9:00 PM Eastern / 6:00 PM Pacific | Victor Paolo Reyes

Introductions
- Victor, daughters got to go out, Philippines
- H, Thanksgiving
- Shane, happy to have two days off work
- Alex, got an IT job

Focus on interview preparation
- assume that you know the fundamentals
- doesn't take long to figure out the syntax
- focus on solving the problem

Each can work on an individual problem.
- 15 minutes to work on problem alone
- 10 minutes to present with feedback
- focus on analysis and presentation of the problem
  - problem analysis => PEDA
  - implementation => coding
- verbalize your intention, not what you are typing
- check all your test cases, including the edge cases

===============
Shane's Problem

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

function findEvenIndex(arr) {
  let found = false;
  let index = 0;

  while (!found && index < arr.length) {
    let leftArr = arr.slice(0, index);
    let rightArr = arr.slice(index + 1, arr.length);
    let leftSum = leftArr.reduce((a, b) => a + b, 0);
    let rightSum = rightArr.reduce((a, b) => a + b, 0);

    if (leftSum === rightSum) {
      found = true;
    } else {
      index += 1;
    }
  }

  if (found) {
    return index;
  } else {
    return -1;
  }
}

Test Cases
console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

Second Problem
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

==============
Alex's Problem
Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

function maxMultiple (divisor, bound) {
  if (bound < 1) return -1;
  while (true) {
    if (bound % divisor === 0) return bound;
    if (bound < 1) return -1;
    bound -= 1;
  }
}

Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

=================
HyoSung's Problem

Write a function called validParentheses that takes a string of parentheses and determines if the order of the parentheses is valid. The function should return true if the string is valid and false if it is invalid.

Examples:
"()"                =>  true
 ")(()))"           =>  false
"("                 =>  false
"(())((()())())"    =>  true

Test Cases
console.log(validParentheses( "()" )) // true
console.log(validParentheses("(())((()())())")) // true
console.log(validParentheses("((())))(")) // false
console.log(validParentheses("((())))(()")) // false

"( ( ) ) ( ( ( ) ( ) ) ( ) )"

"( ( ( ) ) ) ) ( ( ) " // false not closed

PEDAC
- input: string
- output boolean

Rules
- input a string of parentheses
- start with left parenthesis
- end with right parenthesis
- must have equal number of left and right parenthesis
*/

// Test Cases
// console.log(validParentheses( "()" )) // true
// console.log(validParentheses("(())((()())())")) // true
// console.log(validParentheses("((())))(")) // false
// console.log(validParentheses("((())))(()")) // false*/

/* Write a function called validParentheses that takes a string of parentheses and determines if the order of the parentheses is valid. The function should return true if the string is valid and false if it is invalid.

Examples:
"()"                =>  true
")("                =>  false
 ")(()))"           =>  false
"("                 =>  false
"(())((()())())"    =>  true

Test Cases
console.log(validParentheses( "()" )) // true
console.log(validParentheses("(())((()())())")) // true
console.log(validParentheses("((())))(")) // false
console.log(validParentheses("((())))(()")) // false

"( ( ) ) ( ( ( ) ( ) ) ( ) )" // true

"( ( ( ) ) ) ) ( ( ) " // false not closed

PEDAC
- input: string
- output boolean

Rules
- input a string of parentheses
- start with left parenthesis
- end with right parenthesis
- open must have a close */

function validParentheses(parens) {
  let open = 0;

  for (let idx = 0; idx < parens.length; idx += 1) {
    if (parens[idx] === '(') {
      open += 1;
    } else {
      open -= 1;
    }
    if (open < 0) return false;
  }

  return open === 0;
}

console.log(validParentheses( "()" )) // true
console.log(validParentheses("(())((()())())")) // true
console.log(validParentheses("((())))(")) // false
console.log(validParentheses("((())))(()")) // false */

// function validParentheses(parens) {
//   let openParens = 0;

//   for (let idx = 0; idx < parens.length; idx += 1) {
//     if (parens[idx] === '(') {
//       openParens += 1;
//     } else {
//       openParens -= 1;
//     }
//     if (openParens < 0) {
//       return false;
//     }
//   }

//   if (openParens === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
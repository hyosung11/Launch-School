/* Write a function called validParentheses that takes a string of parentheses and determines if the order of the parentheses is valid. The function should return true if the string is valid and false if it is invalid.

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

PEDAC
- input: string
- output boolean

Rules
- input a string of parentheses
- start with left parenthesis
- end with right parenthesis
- must have equal number of left and right parenthesis */

// Test Cases
// console.log(validParentheses( "()" )) // true
// console.log(validParentheses("(())((()())())")) // true
// console.log(validParentheses("((())))(")) // false
// console.log(validParentheses("((())))(()")) // false*/

function validParentheses(parens) {
  let openParens = 0;

  for (let idx = 0; idx < parens.length; idx += 1) {
    if (parens[idx] === '(') {
      openParens += 1;
    } else {
      openParens -= 1;
    }
    if (openParens < 0) {
      return false;
    }
  }

  if (openParens === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validParentheses( "()" )) // true
console.log(validParentheses("(())((()())())")) // true
console.log(validParentheses("((())))(")) // false
console.log(validParentheses("((())))(()")) // false */
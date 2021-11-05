/* JS101 - Small Problems> Easy 4 > 4. Palindromic Strings (Part 1)

Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string
- output: boolean

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- palindrome is a string that reads the same forwards and backwards
- case matters
- all characters matter and don't have to be letters

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary
- output: boolean

ALGORITHM
Steps for converting input to output
- loop through the string
  - check first character with last character
    - not same return false
    - same go to next character
  - check second character with second to last character
    - not same return false
    - same continue through string
- return result

CODE
Implementation of Algorithm

- test code while programming */

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// Examples:
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true

/* Discussion

The solution leverages the `Array.prototype.reverse` and `Array.prototype.join` methods of the Array object by converting the string input into an array using the `String.prototype.split` method.

With the use of these methods, the solution is straightforward. */

// Juan Jay Solution
// function isPalindrome(str) {
//   for (let idx = 0; idx < (str.length / 2) - 1; idx++) {
//     if (str[idx] !== str[str.length - 1 - idx]) {
//       return false;
//     }
//   }
//   return true;
// }

/* This uses a `for` loop to iterate through half of the string, checking each value against its respective value 'from the other end'. If it encounters any inequalities, it returns `false`, which ends the function invocation. If it manages to get through the `for` loop without returning false, that means that it passed the palindrome test and the function returns true.

In the string 'madam', it compares `m` to `m`, and then `a` to `a`. It doesn't need to compare the middle value because it's, well, the middle value. Note that `(str.length / 2) - 1` evaluates to 1.5 here, which is fine since we don't need to go past the second character anyway.

For the '356653' example, `(str.length / 2) - 1` evaluates to 2, meaning the `for` loop goes up to the second index, or third value. 3 === 3, 5 === 5, 6 === 6. The loop is over, and it returns `true`.  */
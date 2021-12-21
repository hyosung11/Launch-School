/* PROBLEM:

Given a string, write a function changeMe which returns the same
string but with all the words in it that are palindromes uppercased.

PROBLEM
- input: string
- output: string (not the same object)

Rules
- Explicit
  - every palindrome in the string must be converted to uppercase (a palindrome is a word that reads the same forwards and backwards)
  - palindromes are case-sensitive ('Dad' is not a palindrome, but 'dad' is)
- Implicit
  - if the string is an empty string, the result should be an empty string



*/

// Test Cases
changeMe("We will meet at noon") === "We will meet at NOON"
changeMe("No palindromes here") === "No palindromes here"
changeMe("") === ""
changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

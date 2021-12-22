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
/* Given a string, write a function changeMe which returns the same
string but with all the words in it that are palindromes uppercased.

PROBLEM
- input string
- output: new string

rules:
-return a new string in which:
  -all palindromes (words that are the same forwards and backwards) are uppercased
  -letters that are already capiatlaized but not part of palindromes remain capitalized in output string

-question: does case matter in determining whether a word is a palindrome?
-can we assume there is no punctuation?

examples:
done!

data structures:
input: string
intermediary: array
output: string

algo:
-input: string
-split into array `words` by spaces
-iterate through `words`
  -if word isPalindrome (helper function), reassign element at that position to uppercased version of itself
-join and return `words` by spaces

isPalindrome;
takes string as input
-assign variable `reverse`` to the input string split into an array and reversed
-return string === reverse */

function changeMe(words) {
  return words.split(' ').map(word => {
    if (isPalindrome(word)) {
     word = word.toUpperCase();
    }
     return word;
    })
    .join(' ');
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


// Test Cases
console.log(changeMe("We will meet at noon") === "We will meet at NOON");
console.log(changeMe("No palindromes here") === "No palindromes here");
console.log(changeMe("") === "");
console.log(changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally");

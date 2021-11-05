/* JS101 - Small Problems> Easy 4 > 5. Palindromic Strings (Part 2)

Palindromic Strings (Part 2)

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the `isPalindrome` function you wrote in the previous exercise.

ALGORITHM
- check character
  - ignore non-alphanumeric
  - include numbers
  - include letters */

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// function isRealPalindrome(string) {
//   string = removeNonLettersNumbers(string.toLowerCase());
//   return isPalindrome(string);
// }

// function removeNonLettersNumbers(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (isLetter(string[idx]) || isNumber(string[idx])) {
//       result += string[idx];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isNumber(char) {
//   return char >= '0' && char <= '9';
// }

// regex version
// function isRealPalindrome(string) {
//   string = string.toLowerCase().replace(/[^a-z0-9]/g, '')
//   return isPalindrome(string);
// }

// Examples
console.log(isRealPalindrome('madam')); // true
console.log(isRealPalindrome('Madam')); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')); // true
console.log(isRealPalindrome('356a653')); // true
console.log(isRealPalindrome('123ab321')); // false

/* Discussion

The first part of the solution makes all characters lowercase. The second uses the `removeNonLetterNumbers` function to replace any characters that are not alphanumeric, using two helper functions that check for either a letter or number, respectively. The solution relies on this to clean up the characters that are not subject to comparison. It then uses the `isPalindrome` function from the previous exercise.

In the shorter version we use `replace` method with regex to substitute all non-alphanumeric characters with empty string. */

// Elaine Vuong's Solution
// function isRealPalindrome(string) {
//   let newStr = '';
//   string
//     .toLowerCase()
//     .split('')
//     .forEach((char) => {
//       if (isAlphaNum(char)) {
//         newStr += char;
//       }
//     });
//   return newStr === newStr.split('').reverse().join('');
// }

// function isAlphaNum(char) {
//   return (char >= 'a' && char <= 'z') || (char <= '0' && char >= '9');
// }

// Bob Rodes
// An alternative regex:
function isRealPalindrome(string) {
  return isPalindrome(string.toLowerCase().replace(/[\W_]/g, ''));
}

/* `\W` matches all non-word characters, so everything that isn't a letter, digit or underscore character. Since we want to strip underscore characters as well, we have to include one in the match group. */

// Juan Juy
const ALPHA_NUM = 'abcdefghijklmnopqrstuvwxyz1234567890';

function isRealPalindrome(str) {
  let formattedArray = str
    .toLowerCase()
    .split('')
    .filter((char) => ALPHA_NUM.includes(char));
  return formattedArray.join('') === formattedArray.reverse().join('');
}

/* We start by declaring a constant `ALPHA_NUM` containing all alphanumeric values (lowercase letters). Then we jump into the function.

We deconstruct the string using a series of method calls. First, we convert it to lower case with `toLowerCase()`. Then, we split it into an array, with each character as its own element.

Now that it's an array, we can call `filter` on it to remove any characters that aren't `include`d in `ALPHA_NUM`. This final return value is assigned to `formattedArray`.

Now that we have this formatted array, we can test to see if it matches itself when reversed, as a string. We return the value of that strict equality comparison for our final verdict. */
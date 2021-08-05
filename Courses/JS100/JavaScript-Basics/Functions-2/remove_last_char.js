/* JS100 - JavaScript Basics Functions 2 > 6. Remove Last Char

Remove Last Char

Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

function removeLastChar(string) {
  return string.substring(0, string.length - 1)
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
/* Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

PROBLEM
- input: string
- output: numbers

Rules
- replace every letter with its numerical position in the alphabet
- ignore anything that's not a letter

EXAMPLES

DATA STRUCTURE
- input: string
- intermediary: array
- output: string of numbers

ALGORITHM
- input string
- reassign string to all lowercase letters
- initialize `alphabet` to letters of the alphabet
- initialize `result` array to empty array
- iterate through the input string
    - if char at current index position is in alphabet string, add that characters index position in the alphabet string to the result array
- join result array by spaces
- return string of numbers */

function alphabetPosition(string) {
  string = string.toLowerCase();
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (alphabet.includes(char)) {
      result.push(alphabet.indexOf(char));
    }
  }

  return result.join(' ');
}

console.log(alphabetPosition('abc') === '1 2 3'); // true
console.log(
  alphabetPosition("The sunset sets at twelve o' clock.") ===
    '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);

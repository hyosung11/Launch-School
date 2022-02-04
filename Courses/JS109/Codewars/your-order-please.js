/* Your order, please - 6 kyu

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

PROBLEM
- input string of words
- output string of same words reordered

Rules
- return a string of words reordered based on the number that occurs in each word
  - sort the words in the return string in ascending order from 1 to 9, not 0
- the words in the input string will only contain valid consecutive numbers
- if input string is empty, return an empty string

EXAMPLES
- see above

DATA STRUCTURE
- input string
- intermediary: array
- output: new string

ALGORITHM
- input string of words
- split the string into an array at the spaces
- sort the array by the return value of the extractNumber helper function
- return the array joined by spaces

extractNumber helper function
- input word
- initialize `numbers` to '1-9'
- iterate through the string
  - if number includes the char return char
*/

function order(string) {
  return string
    .split(' ')
    .sort((a, b) => extractNumber(a) - extractNumber(b))
    .join(' ');
}

function extractNumber(word) {
  return word
    .split('')
    .filter((char) => char >= '0' && char <= '9');
}

console.log(order('') === ''); // 'empty input should return empty string'
console.log(order('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est');
console.log(
  order('4of Fo1r pe6ople g3ood th5e the2') ===
    'Fo1r the2 g3ood 4of th5e pe6ople'
);

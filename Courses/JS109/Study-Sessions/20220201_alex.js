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
- input string
- initialize `numbers` to '1-9'
- iterate through the string
  - if number includes the char return char
*/

// function order(words) {
//   return words
//     .split(' ')
//     .sort((a, b) => extractNumber(a) - extractNumber(b))
//     .join(' ');
// }

// function extractNumber(word) {
//   let numbers = '123456789';

//   for (let idx = 0; idx < word.length; idx++) {
//     let num = word[idx];
//     if (numbers.includes(num)) {
//       return num;
//     }
//   }
// }

function order(words) {
  return words
    .split(' ')
    .sort((a, b) => extractNumber(a) - extractNumber(b))
    .join(' ');
}

function extractNumber(word) {
  return word
    .split('')
    .filter(char => char >= '1' && char <= '9')
}


function order(words) {
  return words
    .split(' ')
    .sort((a, b) => extractNumber(a) - extractNumber(b))
    .join(' ');
}

function extractNumber(word) {
  return word.split('').filter((char) => /[1-9]/.test(char));
}

console.log(order('') === ''); // 'empty input should return empty string'
console.log(order('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est');
console.log(order('4of Fo1r pe6ople g3ood th5e the2') === 'Fo1r the2 g3ood 4of th5e pe6ople');

/* Decipher This - 6 kyu

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g., Hello becomes Holle)
- the character code is replaced by its letter (e.g., 72 becomes H)

Note: there are no special characters used, only letters and spaces

EXAMPLES

1) "72olle" -> 72, "o", "l", "l", "e"
2) "72olle" -> H, "o", "l", "l", "e"
3) "72olle" -> H, "e", "l", "l", "o" */

// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
// console.log(
//   decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
// ); // 'Have a go at this and see how you do')


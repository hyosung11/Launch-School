/* Alphabetized - 6 kyu

The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"

PROBLEM
- inputs: string
- output: new string

Rules
- return a new string that concatenates the chars of the input string by alphabetical order without regard to case in order of appearance from the input string
- remove whitespace and punctuation
- no numerals
- only letters

EXAMPLE
- 'The Holy Bible' => 'BbeehHilloTy'

DATA STRUCTURE
- input string
- intermediary: array to sort
- output string

ALGORITHM
- input string
- split string into array of chars
  - convert char to lowercase
  - sort by char in alphabetical order
  - return chars in alphabetical order
  - join chars
- return new string
*/

// doesn't work on all codewars test cases
// function alphabetized(string) {
//   return string
//     .split('')
//     .filter(
//       (char) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
//     )
//     .sort((a, b) => {
//       a = a.toLowerCase();
//       b = b.toLowerCase();

//       if (a > b) return 1;
//       if (a < b) return -1;
//       if (a === b) return 0;
//     })
//     .join('');
// }

// rasodha solution
// function alphabetized(string) {
//   let result = '';
//   let letters = string.match(/[a-z]/gi) ? string.match(/[a-z]/gi).join('') : '';
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   alphabet.split('').forEach(letter => {
//     letters.split('').forEach(char => {
//       if (char.toLowerCase() === letter) {
//         result += char;
//       }
//     })
//   })

//   return result;
// }

function alphabetized(string) {
  string = string.replace(/[^a-z]/gi, "");

  return string.split("").sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
  }).join("");
}

console.log(alphabetized("The Holy Bible")); // "BbeehHilloTy"
console.log(alphabetized("What the FOrK!")); // "aeFhhKOrttW"

// console.log(alphabetized())
// expected 'AaBbCcDdEeFfGgHhiIjJKkLlmMNnOopPQqrRsStTuUVvwWXxYyzZ' 
// to equal 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'

/* Sergio Pichardo

INPUT: string
OUTPUT: string

RULES
- Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order.
- whitespace and punctuation shall simply be removed

EXAMPLES
'The Holy Bible' --> BbeehHilloTy

ALGORITHM
- create a string with all the letters in the alphabet
- create an empty result array
- iterate through all the letters in the alphabet
  - get the current letter
  - use current letter to filter out all letter that are the same (case insensitive)
  - create an array with all the letters found concatenated and their alphabetic index
- sort all the subarrays based on the alphabetic index
- get an array with all sorted letters
- join array into a string
*/


function alphabetized(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  Array.from(alphabet).forEach((letter, idx) => {
    const sameLetters = s.split('').filter(char => {
      return char === letter.toLowerCase() || char === letter.toUpperCase()
    });

    if (sameLetters.length !== 0) {
      result.push([sameLetters.join(''), idx])
    }
  });

  return result.sort((a, b) => a[1] - b[1]).map(sub => sub[0]).join('')
}

console.log(alphabetized('The Holy Bible')); // 'BbeehHilloTy'

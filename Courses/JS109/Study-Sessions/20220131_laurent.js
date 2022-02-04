/* Decipher This

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go

PROBLEM
- input is a string
- output is a new string

Rules
- return a new string with the second and last letter switched in each word and the character code replaced by its letter
- no special characters
- only letters and spaces

EXAMPLES
- '72olle' => Holle => Hello

DATA STRUCTURE
- input string
- intermediary: array
- output string

ALGORITHM
- input string
- initialize `result` to empty array
- initialize `words` to split string into an array of words separated at the spaces
- iterate through `words` array
  - initialize `codepoint` to return value:
    - split each word by char
    - filter number from chars
    - join chars
  - initialize `firstLetter` to convert the `codepoint` to its letter equivalent => String.fromCharCode(72);
  - initialize `combined` to concatenate firstLetter plus word sliced by the length of `codepoint`
  - if `combined` length is greater than 2
    - word is equal to combined[0] + combined[combined.length - 1] + combined.slice(2, -1) + combined[1]
    - append `word` to result
  - else append combined to `result`
- join words
- return `words`  */

function decipherThis(string) {
  let result = [];
  let words = string.split(' ');

  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    let codepoint = word.split('').filter(char => char >= '0' && char <= '9').join('');
    let firstLetter = String.fromCharCode(codepoint);
    let combined = firstLetter + word.slice(codepoint.length);

    if (combined.length > 2) {
      word = combined[0] + combined[combined.length - 1] + combined.slice(2, -1) + combined[1];
      result.push(word);
    } else {
      result.push(combined)
    }

  }

  return result.join(' ');
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
); // 'Have a go at this and see how you do'

// function decipherThis(str) {
//   let result = [];
//   let words = str.split(' ');

//   for (let idx = 0; idx < words.length; idx++) {
//     let word = words[idx];
//     let codepoint = word
//       .split('')
//       .filter((char) => char >= '0' && char <= '9')
//       .join('');
//     let firstLetter = String.fromCharCode(Number(codepoint));
//     // console.log(firstLetter);
//     // let combined = word.slice(firstLetter);
//     let combined = firstLetter + word.slice(codepoint.length);
//     // console.log(combined); 'Holle'
//     // 1st letter, last letter, middle letters, 2nd letter
//     if (combined.length > 2) {
//       word =
//         combined[0] +
//         combined[combined.length - 1] +
//         combined.slice(2, -1) +
//         combined[1];
//       result.push(word);
//     } else {
//       result.push(combined);
//     }
//   }

//   return result.join(' ');
// }
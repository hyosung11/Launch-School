/* Laurent passed the interview assessment
- could have done his own test cases
- wording of problems unclear to him
- manipulating strings, objects, arrays, not algorithmic stuff
- don't seem like real-world problems that have an application
- was asked to explain the code after it was written


*/
/* 
Have the method letter_changes(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string
with the 3rd letter following it in the alphabet (ie. c becomes f, Z becomes C).
Then return this modified string.

PROBLEM
- input: string
- output: new string

Rules
- return new string where each of the letters of the input string are replaced with the 3rd letter following it in the alphabet
- ignore non-letters
- keep capitalization if the 3rd letter after the input letter is also capitalize 
- words are split at spaces

EXAMPLES
- 'xyz' => 'abc'
- 'XYZ' => 'ABC'

DATA STRUCTURE
- input: string
- intermediary: 
- output: new string

ALGORITHM
- input string
- initialize `alphabet` to 'a-zabcA-ZABC'
- initialize `result` to empty string
- split string into an array at the spaces
- iterate through the string
  - iterate through the chars of string
  - if char is in the alphabet, add the char + 3 in the alphabet to `result`
  - otherwise add the char to result string
- return `result` */

// function letterChanges(string) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVXXYZABC';
//   let result = '';

//   for (let idx = 0; idx < string.length; idx ++) {
//     if (alphabet.includes(string[idx])) {
//       // 'x' => 'a'
//       let targetIndex = alphabet.indexOf(string[idx]) + 3;
//       // console.log(targetIndex)
//       result += alphabet[targetIndex];
//     } else {
//       result += string[idx];
//     }
//   }

//   return result;
// }

function letterChanges(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZABC";

  return string
    .split('')
    .map((char) => {
      let index = alphabet.indexOf(char);
      if (char.toLowerCase() === char.toUpperCase()) return char;
      return alphabet[index + 3];
    })
    .join('');
}

console.log(letterChanges('xyz'))
console.log(letterChanges('xyz') === ('abc'))
console.log(letterChanges("this long cake@&") === "wklv orqj fdnh@&")
console.log(letterChanges("Road trip9") === "Urdg wuls9")
console.log(letterChanges("EMAILZ@gmail.com") === "HPDLOC@jpdlo.frp")
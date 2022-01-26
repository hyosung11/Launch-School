/* Decrypt

You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurrences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurrences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
^    ^   ^  ^  ^         ^^^  ^                   ^
[4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

PROBLEM
- input string
- output new string

Rules
- return a string 26 chars long with the number of occurrences of each lowercase letter from the alphabet in its place in alphabetical order
  - 'abbcccddddeeeee' --> 'a bb ccc dddd eeeee' --> '12345000...000' to the end because no other letters in the string means those values are 0 in the return string
- only count lowercase letters
- each lowercase letter appears 9 times max

EXAMPLES
- see above

DATA STRUCTURE
- input: string
- intermediary: object
- output: string

ALGORITHM
- input string
- initialize `result` to empty string
- initialize `count` to empty object
- initialize `validLetters` to return value of a string with only lowercase letters
- iterate through `validLetters`
  - add or increment each letter to `count` object
- initialize `alphabet` to 'a-z'
- iterate through alphabet
  - if letter in count is in `alphabet`
    - append value of letter in count to `result` string
    - if letter not in count append '0' to `result` string
- return new string exactly 26 chars long
  */

function decrypt(string) {
  let result = '';
  let count = {};
  let validLetters = (string.match(/[a-z]/g)) || [];
  // let validLetters = string.replace(/[^a-z]/g, '');
  // console.log(validLetters)

  validLetters.forEach((letter) => {
    count[letter] = count[letter] + 1 || 1;
  });

  // console.log(count)
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let letter of alphabet) { // each letter of array or string
    if (validLetters.includes(letter)) result += count[letter];
    else result += '0';
  }

  return result;
}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');

console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

// function decrypt(string) {
//   let result = '';
//   let count = {};
//   let validLetters = string.match(/[a-z]/g) || [];
//   // console.log(array)
//   // ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'f', 'f', 'f', 'z'];
//   validLetters.forEach((letter) => {
//     count[letter] = count[letter] + 1 || 1;
//   });
//   // console.log(count); { a: 4, b: 3, c: 2, f: 3, z: 1 }

//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   for (let idx = 0; idx < alphabet.length; idx++) {
//     let letter = alphabet[idx];
//     if (Object.keys(count).includes(letter)) result += count[letter];
//     else result += '0';
//   }

//   return result;
// }
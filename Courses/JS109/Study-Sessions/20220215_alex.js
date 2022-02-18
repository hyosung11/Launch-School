/* started with decrypt

Decrypt

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

Problem
- input string
- output string of 26 chars

Rules
- return 26 chars string of number of occurrences of each letter
in its alphabet position or '0' if no occurrences
- only count lowercase letters
- don't count punctuation, numbers, uppercase letters
- empty input string return '0000 ...'

Examples
- 

Data Structure
- input string
- intermediary: object, array
- output string

Algorithm
- input str
- init empty obj
- init alphabet = 'abcdefghijklmnopqrstuvwxyz'

- iterate through str
  - if alphabet includes current char
    - if key exists, increment value by one;
    - else, create key with value of 1

- split and iterate through alphabet str and map
  - if obj contains key, map to each letter's value in obj; if it doesn't exist map to 0

- join and return
*/

function decrypt (string) {
  let count = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (alphabet.includes(string[idx])) {
      count[string[idx]] = count[string[idx]] + 1 || 1;
    }
  }

  return alphabet.split('').map(char => {
    return count[char] ? String(count[char]) : '0' 
  }).join('')
}

console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');

console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

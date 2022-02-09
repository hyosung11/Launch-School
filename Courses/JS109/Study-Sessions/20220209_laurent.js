/* 1844. Replace All Digits with Characters

You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

Example 1:
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Example 2:
Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'

Constraints:
1 <= s.length <= 100
s consists only of lowercase English letters and digits.
shift(s[i-1], s[i]) <= 'z' for all odd indices i.

Problem
- input string
- output string

Rules
- return new string where the digit after the letter represents the number of positions in the alphabet to advance and convert the digit to a letter

Algo
- input string
- init `alphabet` to 'a-z'
- init `result` to '';
- iterate through string
  - if alphabet includes string[idx]
    - increment `result` with string[idx]
  - else if alphabet does not include string[idx]
    - increment `result` with the string[idx -1] plus the number
- return `result`
*/

function replaceDigits(string) {
  let result = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (alphabet.includes(char)) {
      result += char;
    } else {
      result += alphabet[Number(char) + alphabet.indexOf(string[idx - 1])];
    }
  }

  return result;
}

console.log(replaceDigits('a1c1e1') === 'abcdef');
console.log(replaceDigits('a1b2c3d4e') === 'abbdcfdhe');

// Laurent's version
function shift(prevChar, digit) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let charIndex = alphabet.indexOf(prevChar);
  
  return alphabet[charIndex + digit];
}

function replaceDigits(string) {
  return string
    .split('')
    .map((char, index, array) => {
      if (char >= '0' && char <= '9') return shift(array[index - 1], Number(char));
      else return char;
    })
    .join('');
};
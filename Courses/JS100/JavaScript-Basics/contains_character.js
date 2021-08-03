/* JS100 - JavaScript Basics > Strings > 6.Contains Character

Contains Character

Write code that checks whether the string byteSequence contains the character x.
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x')); // true

function includesCharacter(string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      return true;
    }
  }

  return false;
}

console.log(includesCharacter(byteSequence, 'x'));

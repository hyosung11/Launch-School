// Determine the length of the string "These aren't the droids you're looking for.".

// // 1.
// console.log("These aren't the droids you're looking for.".length);

// // 2.
// let string = "These aren't the droids you're looking for.";
// console.log(string.length);

// ALL CAPS
// Take the string 'confetti floating everywhere' and transform it to upper case.

// console.log('confetti floating everywhere'.toUpperCase());

// let string = 'confetti floating everywhere';

// console.log(string.toUpperCase()); // CONFETTI FLOATING EVERYWHERE

// console.log(string) // confetti floating everywhere

// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(num, string) {
  let repetitions = ''

  while (num > 0) {
    repetitions += string;
    num -= 1;
  }

  return repetitions;
}


// console.log(repeat(3, 'ha')); // 'hahaha'

// console.log('ha'.repeat(3))

// How can you assign this string to a single variable, preserving the line break?

let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

// console.log(rhyme)

// ========================================================

// Write code that checks whether the string `byteSequence` contains the character `x`.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// function
function includes (str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }

  return false;
}

// console.log(includes(byteSequence, 'x'));

// `String.prototype.includes()

// console.log(byteSequence.includes('x')); // true

// =========================================================

// Write a function that checks whether a string is empty or not. For example:

// mine
// function isBlank(string) {
//   if (string === '') {
//     return true;
//   }

//   return false;
// }

// Launch School
function isBlank(string) {
  return string.length === 0;
}

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

// Change your `isBlank` function from the previous exercise to return `true` if the string is empty or only contains whitespace. For example:

function isBlank(string) {
  return string.trim().length === 0;
}

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true
// console.log(isBlank(''));     // true

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

// console.log(capitalizedWords.join(' ')); // 'Launch School Tech & Talk'

// End
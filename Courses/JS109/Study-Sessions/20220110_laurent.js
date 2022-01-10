/* write a function that checks if a string is a single letter. Case does not matter.

PROBLEM
- input: a string
- return boolean

Rule
- return true if single char in string is a letter
- return false otherwise 
- what about uppercase letter?
  - case doesn't matter, uppercase or lowercase letter return true

EXAMPLES
- empty string returns false
- string of length greater than 1 returns false
- string of a digit/number returns false

DATA STRUCTURE
- input: string
- intermediary: lowercase alphabet string
- output: boolean

ALGORITHM
- input a string
- check the lenght of the string
  - if empty string return false
  - if string length greater than 1 return false
- initialize `alphabet` to 'a-z'
- convert string to lowercase
- iterate through string
  - check if char is in `vowels` string
    - if in `vowels` return true
- return false */ 

// function isLetter(string) {
//   if (string.length > 1) return false;
//   if (string.length === 0) return false;

//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   string = string.toLowerCase();

//   for (let idx = 0; idx < string.length; idx++) {
//     if (alphabet.includes(string[idx])) return true;
//   }

//   return false;
// }

// function isLetter(string) {
//   if (string.length === 0 || string.length > 1) return false
//   string = string.toLowerCase();
//   return string >= 'a' && string <= 'z';
  
// }

// function isLetter(char) {
//   if (char.length !== 1) return false;
//   if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return true;
//   return false;
// }

function isLetter(char) {
  return (char.match(/[a-z]/gi) || false).length === 1;
}

console.log(isLetter('')); // false  null
console.log(isLetter('a')); // true  ['a'].length === 1 true
console.log(isLetter('A')); // true   ['A'].length === 1 true
console.log(isLetter('7')); // false   null
console.log(isLetter('az')); // false  ['a', 'z'].length === 1 false

// write a function that checks if a char is a single digit.

function isNumber(char) {
  if (char.length !== 1) return false;
  return char >= '0' && char <= '9';
}

console.log(isNumber('')); // false
console.log(isNumber('a')); // false
console.log(isNumber('A')); // false
console.log(isNumber('7')); // true
console.log(isNumber('az')); // false

// write a function that checks if a char is a single digit.

// function isNumber(char) {
//   if (char.length !== 1) return false;
//   return char >= '0' && char <= '9';
// }

function isNumber(char) {
  if (char.length !== 1) return false
  if (char === '0') return true;
  return !!Number(char);
  // return Boolean(Number(char))
}
console.log(isNumber('')); // false
console.log(isNumber('0')); // true
console.log(isNumber('a')); // false
console.log(isNumber('A')); // false
console.log(isNumber('7')); // true
console.log(isNumber('az')); // false

/*
The following messages are partially coded. Replace the digits with the correct letters to decode the message. Use the following values for each digit:  2 = a, 1 = l, 3 = e, 4 = o, 5 = w. You can assume that all letters will be lowercase

PROBLEM
- input: string
- output: new string

Rules
- return a new string that replaces the numbers in the input string with their letter equivalent
  - Use the following values for each digit:  2 = a, 1 = l, 3 = e, 4 = o, 5 = w
- all letters are lowercase

EXAMPLES
- 'h3224' => hello

DATA STRUCTURE
- input string
- intermediary: 
- output: new string 

ALGORITHM
- input string
- let result = ''
- initialize `codes` to object { 2: a, 1: l, 3: e, 4: o, 5: w}
- iterate through string
  - if char is number, replace number with letter from `codes`
  - otherwise, return char
return `result`
*/

function decode(string) {
  let result = '';
  let codes = { 2: 'a', 1: 'l', 3: 'e', 4: 'o', 5: 'w' }

  string.split('').forEach(char => {
    if (Object.keys(codes).includes(char)) result += codes[char];
    else result += char;
  })

  return result;
}


function decode(string) {
  let code = { 2: 'a', 1: 'l', 3: 'e', 4: 'o', 5: 'w' };

  return string
    .split('')
    .map((char) => {
      if (char >= '0' && char <= '5') return code[char];
      else return char;
    })
    .join('');
}

console.log(decode('h3114 54r1d!')); // hello world
console.log(decode('53 h2v3 to l32v3 n45')); // we have to leave now
/* Duplicate Encoder - 6 kyu

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

PROBLEM
- input: string
- output: new string

Rules
- return a new string of same length as input string where single instances of a char are replaced with '(' and with ')' if appears more than once
- ignore capitalization
- return non-alphanumeric chars following same rules

EXAMPLES
- 'din' => '((('
- '(( @' => '))(('

DATA STRUCTURE
- input: string
- intermediary: array and object
- output: new string

ALGORITHM
- input string
- initialize `result` to empty string
- initialize `count` to empty object
- split string into chars
  - collect occurrences of each char in `count` object
    - if char exists increment
    - otherwise char equals 1
- iterate through input string
  - if value of char in object is 1, increment result with '('
  - otherwise increment result with ')'
*/

// function duplicateEncode(string) {
//   let result = '';
//   let count = {};

//   string.split('').forEach(char => {
//     count[char] = count[char] + 1 || 1;
//   })

//   // console.log(count) // { d: 1, i: 1, n: 1 }

//  for (let idx = 0; idx < string.length; idx++) {
//    let char = string[idx].toLowerCase();
//    count[char] === 1 ? result += '(' : result += ')'
//  }

//   return result;
// }

function duplicateEncode(word) {
  let charCount = {};
  let chars = word.toLowerCase().split('');

  chars.forEach(char => {
    charCount[char] = charCount[char] + 1 || 1;
  });

  return chars.map(char => {
    return charCount[char] === 1 ? '(' : ')';
  }).join('');
}

console.log(duplicateEncode('din')) // === '(((');
console.log(duplicateEncode('(( @')) // === '))((');
// console.log(duplicateEncode('recede')) // === '()()()');
// console.log(duplicateEncode('Success')) // === ')())())'); // 'should ignore case');

console.log(duplicateEncode('din') === '(((');
console.log(duplicateEncode('(( @') === '))((');
console.log(duplicateEncode('recede') === '()()()');
console.log(duplicateEncode('Success') === ')())())'); // 'should ignore case');


// console.log(duplicateEncode('din') === '(((');
// console.log(duplicateEncode('recede') === '()()()');
// console.log(duplicateEncode('Success') === ')())())'); // 'should ignore case');
// console.log(duplicateEncode('(( @') === '))((');

/* Backspaces in string - 6 kyu

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  'ac' => "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

PROBLEM
- input string
- output new string

Rules
- return string with chars before a # removed
  - each # removes one char
- empty string return empty string
- if chars are all #s return empty string

EXAMPLES
- done

DATA STRUCTURE
- input string
- intermediary: array?
- output new string

ALGORITHM
- input string
- initialize `result` to empty array
- iterate through string:
  -if char === '#', pop off last char of array; otherwise add char to array
- return joined array */

function cleanString(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char === '#') result.pop();
    else result.push(char);
  }

  return result.join('');
}

// console.log(cleanString('abc#d##c') === 'ac');
// console.log(cleanString('abc####d##c#') === '');


function cleanString(str) {
  while (str.includes("#")) {
    str = str.replace(/[^#]?#/, "");
  }

  return str;
}

// console.log(cleanString('abc#d##c') === 'ac');
// console.log(cleanString('abc####d##c#') === '');
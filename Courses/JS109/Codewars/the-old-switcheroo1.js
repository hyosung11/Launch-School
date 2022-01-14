/* The old switcheroo 1

Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

E.g:
- vowel2index('this is my string') == 'th3s 6s my str15ng'
- vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
- vowel2index('') == ''

PROBLEM
- input: string
- output: new string

Rules
- return new string with all vowels in the input string changed to the number of their index position in the overall input string
- if not a vowel, return char as is, including spaces
- an empty string returns an empty string
- are all vowels lowercase?
  - in examples some consonants are uppercase
- empty string returns empty string

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: new string
- output: new string

ALGORITHM
- input string
- initialize `vowels` to 'aeiou'
- iterate through string by char
  - if char at idx is a vowel
    - add idx to `result`
    - otherwise, add char to result
- return `result` */

// function vowel2index(string) {
//   let result = '';
//   let vowels = 'aeiouAEIOU';

//   for (let idx = 0; idx < string.length; idx++) {
//     if (vowels.includes(string[idx])) result += idx + 1;
//     else result += string[idx];
//   }
//   return result;
// }

// console.log(vowel2index('this is my string')) // === 'th3s 6s my str15ng');

// test cases
console.log(vowel2index('') === '');

console.log(vowel2index('this is my string') === 'th3s 6s my str15ng');

console.log(vowel2index('Tomorrow is going to be raining') === 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');

console.log(vowel2index('Codewars is the best site in the world') ===
  'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');

// Regex
// function vowel2index(string) {
//   return string.replace(/[aeiou]/gi, (_, idx) => idx + 1);
// }

// using `reduce`
function vowel2index(string) {
  return string
    .split('')
    .reduce((acc, char, idx) => {
      if ('aeiou'.includes(char.toLowerCase())) acc += idx + 1;
      else acc += char;
      return acc;
    }, '')
}

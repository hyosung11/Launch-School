/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

PROBLEM
- input: string1 and string2
- output: boolean

Rules
- find a substring that appears in both input strings
- valid substrings are more than one letter long
- case-insensitive
- substring chars can be letters or numbers

*/

console.log(substringText('Something', 'Fun') === false); // true
console.log(substringText('Something', 'Home') === true); // true
console.log(substringText('Something', 'Fun') === false); // true
console.log(substringText('Something', '') === false); // true
console.log(substringText('', 'Something') === false); // true
console.log(substringText('BANANA', 'banana') === true); // true
console.log(substringText('test', '111t') === false); // true
console.log(substringText('', '') === false); // true
console.log(substringText('1234567', '541265') === true); // true
console.log(substringText('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === true); // true
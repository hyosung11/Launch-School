/* Changing letters - 7 kyu

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */


// function swap(string) {
//   let vowels = 'aeiouAEIOU';
//   if (string.length === 0) return '';

//   return string
//     .split('')
//     .map((char) => {
//       if (vowels.includes(char)) return char.toUpperCase();
//       return char;
//     })
//     .join('');
// }

/*Algo
- input string
- split string at each char
- iterate through chars using reduce
  - if char is a vowel, add char in uppercase to acc
  - otherwise just add char to acc
  - start acc as an empty string
- return `acc` as new string with vowels capitalized
*/

function swap(string) {
  return string
    .split('')
    .reduce((acc, char) => {
      if ('aeiou'.includes(char)) acc += char.toUpperCase();
      else acc += char;
      return acc;
    }, '')
}

console.log(swap('') === '');
console.log(swap('   @@@') === '   @@@');
console.log(swap('HelloWorld!') === 'HEllOWOrld!');
console.log(swap('Sunday') === 'SUndAy');
console.log(swap('Codewars') === 'COdEwArs');

/* SevenAte9 - 7 kyu

Write a function that removes every lone 9 that is in between 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

// function sevenAte9(str) {
//   let result = '';

//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx] === '9' && str[idx - 1] === '7' && str[idx + 1] === '7')
//       result += '';
//     else result += str[idx];
//   }

//   return result;
// }

// function sevenAte9(string) {
//   return string
//     .split('')
//     .reduce((acc, digit, idx) => {
//       if (digit === '9' && string[idx - 1] === '7' && string[idx + 1] === '7')
//       acc += '';
//       else acc += digit;
//       return acc;
//     }, '');
// }

// sevenAte9 = str => str.replace(/79(?=7)/g, '7');

function sevenAte9(str) {
  while (true) {
    if (str.search('797') !== -1) {
      str = str.replace('797', '77');
    } else {
      break;
    }
  }
  return str
}

console.log(sevenAte9('797')); // === '77'
console.log(sevenAte9('7979797')); // === '7777');
console.log(sevenAte9('165561786121789797')); // '16556178612178977'


console.log(sevenAte9('165561786121789797') === '16556178612178977');
console.log(sevenAte9('797') === '77');
console.log(sevenAte9('7979797') === '7777');

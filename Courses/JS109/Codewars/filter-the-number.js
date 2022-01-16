/* Filter the number - 7 kyu

*/

// const filterString = function (value) {
//   let numbers = '0123456789';
//   return value.split('').reduce((acc, num) => {
//     if (numbers.includes(num)) acc += num;
//     return Number(acc);
//   }, '');
// };

// function filterString(string) {
//   let numbers = string
//     .split('')
//     .filter(char => char >= '0' && char <= '9')
//     .join('');
//   return Number(numbers);
// }

// function filterString(value) {
//   return Number(value.split('').filter(char => Number(char) || Number(char) === 0).join(''));
// }

// function filterString(value) {
//   return Number(value.match(/\d/g).join(''));
// }

function filterString(value) {
  return +value.match(/[0-9]/g).join('');
}

console.log(filterString('1r253'));//, 123, 'Just return the numbers');
console.log(filterString('a1b2c3')); //, 123, 'Just return the numbers');
console.log(filterString('aa1bb2cc3dd')); //, 123, 'Just return the numbers');
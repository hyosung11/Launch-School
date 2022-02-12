/* Rearrange Number to Get Its Maximum - 7 kyu

Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid

Return null if the argument is not valid. */

// function maxRedigit(number) {
//   if (number <= 0) return null;
//   if (number <= 99 || number > 999) return null;
//   let maxDigits = String(number).split('');
//   maxDigits.sort((a, b) => b - a)
//   maxDigits = maxDigits.join('')
//   return Number(maxDigits)
// }

function maxRedigit(number) {
  if (number <= 99 || number > 999) return null;
  return Number(
    String(number)
      .split('')
      .sort((a, b) => b - a)
      .join(''));
}

// Basic test
console.log(maxRedigit(123));
console.log(maxRedigit(123) === 321);

// Edge cases test
console.log(maxRedigit(-1) === null);
console.log(maxRedigit(0) === null);
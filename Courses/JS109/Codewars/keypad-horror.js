/* Keypad Horror - 7 kyu

Having two standards for a keypad layout is inconvenient!

Computer keypad's layout:
7 8 9 \n
4 5 6 \n
1 2 3 \n
0 \n

Cell phone keypad's layout:
1 2 3
4 5 6
7 8 9
0

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only */

function computerToPhone(numbers) {
  let phone = '';
  let upper = '789';
  let lower = '123';

  numbers.split('').forEach((digit) => {
    if (upper.includes(digit)) {
      phone += Number(digit) - 6;
    } else if (lower.includes(digit)) {
      phone += Number(digit) + 6;
    } else phone += digit;
  });

  return phone;
}

console.log(computerToPhone(''));
console.log(computerToPhone('000'));
console.log(computerToPhone('94561')); // 394567
console.log(computerToPhone('0789456123'));




// console.log(computerToPhone('0789456123') === '0123456789');
// console.log(computerToPhone('000') === '000');
// console.log(computerToPhone('94561') === '34567');
// console.log(computerToPhone('') === '');
/* Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered.

    PROBLEM
    - in: str
    - out: str

    Rules
    - up there
    - empty str return '1'

    DATA STRUCTURES
    - in: str
    - between: str
    - out: str

    ALGO
    -  if empty str return '1'
    -  init letters = ''
    -  init num= ''

    - iterate through str
      if (Number.isNaN(Number(str[idx]))) {
        letters += str[idx];
      } else {
        num = str.slice(idx));
        break;
      }

if num === '', num = 1
let number = Number(num);
while ( number.length < num.length)
    number = '0' + number


return letters + number

*/

function incrementString(string) {
  if (string.length === 0) return '1';

  let letters = '';
  let numbers = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (Number.isNaN(Number(string[idx]))) {
      letters = letters + string[idx];
    } else {
      numbers = string.slice(idx);
      break;
    }
  }

  if (numbers === '') numbers = 1;

  let num = String(Number(numbers) + 1);

  while (num.length < numbers.length) {
    num = '0' + num;
  }

  return letters + num;
}

// console.log(incrementString('') === '1');
// console.log(incrementString('foo')); // === "foo1");
// console.log(incrementString('foobar000')); // === "foobar001");
// console.log(incrementString('foobar001') === 'foobar002');
// console.log(incrementString('foobar99') === 'foobar100');
// console.log(incrementString('foobar099') === 'foobar100');

/* 
Algo
- input string
- if string length is 0, return '1'
- init letters to ''
- init numbers to ''
- iterate through string
  - if char is a letter
    - increment `letters` with char
  - else increment `numbers` with char

- init `digits` to Number of `numbers`
- increment `digits` by 1

- while digits length < number length
  - digits = '0' + digits

- return letters + digits
*/

function incrementString ( string ) {
  if ( string.length === 0 ) return '1';

  let letters = '';
  let numbers = '';

  for ( let idx = 0; idx < string.length; idx += 1 ) {

    if ( string[idx].match(/[a-z]/) ) letters = letters + string[idx];
    else numbers = numbers + string[idx]
  }

  let digits = String ( Number ( numbers ) + 1 )

  while (digits.length < numbers.length) {
    digits = '0' + digits;
  }

  return letters + digits;
}
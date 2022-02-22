/* Reverse or Rotate - 6 kyu

The input is a string `string` of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size `size` (ignore the last chunk if its size is less than `size`).

If a chunk represents an integer such that the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
- size is <= 0 or if str is empty return ""
- size is greater (>) than the length of str it is impossible to take a chunk of size `size` hence return "".

PROBLEM
input: number string
output: number string

rules:
- if size is <= 0 or if string is empty return ""
- if size is greater (>) than the length of string it is impossible to take a chunk of size hence return ""
- take as many slices of original string of size given without using any digits twice
- for slice, if sum of its digits cubed is divisible by 2, reverse the digits
- otherwise rotate one digit to left
-rejoin

Examples:
revrot("123456 987654", 6) --> "234561 876549"

revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".

DATA STRUCTURES
input: number string
inter: array (slice, reduce)
output: string

ALGO
- input 
- [x] if size is <= 0 or if string is empty return ""
- [x] if size is greater (>) than the length of string it is impossible to take a chunk of size hence return ""
- [] take as many slices of original string of size given without using any digits twice (helper function chunks)
- for slice, if sum of its digits cubed is divisible by 2, reverse the digits wih SumOfCubesDivisibleByTwo helper function
- otherwise rotate one digit to left with `rotate` helper function
-rejoin

helper function getChunks:
- input: string, size
- create results array
- split string into array
- loop while the length of array >= size 
  - splice from index to index + size
  - add to results array
- return results array
*/

function revrot(digits, size) {
  if (size <= 0 || digits.length === 0 || size > digits.length) return '';

  let chunks = getChunks(digits, size);

  return chunks
    .map((chunk) => {
      if (SumOfCubesDivisibleByTwo(chunk)) {
        return reverse(chunk);
      } else {
        return rotate(chunk);
      }
    })
    .join('');
}

function getChunks(string, size) {
  let result = [];
  let array = string.split('');

  while (array.length >= size) {
    result.push(array.splice(0, size).join(''));
  }

  return result;
}

function SumOfCubesDivisibleByTwo(string) {
  let result = string.split('').reduce((sum, num) => sum + Math.pow(num, 3), 0);

  return result % 2 === 0;
}

function reverse(string) {
  return string.split('').reverse().join('')
}

function rotate(string) {
  return string.slice(1) + string[0];
}

// console.log(SumOfCubesDivisibleByTwo('123'))

console.log(revrot('123456987654', 6)); // === "234561876549");

// console.log(revrot("", 8) === "");
// console.log(revrot("123456779", 0) === "");
// console.log(revrot("123456987654", 12) === "234561876549");
// console.log(revrot("123456987653", 6) === "234561356789");
// console.log(revrot("66443875", 4) === "44668753");
// console.log(revrot("66443875", 8) === "64438756");
// console.log(revrot("664438769", 8) === "67834466");
// console.log(revrot("123456779", 8) === "23456771");
// console.log(revrot("563000655734469485", 4) === "0365065073456944");

console.log(revrot('123456987654', 6) === '234561876549');
console.log(revrot('123456987653', 6) === '234561356789');
console.log(revrot('66443875', 4) === '44668753');
console.log(revrot('66443875', 8) === '64438756');
console.log(revrot('664438769', 8) === '67834466');
console.log(revrot('123456779', 8) === '23456771');
console.log(revrot('', 8) === '');
console.log(revrot('123456779', 0) === '');
console.log(revrot('563000655734469485', 4) === '0365065073456944');

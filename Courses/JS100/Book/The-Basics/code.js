// INTRODUCTION TO PROGRAMMING: The Basics: Exercises, 20210704

// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

// let name = 'HyoSung' + ' ' + 'Bidol-Lee'
// console.log(name)

// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

// 1. thousands place is 4
// 2. hundreds place is 9
// 3. tens place is 3
// 4. ones place is 6

/* let number = 4936;

let ones = number % 10;
console.log(ones); // => 6

number = (number - ones) / 10;
console.log(number); // => 493

let tens = number % 10;
console.log(tens) // => 3

number = (number - tens) / 10;
console.log(number); // => 49 

let hundreds = number % 10;
console.log(hundreds); // => 9

let thousands = (number - hundreds) / 10;
console.log(thousands); // => 4 */

// 3. Identify the data type for each of the following values:

// 'true' => String
// false => Boolean
// 1.5 => Number
// 2 => Number
// undefined => Undefined
// { foo: 'bar' }; => Object

// 4. Explain why this code logs '510' instead of 15.

// console.log('5' + 10);

// The code logs 510 because every + expression that has a string operand produces a string result no matter what the operand is. The Number 10 gets coerced to a String and then gets concatenated to the String '5' to produce '510'.

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

// console.log(parseInt('5') + 10); // my answer

// console.log(Number('5') + 10);

// console.log(parseInt('5', 10) + 10);

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

// console.log('The value of' + ' ' + `${Number('5')}` + 10 + ' is 15' ); Incorrect

// console.log(`The value of 5 + 10 is ${Number('5') + 10}.`); // Correct
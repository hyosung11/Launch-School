// INTRODUCTION TO PROGRAMMING: The Basics: Exercises, 20210704

// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

// let name = 'HyoSung' + ' ' + 'Bidol-Lee'
// console.log(name)

// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

// 1. thousands place is 4
// 2. hundreds place is 9
// 3. tens place is 3
// 4. ones place is 6

let number = 4936;

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
console.log(thousands); // => 4




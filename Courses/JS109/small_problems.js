// function isOdd(number) {
//   return Math.abs(number) % 2 !== 0;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// for (let num = 1; num <= 99; num += 2) {
//   console.log(num);
// }

// let rlSync = require('readline-sync');
// let limit = rlSync.question('Specify the upper limit for the odd numbers: ');

// let counter = 1;
// while (counter <= limit) {
//   console.log(counter);
//   counter += 2;
// }

// function oddNumbers(start, end) {
//   if (start >= end) {
//     return 'None';
//   }

//   if (start % 2 === 0) {
//     start += 1
//   }

//   console.log(start);
//   return oddNumbers(start + 2, end);
// }

// console.log(oddNumbers(33, 29));
// oddNumbers(1, 8)

// let number = 2;
// while (number < 100) {
//   console.log(number);
//   number += 2;
// }

// for (let number = 1; number < 100; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }
//   console.log(number);
// }

// const readlineSync = require('readline-sync');

// const SQMETER_TO_SQFEET = 10.7639

// console.log("Enter the lenth of the room in meters:");
// let length = readlineSync.questionInt();
// length = parseInt(length, 10);

// console.log('Enter the width of the room in meters:');
// let width = readlineSync.questionInt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width)
// let areaInFeet = (SQMETER_TO_SQFEET * areaInMeters);

// console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)

// const readlineSync = require('readline-sync');

// let bill = parseFloat(readlineSync.questionInt('What is the bill?\n'));

// let percentage = parseFloat(readlineSync.questionInt('What is the tip percentage?\n'));

// let tip = bill * (percentage / 100)
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// let rlSync = require('readline-sync');

// function tipCalculator() {
//   let bill = parseFloat(rlSync.question("What's the bill? "));
//   let tipPercentage = parseFloat(
//     rlSync.question("What's the tip percentage? ")
//   );

//   let tip = (bill / 100) * tipPercentage;
//   let total = tip + bill;
//   console.log(`The tip is $${tip.toFixed(2)}.
// The total is $${total.toFixed(2)}.`);
// }

// tipCalculator();

// Easy 1 > Sum or Product of Consecutive Integers
// const readline = require('readline-sync');

// function aggInts(integer, aggregator) {
//   // create array of consecutive numbers
//   let arr = [1];
//   for (let counter = 2; counter <= integer; counter++) {
//     arr.push(counter);
//   }
//   // Determine if sum or product should be calculated
//   if (aggregator === 's') {
//     let reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let result = arr.reduce(reducer);
//     console.log(`The sum of integers between 1 and ${integer} is ${result}`);
//   } else {
//     let reducer = (accumulator, currentValue) => accumulator * currentValue;
//     let result = arr.reduce(reducer);
//     console.log(
//       `The product of integers between 1 and ${integer} is ${result}`
//     );
//   }
// }

// // main function
// let int;
// do {
//   int = parseInt(readline.question('Please enter an integer greater than 0: '));
// } while (int <= 0 || isNaN(int));

// let agg;
// while (true) {
//   agg = readline.question(
//     "Enter 's' to compute sum, or 'p' to computer product. "
//   );
//   console.log(agg);
//   if (agg === 's' || agg === 'p') break;
// }

// aggInts(int, agg);

// Easy 1 > 7. Short Long Short
// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else {
//     return str1 + str2 + str1;
//   }
// }
// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// Easy 1 > 8. Leap Years (Part 1)
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// Easy 1 > 9. Leap Years (Part 2)

// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) return true;
//   if (year % 400 === 0) return true;
//   return (year % 4 === 0) && (year % 100 !== 0);
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true

// Easy 1 > 10. Multiples of 3 and 5
// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(number) {
//   let sum = 0;

//   for (let count = 1; count <= number; count += 1) {
//     if (isMultiple(count, 3) || isMultiple(count, 5)) {
//       sum += count;
//     }
//   }
//   return sum;
// }

// console.log(multisum(3)); // 3
// console.log(multisum(5)); // 8
// console.log(multisum(10)); // 33
// console.log(multisum(20)); // 98
// console.log(multisum(1000)); // 234168

// Easy 1 > 11. UTF-16 String Value
// function utf16Value(string) {
//   let sum = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     sum += string.charCodeAt(idx);
//   }
//   return sum;
// }

// function utf16Value(string) {
//   return string
//     .split('')
//     .reduce((acc, char) => acc + char.charCodeAt(), 0);
// }

// function utf16Value(string) {
//   return [...string].reduce((acc, char) => acc + char.charCodeAt(), 0);
// }

// const utf16Value = string => string.split('').reduce((acc, char) => acc + char.charCodeAt(), 0);

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
// const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA); // 937
// utf16Value(OMEGA + OMEGA + OMEGA); // 2811

// Easy 2 > 1. Welcome Stranger
// function greetings(array, object) {
//   let name = array.join(' ');
//   let job = `${object.title} ${object.occupation}`;

//   return `Hello ${name}! Nice to have a ${job} around.`
// }

// function greetings(array, object) {
//   let name = array.join(' ');
//   let title = object.title;
//   let job = object.occupation;

//   return `Hello ${name}! Nice to have a ${title} ${job} around.`
// }

// function greetings(name, job) {
//   return `Hello ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`
// }

// function greetings(nameArray, occupationObject) {
//  let fullName = nameArray.join(' ');
//  let job = Object.values(occupationObject).join(' ');
//  return `Hello ${fullName}! Nice to have a ${job} around.`
// }

//used object destructuring to extract relevant properties title and occupation
// let greetings = (nameArray, { title, occupation}) => `Hello, ${nameArray.join(' ')}! Nice to have a ${title} ${occupation} around.`

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

//  Easy 2 > 2. Greeting a user
// const readlineSync = require('readline-sync');

// let name = readlineSync.question('What is your name? ');

// if (name.endsWith('!')) {
//   // excludes the last character
//   name = name.slice(0, -1)
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

// Eamon's with basic input validation
// const rlsync = require('readline-sync');

// let name = rlsync.question("What's your name? ");

// while (invalidString(name)) {
//   name = rlsync.question("Please enter a valid name: ")
// }

// function invalidString(string) {
//   if (string.length > 0) {
//     return false;
//   }
//   return true;
// }

// function greeting(name) {
//   if (name.endsWith('!')) {
//     name = name.slice(0, -1);
//     console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
//   } else {
//     console.log(`Hello ${name}.`);
//   }
// }

// greeting(name);

// Easy 2 > 3. Multiplying Two Numbers
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true

// Easy 2 > 4. Squaring an Argument

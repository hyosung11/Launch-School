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
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(number) {
//   return multiply(number, number);
// }

// const multiply = (num1, num2) => num1 * num2;

// const square = (num) => multiply(num, num);

// const power = (num, exp) => (exp === 1 ? multiply(num, 1) : power(num, exp - 1) * num);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function power(num, exp) {
//   let total = num;

//   for (let count = 1; count < exp; count += 1) {
//     total = multiply(num, total);
//   }

//   return total;
// }

// while loop version
// const multiply = (num1, num2) => num1 * num2;

// function power(num, exp) {
//   let num1 = num;
//   while (exp > 1) {
//     num1 = multiply(num1, num)
//     exp -= 1;
//   }
//   return num1;
// }

// recursive version
// const multiply = (num1, num2) => num1 * num2;

// function power(num, exp) {
//   if (exp === 1) {
//     return multiply(num, 1);
//   }
//   // 3 * (3 * 3 * 3) = 81
//   return num * power(num, exp - 1);
// }

// console.log(power(3, 4)); // 81
// console.log(power(5, 2)); // 25

//  Easy 2 > 5. Arithmetic Integer
// const readlineSync = require('readline-sync');

// let firstNumber = Number(readlineSync.questionInt('Enter the first number: '));
// let secondNumber = Number(readlineSync.questionInt('Enter the second number: '));

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(
//   `${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`
// );
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(
//   `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
// );

// Jason Aricheta
// const readlineSync = require('readline-sync');

// let num1 = Number(readlineSync.questionInt('Enter the first number: '));
// let num2 = Number(readlineSync.questionInt('Enter the second number: '));

// // Code snippet...
// let obj = {
//   '+' : num1 + num2,
//   '-' : num1 - num2,
//   '*' : num1 * num2,
//   '/' : Math.round(num1 / num2),
//   '%' : num1 % num2,
//   '**' : num1 ** num2,
//   '**n' : BigInt(num1) ** BigInt(num2) // Bigint, not required
// };

// for (let key in obj) {
//   console.log(`==> ${num1} ${key} ${num2} = ${obj[key]}`);
// }

// Chris Small
// const readline = require('readline-sync');

// let firstNumber = readline.question('Enter the first number: ');
// let secondNumber = readline.question('Enter the second number: ');

// function operations(firstNumber, secondNumber) {
//   console.log(
//     `${firstNumber} + ${secondNumber} = ${
//       Number(firstNumber) + Number(secondNumber)
//     }`
//   );
//   console.log(
//     `${firstNumber} - ${secondNumber} = ${
//       Number(firstNumber) - Number(secondNumber)
//     }`
//   );
//   console.log(
//     `${firstNumber} * ${secondNumber} = ${
//       Number(firstNumber) * Number(secondNumber)
//     }`
//   );
//   console.log(
//     `${firstNumber} / ${secondNumber} = ${
//       Number(firstNumber) / Number(secondNumber)
//     }`
//   );
//   console.log(
//     `${firstNumber} % ${secondNumber} = ${
//       Number(firstNumber) % Number(secondNumber)
//     }`
//   );
//   console.log(
//     `${firstNumber} ** ${secondNumber} = ${
//       Number(firstNumber) ** Number(secondNumber)
//     }`
//   );
// }

// operations(firstNumber, secondNumber);

// Easy 2 > 6. The End Is Near But Not Here
// function penultimate(words) {
//   let wordsArray = words.split(' ');
//   return wordsArray[wordsArray.length - 2];
// }

// const penultimate = (string) => string.split(' ').slice(-2, -1)[0];

// console.log(penultimate("last word") === 'last'); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Antonina
// function middleWord(string = "") {
//   if (string === "") return "There's no middle in nothing.";
//   let array = string.split(" ");
//   let words = array.filter(word => word);
//   if (words.length % 2 === 0) {
//     return `${words[Math.floor(words.length / 2) - 1]} ${words[Math.floor(words.length / 2)]}`;
//   }
//   return words[Math.floor(words.length / 2)];
// }

// console.log(middleWord("last word")); // logs last word
// console.log(middleWord(" last   word  ")); // logs last word
// console.log(middleWord("Launch School is great!")); // logs School is
// console.log(middleWord("last word is")); // logs word
// console.log(middleWord("last")); // logs last
// console.log(middleWord("Launch School is great! Isn't it? Yes it is.")); // logs Isn't
// console.log(middleWord("")); // logs There's no middle in nothing.
// console.log(middleWord()); // logs There's no middle in nothing.

// Easy 2 > 7. Exclusive Or
// function xor(value1, value2) {
//   return (Boolean(value1) || Boolean(value2));
// }

// function xor(value1, value2) {
//   if ((value1 && !value2) || (value2 && !value1)) {
//     return true;
//   }
//   return false;
// }

// function xor(value1, value2) {
//   return !!((value1 && !value2) || (value2 && !value1))
// }

// function xor(arg1, arg2) {
//   if (arg1 && arg2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// Easy 2 > 8. Odd Lists
// function oddities(array) {
//   let oddElements = [];

//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }

//   return oddElements;
// }

// function oddities(array) {
//   let oddElements = [];

//   array.forEach((element, index) => {
//     if (index % 2 === 0) {
//       oddElements.push(element);
//     }
//   })
//   return oddElements;
// }

// const oddities = array => array.filter((_, index) => index % 2 === 0);

// function oddities(array) {
//   return array.filter((element, index) => index % 2 === 0);
// }

// David Pocsai
// let oddities = (array) => array.filter((_, idx) => idx % 2 === 0);

/* The first argument for the callback in `filter` is the current value in the array, but since we don't actually need to know the value, we can essentially skip over that argument and represent it with an underscore (`_`). We really only need to know the index (`idx`). If the remainder of dividing the index by 2 is 0 (meaning its an even number), then we will return those values from our input array. We therefore return the elements at index 0, 2, 4, 6 and so on. */

// function oddities(array) {
//   return array.filter((element => array.indexOf(element) % 2 === 0));
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // => [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// Easy 2 > 9. Convert a String to a Number!

// declarative version
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => value = (10 * value) + digit);
//   return value;
// }

// function stringToInteger(string) {
//   return +string;
// }

// function stringToInteger(string) {
//   let numberCharacters = string.split('').filter(element => element >= '0' && element <= '9');
//   return +numberCharacters.join('');
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(stringToInteger("572") === 570); //logs false

// Easy 2 > 10. Convert a String to a Signed Number!
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
//   return value;
// }

// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-':
//       return -stringToInteger(string.slice(1, string.length));
//     case '+':
//       return stringToInteger(string.slice(1, string.length));
//     default:
//       return stringToInteger(string);
//   }
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// Easy 2 > 11. Convert a Number to a String!
// function integerToString(number) {
//   let array = [];
//   array.push(number);
//   return array.join();
// }

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(integerToString(4321)); // "4321"
// console.log(integerToString(0)); // "0"
// console.log(integerToString(5000)); // "5000"
// console.log(integerToString(1234567890)); // "1234567890"

// Easy 2 > 12. Convert a Signed Number to a String!
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(+number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

// Easy 2 > 9. Convert a String to a Number!
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string
//     .split('')
//     .map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(stringToInteger("4321")); // logs 4321
// console.log(stringToInteger("570")); // logs 570

//  Easy 2 > 10. Convert a String to a Signed Number!
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-':
//       return -stringToInteger(string.slice(1, string.length));
//     case '+':
//       return stringToInteger(string.slice(1, string.length));
//     default:
//       return stringToInteger(string);
//   }
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// Easy 2 > 11. Convert a Number to a String!
// function integerToString(number) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     result = DIGITS[remainder] + result;

//   } while (number > 0)

//   return result;
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// Easy 2 > 12. Convert a Signed Number to a String!
// const signedIntegerToString = (number) => {
//   switch (Math.sign(number)) {
//     case +1:
//       return `+${integerToString(number)}`;
//     case -1:
//       return `-${integerToString(-number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');
// console.log(signedIntegerToString(4321)); // '+4321'
// console.log(signedIntegerToString(-123)); // '-123'
// console.log(signedIntegerToString(0)); // '0'

// Easy 3 1. ddaaiillyy ddoouubbllee
// function crunch(text) {
//   let crunchText = '';
//   let index = 0;

//   while (index < text.length) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }
//     index += 1;
//   }
//   return crunchText;
// }

// function crunch(string) {
//   return string
//     .split('')
//     .filter((char, index) => {
//       return char !== string[index - 1];
//     })
//     .join('');
// }

// regex
// function crunch(string) {
//   return string.replace(/(.)(?=\1)/g, '');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
// console.log(crunch('4444abcabccba')); // "4abcabcba"
// console.log(crunch('ggggggggggggggg')); // "g"
// console.log(crunch('a')); // "a"
// console.log(crunch('')); // ""

// Easy 3 > 2. Bannerizer
// function logInBox(message) {
//   let horizontalRule = `+${('-'.repeat(message.length + 2))}+`;
//   let emptyLine = `|${' '.repeat(message.length + 2)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${message} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// function logInBox(string) {
//   console.log(
//     `+-${'-'.repeat(string.length)}-+
// | ${' '.repeat(string.length)} |
// | ${string} |
// | ${' '.repeat(string.length)} |
// +-${'-'.repeat(string.length)}-+`
//   );
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// Easy 3 > 3. Stringy Strings
// function stringy(size) {
//   let result = '';
//   for (let idx = 0; idx < size; idx += 1) {
//     let number = ((idx % 2) === 0) ? 1 : 0;
//     result += number;
//   }
//   return result;
// }

// function stringy(size) {
//   return [...Array(size)]
//     .map((_, index) => (index % 2 === 0 ? 1 : 0))
//     .join('');
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

//  Easy 3 > 4. Fibonacci Number Location By Length
// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return count;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

// Easy 3 > 5. Right Triangles
// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;
//   while (height > 0) {
//     console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`)
//     spaces -= 1;
//     stars += 1;
//     height -= 1;
//   }
// }

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Easy 3 > 6. Madlibs
// const readline = require('readline-sync');

// let noun = readline.question('Enter a noun: ');
// let verb = readline.question('Enter a verb: ');
// let adjective = readline.question('Enter an adjective: ');
// let adverb = readline.question('Enter an adverb: ');

// console.log(
// `Do you ${verb} your ${adjective} ${noun}? That's hilarious!
// The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
// The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`
// );

// Easy 3 > 7. Double Doubles
// function twice(number) {
//   if (isDoubleNumber(number)) return number;
//   return number * 2;
// }

// function isDoubleNumber(number) {
//   let numberString = String(number);
//   let center = Math.floor(numberString.length / 2);
//   let leftNumber = numberString.slice(0, center);
//   let rightNumber = numberString.slice(center);

//   return leftNumber === rightNumber;
// }
// // console.log(isDoubleNumber(37));          // 74
// // console.log(isDoubleNumber(44));          // 44
// // console.log(isDoubleNumber(334433));      // 668866

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// Easy 3 > 8. Grade Book
// remember the third argument for reduce is the starting value
// function getGrade(...scores) {
//   let average = scores.reduce((total, grade) => (total + grade), 0) / scores.length;

//   if (average >= 90) return 'A';
//   if (average >= 80) return 'B';
//   if (average >= 70) return 'C';
//   if (average >= 60) return 'D';
//   return 'F';
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(95, 75, 85));    // "B"
// console.log(getGrade(50, 50, 95));    // "D"
// console.log(getGrade(50, 90));    // "C"

// Easy 3 > 9. Clean up the words
// function cleanUp(text) {
//   let cleanText = '';

//   for (let idx = 0; idx < text.length; idx += 1) {
//     if (isLetter(text[idx])) {
//       cleanText += text[idx];
//     } else if(cleanText[cleanText.length - 1] !== ' ') {
//       cleanText += ' ';
//     }
//   }

//   return cleanText;
// }

// function isLetter(char) {
//   return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
// }

// function cleanUp(text) {
//   return text.replace(/[^a-z]+/gi, " ")
// }

// console.log(cleanUp("---what's my +*& line?")); // " what s my line "
// console.log(cleanUp("---whAt's my +*& lInE?")); // " whAt s my lInE "

// Easy 3 > 10. What Century is That?
// function century(year) {
//   let centuryNumber = Math.ceil(year / 100);
//   return `${centuryNumber}${centurySuffix(centuryNumber)}`
// }

// function centurySuffix(year) {
//   if ([11, 12, 13].includes(year % 100)) return 'th';

//   switch (year % 10) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd'
//     default: return 'th';
//   }
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"

// Easy 4 > 1. How old is Teddy?
// function randomBetween(...args) {
//   let [min, max] = args.sort((a, b) => a - b);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let age = randomBetween(20, 120);
// console.log(`Teddy is ${age} years old!`);

// Easy 4 > 2. Searching 101
// const readline = require('readline-sync');

// let numbers = [];

// let one = readline.questionInt('Enter the 1st number: ');
// let two = readline.questionInt('Enter the 2nd number: ');
// let three = readline.questionInt('Enter the 3rd number: ');
// let four = readline.questionInt('Enter the 4th number: ');
// let five = readline.questionInt('Enter the 5th number: ');
// let last = readline.questionInt('Enter the last number: ');

// numbers.push(one, two, three, four, five);

// if (numbers.includes(last)) {
//   console.log(`The number ${last} appears in ${numbers}. `);
// } else {
//   console.log(`The number ${last} does not appear in ${numbers}.`);
// }

// Easy 4 > 3. When Will I Retire?
// const readlineSync = require('readline-sync');

// let currentAge = readlineSync.questionInt("What is your age? ");
// let retirementAge = readlineSync.questionInt("At what age would you like to retire? ");

// const currentYear = new Date().getFullYear();
// let yearsToWork = retirementAge - currentAge;
// let retirementYear = currentYear + yearsToWork;

// console.log(
// `It's ${currentYear}. You will retire in ${retirementYear}.
// You have only ${yearsToWork} years of work to go!`);

// Easy 4 > 4. Palindromic Strings (Part 1)
// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('Madam')); // false (case matters)
// console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
// console.log(isPalindrome('356653')); // true

// Easy 4 > 5. Palindromic Strings (Part 2)
/* ALGORITHM
- input string
- make string case-insensitive
- check each char of string
  - ignore all non-alphanumeric chars
- check if palindrome
- return boolean
  - true if palindrome
  - false otherwise */

// function isRealPalindrome(string) {
//   string = removeNonLettersNumbers(string.toLowerCase());
//   return isPalindrome(string);
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// function removeNonLettersNumbers(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (isLetter(string[idx]) || isNumber(string[idx])) {
//       result += string[idx];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isNumber(char) {
//   return char >= '0' && char <= '9';
// }

// function isRealPalindrome(string) {
//   string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return isPalindrome(string);
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// const ALPHA_NUMS = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function isRealPalindrome(string) {
//   let stringArray = string
//     .toLowerCase()
//     .split('')
//     .filter(char => ALPHA_NUMS.includes(char));
//   return stringArray.join('') === stringArray.reverse().join('');
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// Easy 4 > 6. Palindromic Numbers
/* AlGORITHM
- input number
- coerce number to string
- check if palindrome
- return boolean
  - true if palindromic
  - false otherwise */

// function isPalindromicNumber(number) {
//   return isPalindrome(String(number));
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// Easy 4 > 7. Running Totals
/* ALGORITHM
- input array of numbers
- declare `resultArray` to store the values of the running total
- declare `sum` to keep track of the current value
- iterate through the array
  - increment the value of `sum` by the value of the current index of the input array
  - push sum into `resultArray`
- return `resultArray` of numbers */

// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push(sum += array[idx]);
//   }

//   return resultArray;
// }

// function runningTotal(array) {
//   let total = 0;
//   return array.map(element => total += element);
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// Easy 4 > 8. Letter Counter (Part 1)
/* Algorithm
- input string of words
- initialize `count` object
- split the string into `wordsArray` at each space
- iterate over each word
  - initialize `wordSize` to length of first word
  - if `wordSize` is 0, go to next word
  - if `wordSize` doesn't exist in `count` object
    - count for that word size is 0
  - if count exists for that word size, increment the count by 1
- return `count` object of word lengths and number of words of that length */

function wordSizes(words) {
  let count = {};
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length
    if (wordSize.length === 0) continue;

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
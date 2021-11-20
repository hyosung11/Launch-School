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

// function wordSizes(words) {
//   let count = {};
//   if (words.length === 0) return count;

//   words.split(' ').forEach(word => {
//     count[word.length] = count[word.length] + 1 || 1;
//   });

//   return count;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes('')); // {}

// Easy 4 > 9. Letter Counter (Part 2)
// Julia Martin
// function wordSizes(words) {
//   let count = {};
//   if (words.length === 0) return count;

//   words.split(' ').forEach(word => {
//     word = word.toLowerCase().replace(/[^a-z]/, '');
//     count[word.length] = (count[word.length] || 0) + 1;
//   });

//   return count;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes('')); // {}

// Easy 4 > 10. Letter Swap
/* Algorithm
- input string of words
- split string of words at spaces into an array
- iterate through each word
  - if length of word is 1, return word
  - change the char at index 0 with char at word.length - 1
- output new string of words with first and last letters of every word swapped */

// function swap(words) {
//   return words
//     .split(' ')
//     .map((word) => {
//       if (word.length === 1) {
//         return word;
//       } else {
//         return word[word.length - 1] + word.slice(1, -1) + word[0];
//       }
//     })
//     .join(' ');
// }

// console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde')); // "ebcdA"
// console.log(swap('a')); // "a"

// Easy 5 > 1. Cute Angles
// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// function dms(degreesFloat) {
//   let degreesInt = Math.floor(degreesFloat);
//   let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor(
//     (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE
//   );

//   return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" + padZeroes(seconds) + '"';
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? `0${numString}` : numString;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

// Easy 5 > 2. Combining Arrays
/* Algo
- input two arrays of numbers
- initialize `combined` to concatenate the two arrays
- initialize `result` to empty array
- iterate over `combined`
  - if number not in `result`
    - push number to `result`
- return `result` array of unique numbers */

// function union(...args) {
//   let newArray = [];

//   args.forEach(value => copyNonDupsTo(newArray, value));

//   return newArray;
// }

// function copyNonDupsTo(resultArray, array) {
//   array.forEach(value => {
//     if (!resultArray.includes(value)) {
//       resultArray.push(value);
//     }
//   });
// }

// function union(array1, array2) {
//   let combined = array1.concat(array2);
//   let result = [];

//   combined.forEach(value => {
//     if (!result.includes(value)) {
//       result.push(value);
//     }
//   });
//   return result;
// }

// function union(array1, array2) {
//   let combo = array1.concat(array2);
//   let result = [...new Set(combo)];
//   return result;
// }

/* Bob Rodes

ES6's Set object makes this problem fairly simple, since its constructor automatically strips duplicate values. You just need to concatenate the two arrays, pass the result into the Set constructor, and deconstruct the result into an array. */

// function union(array1, array2) {
//   return [...new Set([...array1, ...array2])];
// }

// console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
// console.log(union([2, 4, 8, 6], [8, 6, 20, 14]));

// Easy 5 > 3. Halvsies
/* Algo
- input an array
- put first half of original array elements in the first element
- put the second half in the second element
- put middle element in the first half array
- output an array of two elements which are nested arrays */

// function halvsies(array) {
//   let middle = Math.ceil(array.length / 2);
//   let firstHalf = array.slice(0, middle);
//   let secondHalf = array.slice(middle);
//   return [firstHalf, secondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// Easy 5 > 4. Find the Duplicate
/* Algo
- input array
  - iterate through the array
    - find the duplicate value
- output value as number */

// function findDup(arr) {
//   return arr.filter((val, idx, arr) => idx !== arr.lastIndexOf(val)).pop();
// }

// function findDup(array) {
//   array.sort();
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (array[idx] === array[idx + 1]) {
//       return array[idx];
//     }
//   }
//   return undefined;
// }

// function findDup(array) {
//   return array.find((value, index) => array.lastIndexOf(value) !== index);
// }

// function findDup(arr) {
//   return arr.find((val) => arr.indexOf(val) !== arr.lastIndexOf(val));
// }

// console.log(findDup([1, 5, 3, 1])); // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58])); // 73

// Easy 5 > 5. Combine Two Lists
// function interleave(...args) {
//   let newArray = [];
//   const longest = Math.max(...args.map(array => array.length));

//   for (let idx = 0; idx < longest; idx += 1) {
//     args.forEach(array => {
//       if (array.length > idx) {
//         newArray.push(array[idx]);
//       }
//     });
//   }

//   return newArray;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

// Easy 5 > 6. Multiplicative Average
/* Algorithm
- input array of integers
- initialize `product` to 1
- iterate over elements in array
  - multiply product by the value at the current index
- divide `product` by number of entries in the array
- output `product` as a string rounded to three decimal places */

// function multiplicativeAverage(numbers) {
//   let product = 1;

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     product *= numbers[idx];
//   }

//   return (product / numbers.length).toFixed(3);
// }

// reduce - returns a number not a string - toFixed is ignored
// function multiplicativeAverage(numbers) {
//   return numbers.reduce((total, number) => total *= number, 1) / (numbers.length).toFixed(3);
// }

// Emma's version returns a string
// function multiplicativeAverage(arr) {
//   return (arr.reduce((accum, num) => (accum *= num), 1) / arr.length).toFixed(
//     3
//   );
// }

// function multiplicativeAverage(arr) {
//   let num = arr.reduce((accum, num) => (accum *= num), 1) / arr.length;
//   return num.toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5])); // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// Easy 5 > 7. Multiply Lists
/* Algo
- input two arrays of numbers
- initialize `result` array
- iterate over first array
  - compute the product of multiplying the values at the current index of each array
  - push that product to a `result` array
- return a `result` array */

// for loop version
// function multiplyList(numbers1, numbers2) {
//   let products = [];

//   for (let idx = 0; idx < numbers1.length; idx += 1) {
//     products.push(numbers1[idx] * numbers2[idx]);
//   }

//   return products;
// }

// map
// function multiplyList(numbers1, numbers2) {
//   return numbers1.map((_, idx) => numbers1[idx] * numbers2[idx]);
// }

// reduce
/* Algo
- initialize an empty array to the previous value
- pass the previous value, current value, and current index to the callback function
- the callback function pushes the current value multiplied by the current index for the second array to the previous value
- return the array */

// function multiplyList(numbers1, numbers2) {
//   return numbers1.reduce((products, _, idx) => {
//     products.push(numbers1[idx] * numbers2[idx]);
//     return products;
//   }, []);
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
// console.log(multiplyList([0, 2, 4, 6], [2, 4, 6, 8])); // [ 0, 8, 24, 48 ]

// Easy 5 > 8. List of Digits
/* Algo
- input a positive integer
- convert integer to string
- split string into array of single-digit strings
- initialize `numberArray` array to store digits
  - iterate over array
    - convert each digit string to a number
    - push each digit to the `numberArray`
- return `numberArray` */

// function digitList(number) {
//   let digits = String(number).split('');
//   let numberArray = [];

//   for (let idx = 0; idx < digits.length; idx += 1) {
//     let digit = parseInt(digits[idx], 10);
//     numberArray.push(digit);
//   }

//   return numberArray;
// }

// `map` version
// function digitList(number) {
//   return String(number)
//     .split('')
//     .map(digit => parseInt(digit, 10));
// }

// another `map` version
// function digitList(number) {
//   return [...String(number)].map(digit => Number(digit));
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// Easy 5 > 9. How Many?
/* Algo
- input array of string elements
- initialize an `occurrences` object
- iterate over each element of the `elements` array argument
  - check if a property with a key equal to the name of the current vehicle exists in `occurrences`
    - `occurrences[elements[idx]]`
    - if it does not exist, initialize the property to 0
    - increment the current value of the property by 1
- call `logOccurrences` to output the desired result
  - iterate through items in `occurrences`
  - log items and number of occurrences
- return items and count */

// let vehicles = [
//   'car',
//   'car',
//   'truck',
//   'car',
//   'SUV',
//   'truck',
//   'motorcycle',
//   'motorcycle',
//   'car',
//   'truck',
// ];

// function countOccurrences(elements) {
//   let occurrences = {};

//   for (let idx = 0; idx < elements.length; idx += 1) {
//     if (!occurrences[elements[idx]]) occurrences[elements[idx]] = 0;
//     occurrences[elements[idx]] += 1;
//   }

//   return logOccurrences(occurrences);
// }

// function logOccurrences(occurrences) {
//   for (let item in occurrences) {
//     console.log(`${item} => ${String(occurrences[item])}`);
//   }
// }

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;

// function countOccurrences(vehicles) {
//   let vehicleCount = vehicles.reduce((list, unit) => {
//     unit = unit.toLowerCase();
//     list[unit] = (list[unit] || 0) + 1;
//     return list;
//   }, {});

//   logResult(vehicleCount);
// }

// function logResult(list) {
//   Object.entries(list).forEach(([key, value]) => {
//     console.log(`${key} => ${value}`);
//   });
// }

// Easy 5 > 10. Array Average
/* Algo
- input array of integers as `numbers` argument
- initialize `sum` to 0
- iterate over the `numbers` array argument
  -  during each iteration, increment the `sum` by the value at the current index
- floor the result of `sum` divided by length of the `numbers` array
- output number representing average of all the integers in the array */

// function average(numbers) {
//   let sum = 0;

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     sum += numbers[idx];
//   }

//   return Math.floor(sum / numbers.length);
// }

// function average(numbers) {
//   return Math.floor(numbers.reduce((total, value) => total += value, 0) / numbers.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8])); // 25
// console.log(average([9, 47, 23, 95, 16, 52])); // 40

// reduced `reduce` version :)
// function average(numbers) {
//   return Math.floor(numbers.reduce((runningTotal, value) => runningTotal += value) / numbers.length);
// }

// Easy 5 > 11. After Midnight (Part 1)
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR

//   return formatTime(hours, minutes);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// console.log(timeOfDay(0) === '00:00');
// console.log(timeOfDay(-3) === '23:57');
// console.log(timeOfDay(35) === '00:35');
// console.log(timeOfDay(-1437) === '00:03');
// console.log(timeOfDay(3000) === '02:00');
// console.log(timeOfDay(800) === '13:20');
// console.log(timeOfDay(-4231) === '01:29');

// Easy 5 > 12. After Midnight (Part 2)
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(time) {
//   let [hours, minutes] = time.split(":").map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(time) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(time);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

// console.log(afterMidnight('00:00') === 0);
// console.log(beforeMidnight('00:00') === 0);
// console.log(afterMidnight('12:34') === 754);
// console.log(beforeMidnight('12:34') === 686);
// console.log(afterMidnight('24:00') === 0);
// console.log(beforeMidnight('24:00') === 0);

// Easy 6 > 1. Double Char (Part 1)
/* Algo
- input a string
- initialize `stringArray` to empty array
- iterate through `string` argument
  - append two of current char at index into `stringArray`
- join the array
- return string with repeated chars */

// function repeater(string) {
//   let stringArray = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     stringArray.push(string[idx], string[idx]);
//   }
//   return stringArray.join('');
// }

// keeping it a string
// function repeater(string) {
//   let doubleChars = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     doubleChars += string[idx] + string[idx];
//   }

//   return doubleChars;
// }

// spread operator and `repeat` method
// const repeater = (str) => [...str].map(char => char.repeat(2)).join('');

// console.log(repeater('Hello')); // "HHeelllloo"
// console.log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
// console.log(repeater('')); // ""

// map version
/* Algo
- split the string into an array of characters
- iterate through the array
  - using `map` concatenate each character with itself
- join the array back into a string */

// function repeater(string) {
//   return string
//     .split('')
//     .map(char => char + char)
//     .join('');
// }

// Easy 6 > 2. Double Char (Part 2)
/* Algo
- input string
- split the string into chars
- iterate through chars
  - if char is a consonant double it
  - skip all chars not consonants
- return a new string with consonant characters doubled */

// function doubleConsonants(string) {
//   const CONSONANTS = [
//     'b',
//     'c',
//     'd',
//     'f',
//     'g',
//     'h',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   let stringArray = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     stringArray.push(string[idx]);
//     if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
//       stringArray.push(string[idx]);
//     }
//   }

//   return stringArray.join('');
// }

// `map`
// function doubleConsonants(string) {
//   const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
//   return string
//     .split('')
//     .map(char => CONSONANTS.includes(char.toLowerCase()) ? char.repeat(2) : char)
//     .join('');
// }

// console.log(doubleConsonants('String')); // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
// console.log(doubleConsonants('')); // ""

// function doubleConsonants(string) {
//   let consonants = 'bcdfghjklmnpqrstvwxyz';
//   if (string === '') return '';
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (consonants.includes(string[idx].toLowerCase())) {
//       result += string[idx] + string[idx];
//     } else {
//       result += string[idx];
//     }
//   }
//   return result;
// }

// Easy 6 > 3. Reverse Number
/* algo 
- input number
- convert number to string
- split the string at each char
- reverse the chars
- join the chars
- convert back to number
- return number with digits reversed */

// function reverseNumber(number) {
//   let reversed = String(number)
//     .split('')
//     .reverse()
//     .join('')
//   return parseInt(reversed, 10);
// }

// function reverseNumber(number) {
//   return Number(String(number).split('').reverse().join(''));
// }

// console.log(reverseNumber(12345)); // 54321
// console.log(reverseNumber(12213)); // 31221
// console.log(reverseNumber(456)); // 654
// console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1)); // 1

// Easy 6 > 4. Get The Middle Character
/* algo
- input string
- initialize `middle` to string length / 2
- check length of string
  - if odd return middle char
  - if even return two middle characters
- return middle character(s) of string */

// function centerOf(string) {
//   if (string.length % 2 === 1) {
//     let centerIndex = (string.length - 1) / 2;
//     return string[centerIndex];
//   } else {
//     let leftIndex = string.length / 2 - 1;
//     return string.slice(leftIndex, leftIndex + 2);
//   }
// }

// Emma's version
// function centerOf(string) {
//   const middle = Math.floor(string.length / 2);
//   return string.length % 2 === 0
//   ? string.slice(middle - 1, middle + 1)
//   : string.charAt(middle);
// }

// function centerOf(str) {
//   return str.slice(Math.ceil(str.length / 2) - 1, Math.floor(str.length / 2) + 1);
// }

// let centerOf = (str) => {
//   let half = Math.ceil(str.length / 2) - 1;
//   return str.length % 2 === 0
//     ? str.slice(half, half + 2)
//     : str.slice(half, half + 1);
// };

// function centerOf(string) {
//   let middle = Math.floor(string.length / 2);
//   if (string.length % 2 === 1) {
//     return string[middle];
//   } else {
//     return string[middle - 1] + string[middle];
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// Easy 6 > 5. Always Return Negative
/* Algo
- input a number
- if number positive, return negative of that number
- if negative, return as is
- return number

- leverage Math.abs method to convert any type of number argument to a positive number. Then multiply the number by -1.

- I found another way by just negating the entire expression and returning it. */

// function negative(number) {
//   return -Math.abs(number);
// }

// function negative(number) {
//   return Math.sign(number) < 0 ? number : -number;
// }

// function negative(number) {
//   return Math.abs(number) * -1;
// }

// const negative = (number) => Math.abs(number) === number ? -number : number;

// function negative(number) {
//   return number >= 0 ? -number : number;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// Easy 6 > 6. Counting Up

// function sequence(number) {
//   let result = [];
//   let count = 1;

//   while (count <= number) {
//     result.push(count)
//     count += 1;
//   }
//   return result;
// }

// function sequence(limit) {
//   let result = [];

//   for (let num = 1; num <= limit; num += 1) {
//     result.push(num);
//   }

//   return result;
// }

// function sequence(limit) {
//   return [...Array(limit)].map((_, number) => ++number)
// }

// console.log(sequence(5)); // [1, 2, 3, 4, 5]
// console.log(sequence(3)); // [1, 2, 3]
// console.log(sequence(1)); // [1]

// Easy 6 > 7. Name Swapping
// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts')); // "Roberts, Joe"

// function swapName(name) {
//   let names = name.split(' ');
//   return `${names.pop()}, ${names.join(' ')}`;
// }

// console.log(swapName('Joe Louis Roberts')); // "Roberts, Joe Louis"

// Easy 6 > 8. Sequence Count
/* Algo
- input `count` and `start` integer arguments
- if `count` is 0 return empty array
- initialize `result` array
- iterate for `count` times
  - in each iteration increase value of element by a multiple of the starting number
- return an array of numbers */

// function sequence(count, startNum) {
//   let result = [];
//   for (let num = 1; num <= count; num += 1) {
//     result.push(num * startNum);
//   }

//   return result;
// }

// const sequence = (count, start) => [...Array(count)].map((_, num) => start * (num + 1));

// function sequence(count, start) {
//   let numbers = [...Array(count)];
//   return numbers.map((_, num) => start * (num + 1));
// }

// console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7)); // [-7, -14, -21, -28]
// console.log(sequence(3, 0)); // [0, 0, 0]
// console.log(sequence(0, 1000000)); // []

// Easy 6 > 9. Reverse It (Part 1)
// function reverseSentence(words) {
//   return words.split(' ').reverse().join(' ');
// }

// reverseSentence = (string) => string.split(' ').reverse().join(' ');

// console.log(reverseSentence('')); // ""
// console.log(reverseSentence('Hello World')); // "World Hello"
// console.log(reverseSentence('Reverse these words')); // "words these Reverse"

// Easy 6 > Reverse It (Part 2)
// function reverseWords(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (word.length >  4) {
//         return word.split('').reverse().join('');
//       }
//       return word;
//     }).join(' ');
// }

// console.log(reverseWords('Professional')); // "lanoisseforP"
// console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

// Easy 6 > 11. Reversed Arrays
/* Algo
- input array
- set leftIndex to beginning of the array
- set rightIndex to end of the array
- iterate through the array
  - exchange elements
  - increment leftIndex
  - decrement rightIndex
- return array with elements reversed in place */

// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] =
//       [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }

// function reverse(array) {
//   let clone = array.splice(0, array.length);
//   while (clone.length > 0) {
//     array.push(clone.pop());
//   }
//   return array;
// }

// function reverse(list) {
//   let listCopy = [...list];

//   for (let i = 0; i < list.length; i++) {
//     list[i] = listCopy[list.length - 1 - i]; // list[3]
//   }

//   return list;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// Easy 6 > 12. Matching Parentheses?
/* Algo
- input string
- initialize `parens` to 0 to track
- iterate through string
  - if char === '('
    - increment parens
  - if char === ')'
    - decrement parens
  - if parens less than zero return false
  - check if parens === 0
- return boolean
  - true if all parentheses balanced
  - false otherwise */

// function isBalanced(string) {
//   let parens = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (string[idx] === '(') {
//       parens += 1;
//     } else if (string[idx] === ')') {
//       parens -= 1;
//     }
//     if (parens < 0) return false;
//   }

//   return parens === 0;
// }

//   console.log(isBalanced('What (is) this?') === true);
//   console.log(isBalanced('What is) this?') === false);
//   console.log(isBalanced('What (is this?') === false);
//   console.log(isBalanced('((What) (is this))?') === true);
//   console.log(isBalanced('((What)) (is this))?') === false);
//   console.log(isBalanced('Hey!') === true);
//   console.log(isBalanced(')Hey!(') === false);
//   console.log(isBalanced('What ((is))) up(') === false);

// List Processing > 1. Sum Of Digits
/* algo
- input `number` argument
- convert `number` to a string
- split `number` into chars
- sum chars using reduce
  - convert parameter `digit` to a number using `Number()
- return number that sums digits */

// function sum(number) {
//   return String(number)
//     .split('')
//     .reduce((accum, digit) => accum + Number(digit), 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// List Processing > 2. Alphabetical Numbers
// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
//   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
//   'sixteen', 'seventeen', 'eighteen', 'nineteen']

// function wordSort(num1, num2) {
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) {
//   return [...array].sort(wordSort);
// }

// console.log(alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// List Processing > 3. Multiply All Pairs
// function multiplyAllPairs(array1, array2) {
//   let result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2);
//     });
//   });
//   return result.sort((a, b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]

// List Processing > 6. Leading Substrings
// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
// }

// function leadingSubstrings(string) {
//   let result = [];
//   let counter = 1;

//   while (counter <= string.length) {
//     result.push(string.slice(0, counter));
//     counter += 1;
//   }

//   return result;
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, letter) => string.slice(0, letter + 1));
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a')); // ["a"]
// console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// List Processing > 5. All Substrings
// function substrings(string) {
//   let substrings = [];

//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.slice(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// console.log(substrings('abcde'));
// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// List Processing > 6. Palindromic Substrings
// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function substrings(string) {
//   let substrings = [];

//   for (let startIndex = 0; startIndex <= string.length; startIndex += 1) {
//     let substring = string.slice(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, letter) => string.slice(0, letter + 1));
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// List Processing > 7. Sum of Sums
/* Algo
- input array of numbers
- initialize `sumTotal` to 0
  iterate through array
  - slice the original array
  - sum all the values from the created subarray using `reduce`
  - add sum to the `sumTotal`
- return number */

// function sumOfSums(numbers) {
//   let sumTotal = 0;

//   for (let idx = 1; idx <= numbers.length; idx += 1) {
//     sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
//   }
//   return sumTotal;
// }

// console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4])); // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// List Processing > 8. Grocery List
/* Algo
- input two-dimensional array
- initialize `result` array
  - iterate through array
    - for each subarray
      - return fruit for x number of times
- return one-dimensional array */

// function buyFruit(fruits) {
//   let list = [];

//   fruits.forEach(fruit => {
//     for (let idx = 0; idx < fruit[1]; idx += 1) {
//       list.push(fruit[0]);
//     }
//   })
//   return list;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// List Processing > 9. Inventory Item Transactions
// let transactions = [ { id: 101, movement: 'in', quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// function transactionsFor(inventoryItem, inventory) {
//   return inventory.filter(items => items.id === inventoryItem);
// }

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// List Processing > 10. Inventory Item Availability
// function isItemAvailable(item, transactions) {
//   let quantity = transactionsFor(item, transactions).reduce(
//     (sum, transaction) => {
//       if (transaction.movement === 'in') {
//         return sum + transaction.quantity;
//       } else {
//         return sum - transaction.quantity;
//       }
//     }, 0);
//   return quantity > 0;
// }

// function transactionsFor(inventoryItem, transactions) {
//   return transactions.filter(inventory => inventory.id === inventoryItem);
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true

// String and Text Processing > 1. Uppercase Check
// function isUppercase(string) {
//   return string === string.toUpperCase();
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// String and Text Processing > 2. Delete Vowels
// function removeVowels(stringArray) {
//   let vowels = 'aeiouAEIOU';

//   return stringArray.map(word => {
//     return word.split('').filter(char => !(vowels.includes(char))).join('');
//   });
// }

// function removeVowels(strings) {
//   return strings.map(string => string.replace(/[aeiou]/gi, ''));
// }

// function removeVowels(strings) {
//   const VOWELS = 'aeiouAEIOU';
//   return strings.map(word => {
//     return word.split('').filter(char => !VOWELS.includes(char)).join('');
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]

// String and Text Processing > 3. Lettercase Counter
// function letterCaseCount(string) {
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 };

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (char >= 'a' && char <= 'z') {
//       counts.lowercase += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       counts.uppercase += 1;
//     } else {
//       counts.neither += 1;
//     }
//   }

//   return counts;
// }

// function letterCaseCount(string) {
//   let lowercaseChars = string.match(/[a-z]/g) || [];
//   let uppercaseChars = string.match(/[A-Z]/g) || [];
//   let neitherChars = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   }
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// String and Text Processing > 4. Capitalize Words
// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// String and Text Processing > 5. Swap Case
// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char >= 'a' && char <= 'z') {
//         return char.toUpperCase();
//       } else if (char >= 'A' && char <= 'Z') {
//         return char.toLowerCase();
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

// console.log(swapCase('CamelCase')); // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"

// String and Text Processing > 6. Staggered Caps (Part 1)
// function staggeredCase(string) {
//   let result = ''

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (idx % 2 === 0) {
//       result += char.toUpperCase();
//     } else {
//       result += char.toLowerCase()
//     }
//   }
//   return result;
// }

// function staggeredCase(string) {
//   return string
//     .split('')
//     .map((char, index) => {
//       if (index % 2 === 0) {
//         return char.toUpperCase()
//       } else {
//         return char.toLowerCase();
//       }
//     })
//     .join('');
// }

// console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"

// String and Text Processing 7. Staggered Caps (Part 2)
// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split('')
//     .map(char => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char.toLowerCase();
//         }
//       } else {
//         return char;
//       }
//     })
//     .join('')
// }

// console.log(staggeredCase('I Love Launch School!')) //'I lOvE lAuNcH sChOoL!'
// console.log(staggeredCase('ALL CAPS')) // 'AlL cApS'
// console.log(
//   staggeredCase('ignore 77 the 444 numbers')) // 'IgNoRe 77 ThE 444 nUmBeRs'

// console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
// console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
// console.log(
//   staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
// );

/* =======================================================
String and Text Processing > 8. How long are you? */

// function wordLengths(words) {
//   if (words === '' || words.length === 0) {
//     return [];
//   }
//   return words.split(' ').map(word => `${word} ${word.length}`);
// }

// function wordLengths(words) {
//   if (words === '' || words === undefined) {
//     return [];
//   }
//   return words.split(' ').map(word => `${word} ${word.length}`);
// }

// function wordLengths(words) {
//   return (words ? words.split(' ').map(word => `${word} ${word.length}`) : []);
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

/* =======================================================
String and Text Processing > 9. Search Word (Part 1) */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(word, text) {
//   return text
//     .split(' ')
//     .filter(words => words.toLowerCase() === word.toLowerCase()).length;
// }

// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi');
//   const matches = text.match(regex);

//   return matches ? matches.length : 0;
// }

// console.log(searchWord('sed', text)); // 3

/* =======================================================
String and Text Processing > 10. Search Word (Part 2) */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// function searchWord(word, text) {
//   return text
//     .split(' ')
//     .map(chars => {
//       if (chars.toLowerCase() === word.toLowerCase()) {
//         return `**${chars.toUpperCase()}**`;
//       }
//       return chars;
//     })
//     .join(' ');
// }

// console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"

/* =======================================================
Medium 1 > 1. Rotation (Part 1) *

Algo
- input an array
- do not modify the original array
- if the input is not an array, return `undefined`
- if input is an empty array, return an empty array
- slice the first element and append it to the end of the array
- return new array */

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];

//   return array.slice(1).concat(array[0]);
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

/* =======================================================
Medium 1 > 2. Rotation (Part 2)

Algo
- input number and count
- convert the original `number` to string
- split the string into two parts
  - part to remain unchanged
  - part to be rotated
- initialize `resultString`
- initialize `rotate String` helper function
  - return sliced string
- join the first part back together with the rotated second part
- return the rotated number */

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let firstPart = numberString.slice(0, numberString.length - count);
//   let secondPart = numberString.slice(numberString.length - count);
//   let resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

/* =======================================================
Medium 1 > 3. Rotation (Part 3) */

// function maxRotation(number) {
//   let numberDigits = String(number).length;
//   for (let count = numberDigits; count >= 2; count -= 1) {
//     number = rotateRightmostDigits(number, count)
//   }
//   return number;
// }

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number)
//   let firstPart = numberString.slice(0, numberString.length - count);
//   let secondPart = numberString.slice(numberString.length - count);
//   let resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// console.log(maxRotation(735291)); // 321579
// console.log(maxRotation(3)); // 3
// console.log(maxRotation(35)); // 53
// console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146)); // 7321609845

/* =======================================================
Medium 1 > 4. Stack Machine Interpretation */

// function minilang(program) {
//   let stack = [];
//   let register = 0;
//   program.split(" ").forEach(token => {
//     switch (token) {
//       case "ADD":
//         register += stack.pop();
//         break;
//       case "DIV":
//         register = Math.floor(register / stack.pop());
//         break;
//       case "MULT":
//         register *= stack.pop();
//         break;
//       case "REMAINDER":
//         register = Math.floor(register % stack.pop());
//         break;
//       case "SUB":
//         register -= stack.pop();
//         break;
//       case "PUSH":
//         stack.push(register);
//         break;
//       case "POP":
//         register = stack.pop();
//       case "PRINT":
//         console.log(register);
//         break;
//       default:
//         register = Number(token);
//     }
//   })
//   return register;
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

/* =======================================================
Medium 1 > 5. Word to Digit

Algo
- input sentence string
- initialize `NUM_WORDS` object as a lookup table for converting each numberic word to its digital counterpart
- iterate over the keys of the `NUM_WORDS` object and iteratively replace all instances of each numeric word in the `sentence` argument
  - during each iteration, the solution creates a `RegExp` object and assigns it to the `regex` variable
  - the solution passes this regex as an argument to the `replace` method
    - reassigning the value of the sentence
- return sentence string with number words replaced by their digits */

// const NUMBER_WORDS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9
// };

// function wordToDigit(sentence) {
//   Object.keys(NUMBER_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     sentence = sentence.replace(regex, NUMBER_WORDS[word]);
//   })
//   return sentence;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* =======================================================
Medium 1 > 6. Fibonacci Numbers (Recursion) */

// function fibonacci(nth) {
//   if (nth <= 2) return 1;
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

/* =======================================================
Medium 1 > 7. Fibonacci Numbers (Procedural) */

// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     // [1, 2]
//     // [2, 3] 
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }
//   return previousTwo[1];
// }

// console.log(fibonacci(4)); // 3
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050

/* =======================================================
Medium 1 > 8. Fibonacci Numbers (Memoization) */

// let memo = {};
// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   } else if (memo[nth]) {
//     return memo[nth];
//   } else {
//     memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2)
//     return memo[nth];
//   }
// }

// console.log(fibonacci(4)); // 3
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050
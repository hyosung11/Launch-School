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
function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  return string
    .split('')
    .map(char => CONSONANTS.includes(char.toLowerCase()) ? char.repeat(2) : char)
    .join('');
}

console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""

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
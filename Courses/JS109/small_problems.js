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
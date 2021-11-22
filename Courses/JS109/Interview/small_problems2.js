/* ============================
Easy 1 > 1. Isn't it Odd */

// function isOdd(number) {
//   return number % 2 !== 0;
// }

// function isOdd(number) {
//   return Math.abs(number) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

/* ============================
Easy 1 > 2. Odd Numbers */

// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }

/* ========================
Easy 1 > 3. Even Numbers */

// let number = 2;

// while (number <= 99) {
//   console.log(number)
//   number += 2;
// }

/* ========================
Easy 1 > 7. Short Long Short
JavaScript automatically coerces string primitives to String objects when needed. */

// function shortLongShort(string1, string2) {
//   if (string1.length > string2.length) return string2 + string1 + string2;
//   return string1 + string2 + string1;
// }

// function shortLongShort(str1, str2) {
//   let short = str1.length > str2.length ? str2 : str1;
//   let long = str2.length > str1.length ? str2 : str1;
//   return short + long + short;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

/* ========================
Easy 1 > 8. Leap Years (Part 1) */

// function isLeapYear(year) {
//   if (year % 400 === 0) return true;
//   if (year % 100 === 0) return false;
//   if (year % 4 === 0) return true;
//   return false;
// }

// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
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

/* ========================
Easy 1 > 9. Leap Years (Part 2) */

// function isLeapYear(year) {
//   if (year < 1752) return year % 4 === 0;
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
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

/* ========================
Easy 1 > 10. Multiples of 3 and 5 */

// function multisum(number) {
//   let total = 0;

//   for (let idx = 1; idx <= number; idx += 1) {
//     if (idx % 3 === 0 || idx % 5 === 0)
//     total += idx;
//   }

//   return total;
// }

// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(maxValue) {
//   let sum = 0;

//   for (let number = 1; number <= maxValue; number += 1){
//     if (isMultiple(number, 3) || isMultiple(number, 5)) {
//       sum += number;
//     }
//   }

//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

/* ========================
Easy 1 > 11. UTF-16 String Value */

// function utf16Value(string) {
//   let sum = 0;
//   for (let idx = 0; idx < string.length; idx += 1) {
//     sum += string[idx].charCodeAt();
//   }
//   return sum;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

/* ========================
Easy 2 > 1. Welcome Stranger */

// function greetings(name, job) {
//   let fullName = name.join(' ');
//   let profession = `${job.title} ${job.occupation}`;

//   return `Hello, ${fullName}! Nice to have a ${profession} around.`
// }

// function greetings(name, job) {
//   return `Hello, ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`
// }

// function greetings(name, job) {
//   let fullName = name.join(' ');
//   let position = Object.values(job);
//   let title = position.join(' ');

//   return `Hello, ${fullName}! Nice to have a ${title} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/* ========================
Easy 2 > 2. Greeting a user */

// const readlineSync = require('readline-sync');

// let name = readlineSync.question("What is your name? ");

// if (name.endsWith('!')) { // `name[name.length - 1] === '!';
//   // negative index indicates an offset from the end of the sequence. `slice(0, -1)` extracts from the beginning to the second-to-last element in the sequence
//   name = name.slice(0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

/* ========================
Easy 2 > 3. Multiplying Two Numbers */

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const multiply = ((num1, num2) => num1 * num2);

// console.log(multiply(5, 3) === 15); // logs true

/* ========================
Easy 2 > 4. Squaring an Argument */

// const multiply = ((num1, num2) => num1 * num2);

// const square = (number => multiply(number, number));

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// Further Exploration
// const multiply = (num1, num2) => num1 * num2;
// const square = (number) => multiply(number, number);
// const power = (number, exponent) => exponent === 1 ? multiply(number, 1) : power(number, exponent - 1) * number;

// console.log(power(5, 3));

/* ========================
Easy 2 > 6. The End Is Near But Not Here */

// function penultimate(string) {
//   let word = string.split(' ');
//   return word[word.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Further Exploration
// function extractMiddle(str) {
//   const words = str
//     .trim()
//     .split(' ')
//     .filter(word => word !== ''); // remove array elements that are just extra spaces between words

//   // if 2 words or fewer, or empty string
//   if (words.length <= 2) {
//     return 'Please input string of 3 words or more';
//   }

//   const middleIdx = Math.ceil(words.length / 2) - 1;

//   // if even # of words, return array of two "middle" words
//   if (words.length % 2 === 0) {
//     return [words[middleIdx], words[middleIdx + 1]].join(' ');
//   } else {
//     return words[middleIdx].join(' ');
//   }
// }

// console.log(extractMiddle("last word")); // logs true
// console.log(extractMiddle("Launch School is great!")); // logs true

/* ========================
Easy 2 > 7. Exclusive Or */

function xor(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)) {
    return true;
  }
  return false;
}

// all should return `true`
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
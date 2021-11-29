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

// function xor(value1, value2) {
//   if ((value1 && !value2) || (!value1 && value2)) return true;
//   return false;
// }

// function xor(arg1, arg2) {
//   if (arg1 && arg2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// const xor = (oper1, oper2) => (!!oper1 === !!oper2 ? false : true);

// const xor = ((value1, value2) => !!value1 !== !!value2);

// // all should return `true`
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

/* ========================
Easy 2 > 8. Odd Lists */

// function oddities(array) {
//   let oddElements = [];

//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }

//   return oddElements;
// }

// function oddities(array) {
//   return array.filter((_, idx) => idx % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

/* =========================================
Easy 2 > 9. Convert a String to a Number! */

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
//   }
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/* =========================================
Easy 2 > 10. Convert a String to a Signed Number! */

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
//   }
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

/* =========================================
Easy 2 > 11. Convert a Number to a String! */

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

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// function integerToString(number) {
//   let digits = '0123456789';
//   let result = [];

//   while (number > 0) {
//     result.unshift(digits[number % 10]);
//     number = Math.floor(number / 10);
//   }
//   return result.join('');
// }

/* =========================================
Easy 2 > 12. Convert a Signed Number to a String! */

// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case +1:
//       return `+${integerToString(number)}`;
//     case -1:
//       return `-${integerToString(-number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// function integerToString(number) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

/* =========================================
Easy 3 > 1. ddaaiillyy ddoouubbllee */

// function crunch(text) {
//   let crunchText = '';

//   for (let idx = 0; idx < text.length; idx += 1) {
//     if (text[idx] !== text[idx + 1]) {
//       crunchText += text[idx];
//     }
//   }

//   return crunchText;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// // console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

/* =========================================
Easy 3 > 3. Stringy Strings */

// function stringy(size) {
//   let result = '';

//   for (let idx = 0; idx < size; idx += 1) {
//     let number = ((idx % 2) === 0) ? 1 : 0;
//     result += number;
//   }
//   return result;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function signedIntegerToString(number) {
//   switch(Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// function integerToString(number) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

/* =========================================
Easy 3 > 4. Fibonacci Number Location By Length */

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci
//   } while (String(fibonacci).length < length);

//   return count;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

/* =========================================
Easy 3 > 5. Right Triangles */

// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;

//   while (height > 0) {
//     console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
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

/* =========================================
Easy 3 > 7. Double Doubles

Algo
- input number
- check length of number
  - if odd-length, multiply number by two
  - if even-length
    - check left side against right side
      - if left-side digits are exactly the same as right-side digits
        - return number as-is
      - if not the same
        - multiply number by two
- return number */

// function twice(number) {
//   let stringNumber = String(number);
//   let center = Math.floor(stringNumber.length / 2);
//   let leftNumber = stringNumber.slice(0, center);
//   let rightNumber = stringNumber.slice(center);
//   return leftNumber === rightNumber ? number :number * 2;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

/* =========================================
Easy 3 > 8. Grade Book

Algo
- input three numbers
- calculate the mean of three numbers
  - assign letter grade to mean
- output letter as grade */

// function getGrade(...scores) {
//   let mean = scores.reduce((total, score) => total + score, 0) / scores.length;

//   if (mean >= 90) return 'A';
//   if (mean >= 80) return 'B';
//   if (mean >= 70) return 'C';
//   if (mean >= 60) return 'D';
//   return 'F'
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

/* =========================================
Easy 3 > 9. Clean up the words

Algo
- input string
- iterate through string
  - if char non-alphabetic replace with space
      - if consecutive non-alphabetic char, replace with only one space
  - if alphabetic char, add to string
- output new string */

// function cleanUp(string) {
//   let result = '';
//   let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx]
//     if (letters.includes(char)) {
//       result += char;
//     } else if (result[result.length - 1] !== ' ') {
//       result += ' ';
//     }
//   }

//   return result;
// }

// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

// function cleanUp(text) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   // `for..of` returns a list of values of the numeric properties of the object being iterated
//   for (let char of text) {
//     if (ALPHABET.includes(char.toLowerCase())) {
//       result.push(char);
//     } else if (result[result.length - 1] === ' ') {
//       continue;
//     } else {
//       result.push(' ');
//     }
//   }

//   return result.join('');
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
// console.log(cleanUp("WTF-ck*  Really!")); // "wtf ck Really

/* ===============================
Easy 3 > 10. What Century is That?

Algo
- input number representing a year
- calculate century
  - current year divided by 100 plus 1
  - if multiple of 100, the century is the current year divided by 100
- append the suffix
  - check the last digit of the century
  - if remainder of dividing the century by 100 ends in either 11, 12, or 13 add `th`
  - otherwise value of centuryNumber % 10
- output string of century number and suffix */

// function century(year) {
//   let centuryNumber = Math.ceil(year / 100);
//   return `${centuryNumber}${centurySuffix(centuryNumber)}`;
// }

// function centurySuffix(year) {
//   if ([11, 12, 13].includes(year % 100)) return 'th';

//   switch (year % 10) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
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

/* ===============================
Easy 4 > 1. How Old Is Teddy? */

// function randomAge(min, max) {
//   let age = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log(`Teddy is ${age} years old`);
// }

// randomAge(20, 120);

// Easy 4 > 4. Palindromic Strings (Part 1)
// function isPalindrome(string) {
//   return string.split('').reverse().join('') === string;
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

/* ========================================
Easy 4 > 5. Palindromic Strings (Part 2) */

// function isRealPalindrome(string) {
//   string = removeNonLettersNumbers(string.toLowerCase());
//   return isPalindrome(string)
// }

// function removeNonLettersNumbers(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if ((isLetter(char)) || isNumber(char)) {
//       result += char;
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

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isRealPalindrome('madam')); // true
// console.log(isRealPalindrome('Madam')); // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653')); // true
// console.log(isRealPalindrome('356a653')); // true
// console.log(isRealPalindrome('123ab321')); // false

/* ========================================
Easy 4 > 6. Palindromic Numbers */

// function isPalindromicNumber(number) {
//   let stringNumber = String(number);
//   return stringNumber === stringNumber.split('').reverse().join('');
// }

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

/* ========================================
Easy 4 > 7. Running Totals */

// function runningTotal(numbers) {
//   let total = 0;
//   return numbers.map(element => total += element)
// }

// function runningTotal(numbers) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     resultArray.push(sum += numbers[idx]);
//   }

//   return resultArray;
// }

// function runningTotal(array) {
//   let sum = 0;
//   return array.map(number => sum += number);
// }

// console.log(runningTotal([2, 5, 13]));  // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
// console.log(runningTotal([3])); // [3]
// console.log(runningTotal([])); // []
// console.log(runningTotal([1, 1, 2, 3, 5])); // [1, 2, 4, 7, 12]

/* ========================================
Easy 4 > 8. Letter Counter (Part 1) */

// function wordSizes(words) {
//   let result = {};

//   if (words === '') return result;

//   words.split(' ').forEach(word => {
//     result[word.length] = result[word.length] + 1 || 1;
//   });

//   return result;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes('')); // {}

/* ========================================
Easy 4 > 8. Letter Counter (Part 2) */

// function wordSizes(words) {
//   let count = {};
//   if (words === '') return count;
//   words = words.replace(/[^a-z\s]/gi, '');

//   words.split(' ').forEach((word) => {
//     count[word.length] = count[word.length] + 1 || 1;
//   });

//   return count;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes('')); // {}

/* ========================================
Easy 4 > 10. Letter Swap

Algo
- input string of words
- iterate through the words
  - split the string into space-delimited words
  - for each word
    - slice last char of word
    - slice middle of word
    - slice first char of word
- join the words back together
- return new string */

// function swap(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (word.length === 1) return word;
//       word.slice(word.length - 1) +
//     })
// }

// function swap(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (word.length === 1) return word;
//       return word.slice(word.length - 1) + word.slice(1, word.length - 1) + word.slice(0, 1);
//     })
//     .join(' ');
// }

// function swap(words) {
//   return words
//     .split(' ')
//     .map((word) => {
//       if (word.length === 1) {
//         return word;
//       } else {
//         // last letter + middle letters + first letter
//         return (
//           word.slice(word.length - 1) +
//           word.slice(1, word.length - 1) +
//           word.slice(0, 1)
//         );
//       }
//     })
//     .join(' ');
// }

// console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde')); // "ebcdA"
// console.log(swap('a')); // "a"

/* ========================================
Easy 5 > 1. Cute Angles

Algo
- input number
- convert number into an angle between 0 and 360 degrees
  - return whole number as degrees 30.00 => 30 degrees
  - return fractional component as minutes and seconds
    - 76.73 degrees => (.73 * 60) 43.8 minutes => (.8 * 60) 48 seconds
- output string */

// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE; // 3600

// function dms(degreesFloat) {
//   let degreesInt = Math.floor(degreesFloat);
//   let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor((degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

//   return `${String(degreesInt)}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

/* ==============
Alex's Problem

Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0. */

// function maxMultiple (divisor, bound) {
//   while (true) {
//     if (bound % divisor === 0) return bound;
//     bound -= 1;
//   }
// }

// Test Cases

// console.log(maxMultiple(2, 7));
// console.log(maxMultiple(3, 10));
// console.log(maxMultiple(7, 17));
// console.log(maxMultiple(10, 50));
// console.log(maxMultiple(37, 200));
// console.log(maxMultiple(7, 100));

// console.log(maxMultiple(2, 7) === 6);
// console.log(maxMultiple(3, 10) === 9);
// console.log(maxMultiple(7, 17) === 14);
// console.log(maxMultiple(10, 50) === 50);
// console.log(maxMultiple(37, 200) === 185);
// console.log(maxMultiple(7, 100) === 98);

// Easy 5 > 2. Combining Arrays
// function union(array1, array2) {
//   let result = [];
//   let values = [...array1, ...array2];

//   values.forEach(value => {
//     if (!result.includes(value)) result.push(value);
//   })

//   return result;
// }

// function union(...args) {
//   let result = [];

//   args.forEach(array => {
//     array.forEach(value => {
//       if (!result.includes(value)) {
//         result.push(value);
//       }
//     })
//   })

//   return result;
// }

// function union(array1, array2) {
//   let combinedArrays = array1.concat(array2);
//   let resultArray = [];

//   for (let idx = 0; idx < combinedArrays.length; idx += 1) {
//     if (!resultArray.includes(combinedArrays[idx])) {
//       resultArray.push(combinedArrays[idx]);
//     }
//   }
//   return resultArray;
// }

// function union(array1, array2) {
//   let combinedArray2 = [...array1, ...array2];
//   let resultArray = [];

//   combinedArray2.forEach(value => {
//     if (!resultArray.includes(value)) resultArray.push(value);
//   });

//   return resultArray;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* Easy 5 > 3. Halvsies
- input: array
- find middle of the array
- put first half of the original elements in the first element of the return value
- put the second half in the second element
- if original array contains an odd number of elements, put the middle element in the first element of the returned array
- output: nested array */

// function halvsies(array) {
//   let middle = Math.ceil(array.length / 2);
//   let leftHalf = array.slice(0, middle);
//   let rightHalf = array.slice(middle);
//   return [leftHalf, rightHalf];
// }

// console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5])); // [[5], []]
// console.log(halvsies([])); // [[], []]

/* Easy 5 > 4. Find the Duplicate
- input: array
- initialize `values` to collect values
- iterate through array
  - add value to object
  - if value repeats exit the loop
- return: repeat value as number */

// function findDuplicate(array) {
//   let values = {};

//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (values[array[idx]]) {
//       return array[idx];
//     } else {
//       values[array[idx]] = true;
//     }
//   }

//   return undefined;
// }

// function findDuplicate(array) {
//   let values = [];

//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (values.includes(array[idx])) {
//       return array[idx];
//     } else {
//       values.push(array[idx]);
//     }
//   }

//   return 'no duplicates';
// }

/* Checks to see if the index of the current element is the same as the index of the first appearance of that element in the array, if the element is the same but the index is different that means that it's a duplicate. */
// function findDuplicate(array) {
//   array = array.filter((ele, index) => array.indexOf(ele) !== index);
//   return array[0];
// }

// function findDuplicate(array) {
//   return array.find((ele, idx) => array.lastIndexOf(ele) !== idx);
// }

// function findDuplicate(array) {
//   let values = [];

//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (values.includes(array[idx])) {
//       return array[idx];
//     } else {
//       values.push(array[idx]);
//     }
//   }

//   return 'no duplicates';
// }

// console.log(findDuplicate([1, 5, 3, 1])); // 1
// console.log(findDuplicate([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
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

// function interleave(array1, array2) {
//   let combinedArrays = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     combinedArrays.push(array1[idx], array2[idx]);
//   }

//   return combinedArrays;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

// function interleave(array1, array2) {
//   let resultArray = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     resultArray.push(array1[idx], array2[idx]);
//   }

//   return resultArray;
// }

// function interleave(array1, array2) {
//   let combinedArrays = [];

//   array1.forEach((_, idx) => {
//     combinedArrays.push(array1[idx], array2[idx]);
//   });

//   return combinedArrays;
// }

// function interleave(arr1, arr2) {
//   return arr1.reduce((acc, _, idx) => {
//     acc.push(arr1[idx], arr2[idx]);
//     return acc;
//   }, []);
// }

// function interleave(...args) {
//   let result = [];
//   let longest = Math.max(...args.map(array => array.length));

//   for (let idx = 0; idx < longest; idx += 1) {
//     args.forEach(array => {
//       if (array.length > idx) {
//         result.push(array[idx]);
//       }
//     });
//   }

//   return result;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c'], ['!', '@', '#', '$']));
// [
//   1,   'a', '!', 2,   'b',
//   '@', 3,   'c', '#', '$'
// ]

/* Easy 5 > 6. Multiplicative Average
- input: array
- iterate through the array
  - multiply all the integers together
  - divide total by number of entries in the array
- convert number to string to three decimal places
- output: string */

// function multiplicativeAverage(array) {
//   return (array.reduce((total, number) => total *= number, 1) / array.length).toFixed(3);
// }

// function multiplicativeAverage(numbers) {
//   let product = 1;

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     product *= numbers[idx];
//   }

//   return (product / numbers.length).toFixed(3);
// }

// function multiplicativeAverage(numbers) {
//   return (
//     numbers.reduce((total, number) => (total *= number), 1) / numbers.length
//   ).toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5])); // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// Easy 5 > 7. Multiply Lists

// function multiplyList(array1, array2) {
//   let product = [];

//   for (let idx = 0; idx < array1.length; idx += 1) {
//     product.push(array1[idx] * array2[idx]);
//   }
//   return product;
// }

// function multiplyList(array1, array2) {
//   return array1.map((_, idx) => array1[idx] * array2[idx]);
// }

// function multiplyList(arr1, arr2) {
//   return arr1.map((number, idx) => number * arr2[idx]);
// }

// const multiplyList = ((arr1, arr2) => {
//   return arr1.map((element, idx) => element * arr2[idx]);
// });

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

// Easy 5 > 8. List of Digits

// function digitList(number) {
//   // let numberString = String(number);

//   return String(number).split('').map(digit => Number(digit));
// }

// function digitList(number) {
//   return [...String(number)].map(Number);
// }

// function digitList(number) {
//   return String(number).split('').map(digit => Number(digit));
// }

// console.log(digitList(12345)); // [1, 2, 3, 4, 5]
// console.log(digitList(7)); // [7]
// console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444)); // [4, 4, 4]

/* Easy 5 > 9. How Many?

Algo
- input: array
- initialize `occurrences` object
- iterate through array
  - add type to  `count`
    - increase total for each additional type
- output: type and amount */

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
//   'suv'
// ];

// function countOccurrences(items) {
//   let occurrences = {};

//   items.forEach(item => {
//     item = item.toLowerCase();
//     occurrences[item] ? occurrences[item] += 1 : occurrences[item] = 1;
//   });

//   logOccurrences(occurrences);
// }

// function logOccurrences(list) {
//   Object.entries(list).forEach(([key, value]) => {
//     console.log(`${key} => ${value}`);
//   });
// }
// countOccurrences(vehicles);

// console output -- your output sequence may be different
// (car) => 4;
// (truck) => 3;
// (SUV) => 1;
// (motorcycle) => 2;

/* Easy 5 > 10. Array Average

Algo
- input array of integers
- iterate through array
  - sum all the numbers in the array
  - divide the sum by the number of elements in the array
  - round down to the integer component of the average
- output number */

// function average(numbers) {
//   return Math.floor(numbers.reduce((sum, num) => sum + num) / numbers.length);
// }

// function average(numbers) {
//   let sum = 0;

//   numbers.forEach(number => sum += (number / numbers.length));

//   return Math.floor(sum);
// };

// function average(numbers) {
//   return Math.floor(numbers.reduce((sum, number) => sum + number, 0) / numbers.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/* Easy 5 > 11. After Midnight
- input: integer
- output: time in 24 hour format */

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return formatTime(hours, minutes);
// }

// console.log(timeOfDay(0) === '00:00');
// console.log(timeOfDay(-3) === '23:57');
// console.log(timeOfDay(35) === '00:35');
// console.log(timeOfDay(-1437) === '00:03');
// console.log(timeOfDay(3000) === '02:00');
// console.log(timeOfDay(800) === '13:20');
// console.log(timeOfDay(-4231) === '01:29');

// function countMatchingIndices(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return array.map(string => {
//     let count = 0;

//     string
//       .toLowerCase()
//       .split('')
//       .forEach((char, idx) => {
//         if (alphabet.indexOf(char) === idx) count += 1;
//       });

//       return count;
//   });
// }

// console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
// console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
// console.log(
//   countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
// ); // [6, 5, 7]
// console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
// console.log(countMatchingIndices([])); // []

// Easy 5 > 12. After Midnight (Part 2)

// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeString) {
//  let [hours, minutes] = timeString.split(':').map(num => Number(num));
//  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(timeString) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);
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
// function repeater(string) {
//   return string
//     .split('')
//     .map(char => char + char)
//     .join('');
// }

// function repeater(string) {
//   let doubleChars = ''

//   for (let idx = 0; idx < string.length; idx += 1) {
//     doubleChars += string[idx] + string[idx];
//   }

//   return doubleChars;
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// Easy 6 > 2. Double Char (Part 2)
// function doubleConsonants(string) {
//   const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
//   return string
//     .split('')
//     .map(char => {
//       return CONSONANTS.indexOf(char.toLowerCase() >= 0) ? char.repeat(2) : char;
//     })
//     .join('');
// }

// // console.log(onlyConsonants('m'));

// console.log(doubleConsonants('String')); // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
// console.log(doubleConsonants('')); // ""

// Easy 6 > 3. Reverse Number
// function reverseNumber(number) {
//   // `[...String(number)]` here, the spread operator turns the number into a string of digits. It does the same thing as `split('')`.
//   return Number([...String(number)].reverse().join(''));
// }

// The `+` unary operator converts the whole expression to a number, which works similarly to `parseInt()` and drops leading zeroes.
// const reverseNumber = (number) => +[...String(number)].reverse().join('');

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

// Easy 6 > 4. Get The Middle Character
// function centerOf(string) {
//   let middle = Math.ceil(string.length / 2);
//   if (string.length % 2 === 1) return string.slice(middle - 1, middle);
//   if (string.length % 2 === 0) return string.slice(middle - 1, middle + 1);
// }

// function centerOf(string) {
//   let middle = Math.ceil(string.length / 2);
//   return string.length % 2 === 1 ? string.slice(middle - 1, middle) : string.slice(middle - 1, middle + 1);
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// Easy 6 > 5. Always Return Negative
// function negative(number) {
//   return Math.abs(number) * -1;
// }

// function negative(number) {
//   return -Math.abs(number);
// }

// const negative = (number) => Math.abs(number) === number ? -number : number;

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// Easy 6 > 6. Counting Up
// function sequence(number) {
//   let numbersArray = [];

//   for (let idx = 1; idx <= number; idx += 1) {
//     numbersArray.push(idx);
//   }

//   return numbersArray;
// }

// const sequence = (number) => [...Array(number)].map((_, idx) => idx + 1);

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// Easy 6 > 7. Name Swapping
// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// function swapName(fullName) {
//   let splitNames = fullName.split(' ');
//   // console.log(splitNames);
//   // console.log(splitNames.pop() + ', ' + splitNames.join(' '));
//   return `${splitNames.pop()}, ${splitNames.join(' ')}`;

// }

// function swapName(fullName) {
//   let splitNames = fullName.split(' ');
//   return `${splitNames.pop()}, ${splitNames.join()}`
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

// Easy 6 > 8. Sequence Count

// function sequence(count, start) {
//   // if (count === 0) return [];

//   let numbersArray = [];

//   for (let idx = 1; idx <= count; idx += 1) {
//     numbersArray.push(idx * start)
//   }

//   return numbersArray;
// }

// function sequence(count, startNum) {
//   let resultArray = [];

//   for (let idx = 1; idx <= count; idx += 1) {
//     resultArray.push(idx * startNum);
//   }

//   return resultArray;
// }

// function sequence(count,startNum) {
//   return [...Array(count)].map((_, idx) => startNum * (idx + 1));
// }

// const sequence = (count, start) => [...Array(count)].map((_, idx) => start * (idx + 1));

// console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7)); // [-7, -14, -21, -28]
// console.log(sequence(3, 0)); // [0, 0, 0]
// console.log(sequence(0, 1000000)); // []

// Easy 6 > 9. Reverse It (Part 1)
// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence('')); // ""
// console.log(reverseSentence('Hello World')); // "World Hello"
// console.log(reverseSentence('Reverse these words')); // "words these Reverse"

// Easy 6 > 10. Reverse It (Part 2)
// function reverseWords(words) {
//   return words
//     .split(' ')
//     .map(word => word.length > 4 ? word.split('').reverse().join('') : word)
//     .join(' ');
// }

// function reverseWords(string) {
//   let reverseWords = [];
//   let words = string.split(' ');

//   for (let idx = 0; idx < words.length; idx += 1) {
//     let word = words[idx];
//     if (word.length < 5) {
//       reverseWords.push(word);
//     } else {
//       reverseWords.push(word.split('').reverse().join(''));
//     }
//   }

//   return reverseWords.join(' ');
// }

// const reverseWords = (string) => {
//   return string
//     .split(' ')
//     .map(word => word.length > 4 ?
//       word.split('').reverse().join('') :
//       word)
//     .join(' ')
// }

// // const reverseWords = (words) => words.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');

// console.log(reverseWords('Professional')); // "lanoisseforP"
// console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

// Easy 6 > 11. Reversed Arrays
// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < rightIndex) {
//     [array[leftIndex], array[rightIndex]] =
//       [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }

//   return array;
// }

// function reverse(array) {
//   for (let count = 0; count < array.length; count += 1) {
//     array.splice(count, 0, array.pop());
//   }
//   return array;
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
// function isBalanced(string) {
//   let parens = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (char === '(') parens += 1;
//     if (char === ')') parens -= 1;
//     if (parens < 0) return false;
//   }

//   return parens === 0;
// }

// console.log(isBalanced('What (is) this?') === true);
// console.log(isBalanced('What is) this?') === false);
// console.log(isBalanced('What (is this?') === false);
// console.log(isBalanced('((What) (is this))?') === true);
// console.log(isBalanced('((What)) (is this))?') === false);
// console.log(isBalanced('Hey!') === true);
// console.log(isBalanced(')Hey!(') === false);
// console.log(isBalanced('What ((is))) up(') === false);

// List Processing 1. Sum Of Digits
// function sum(number) {
//   return String(number)
//     .split('')
//     .reduce((accum, digit) => accum + Number(digit), 0);
// }

// function sum(number) {
//   return String(number)
//     .split('')
//     .reduce((total, digit) =>  total + Number(digit), 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// List Processing 2. Alphabetical Numbers
/* Algo
- input an array of integers
- sort the numbers based on their name equivalent
  - e.g., 8 => 'eight' comes first
  - e.g., 0 => 'zero' comes last
- output an array of sorted integers */

// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(array) {
//   return [...array].sort(wordSort);
// }

// function wordSort(num1, num2) {
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) return 1;
//   if (NUMBER_WORDS[num2] < NUMBER_WORDS[num2]) return -1;
//   return 0;
// }

// console.log(alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// List Processing 3. Multiply All Pairs
// function multiplyAllPairs(array1, array2) {
//   let result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2)
//     });
//   });

//   return result.sort((a, b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// List Processing > 4. Leading Substrings
// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
// }

// function leadingSubstrings(string) {
//   let result = '';
//   return string.split('').map(char => {
//     return result += char;
//   });
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
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
//     .map((_, idx) =>  string.slice(0, idx + 1));
// }

// console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a')); // ["a"]
// console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// List Processing > 5. All Substrings
// function substrings(string) {
//   return leadingSubstrings(string);
// }

// const leadingSubstrings = (string) => string.split('').map((_, length) => string.slice(0, length + 1));

// console.log(leadingSubstrings('abcde')); // [ 'a', 'ab', 'abc', 'abcd', 'abcde' ]

// function substrings(string) {
//   let returnArray = [];
//   for (let i = 0; i < string.length; i += 1) {
//     for (let j = i + 1; j < string.length + 1; j += 1) {
//       returnArray.push(string.slice(i, j));
//     }
//   }

//   return returnArray;
// }

// function substrings(string) {
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let substring = string.slice(idx);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let idx = 1; idx < string.length; idx += 1) {
//     substrings.push(string.slice(0, idx));
//   }

//   return substrings;
// }

// console.log(substrings('abcde'));
// returns
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

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let substring = string.slice(idx);
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

// console.log(palindromes('abcd')); // []
// console.log(palindromes('madam')); // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// List Processing > 7. Sum of Sums
// function sumOfSums(numbers) {
//   let sumTotal = 0;

//   for (let idx = 1; idx <= numbers.length; idx += 1) {
//     sumTotal += numbers.slice(0, idx).reduce((total))
//   }
//   return sumTotal;
// }

// function sumOfSums(numbers) {
//   return numbers
//     .map((_, idx) =>
//       numbers.slice(0, idx + 1).reduce((sum, value) => sum + value))
//     .reduce((sum, value) => sum + value);
// }

// console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4])); // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// List Processing > 8. Grocery List
// function buyFruit(list) {
//   return list.reduce((items, [fruit, amount]) => {
//     return items.concat(Array(amount).fill(fruit));
//   }, []);
// }

// Bob Rodes
// function buyFruit(fruitList) {
//   return fruitList.map(([fruit, count]) => Array(count).fill(fruit)).flat();
// }

// Launch School Version
// function buyFruit(fruitsList) {
//   return fruitsList
//     .map(fruit => repeat(fruit))
//     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruitAndQuantity) {
//   let result = [];
//   let fruit = fruitAndQuantity[0];
//   let quantity = fruitAndQuantity[1];

//   for (let count = 0; count < quantity; count += 1) {
//     result.push(fruit);
//   }

//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// List Processing > 9. Inventory Item Transactions
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

// function transactionsFor(inventoryItem, transactions) {
//   return transactions.filter(inventory => inventory.id === inventoryItem);
// }

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// List Processing > 10. Inventory Item Availability

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

// function isItemAvailable(item, transactions) {
//   let quantity = transactionsFor(item, transactions)
//     .reduce((sum, transaction) => {
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

// console.log(isItemAvailable(101, transactions)); // false
// console.log(isItemAvailable(103, transactions)); // false
// console.log(isItemAvailable(105, transactions)); // true

// String and Text Processing > 1. Uppercase Check

// function isUppercase(string) {
//   // all of the alphabetic characters are uppercase is true only if the string is not altered by converting it to all uppercase
//   return string === string.toUpperCase()
// }
// function isUppercase(phrase) {
//   return !/[a-z]/.test(phrase);
// }

// function isUppercase(string) {
//   return string.toUpperCase() === string;
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// String and Text Processing > 2. Delete Vowels

// Version 1
// function removeVowels(array) {
//   const VOWELS = 'aeiouAEIOU';

//   return array.map(word => {
//     return word
//       .split('')
//       .filter(char => !VOWELS.includes(char))
//       .join('');
//   });
// }

// Version 2
// function removeVowels(array) {
//   return array.map(words => words.replace(/[aeiou]/gi, ""));
// }

// Version 3
// function removeVowels(array) {
//   const VOWELS = 'aeiouAEIOU';
//   return array.map((words) => {
//     return words
//       .split('')
//       .filter((char) => !VOWELS.includes(char))
//       .join('');
//   });
// }

// Version 4
// function removeVowels(array) {
//   const vowels = 'aeiouAEIOU'.split('');
//   let result = array.map((str) => {
//     return str
//       .split('')
//       .filter((char) => !vowels.includes(char))
//       .join('');
//   });
//   return result;
// }

// function removeVowels(stringArray) {
//   return stringArray
//     .map(string => {
//       let chars = string.split('');
//       let removedVowels = deleteVowels(chars);
//       return removedVowels.join('');
//   });
// }

// function deleteVowels(word) {
//   const VOWELS = 'aeiouAEIOU';
//   return word.map(char => {
//     if (VOWELS.indexOf(char) >= 0) {
//       return '';
//     } else {
//       return char;
//     }
//   });
// }

// function removeVowels(stringArray) {
//   return stringArray.map(words => words.replace(/[aeiou]/gi, ""));
// }

// function removeVowels(stringArray) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   return stringArray.map(words => {
//     return words
//       .split('')
//       .filter(char => !VOWELS.includes(char))
//       .join('');
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]

// String and Text Processing > 3. Lettercase Counter
// function letterCaseCount(string) {
//   let result = {lowercase: 0, uppercase: 0, neither: 0};

//   string
//     .split('')
//     .filter(char => {
//       if (char >= 'a' && char <= 'z') {
//         return result.lowercase += 1;
//       } else if (char >= 'A' && char <= 'Z') {
//         return result.uppercase += 1;
//       } else {
//         return result.neither += 1;
//       }
//     });

//   return result;
// }

// function letterCaseCount(string) {
//   let result = { lowercase: 0, uppercase: 0, neither: 0 };

//   string.split('').filter((char) => {
//     if (char >= 'a' && char <= 'z') return result.lowercase += 1;
//     if (char >= 'A' && char <= 'Z') return result.uppercase += 1;
//     return result.neither += 1;
//   });

//   return result;
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

// console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }

// String and Text Processing > 4. Capitalize Words
// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// console.log(wordCap('four score and seven')); // "Four Score And Seven"
// console.log(wordCap('the javaScript language')); // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// String and Text Processing > 5. Swap Case
// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char >= 'A' && char <= 'Z') return char.toLowerCase();
//       if (char >= 'a' && char <= 'z') return char.toUpperCase();
//       return char;
//     })
//     .join('');
// }

// function swapCase(string) {
//   let newString = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     newString += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
//   }

//   return newString;
// }

// console.log(swapCase('CamelCase')); // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"

// String and Text Processing > 6. Staggered Caps (Part 1)

/* The `String.prototype.toUpperCase `and `String.prototype.toLowerCase` methods handle both alphabetic and non-alphabetic characters. */

// function staggeredCase(string) {
//   return string
//     .split('')
//     .map((char, idx) => {
//       if (idx % 2 === 0) {
//         return char.toUpperCase()
//       } else {
//         return char.toLowerCase()
//       }
//     })
//     .join('')
// }

// const staggeredCase = (string) =>
//   string
//     .split('')
//     .map((char, idx) => {
//       return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//     })
//     .join('');

// console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
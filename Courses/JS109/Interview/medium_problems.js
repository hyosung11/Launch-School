/* JS101 - Small Problems > Medium 1 > 1. Rotation (Part 1)

Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);  // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);  // ["b", "c", "a"]
rotateArray(['a']); // ["a"]
rotateArray([1, 'a', 3, 'c']); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); / [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array
- output: new array

Identify rules
- if the input is not an array return undefined
- if the input is an empty array, return an empty array
- do not modify the original array

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: array
- intermediary: array
- output: array

ALGORITHM
- input an array
- if input is not an array return `undefined`
- if input is an empty array, return an empty array
- for a non-empty array
  - slice off the first element
  - append it to the end of the array
- return a new array

CODE
Implementation of Algorithm
- test code while programming */

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];
//   return array.slice(1).concat(array[0]);
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
// console.log(rotateArray(['a'])); // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []
// console.log(rotateArray('')); // undefined

/* ============================
Medium 1 > 2. Rotation (Part 2)

Rotation (Part 2)

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: number and count
- output: new number

Identify rules
- Rotate the last `count` digits of the original `number`.
- Leave the first digits (not part of the last `count` digits) in the same order.
- Slice off the first of the digits to rotate and append it to the end of the `number`.
- Join the first digits with the last `count` rotated digits, and return it as a number.

EXAMPLES / TEST CASES
Validate understanding of the problem

DATA STRUCTURE
- input: two numbers
  - the original `number`
  - last `count` digits to rotate
- intermediary: string
- output: new rotated number

ALGORITHM
- input original `number` to be changed and `count` number of digits to rotate
- convert the original `number` to a string
- split the string into two parts: the part to remain unchanged and the part to be rotated
- rotate the second part
- join the first part back together with the rotated second part
- convert the string to a number and return it

CODE
Implementation of Algorithm
- test code while programming */

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let leftPart = numberString.slice(0, numberString.length - count);
//   let rightPart = numberString.slice(numberString.length - count);
//   let resultString = leftPart + rotateString(rightPart);
//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1).concat(string[0]);
// }

// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

// Examples:
// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
// console.log(rotateRightmostDigits(735291, 6)); // 352917

// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

/* ============================
Medium 1 > 3. Rotation (Part 3)

Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: number
- output: new number

Identify rules
- if one digit, return the number
- if two digits, switch the digits or make one rotation
- if three or more digits, make one less rotation than digits

EXAMPLES / TEST CASES
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

DATA STRUCTURE
- input: number
- intermediary: string or array
- output: new number

ALGORITHM
- input a number
- convert number to a string
- if number has one digit, return the number
- if number has two digits, slice the first digit and append it to the end
- if number has three or more digits, slice and append one less time than the number of digits
- return new rotated number

735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

CODE
Implementation of Algorithm
- test code while programming */

// function maxRotation(number) {
//   let numberDigits = String(number).length;
//   for (let count = numberDigits; count >= 2; count -= 1) {
//     number = rotateRightmostDigits(number, count);
//   }
//   return number;
// }


// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

// // console.log(rotateRightmostDigits(123));

// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

// Medium 1 > 5. Word to Digit
/* # PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: sentence string
- output: sentence string with words changed to their digit character equivalents

Identify rules
- input a string of words as sentence
- change each number word to its digit character
- return new string of words with digits replacing number words

EXAMPLES / TEST CASES
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Edge Cases?
- only single digit numbers?

DATA STRUCTURE
- input: string
- intermediary: object and array
- output: new string

ALGORITHM
- input a string of words as a sentence
- create `NUMBER_WORDS` object lookup table
- iterate over the keys of `NUMBER_WORDS` object
  - create a RegExp object and assign it to the `regex` variable
  - wrap the regex pattern with the word boundary anchor
  - replace all instances of each numeric word in the `sentence` argument
- return the new `sentence`

CODE
Implementation of Algorithm
- test code while programming */

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
// }

// function wordToDigit(sentence) {
//   Object.keys(NUMBER_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     sentence = sentence.replace(regex, NUMBER_WORDS[word]);
//   });

//   return sentence;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks. Done.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Medium 1 > 6. Fibonacci Numbers (Recursion)
// function fibonacci(nth) {
//   if (nth <= 2) return 1;
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// Medium 1 > 7. Fibonacci Numbers (Procedural)
/* Algo
- input number
- initialize `previousTwo` array to store values of the current two numbers in the fibonacci series
- loop and reassign the values of `previousTwo` `nth - 2` times
- when the `nth` value to look for is one of the first two numbers stop iterating
- return the second element so that when `nth` is greater than `2` the return value is still valid
- return number */

// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let count = 3; count <= nth; count += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
//   }

//   return previousTwo[1];
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

// Medium 1 > 8. Fibonacci Numbers (Memoization)
/* Algo
- input `nth` number
- initialize `memo` to empty object
- if `nth` less than or equal to 2, return 1
- else if look up whether a previous computation has already been done for the nth value
  - if it has return the value
- compute the nth value and store in the `memo` object
- return `memo[nth]` */

// function fibonacci(nth) {
//   let memo = {};
//   if (nth <= 2) return 1;
//   else if (memo[nth]) return memo[nth];
//   else {
//     memo[nth] = fibonacci(nth - 1) + fibonacci(nth -2);
//     return memo[nth];
//   }
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// Medium 2 > 1. Lettercase Percentage Ratio
/* Algo
- input string
- initialize `percents` object
- iterate through the string
  - check each char of the string
    - if char is lowercase increase lowercase count
    - if char is uppercase increase uppercase count
    - if char is neither increase neither count
- initialize `calculatePercents` helper function
  - iterate through `percents` object
    - check percent properties against length of the string
    - convert count for each property to percentage
- output key-value pairs of type of character with percentage */

// function letterPercentages(string) {
//   let count = string.length;
//   let percents = {lowercase: 0, uppercase: 0, neither: 0};

//   string.split('').forEach(char => {
//     if (char >= 'a' && char <= 'z') percents.lowercase += 1;
//     else if (char >= 'A' && char <= 'Z') percents.uppercase += 1;
//     else percents.neither += 1;
//   });

//   return calculatePercents(count, percents);
// }

// function calculatePercents(count, object) {
//   for (let key in object) {
//     object[key] = (object[key] / count * 100).toFixed(2);
//   }
//   return object;
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Medium 2 > 2. Triangle Sides
// function triangle(...args) {
//   let [shortest, middle, longest] = [...args].sort((a, b) => a - b);

//   if (shortest + middle < longest || shortest <= 0) return 'invalid';
//   if (shortest === middle && middle === longest) return 'equilateral';
//   if (shortest === middle || shortest === longest || middle === longest) return 'isosceles';
//   return 'scalene';
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// Medium 2 > 3. Tri-Angles

// function triangle(...args) {
//   let [shortest, middle, longest] = [...args].sort((a, b) => a - b);

//   if (shortest + middle + longest !== 180 || shortest <= 0) return 'invalid';
//   if (longest === 90) return 'right';
//   if (longest < 90) return 'acute';
//   if (longest > 90) return 'obtuse';
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

/* Medium 2 > 4. Unlucky Days
Algo
- input number representing a year
- initialize `thirteenths` to an empty array
- iterate through the months of the year
  - from each month collect 13ths in `thirteenths` array
- find Fridays that fall on the 13th of the month
  - increase count
- output number representing the number of Friday the 13ths in that year */

// function fridayThe13ths(year) {
//   let thirteenths = [];

//   for (let month = 0; month < 12; month++) {
//     thirteenths.push(new Date(year, month, 13));
//   }

//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? count + 1 : count;
//   }, 0);
// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// Medium 2 > 5. Next Featured Number Higher than a Given Value

// function featured(number) {
//   const MAX_FEATURED = 9876543201;
//   let featuredNum = toOddMultipleOf7(number);

//   do {
//     if (allUnique(featuredNum)) {
//       return featuredNum;
//     }

//     featuredNum += 14;
//   } while (featuredNum <= MAX_FEATURED);

//   return 'There is no possible number that fulfills those requirements.';
// }

// function toOddMultipleOf7(number) {
//   do {
//     number += 1;
//   } while (number % 2 === 0 || number % 7 !== 0);

//   return number;
// }

// function allUnique(number) {
//   let digits = String(number).split('');
//   let seen = {};

//   for (let idx = 0; idx < digits.length; idx += 1) {
//     if (seen[digits[idx]]) {
//       return false;
//     }

//     seen[digits[idx]] = true;
//   }

//   return true;
// }

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/* Medium 2 > 6. Sum Square - Square Sum
Algo
- input: number
- initialize `squareOfSum`
- initialize `sumOfSquare`
- iterate from 1 to input number
  - increment squareOfSum
  - calculate sumOfSquares
- calculate square of sums
- subtract square of sums from sum of squares
- return number */

function sumSquareDifference(count) {
  let squareOfSum = 0;
  let sumOfSquares = 0;

  for (let number = 1; number <= count; number += 1) {
    squareOfSum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(squareOfSum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
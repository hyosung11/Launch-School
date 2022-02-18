/*  `test`

`slice`
`map`
`forEach`


*/
/* 13:08

Write a function

tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

Problem
- input num1 and num2
- output 1 if true and 0 if false

Rules
- return 1 if a triple number in the first num is found as a double in the second num
- if not found return 0

Examples
- 451999277 contains 999
- 41177722899) contains 99
- return 1

Data Structure
- input num1 and num2
- turn num1 and num2 into strings
- output 1 if true and 0 if false

Algorithm
- declare function `tripleDouble` with parameters `num1` and `num2`
- turn num1 into a string
- turn num2 into a string

- iterate over num1 as a string
  - if num1 matches num1 at idx 3 times and num2 matches num1 at idx 2 times
    - return 1
- return 0

*/

function tripledouble (num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  
  for (let idx = 0; idx < num2.length; idx += 1) {
   if (num1.match(num1[idx] + num1[idx] + num1[idx]) && num2.match(num1[idx] + num1[idx])) return 1; 
  }

  return 0;
}

// Test cases:
console.log(tripledouble(451999277,41177722899) === 1);
console.log(tripledouble(1222345, 12345) === 0);
console.log(tripledouble(12345, 12345) === 0);
console.log(tripledouble(666789, 12345667) === 1);
console.log(tripledouble(10560002, 100) === 1);
console.log(tripledouble(1112, 122) === 0);
console.log(tripledouble(8619259999222666, 376285266) === 1);


function tripleDouble(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  let digit = '';

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (char === str1[i + 1] && char === str1[i + 2]) {
      digit = char;
      for (let j = 0; j < str2.length; j++) {
        const secondChar = str2[j];
        if (secondChar === digit) {
          if (secondChar === str2[j + 1]) {
            console.log(`secondChar is equal to the next digit`);
            return true;
          }
        }
      }
    }
  }

  return false;
}



function tripledouble(number1, number2) {

  let triples = findTriples(number1);

  let doubles = findDoubles(number2);

  return triples.some(element => doubles.includes(element)) ? 1 : 0;
}


function findTriples(number) {
  
  let arrayOfTriples = []
  
  let arrayOfStrings = String(number).split('');
  
  for (let i = 0; i < arrayOfStrings.length; i += 1) {
    if (arrayOfStrings[i] === arrayOfStrings[i + 1] && arrayOfStrings[i] === arrayOfStrings[i + 2]) {
      arrayOfTriples.push(Number(arrayOfStrings[i]));
    }
  }

  return arrayOfTriples;
}


function findDoubles(number) {

  let arrayOfDoubles = [];

  let arrayOfStrings = String(number).split('');

  for (let i = 0; i < arrayOfStrings.length; i += 1) {
    if (arrayOfStrings[i] === arrayOfStrings[i + 1]) {
      arrayOfDoubles.push(Number(arrayOfStrings[i]));
    }
  }

  return arrayOfDoubles;
}

console.log(idx, num1[idx]);

/* Warmup Exercises */

/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// Test cases:

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string) === true)

string = "This is not a pangram."
console.log(isPangram(string) === false)


/*

Complete the function that

    accepts two integer arrays of equal length
    compares the value each member in one array to the corresponding member in the other
    squares the absolute value difference between those two values
    and returns the average of those squared absolute value difference between each member pair.


Examples

[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]              -->   1   because (1 + 1) / 2

*/

// Test cases:
console.log(solution([1, 2, 3], [4 ,5, 6]) === 9)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]) === 16.5)
console.log(solution([0, -1], [-1, 0]) === 1)


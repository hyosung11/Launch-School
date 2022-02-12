/* Triple Trouble - 6 kyu

Write a function

tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 

PROBLEM
input: nums
output: 1 or 0(Boolean)

rules:
- if num1 has three consec identical num and num2 has 2 consec identical of the same num, return 1
-otherwise, return false

EXAMPLES
- 1112, 122 => false 
- 666789, 12345667 => 666 66 => true

DATA STRUCTURE
- input two numbers
- intermediary: string
- output

ALGORITHM
- input num1, num2
- coerce num1 and num2 to strings
- iterate through num1
  - if char at idx is equal to idx + 1 AND char at idx is equal to idx + 2
    - iterate through num2
      - if char at jdx is equal to char at idx AND char at jdx + 1 is equal to char at idx, return `1`
  - otherwise return `0`
*/

function tripledouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  for (let idx = 0; idx < num1.length; idx++) {
    if (num1[idx] === num1[idx + 1] && num1[idx] === num1[idx + 2])
      for (let jdx = 0; jdx < num2.length; jdx++) {
        if (num2[jdx] === num1[idx] && num2[jdx + 1] === num1[idx]) return 1;
      }
  }
  return 0;
}

// console.log(tripledouble(451999277, 41177722899)) // === 1);
// console.log(tripledouble(1222345, 12345)) // === 0);
// console.log(tripledouble(12345, 12345)) // === 0);
// console.log(tripledouble(666789, 12345667)) // === 1);
// console.log(tripledouble(10560002, 100)) // === 1);
// console.log(tripledouble(1112, 122)) // === 0);

console.log(tripledouble(451999277, 41177722899) === 1);
console.log(tripledouble(1222345, 12345) === 0);
console.log(tripledouble(12345, 12345) === 0);
console.log(tripledouble(666789, 12345667) === 1);
console.log(tripledouble(10560002, 100) === 1);
console.log(tripledouble(1112, 122) === 0);

function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  for (let i = 0; i < num1.length; i++) {
    if (
      num1.match(num1[i] + num1[i] + num1[i]) &&
      num2.match(num1[i] + num1[i])
    ) {
      return 1;
    }
  }

  return 0;
}

/* ===========================

PROBLEM 02 - Allison's Version
Triple Double
Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

PROBLEM
- input will be two integers
- output will be a boolean value
- output will be true if we have a triple consecutive number in the first input and the same double consecutive number in the second input.
- output will be false otherwise.
- I will assume that both inputs will always be present
- I know that both inputs are integers

ALGORITHM
- declare variable `str1` and initialize it to the string version of `num1`
- declare variable `str2` and initialize it to the string version of `num2`
- declare variable `digit` and initialize it to the empty string.

- iterate over `str1`
  - grab the current character and store it in `char`
    - if the next two characters are the same as char,
      - reassign `digit` to `char`
        iterate over `str2`
          grab the current character and store it in `secondChar`
          if `secondChar` is equal to `digit`
            if `secondChar` is equal to the next character
              return true
        end inner iteration
    end outer iteration

    return false
*/

// function tripleDouble(num1, num2) {
//   const str1 = num1.toString();
//   const str2 = num2.toString();
//   let digit = '';

//   for (let i = 0; i < str1.length; i++) {
//     const char = str1[i];
//     if (char === str1[i + 1] && char === str1[i + 2]) {
//       digit = char;
//       for (let j = 0; j < str2.length; j++) {
//         const secondChar = str2[j];
//         if (secondChar === digit) {
//           if (secondChar === str2[j + 1]) {
//             console.log(`secondChar is equal to the next digit`);
//             return true;
//           }
//         }
//       }
//     }
//   }

//   return false;
// }

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);
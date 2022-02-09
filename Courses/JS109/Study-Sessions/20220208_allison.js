/* Allison near San Antonio
- programmed in Java getting a minor in Computer Science

/// PROBLEM 01
// Is Integer Array
// Write a function that returns a boolean value that indicates
// whether the provided input is an array of integers.

/*
Problem
- input could be anything
- output boolean

Rules
- return true if the input is an array of integers
- return false otherwise

Algo
- input ?
- check input for validity (how? check for whether the input is an array)
- test input to see if it's an array of integers (how? check for whether the element is a number)
  - iterate through elements of array
    - if every element is an integer return true
- return false
*/

// function isIntArray(array) {
//   if (!Array.isArray(array)) return false;

//   for (let idx = 0; idx < array.length; idx++) {
//     console.log(idx);
//     if (!Number.isInteger(array[idx])) {
//       console.log(`Entered conditional with ${array[idx]}`);
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isIntArray() === false);
// console.log(isIntArray(3) === false);
// console.log(isIntArray('hello') === false);
// console.log(isIntArray([1, 2, 3]) === true);
// console.log(isIntArray([1, 2.2, 3]) === false);
// console.log(isIntArray([1.2, 2, 3]) === false);
// console.log(isIntArray({ 1: 1, 2: 2, 3: 3 }) === false);

// Loops and conditionals.
// First I check the conditionals. I ask myself - am I entering the conditional when I expect to?
// If the problem isn't the conditional, I take a look at the loop.
// The first thing I check with the loop - Can I print every index? (Is the loop completing?)
// If the answer to that is 'yes' then I will ask - Am I accessing every element?

/*
  ALGORITHM
    if the input is not an array, return false
    iterate over the array
      if the current element is not an integer, return false
    end iteration

    return true
*/

// function isIntArray(intArr) {
//   if (!Array.isArray(intArr)) return false;

//   const ints = intArr.filter((elem) => !Number.isInteger(elem));

//   return ints.length === 0;
// }

/* PROBLEM 02
Triple Double
Write a function that takes two integer numbers and returns whether `num1`
has consecutive triple digits of any number, and whether `num2` has consecutive
double digits of that same number. */

/*
  PROBLEM
    input will be two integers
    output will be a boolean value
    output will be true if we have a triple consecutive number in the first input and the same double consecutive number in the second input.
    output will be false otherwise.
    I will assume that both inputs will always be present
    I know that both inputs are integers


  ALGORITHM
    delcare variable `str1` and initialize it to the string version of `num1`
    declare variable `str2` and initialize it to the string version of `num2`
    declare variable `digit` and initialize it to the empty string.

    iterate over `str1`
      grab the current character and store it in `char`
      if the next two characters are the same as char,
        reassign `digit` to `char`
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

// PROBLEM 03
// Write a function that takes an array of consecutive (increasing) 
// letters as input and that returns the missing letter in the array.

/*
Problem
- input an array of letters
- output the letter that is missing from the sequence 

Rules
- return the letter missing in the sequence
- capitalizion matters
  - input array can be in either in upper or lower case
  
Examples
- done

Data Structure
- input array
- alphabet lookup object, string?
- output missing letter

Algorithm
- input array of letters
- how to handle upper or lower case letters in the array? (how will we use this information?)
- init `alphabet` lookup string to 'a-z'
- init `first` to first element of array
- init `last to last element of the array
- init `section` to slice of alphabet from `first` to `last` // abcd
- iterate over `section`
  - indexOf? - I want the letter not the index
  - compare the value at the idx in the array to the value at the index in the alphabet string
    - if they are the same, go to the next
    - if the element at the array[idx] !== to the element at the section[idx] return the element at the section[idx]; d === a; c === b; e === c
- return missing letter
  */

function missingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }
  const first = alphabet.indexOf(array[0])   // 0
  const last = alphabet.indexOf(array[array.length - 1]);  // 3=
  const section = alphabet.slice(first, last + 1) // bcde
  // console.log(section)

  for (let idx = 0; idx < section.length; idx++) {
    if (section[idx] === array[idx]) {
      continue;
    } else {
      return section[idx];
    }
  }
}

console.log(missingLetter(['a', 'b', 'd']) === 'c');
console.log(missingLetter(['b', 'c', 'e']) === 'd');
console.log(missingLetter(['Q', 'R', 'T']) === 'S');

/* 15:04 - 15:14

1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true


Problem:
  Input: array
  Output: boolean

Algorithm:

  define `uniqueOccurences()` with the parameter `array`

    declare `dictionary` and initialize it to {}

    iterate through `array`

      if diciotayr has array[i] as a property
        dictionary[arry[i]] += 1
      else
        dictionary[array[i]] = 1

    declare occrances and initialize it to values of `dictionary`

    sort values from smallest to largest

    iterate thorough the sorted array

      if array[i] === array[i + 1] return false

    return true;


*/

// function uniqueOccurrences(array) {
//   let dictionary = {};

//   for (let i = 0; i < array.length; i += 1) {
//     if (dictionary.hasOwnProperty(array[i])) {
//       dictionary[array[i]] += 1;
//     } else {
//       dictionary[array[i]] = 1;
//     }
//   }

//   let occurances = Object.values(dictionary).sort(
//     (a, b) => Number(a) - Number(b)
//   );

//   for (let i = 0; i < occurances.length; i += 1) {
//     if (occurances[i] === occurances[i + 1]) return false;
//   }

//   return true;
// }

// console.log(uniqueOccurrences([1, 2]) === false);
// console.log(uniqueOccurrences([1, 2, 3, 4, 2]) === false);
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]) === true);
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) === true);

/* 15:22

/*

Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered.

Problem
- input string
- output new string

Examples
- 'foobar000' => ends with 0 as number => 'foobar001'
- 'foo' => 'foo1'
- input empty string increment to 1

Algorithm
- input string
- if string length is 0 return '1'
- init `letters` to '';
- init `numbers` to ''
- iterate through string by char
  - if char is a letter
    - increment the `letters`
  - else increment numbers

- iterate throgh `numbers` // '001' => '002'
  - coerce string into a number and increment by 1

- concatenate `letters` with `numbers
- return this string

*/

function incrementString(string) {

  if (string.length === 0) return '1';
  
  let letters = '';
  let numbers = '';
  
  for (let idx = 0; idx < string.length; idx++) {
  
    if (string[idx] >= 'a' && string[idx] <= 'z') {
    
      letters += string[idx];

    } else { 
      
      numbers += string[idx]
    }
  }
  
  console.log(numbers) // 001
  let result = Number(numbers) + 1;
  console.log(result)
  
  console.log(letters)
  return letters + result;

}


// Test cases:

// console.log(incrementString("") === "1");
// console.log(incrementString("foo") === "foo1");

// console.log(incrementString("foobar000") === "foobar001");
console.log(incrementString("foobar001") === "foobar002");
// console.log(incrementString("foobar99") === "foobar100");
// console.log(incrementString("foobar099") === "foobar100");


/* 15:22
16:07
/*

Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered.

Problem
- input string
- output new string

Examples
- 'foobar000' => ends with 0 as number => 'foobar001'
- 'foo' => 'foo1'
- input empty string increment to 1

Algorithm
- input string
- if string length is 0 return '1'
- init `letters` to '';
- init `numbers` to ''
- iterate through string by char
  - if char is a letter
    - increment the `letters`
  - else increment numbers

- iterate throgh `numbers` // '001' => '002'
  - coerce string into a number and increment by 1

- concatenate `letters` with `numbers
- return this string

*/

function incrementString(string) {

  if (string.length === 0) return '1';
  
  let letters = '';
  let numbers = '';
  
  for (let idx = 0; idx < string.length; idx++) {
      if (string[idx] >= 'a' && string[idx] <= 'z') {
         letters += string[idx];
    } else { 
      
      numbers += string[idx]
    }
  }
  
  
  let num = Number(numbers) + 1;
  let stringNum = String(num); // 1

  while (stringNum.length < numbers.length) {
    stringNum = '0' + stringNum;
  }
  
  return letters + stringNum;

}


// function incrementingString(string) {
//   let num = Number(string) + 1;
//   let stringNum = String(num); // 1
  
//   while (stringNum.length < string.length) {
//     stringNum = '0' + stringNum;
//   }
  
//   return stringNum;
// }
// Test cases:

// console.log(incrementString("") === "1");
// console.log(incrementString("foo") === "foo1");

console.log(incrementString("foobar000") === "foobar001");
console.log(incrementString("foobar001") === "foobar002");
console.log(incrementString("foobar99") === "foobar100");
console.log(incrementString("foobar099") === "foobar100");


/*

Write a function that incremnts a string of digits by 1

input
- string of digits
- convert digits to number
- increment number by 1 // 1
- convert number back into a string // '1'
- => '001'
- while the string number < length of input string
  - prepend with '0' => '0' + number
*/

// function incrementingString(string) {
//   let num = Number(string) + 1;
//   let stringNum = String(num); // 1
  
//   while (stringNum.length < string.length) {
//     stringNum = '0' + stringNum;
//   }
  
//   return stringNum;
// }

// // Test Cases:
// console.log(incrementingString('000')) // '001'
// console.log(incrementingString('99')) // '100'
// console.log(incrementingString('100')) //'101'

/* 15:22

/*

Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered.

Problem
- input string
- output new string

Examples
- 'foobar000' => ends with 0 as number => 'foobar001'
- 'foo' => 'foo1'
- input empty string increment to 1

Algorithm
- input string
- if string length is 0 return '1'
- init `letters` to '';
- init `numbers` to ''
- iterate through string by char
  - if char is a letter
    - increment the `letters`
  - else increment numbers

- iterate throgh `numbers` // '001' => '002'
  - coerce string into a number and increment by 1

- concatenate `letters` with `numbers
- return this string

*/

function incrementString(string) {

  if (string.length === 0) return '1';
  
  let letters = '';
  let numbers = '';
  
  for (let idx = 0; idx < string.length; idx++) {
      if (string[idx] >= 'a' && string[idx] <= 'z') {
         letters += string[idx];
    } else { 
      
      numbers += string[idx]
    }
  }
  

  let stringNum = incrementingString(numbers);
  
  return letters + stringNum;

}


function incrementingString(string) {
  let num = Number(string) + 1;
  let stringNum = String(num); // 1
  
  while (stringNum.length < string.length) {
    stringNum = '0' + stringNum;
  }
  
  return stringNum;
}

// Test cases:

// console.log(incrementString("") === "1");
// console.log(incrementString("foo") === "foo1");

console.log(incrementString("foobar000"))// === "foobar001"); //foobar1 
// console.log(incrementString("foobar001") === "foobar002");
// console.log(incrementString("foobar99") === "foobar100");
// console.log(incrementString("foobar099") === "foobar100");


/*

Write a function that incremnts a string of digits by 1

input
- string of digits
- convert digits to number
- increment number by 1 // 1
- convert number back into a string // '1'
- => '001'
- while the string number < length of input string
  - prepend with '0' => '0' + number
*/

// function incrementingString(string) {
//   let num = Number(string) + 1;
//   let stringNum = String(num); // 1
//   while (stringNum.length < string.length) {
//     stringNum = '0' + stringNum;
//   }

//   return stringNum;
// }

// // Test Cases:
// console.log(incrementingString('000')) // '001'
// console.log(incrementingString('99')) // '100'
// console.log(incrementingString('100')) //'101'

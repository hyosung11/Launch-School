/* 1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

12:31 start for Deepak
12:39 start coding
12:55 end 
*/

console.log(freqAlphabets("10#11#12"));  // "jkab"
console.log(freqAlphabets("1326#"));  // "acz"

/* 1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

Problem:
  Input: string
  Output: string
  
Algorithm:
  define `freqAlphabets()` with the paramter `string`
    
    declare `splitStrings` and initialize it to `[]`
    
    split `string` into an `arrayOfChars`
    
    interate through `arrayOfChars`
      
      if `char === 1` 
        if string[i + 2] === #
          push string[i... i+ 2] into `splitStrings
          i += 3;
          
      if `char === 2`
        if string[i + 2] === #
          push string[i... i+ 2] into `splitStrings
          i += 3;
          
      push `string[i]` to `splitStrings`
      
      
    
    Transform `splitString`  // ['10#', '11#', '1', '2']
      transform each `char` based on dictionary
      
    
  declare DICTIONARY = {1 : a, 2: b, ..., 10#: j... 26#: z}
    
*/


// function freqAlphabets(string) {
  
//   let splitStrings = [];
  
//   let arrayOfChars = string.split('');
  
//   for (let i = 0; i < arrayOfChars.length; i += 1) {
    
//     if (arrayOfChars[i] === '1' || arrayOfChars[i] === '2') {
//       if (arrayOfChars[i + 2] === '#') {
//         splitStrings.push(arrayOfChars.slice(i, i + 3).join(''));
//         i += 2
//       } else {
//         splitStrings.push(arrayOfChars[i]);
//       }
//     }
    
//     if (/[3456789]/.test(arrayOfChars[i])) {
//       splitStrings.push(arrayOfChars[i]);
//     }
    
//   }
  
//   return splitStrings.map(char => {
//     return DICTIONARY[char];
    
//   }).join('');
  
// }

// const DICTIONARY = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm', '14#': 'n', '15#': 'o', '16#': 'p', '17#': 'q', '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v', '23#': 'w', '24#': 'x', '25#': 'y', '26#': 'z'};




// // Test cases:

// console.log(freqAlphabets("10#11#12"));  // "jkab"
// console.log(freqAlphabets("1326#"));  // "acz"

/* 13:05 */

/*

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty

Problem
- input string
- output string

Rules
- return string by numbers based on 'weights'

Algo
- input string
- split string into an array of digits by space
- iterate through digits
  - compute sum of digits

Algorithm:
  define `orderWeight()` with the parameter `string`
    split `string` into an `arrayOfNumbers`
    sort `arrayOfNumbers`
      if sumOf(a) - sumOf(b) === 0
        return a - b
      else return sumOf(a) - sumbOf(b)
    
    join 'arrayOfNumber'
    
  define `sumOf()` with the paramter `string`
    split `string` into an `arrayOfChars`
    transform each `char` into a number
    add numbers together
*/

// Test cases:
console.log(orderWeight("103 123 4444 99 2000") === "2000 103 123 4444 99");
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") === "11 11 2000 10003 22 123 1234000 44444444 9999");